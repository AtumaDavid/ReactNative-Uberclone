# React Native Uber Clone

A full-featured ride-sharing mobile application built with React Native, Expo, and modern development tools. This project replicates the core functionality of Uber, including user authentication, ride booking, real-time tracking, and payment processing.

## � Project Overview

This Uber clone is being developed as a comprehensive learning project to demonstrate proficiency in React Native development, state management, real-time features, and mobile app architecture. The app aims to provide a seamless user experience for both riders and drivers.

### ✨ Key Features (Planned/In Development)

- [ ] User Authentication (Sign up, Login, OAuth)
- [ ] User Profiles (Rider & Driver)
- [ ] Real-time Location Services
- [ ] Ride Booking & Matching
- [ ] Live Trip Tracking
- [ ] In-app Messaging
- [ ] Payment Integration
- [ ] Rating & Review System
- [ ] Trip History
- [ ] Push Notifications
- [ ] Multi-language Support

## 🛠 Tech Stack

### Core Technologies

- **React Native**: 0.81.4 - Cross-platform mobile development
- **Expo**: ~54.0.9 - Development platform and toolchain
- **TypeScript**: ~5.9.2 - Type safety and enhanced developer experience
- **Expo Router**: ~6.0.7 - File-based navigation system

### UI & Styling

- **NativeWind**: ^4.2.1 - Tailwind CSS for React Native
- **Tailwind CSS**: ^3.4.17 - Utility-first CSS framework
- **React Native Reanimated**: ~4.1.0 - Advanced animations
- **React Native Gesture Handler**: ~2.28.0 - Gesture recognition

### Navigation & State Management

- **React Navigation**: ^7.1.8 - Navigation library
- **React Navigation Bottom Tabs**: ^7.4.0 - Tab navigation
- **React Navigation Elements**: ^2.6.3 - Navigation components

### Development Tools

- **ESLint**: ^9.25.0 - Code linting
- **Prettier**: Plugin for Tailwind - Code formatting
- **Metro**: Custom configuration for NativeWind

## 🚀 Installation & Setup

### Prerequisites

- Node.js (18+ recommended)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-native-uberclone
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Run on specific platforms**

   ```bash
   # Android
   npm run android

   # iOS
   npm run ios

   # Web
   npm run web
   ```

## ⚙️ Configuration Details

### NativeWind Setup

The project uses NativeWind v4 for styling, which provides Tailwind CSS utilities for React Native components.

**Configuration Files:**

- **babel.config.js**: Configured with NativeWind preset and Reanimated plugin
- **tailwind.config.js**: Content paths set for app and components directories with NativeWind preset
- **metro.config.js**: Enhanced with NativeWind Metro plugin and global CSS input
- **global.css**: Contains Tailwind directives for base, components, and utilities
- **nativewind-env.d.ts**: TypeScript definitions for NativeWind

### TypeScript Configuration

- **tsconfig.json**: Extended from Expo's base configuration
- **Path Mapping**: `@/*` maps to the root directory
- **Type Definitions**: Includes NativeWind types via `nativewind-env.d.ts`

## 📁 Project Structure

```
react-native-uberclone/
├── app/                    # Main application screens (Expo Router)
│   ├── (tabs)/            # Tab-based navigation screens
│   │   ├── _layout.tsx    # Tab layout configuration
│   │   ├── index.tsx      # Home/Main screen
│   │   └── explore.tsx    # Explore screen
│   ├── _layout.tsx        # Root layout configuration
│   └── modal.tsx          # Modal screens
├── components/            # Reusable UI components
│   ├── ui/               # Core UI components
│   ├── external-link.tsx
│   ├── haptic-tab.tsx
│   ├── hello-wave.tsx
│   ├── parallax-scroll-view.tsx
│   ├── themed-text.tsx
│   └── themed-view.tsx
├── constants/            # App constants and configurations
│   └── theme.ts         # Theme definitions
├── hooks/               # Custom React hooks
│   ├── use-color-scheme.ts
│   ├── use-color-scheme.web.ts
│   └── use-theme-color.ts
├── assets/              # Static assets (images, fonts, etc.)
│   └── images/
├── scripts/             # Build and utility scripts
│   └── reset-project.js
├── global.css           # Global Tailwind CSS styles
├── babel.config.js      # Babel configuration
├── metro.config.js      # Metro bundler configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## 🎨 Styling Guidelines

### NativeWind Usage

- Use Tailwind utility classes for styling
- Leverage the `className` prop on React Native components
- Follow mobile-first responsive design principles
- Utilize Tailwind's design system for consistency

### Usage Patterns

- Apply Tailwind classes using the `className` prop on React Native components
- Use responsive design patterns with mobile-first approach
- Leverage Tailwind's color palette and spacing system for consistency

## 🚦 Development Workflow

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint for code quality
- `npm run reset-project` - Reset to blank project

### Development Environment

- **Offline Mode**: Use `npx expo start --offline` for local development
- **Hot Reload**: Automatic code reloading during development
- **Device Testing**: Use Expo Go app or development builds

## 📦 Dependencies Overview

### Core Dependencies

- **Expo packages**: Platform APIs and services
- **React Navigation**: Navigation and routing
- **NativeWind**: Styling framework
- **React Native Reanimated**: Advanced animations
- **React Native Safe Area Context**: Safe area handling

### Development Dependencies

- **TypeScript**: Type checking and IntelliSense
- **ESLint**: Code linting and quality
- **Prettier**: Code formatting

## 🔄 Regular Updates Log

> **Note**: This section will be updated regularly as development progresses

### [Version 1.0.0] - Initial Setup

- ✅ Project initialization with Expo
- ✅ NativeWind v4 integration
- ✅ TypeScript configuration
- ✅ Basic project structure
- ✅ Tab-based navigation setup
- ✅ Development environment configuration

### Upcoming Features

- [ ] User authentication system
- [ ] Location services integration
- [ ] Map integration with react-native-maps
- [ ] Backend API integration
- [ ] State management setup (Redux/Zustand)

## 🤝 Contributing

This is a personal learning project, but suggestions and feedback are welcome. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for educational purposes. Please respect the intellectual property of Uber Technologies Inc.

## 🆘 Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `npx expo start --clear`
2. **NativeWind not working**: Ensure all configuration files are properly set up
3. **TypeScript errors**: Check `tsconfig.json` and type definitions

### Getting Help

- Check [Expo Documentation](https://docs.expo.dev/)
- Visit [NativeWind Documentation](https://www.nativewind.dev/)
- React Native [Community Resources](https://reactnative.dev/community/overview)

---

**Last Updated**: September 21, 2025
**Version**: 1.0.0
