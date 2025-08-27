# Phishing Awareness Training Platform

## Overview

This is a modern, interactive phishing awareness training platform designed to educate users on identifying and defending against phishing attacks. The application is a single-page web application built with React that provides comprehensive cybersecurity education through training modules, best practices guides, real-world examples, and interactive quizzes. The platform features a sleek, dark-themed design with smooth animations and a user-friendly interface optimized for engagement and learning retention.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript, employing a modern component-based architecture. The application uses a single-page application (SPA) pattern with client-side routing via Wouter. The UI is constructed using shadcn/ui components with Radix UI primitives, providing a consistent and accessible design system. The styling is implemented with Tailwind CSS featuring a custom dark theme with cyan accents, creating a professional cybersecurity aesthetic.

### State Management and Data Flow
The application uses TanStack Query for server state management and caching, though the current implementation primarily focuses on client-side functionality. Local state is managed through React's built-in useState and useContext hooks. The application is designed to be stateless on the client side, with all training content and quiz data stored in local TypeScript files for immediate access.

### Animation and User Experience
Framer Motion is integrated throughout the application to provide smooth animations, transitions, and micro-interactions. This includes scroll-triggered animations, hover effects, and page transitions that enhance user engagement without compromising performance. The navigation system includes smooth scrolling between sections and an active section highlighting system.

### Component Structure
The application follows a modular component architecture with clearly separated concerns:
- Page components handle routing and layout composition
- Section components manage individual content areas (hero, training modules, quiz, etc.)
- UI components provide reusable interface elements
- The component hierarchy promotes reusability and maintainability

### Development and Build System
The build system uses Vite for fast development and optimized production builds. The development environment includes TypeScript for type safety, ESLint for code quality, and PostCSS for CSS processing. The application supports both development and production modes with appropriate optimizations for each environment.

### Responsive Design
The application implements a mobile-first responsive design approach using Tailwind CSS breakpoints. The layout adapts seamlessly across desktop, tablet, and mobile devices, ensuring consistent user experience across all screen sizes.

## External Dependencies

### UI and Design Libraries
- **Radix UI**: Provides accessible, unstyled UI primitives for complex components like dialogs, dropdowns, and form controls
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development and consistent design
- **Framer Motion**: Animation library for creating smooth transitions and interactive animations
- **Lucide React**: Icon library providing consistent iconography throughout the application

### Frontend Framework and Utilities
- **React**: Core frontend framework for building the user interface
- **Wouter**: Lightweight client-side routing library for navigation
- **TanStack Query**: Server state management and caching (configured for future backend integration)
- **class-variance-authority**: Utility for creating consistent component variant APIs

### Development and Build Tools
- **Vite**: Fast build tool and development server with hot module replacement
- **TypeScript**: Type system for enhanced development experience and code reliability
- **PostCSS**: CSS processing tool with autoprefixer for browser compatibility

### Backend Infrastructure (Prepared)
- **Express.js**: Node.js web framework ready for API endpoint implementation
- **Drizzle ORM**: Database toolkit configured for PostgreSQL integration
- **Neon Database**: Serverless PostgreSQL database service for data persistence

### Form and Validation
- **React Hook Form**: Form state management and validation library
- **Zod**: Schema validation library for runtime type checking and form validation
- **@hookform/resolvers**: Integration layer between React Hook Form and validation libraries

The application is currently designed as a static educational platform but includes the foundational setup for future backend integration, user authentication, progress tracking, and dynamic content management.