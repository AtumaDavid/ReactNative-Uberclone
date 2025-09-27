import CustomButton from '@/components/customButton';
import { onboarding } from '@/constants';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Skip Button */}
      <TouchableOpacity
        onPress={() => {
          router.replace('/(auth)/signup');
        }}
        className="w-full flex-row justify-end p-5"
      >
        <Text className="text-black text-lg font-JakartaSemiBold">Skip</Text>
      </TouchableOpacity>

      {/* Swiper Content */}
      <Swiper
        ref={swiperRef}
        showsPagination={true}
        loop={false}
        containerStyle={{ flex: 1 }}
        paginationStyle={{ bottom: 100 }}
        dot={
          <View
            style={{
              width: 40,
              height: 4,
              marginHorizontal: 4,
              backgroundColor: '#E2E8F0',
              borderRadius: 2,
            }}
          />
        }
        activeDot={
          <View
            style={{
              width: 40,
              height: 4,
              marginHorizontal: 4,
              backgroundColor: '#0286FF',
              borderRadius: 2,
            }}
          />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View
            key={item.id}
            className="flex-1 items-center justify-center px-8"
          >
            {/* Image */}
            <Image
              source={item.image}
              className="w-80 h-80 mb-8"
              resizeMode="contain"
            />

            {/* Title */}
            <Text className="text-3xl font-JakartaBold text-center text-black mb-4">
              {item.title}
            </Text>

            {/* Description */}
            <Text className="text-base font-Jakarta text-center text-gray-600 mb-8 px-4">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>

      {/* Bottom Button */}
      <View className="w-full items-center px-8 pb-8">
        <CustomButton
          title={isLastSlide ? 'Get Started' : 'Next'}
          className="w-11/12 mt-10"
          onPress={() => {
            if (isLastSlide) {
              router.replace('/(auth)/signup');
            } else {
              swiperRef.current?.scrollBy(1);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
