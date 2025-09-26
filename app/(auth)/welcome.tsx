import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text>Welcome Screen</Text>
    </SafeAreaView>
  );
};

export default Welcome;
