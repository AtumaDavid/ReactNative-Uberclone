import { icons } from '@/constants';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { Image, ImageSourcePropType, View } from 'react-native';

const TabIcon = ({
  focused,
  source,
}: {
  focused: boolean;
  source: ImageSourcePropType;
}) => (
  <View className="flex items-center justify-center w-16 h-16">
    <View
      className={`items-center justify-center rounded-full ${
        focused ? 'bg-general-400' : ''
      }`}
      style={{
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: focused ? 2 : 0,
        borderColor: focused ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
        shadowColor: focused ? '#fff' : 'transparent',
        shadowOpacity: focused ? 0.4 : 0,
        shadowRadius: focused ? 10 : 0,
        shadowOffset: { width: 0, height: 0 },
        elevation: focused ? 8 : 0,
      }}
    >
      <Image
        source={source}
        resizeMode="contain"
        tintColor={focused ? '#ffffff' : 'rgba(0, 0, 0, 0.5)'}
        style={{
          width: 28,
          height: 28,
          alignSelf: 'center',
        }}
      />
    </View>
  </View>
);

const Layout = () => (
  <Tabs
    initialRouteName="home"
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
      tabBarBackground: () => (
        <BlurView
          intensity={10} // Very low intensity for clear glass effect
          tint="default" // Neutral tint to avoid any color overlay
          style={{
            flex: 1,
            borderRadius: 40,
            overflow: 'hidden',
            backgroundColor: 'rgba(0, 0, 0, 0)', // Fully transparent
            borderWidth: 0, // No border
          }}
        />
      ),
      tabBarStyle: {
        position: 'absolute',
        bottom: 28,
        left: 20,
        right: 20,
        // height: 88,
        borderRadius: 40,
        paddingVertical: 10,
        backgroundColor: 'rgba(0, 0, 0, 0)', // Completely transparent
        borderWidth: 1, // No border
        elevation: 10, // No shadow
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      },
    }}
  >
    <Tabs.Screen
      name="home"
      options={{
        title: 'Home',
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.home} />
        ),
      }}
    />
    <Tabs.Screen
      name="Rides"
      options={{
        title: 'Rides',
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.list} />
        ),
      }}
    />
    <Tabs.Screen
      name="Chat"
      options={{
        title: 'Chat',
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.chat} />
        ),
      }}
    />
    <Tabs.Screen
      name="Profile"
      options={{
        title: 'Profile',
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.profile} />
        ),
      }}
    />
  </Tabs>
);

export default Layout;
