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
        focused ? 'bg-white/15 border border-white/30' : ''
      }`}
      style={{
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: focused ? '#ffffff' : 'transparent',
        shadowOpacity: focused ? 0.25 : 0,
        shadowRadius: focused ? 6 : 0,
        shadowOffset: { width: 0, height: 0 },
        elevation: focused ? 6 : 0,
      }}
    >
      <Image
        source={source}
        resizeMode="contain"
        tintColor={focused ? '#ffffff' : 'rgba(255,255,255,0.6)'}
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
          intensity={70}
          tint="dark"
          style={{
            flex: 1,
            borderRadius: 40,
            overflow: 'hidden',
            backgroundColor: 'rgba(25, 25, 25, 0.25)', // adds a subtle glass tint
          }}
        />
      ),
      tabBarStyle: {
        position: 'absolute',
        bottom: 28,
        left: 20,
        right: 20,
        height: 88,
        borderRadius: 40,
        paddingVertical: 10,
        backgroundColor: 'rgba(25, 25, 25, 0.25)', // fallback for Android
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.15)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 12,
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
