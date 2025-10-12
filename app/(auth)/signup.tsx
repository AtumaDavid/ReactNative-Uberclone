import CustomButton from '@/components/customButton';
import { InputField } from '@/components/InputField';
import OAuth from '@/components/OAuth';
import { icons, images } from '@/constants';
import { fetchAPI } from '@/lib/fetch';
import { useAuth, useSignUp } from '@clerk/clerk-expo';
import { Link, Redirect, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [verification, setVerification] = useState({
    state: 'default',
    error: '',
    code: '',
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already signed in
  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    setIsLoading(true);

    // Validate form fields
    if (!form.name.trim()) {
      Alert.alert('Error', 'Please enter your name');
      return;
    }

    if (!form.email.trim()) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    if (!form.password) {
      Alert.alert('Error', 'Please enter a password');
      return;
    }

    // Password strength validation
    if (form.password.length < 8) {
      Alert.alert(
        'Weak Password',
        'Password must be at least 8 characters long'
      );
      return;
    }

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setIsLoading(false);
      setPendingVerification(true);
    } catch (err: any) {
      setIsLoading(false);
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling

      // Extract error message from Clerk error
      const errorMessage =
        err?.errors?.[0]?.longMessage ||
        err?.errors?.[0]?.message ||
        'An error occurred during sign up. Please try again.';

      Alert.alert('Sign Up Failed', errorMessage);
    }
  };

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    if (!verification.code.trim()) {
      Alert.alert('Error', 'Please enter the verification code');
      return;
    }

    setIsLoading(true);

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === 'complete') {
        // TODO: Create a database user
        await fetchAPI('/(api)/user', {
          method: 'POST',
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            clerkId: signUpAttempt.createdSessionId,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        await setActive({ session: signUpAttempt.createdSessionId });
        setIsLoading(false);
        setPendingVerification(false);
        setShowSuccessModal(true);
      } else {
        setIsLoading(false);
        // If the status is not complete, check why. User may need to
        // complete further steps.
        Alert.alert(
          'Verification Incomplete',
          'Please complete the verification process'
        );
      }
    } catch (err: any) {
      setIsLoading(false);
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling

      const errorMessage =
        err?.errors?.[0]?.longMessage ||
        err?.errors?.[0]?.message ||
        'Invalid verification code. Please try again.';

      Alert.alert('Verification Failed', errorMessage);
    }
  };

  if (pendingVerification) {
    return (
      <ReactNativeModal
        isVisible={pendingVerification}
        // onBackdropPress={() => {
        //   setPendingVerification(false);
        //   setVerification({ state: 'default', error: '', code: '' });
        // }}
        // onSwipeComplete={() => {
        //   setPendingVerification(false);
        //   setVerification({ state: 'default', error: '', code: '' });
        // }}
        swipeDirection="down"
      >
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
          <Text className="text-2xl font-JakartaExtraBold mb-2">
            Verification
          </Text>
          <Text className="font-Jakarta mb-5">
            We&apos;ve sent a verification code to {form.email}
          </Text>

          <InputField
            label="Code"
            icon={icons.lock}
            placeholder="12345"
            value={verification.code}
            keyboardType="numeric"
            onChangeText={(code) => setVerification({ ...verification, code })}
          />

          <CustomButton
            title={isLoading ? 'Verifying...' : 'Verify Email'}
            onPress={onVerifyPress}
            className="mt-5 bg-success-500"
            disabled={isLoading}
          />
        </View>
      </ReactNativeModal>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create your Account
          </Text>
          <View className="p-5">
            <InputField
              label="Name"
              placeholder="Enter your name"
              // labelStyle="text-black"
              icon={icons.person}
              value={form.name}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />
            <InputField
              label="Email"
              placeholder="Enter your email"
              // labelStyle="text-black"
              icon={icons.email}
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              // labelStyle="text-black"
              icon={icons.lock}
              secureTextEntry
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />

            <CustomButton
              title={isLoading ? 'Creating Account...' : 'Sign Up'}
              onPress={onSignUpPress}
              className="mt-6"
              disabled={isLoading}
            />

            {/* TODO: OAuth with clerk */}
            <OAuth />

            <Link
              href="/(auth)/signin"
              className="text-lg text-center text-general-200 mt-10"
            >
              <Text>Already have an account? </Text>
              <Text className="text-primary-500">Log In</Text>
            </Link>

            {/* Success Modal */}
            <ReactNativeModal isVisible={showSuccessModal}>
              <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
                <Image
                  source={images.check}
                  className="w-[110px] h-[110px] mx-auto my-5"
                />
                <Text className="text-3xl font-JakartaBold text-center">
                  Verified
                </Text>
                <Text className="text-center text-base text-gray-400 font-Jakarta mt-2">
                  You have successfully verified your account!
                </Text>
                <CustomButton
                  title="Browse Home"
                  onPress={() => {
                    setShowSuccessModal(false);
                    router.replace('/(root)/(tabs)/home');
                  }}
                  className="mt-5"
                />
              </View>
            </ReactNativeModal>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
