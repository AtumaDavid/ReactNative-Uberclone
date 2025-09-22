import { StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../../global.css';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// postgresql://postgres:password@localhost:5432/Uber-clone
