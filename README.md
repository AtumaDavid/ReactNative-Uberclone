# React Native Uber Clone

A full-featured ride-sharing mobile application built with React Native, Expo, and modern development tools. This project replicates the core functionality of Uber, including user authentication, ride booking, real-time tracking, and payment processing.

## � Project Overview

This Uber clone is being developed as a comprehensive learning project to demonstrate proficiency in React Native development, state management, real-time features, and mobile app architecture. The app aims to provide a seamless user experience for both riders and drivers.

### ✨ Key Features (Planned/In Development)

- [🚧] **User Authentication** - Welcome, Sign Up, Sign In screens implemented
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

**Legend**: ✅ Completed | 🚧 In Progress | [ ] Planned

## 🔐 Authentication System

### Implemented Features

- **Interactive Onboarding**: Multi-slide welcome experience with swiper navigation
- **Custom UI Components**: Reusable CustomButton with variant styling
- **Sign Up Flow**: Complete registration with form validation
- **Sign In Flow**: User login with credential management
- **Route Protection**: Automatic redirect to authentication for new users
- **Navigation Stack**: Structured routing with Expo Router groups

### Authentication Screens

1. **Welcome/Onboarding Screen** (`/(auth)/welcome`)
   - Interactive 3-slide onboarding carousel
   - Custom swiper with pagination indicators
   - Dynamic "Next"/"Get Started" button progression
   - Skip functionality for quick access
   - High-quality onboarding images and content

2. **Sign Up Screen** (`/(auth)/signup`)
   - Full name, email, and password registration
   - Password confirmation validation
   - Google OAuth integration ready
   - Navigation to sign in for existing users

3. **Sign In Screen** (`/(auth)/signin`)
   - Email and password authentication
   - Forgot password functionality
   - Google OAuth integration ready
   - Navigation to sign up for new users

### Route Structure

- **Root Entry**: Automatic redirect to welcome screen for unauthenticated users
- **Auth Group**: `/(auth)/` - Contains all authentication-related screens
- **Protected Routes**: `/(root)/` - Main app functionality (post-authentication)

## �🛠 Tech Stack

### Core Technologies

- **React Native**: 0.81.4 - Cross-platform mobile development
- **Expo**: ~54.0.9 - Development platform and toolchain
- **TypeScript**: ~5.9.2 - Type safety and enhanced developer experience
- **Expo Router**: ~6.0.7 - File-based navigation system
- **React**: 19.1.0 - Latest React version

### UI & Styling

- **NativeWind**: ^4.2.1 - Tailwind CSS for React Native
- **Tailwind CSS**: ^3.4.17 - Utility-first CSS framework
- **React Native Reanimated**: ~4.1.0 - Advanced animations
- **React Native Gesture Handler**: ~2.28.0 - Gesture recognition
- **Expo Splash Screen**: ~31.0.10 - Native splash screen handling
- **React Native Safe Area Context**: ~5.6.0 - Safe area handling

### Navigation & State Management

- **React Navigation Native**: ^7.1.8 - Navigation library
- **React Navigation Bottom Tabs**: ^7.4.0 - Tab navigation
- **React Navigation Elements**: ^2.6.3 - Navigation components
- **Expo Router**: ~6.0.7 - File-based routing system

### UI Components & Libraries

- **React Native Swiper**: ^1.6.0 - Interactive carousel/swiper component
- **Custom Components**: Reusable UI components with TypeScript support
- **Asset Management**: Organized icons, images, and fonts

### UI Components & Libraries

- **React Native Swiper**: ^1.6.0 - Interactive carousel/swiper component
- **Custom Components**: Reusable UI components with TypeScript support
- **Asset Management**: Organized icons, images, and fonts

### Development Tools

- **ESLint**: ^9.25.0 - Code linting with Expo config
- **Prettier**: ^3.6.2 - Code formatting
- **Prettier Plugin Tailwind**: ^0.5.14 - Tailwind class sorting
- **Metro**: Custom configuration for NativeWind
- **TypeScript**: ~5.9.2 - Static type checking

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
- **tailwind.config.js**: Extended with custom fonts and color palette
- **metro.config.js**: Enhanced with NativeWind Metro plugin and global CSS input
- **global.css**: Contains Tailwind directives for base, components, and utilities
- **nativewind-env.d.ts**: TypeScript definitions for NativeWind

**Custom Configuration:**

- **Custom Fonts**: Plus Jakarta Sans family (Regular, Bold, ExtraBold, ExtraLight, Light, Medium, SemiBold)
- **Color Palette**: Extended theme with primary, secondary, success, danger, warning, and general color schemes
- **Content Paths**: Configured for app and components directories
- **NativeWind Preset**: Properly configured with required preset for v4 compatibility
- **CSS Integration**: Global CSS import in root layout for proper styling

### TypeScript Configuration

- **tsconfig.json**: Extended from Expo's base configuration
- **Path Mapping**: `@/*` maps to the root directory
- **Type Definitions**: Includes NativeWind types via `nativewind-env.d.ts`

## 🎨 Styling Guidelines

### NativeWind Usage

- Use Tailwind utility classes for styling
- Leverage the `className` prop on React Native components
- Follow mobile-first responsive design principles
- Utilize Tailwind's design system for consistency

### Custom Design System

**Fonts Available:**

- `font-Jakarta` - Plus Jakarta Sans Regular
- `font-JakartaBold` - Plus Jakarta Sans Bold
- `font-JakartaExtraBold` - Plus Jakarta Sans ExtraBold
- `font-JakartaLight` - Plus Jakarta Sans Light
- `font-JakartaMedium` - Plus Jakarta Sans Medium
- `font-JakartaSemiBold` - Plus Jakarta Sans SemiBold

**Color Palette:**

- **Primary**: `bg-primary-500`, `text-primary-600` (Blue theme)
- **Secondary**: `bg-secondary-500`, `text-secondary-700` (Gray theme)
- **Success**: `bg-success-500`, `text-success-600` (Green theme)
- **Danger**: `bg-danger-500`, `text-danger-600` (Red theme)
- **Warning**: `bg-warning-500`, `text-warning-600` (Yellow theme)
- **General**: `bg-general-400`, `text-general-200` (Utility colors)

### Custom Components

**CustomButton Component:**

- Multiple variants: primary, secondary, danger, success, outline
- Icon support (left and right positioning)
- TypeScript interface with proper typing
- NativeWind styling integration
- Reusable across the application

### Usage Patterns

- Apply Tailwind classes using the `className` prop on React Native components
- Use the custom font family classes for consistent typography
- Leverage the extended color palette for brand consistency
- Follow the established color naming convention (100-900 scale)

## 🚦 Development Workflow

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint for code quality (via expo lint)
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

### [Version 1.0.0] - Initial Setup - ✅ Completed

- ✅ Project initialization with Expo
- ✅ NativeWind v4 integration
- ✅ TypeScript configuration
- ✅ Basic project structure
- ✅ Expo Router setup
- ✅ Development environment configuration
- ✅ Custom font integration (Plus Jakarta Sans family)
- ✅ Splash screen configuration
- ✅ ESLint and Prettier setup
- ✅ Custom Tailwind design system (colors & fonts)
- ✅ Font loading optimization

### [Version 1.1.0] - Authentication & Onboarding System - ✅ Completed

- ✅ Route group architecture (`(auth)` and `(root)`)
- ✅ Interactive onboarding carousel with 3 slides
- ✅ React Native Swiper integration
- ✅ Custom reusable UI components (CustomButton)
- ✅ TypeScript type definitions
- ✅ Sign Up screen with form validation
- ✅ Sign In screen with authentication flow
- ✅ Navigation stack configuration
- ✅ Automatic routing for unauthenticated users
- ✅ Asset management (icons, images, fonts)
- ✅ NativeWind configuration fixes and optimization

### [Version 1.2.0] - Backend Integration - 🚧 Next Phase

- [ ] Backend authentication integration
- [ ] Form validation and error handling
- [ ] Google OAuth implementation
- [ ] Persistent user sessions
- [ ] User profile management
- [ ] Enhanced component library

### Upcoming Features

- [ ] Complete authentication backend integration
- [ ] User profile management and editing
- [ ] Location services integration
- [ ] Map integration with react-native-maps
- [ ] Backend API integration
- [ ] State management setup (Redux/Zustand)
- [ ] Enhanced form validation with real-time feedback
- [ ] Push notifications setup
- [ ] Offline capability and data caching
- [ ] Advanced component library expansion

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

**Last Updated**: September 27, 2025
**Version**: 1.1.0
**Status**: Complete authentication & onboarding system with custom components, ready for backend integration
