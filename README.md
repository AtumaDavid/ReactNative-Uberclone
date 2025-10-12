# React Native Uber Clone

A full-featured ride-sharing mobile application built with React Native, Expo, and modern development tools. This project replicates the core functionality of Uber, including user authentication, ride booking, real-time tracking, and payment processing.

## � Project Overview

This Uber clone is being developed as a comprehensive learning project to demonstrate proficiency in React Native development, state management, real-time features, and mobile app architecture. The app aims to provide a seamless user experience for both riders and drivers.

### ✨ Key Features (Planned/In Development)

- [✅] **User Authentication** - Full Clerk authentication with email verification
- [✅] **Email Verification** - Secure OTP-based email verification
- [✅] **Session Management** - Persistent user sessions with token caching
- [✅] **Form Validation** - Comprehensive client-side validation with error alerts
- [✅] **PostgreSQL Database** - Local database with auto-initialization
- [✅] **User API** - RESTful API for user management with Clerk integration
- [✅] **Tab Navigation** - Liquid glass effect tab bar with custom styling
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
- **Clerk Authentication**: Enterprise-grade authentication with Clerk
- **Email Verification**: Secure OTP code verification via email
- **Session Management**: Persistent sessions with secure token caching
- **Form Validation**: Real-time validation with user-friendly error alerts
- **Loading States**: Visual feedback during authentication operations
- **Custom UI Components**: Reusable components with variant styling
- **Route Protection**: Automatic auth state checks and redirects
- **Modal Interactions**: Swipeable and dismissible modals for better UX
- **OAuth Ready**: Google OAuth integration prepared

### Authentication Screens

1. **Welcome/Onboarding Screen** (`/(auth)/welcome`)
   - Interactive 3-slide onboarding carousel
   - Custom swiper with pagination indicators
   - Dynamic "Next"/"Get Started" button progression
   - Skip functionality for quick access
   - High-quality onboarding images and content

2. **Sign Up Screen** (`/(auth)/signup`)
   - Full name, email, and password registration
   - Real-time form validation (email format, password strength)
   - Clerk account creation with error handling
   - Email verification modal with OTP input
   - Success modal with celebration animation
   - Loading states with disabled buttons
   - Dismissible verification modal (swipe down or tap outside)
   - Auto-redirect if already authenticated
   - Google OAuth integration ready

3. **Sign In Screen** (`/(auth)/signin`)
   - Email and password authentication
   - Form validation with error alerts
   - Clerk session management
   - Loading states during authentication
   - Auto-redirect if already authenticated
   - Error handling for invalid credentials
   - Google OAuth integration ready

### Route Structure

- **Root Entry**: Automatic redirect to welcome screen for unauthenticated users
- **Auth Group**: `/(auth)/` - Contains all authentication-related screens
- **Protected Routes**: `/(root)/` - Main app functionality (post-authentication)

### Authentication Flow

1. **New User Journey**:
   - Welcome/Onboarding → Sign Up → Email Verification → Success → Home

2. **Returning User Journey**:
   - Sign In → Auto-redirect to Home (if already signed in)

3. **Security Features**:
   - Password minimum 8 characters
   - Email format validation
   - Secure token storage with expo-secure-store
   - Session persistence across app restarts
   - Protected route guards
   - Error handling with user-friendly alerts

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
- **Expo Blur**: ~15.0.7 - Blur view component for frosted glass effects
- **Expo Splash Screen**: ~31.0.10 - Native splash screen handling
- **React Native Safe Area Context**: ~5.6.0 - Safe area handling

### Navigation & State Management

- **React Navigation Native**: ^7.1.8 - Navigation library
- **React Navigation Bottom Tabs**: ^7.4.0 - Tab navigation
- **React Navigation Elements**: ^2.6.3 - Navigation components
- **Expo Router**: ~6.0.7 - File-based routing system

### Authentication & Security

- **Clerk Expo**: ^2.16.0 - Complete authentication solution with email verification
- **Expo Secure Store**: ^15.0.7 - Secure token storage and caching
- **Token Caching**: Secure session persistence across app restarts
- **OAuth Ready**: Google authentication prepared

### Database & Backend

- **PostgreSQL**: ^8.16.3 (pg) - Local database for user data
- **@types/pg**: ^8.15.5 - TypeScript definitions for PostgreSQL
- **Connection Pooling**: Efficient database connection management
- **Auto-initialization**: Automatic table creation on first API call
- **Expo API Routes**: Built-in API route handling with +api.ts files

### UI Components & Libraries

- **React Native Swiper**: ^1.6.0 - Interactive carousel/swiper component
- **React Native Modal**: ^14.0.0-rc.1 - Advanced modal components with swipe gestures
- **Custom Components**: Reusable UI components with TypeScript support
- **InputField**: Custom input with validation and icons
- **CustomButton**: Multi-variant button with loading states
- **OAuth**: Social authentication component
- **TabIcon**: Custom tab icons with liquid glass effect
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
- PostgreSQL (local installation)
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

3. **Set up PostgreSQL Database**

   ```bash
   # Create database (Linux/macOS)
   sudo -u postgres psql
   CREATE DATABASE "Uber-clone";
   \q
   ```

   For detailed database setup instructions, see [`database/README.md`](database/README.md)

4. **Configure Environment Variables**

   ```bash
   # Copy the example file
   cp .env.example .env

   # Edit .env and add your credentials:
   # - EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
   # - DATABASE_URL
   ```

5. **Start the development server**

   ```bash
   npx expo start
   ```

   The database tables will be created automatically on first API call.

6. **Run on specific platforms**

   ```bash
   # Android
   npm run android

   # iOS
   npm run ios

   # Web
   npm run web
   ```

## 🗄️ Database Architecture

### PostgreSQL Setup

The app uses a local PostgreSQL database with automatic initialization.

**Key Features:**

- **Auto-initialization**: Tables are created automatically on first API call
- **Connection Pooling**: Efficient database connection management (max 20 connections)
- **Indexed Queries**: Optimized with indexes on clerk_id and email
- **Automatic Timestamps**: updated_at field updated via database triggers
- **TypeScript Integration**: Full type safety with @types/pg

**Database Schema:**

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  clerk_id VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  profile_image_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**API Endpoints:**

- `POST /api/user` - Create new user with Clerk integration
- `GET /api/user?clerkId=xxx` - Fetch user by Clerk ID
- `GET /api/user?email=xxx` - Fetch user by email

For detailed setup instructions, see [`database/README.md`](database/README.md)

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
- ✅ Custom reusable UI components (CustomButton, InputField)
- ✅ TypeScript type definitions
- ✅ Sign Up screen with form validation
- ✅ Sign In screen with authentication flow
- ✅ Navigation stack configuration
- ✅ Automatic routing for unauthenticated users
- ✅ Asset management (icons, images, fonts)
- ✅ NativeWind configuration fixes and optimization

### [Version 1.2.0] - Clerk Authentication Integration - ✅ Completed

- ✅ Clerk Expo SDK integration
- ✅ Email/password authentication
- ✅ Email verification with OTP codes
- ✅ Secure token caching with expo-secure-store
- ✅ Session management and persistence
- ✅ Form validation with error alerts
- ✅ Loading states and user feedback
- ✅ Success modals with animations
- ✅ Dismissible verification modals
- ✅ Auto-redirect for authenticated users
- ✅ Error handling for all auth operations
- ✅ React Native Modal integration
- ✅ OAuth component preparation
- ✅ Protected route guards

### [Version 1.3.0] - Database Integration & Navigation - ✅ Completed

- ✅ PostgreSQL database integration with node-postgres (pg)
- ✅ Database connection pooling for efficient queries
- ✅ Auto-initialization system (tables created automatically)
- ✅ User API endpoints (POST /api/user, GET /api/user)
- ✅ Database migration files with proper schema
- ✅ Automatic timestamp triggers for updated_at field
- ✅ Comprehensive database documentation
- ✅ Tab navigation with liquid glass effect
- ✅ Custom tab bar styling with blur effects
- ✅ Centered tab icons with active state styling
- ✅ Protected route configuration
- ✅ Loading state on app initialization

### [Version 1.4.0] - OAuth & User Profiles - 🚧 Next Phase

- [ ] Google OAuth implementation
- [ ] User profile creation and management
- [ ] Profile picture upload
- [ ] Complete Clerk-to-Database user sync
- [ ] Account settings screen
- [ ] Enhanced component library

### Upcoming Features

- [ ] User profile management and editing
- [ ] Driver profile creation and verification
- [ ] Location services integration with expo-location
- [ ] Map integration with react-native-maps
- [ ] Ride booking system with real-time matching
- [ ] State management setup (Redux/Zustand)
- [ ] Enhanced form validation with real-time feedback
- [ ] Push notifications with expo-notifications
- [ ] Offline capability and data caching
- [ ] Advanced component library expansion
- [ ] Payment integration (Stripe/PayPal)
- [ ] Real-time chat with Socket.io
- [ ] Trip tracking and history

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
4. **Database connection errors**:
   - Ensure PostgreSQL is running: `sudo systemctl status postgresql`
   - Check DATABASE_URL in .env file
   - Verify database exists: `sudo -u postgres psql -l`
5. **Port conflicts**: Use `npx expo start --port 8082` if port 8081 is in use
6. **Authentication flow issues**: Clear Clerk cache and restart Expo server

### Getting Help

- Check [Expo Documentation](https://docs.expo.dev/)
- Visit [NativeWind Documentation](https://www.nativewind.dev/)
- React Native [Community Resources](https://reactnative.dev/community/overview)

## 📚 Documentation

- **Database Setup**: [`database/README.md`](database/README.md) - Complete PostgreSQL setup guide
- **API Routes**: User management endpoints with auto-initialization
- **Environment Variables**: `.env.example` - Required configuration template

## 🎯 Project Structure

```
react-native-uberclone/
├── app/
│   ├── (api)/              # API routes
│   │   └── user+api.ts     # User management endpoints
│   ├── (auth)/             # Authentication screens
│   │   ├── welcome.tsx     # Onboarding carousel
│   │   ├── signup.tsx      # User registration
│   │   └── signin.tsx      # User login
│   ├── (root)/             # Protected routes
│   │   └── (tabs)/         # Tab navigation
│   │       ├── home.tsx
│   │       ├── Rides.tsx
│   │       ├── Chat.tsx
│   │       └── Profile.tsx
│   ├── _layout.tsx         # Root layout with Clerk provider
│   └── index.tsx           # Entry point with auth check
├── lib/
│   └── db.ts               # Database connection and utilities
├── database/
│   ├── README.md           # Database setup guide
│   └── migrations/         # SQL migration files
├── components/             # Reusable UI components
├── constants/              # App constants and config
└── assets/                 # Images, icons, fonts
```

---

**Last Updated**: October 12, 2025
**Version**: 1.3.0
**Status**: Full-stack authentication with PostgreSQL database, auto-initialization, user API, and enhanced navigation with liquid glass tab bar
