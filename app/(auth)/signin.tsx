import CustomButton from '@/components/customButton';
import { InputField } from '@/components/InputField';
import OAuth from '@/components/OAuth';
import { icons, images } from '@/constants';
import { useAuth, useSignIn } from '@clerk/clerk-expo';
import { Link, Redirect, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already signed in
  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return;

    // Validate form fields
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
      Alert.alert('Error', 'Please enter your password');
      return;
    }

    setIsLoading(true);

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        setIsLoading(false);
        router.replace('/(root)/(tabs)/home');
      } else {
        setIsLoading(false);
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        Alert.alert(
          'Sign In Incomplete',
          'Please complete the sign-in process'
        );
      }
    } catch (err: any) {
      setIsLoading(false);
      // See https://clerk.com/docs/guides/development/custom-flows/error-handling
      // for more info on error handling

      const errorMessage =
        err?.errors?.[0]?.longMessage ||
        err?.errors?.[0]?.message ||
        'Invalid email or password. Please try again.';

      Alert.alert('Sign In Failed', errorMessage);
    }
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome
          </Text>
          <View className="p-5">
            <InputField
              label="Email"
              placeholder="Enter your email"
              icon={icons.email}
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              icon={icons.lock}
              secureTextEntry
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />

            <CustomButton
              title={isLoading ? 'Signing In...' : 'Sign In'}
              onPress={onSignInPress}
              className="mt-6"
              disabled={isLoading}
            />

            {/* TODO: OAuth with clerk */}
            <OAuth />

            <Link
              href="/(auth)/signup"
              className="text-lg text-center text-general-200 mt-10"
            >
              <Text>Don&apos;t have an account? </Text>
              <Text className="text-primary-500">Sign Up</Text>
            </Link>

            {/* TODO: Verification Modal */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
