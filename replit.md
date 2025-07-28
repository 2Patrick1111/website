# AI Allstars Website - Replit Code Agent Guide

## Overview

This is a full-stack web application built for AI Allstars, featuring a modern tech stack with React frontend, Express backend, and PostgreSQL database. The application serves as a corporate website with multiple pages including team information, ROI calculator, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: TSX for TypeScript execution
- **Production Build**: ESBuild for server bundling

### Database Architecture
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Schema**: Located in `/shared/schema.ts` for type sharing between frontend/backend
- **Connection**: Uses `@neondatabase/serverless` for database connectivity

## Key Components

### Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Route components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions and configurations
├── server/                # Backend Express application
│   ├── index.ts          # Main server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data access layer
│   └── vite.ts           # Vite integration for development
├── shared/               # Shared code between frontend and backend
│   └── schema.ts         # Database schema and types
└── migrations/           # Database migration files
```

### Layout System
- **Header**: Glass morphism design with responsive navigation
- **Footer**: Multi-column layout with categorized links
- **Background**: Animated starry background with CSS animations
- **Mobile Menu**: Custom mobile navigation (star menu mentioned in assets)

### Page Structure
- **Home**: Landing page with hero section and features grid
- **Team**: Team member profiles and information
- **Pricing**: Complete pricing page with AI-PASS packages and funding information
- **ROI Calculator**: Tool for calculating AI implementation ROI
- **Contact**: Contact forms and consultation booking
- **404**: Custom not found page

## Data Flow

### Frontend Data Management
1. **TanStack Query**: Handles server state, caching, and API calls
2. **Custom Hooks**: `use-header-scroll`, `use-mobile`, `use-toast` for UI state
3. **Form Handling**: React Hook Form with Zod validation (via Hookform resolvers)

### Backend Data Flow
1. **Request Routing**: Express routes in `/server/routes.ts`
2. **Data Access**: Storage interface in `/server/storage.ts`
3. **Current Implementation**: In-memory storage with interface for easy database integration
4. **Database Integration**: Ready for Drizzle ORM integration with existing schema

### Type Safety
- **Shared Types**: Database schema types shared between frontend/backend via `/shared/schema.ts`
- **API Types**: Consistent typing for API requests/responses
- **Form Validation**: Zod schemas for runtime type checking

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: Component variant management
- **Lucide React**: Icon library

### Database and Backend
- **Neon Database**: PostgreSQL hosting (DATABASE_URL required)
- **Drizzle ORM**: Type-safe database operations
- **Connect PG Simple**: PostgreSQL session store

### Development Tools
- **Vite**: Fast development server and build tool
- **ESBuild**: Fast JavaScript bundler for production
- **TypeScript**: Static type checking
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

### Development
- **Dev Server**: Runs on TSX with hot reload via Vite
- **Database**: Requires `DATABASE_URL` environment variable
- **Port**: Configurable via environment or defaults

### Production Build
1. **Frontend**: Vite builds to `/dist/public`
2. **Backend**: ESBuild bundles server to `/dist/index.js`
3. **Static Assets**: Served from build output directory
4. **Database**: Migrations via `drizzle-kit push`

### Environment Requirements
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Set to "production" for production builds
- **REPL_ID**: Replit-specific identifier for development features

### Key Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build (frontend + backend)
- `npm run start`: Production server
- `npm run db:push`: Apply database schema changes

## Technical Notes

### Current Storage Implementation
The application currently uses in-memory storage (`MemStorage` class) but includes a proper interface (`IStorage`) that can be easily swapped for database-backed storage using the existing Drizzle schema.

### Google Analytics Integration (2025-07-28)
- Implemented comprehensive Google Analytics tracking with measurement ID G-J8QTDJYSB3
- Created analytics utility library with initGA, trackPageView, and trackEvent functions
- Added automatic page view tracking for all routes using custom useAnalytics hook
- Integrated event tracking for CTA buttons and user interactions across all pages
- Added TypeScript support for Google Analytics with proper type definitions
- Dynamic Google Tag Manager script loading for client-side tracking

### CSS Architecture
Custom CSS properties are defined for the AI Allstars brand colors and glass morphism effects, extending the default Tailwind theme. The design system uses a dark theme with blue-red gradients and white text.

### Mobile Responsiveness
The application is fully responsive with custom breakpoints and mobile-specific components like the star menu navigation.