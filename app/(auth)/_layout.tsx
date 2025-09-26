import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="signin" options={{ headerShown: false }} />
      {/* <Stack.Screen
        name="modal"
        options={{ presentation: 'modal', title: 'Modal' }}
      /> */}
    </Stack>
  );
};

export default Layout;
