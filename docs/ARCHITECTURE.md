# Architecture Overview

## Application Purpose

This frontend application serves as the digital gateway for Sport Joie Lille, a volleyball club in Lille, France. The site enables visitors to explore team information, view training schedules, learn about volunteers, discover club partners, and register for membership.

## Design Philosophy

### Component-Driven Structure

The application follows a hierarchical component architecture where reusable UI elements are organized by their domain or function. This promotes code reuse and maintains clear separation of concerns.

### Type-Safe Data Management

Team rosters, volunteer profiles, and partner details are managed through TypeScript interfaces defined in dedicated data modules. This ensures consistency across the application and catches errors during development rather than runtime.

### Client-Side Routing Strategy

Vue Router manages navigation between eight distinct views without full page reloads. Routes are defined declaratively with path-to-component mappings, including dynamic routing for individual team detail pages.

## Core Architecture Layers

### Presentation Layer (Views)

Eight primary views handle different sections of the site:

1. **HomeView**: Landing page with club introduction and featured content
2. **TeamsView**: Overview grid of all volleyball teams 
3. **TeamPage**: Dynamic route displaying individual team details, trainer info, and practice schedule
4. **VolunteersView**: Profiles of club volunteers with their contributions
5. **PartnersView**: Grid of sponsoring organizations and partners
6. **ScheduleView**: Consolidated training calendar across all teams
7. **SubscriptionView**: Member registration workflow
8. **ContactView**: Club contact information and location

### Component Layer

Organized into three categories:

**Common Components**: Shared utilities like LocationMap for venue display

**Layout Components**: Application shell including AppHeader (with desktop/mobile variants and team dropdown navigation) and AppFooter

**Domain Components**: Feature-specific elements like VolunteerCard and SectionHeader for the volunteers section

### Data Layer

Static data modules export TypeScript-typed collections:

- `team.ts`: Team metadata including names, images, trainer details, and training schedules
- `volunteer.ts`: Volunteer profiles and role descriptions
- `partner.ts`: Partner organization information
- `navigationData.ts`: Menu structure for header navigation

### Utility Layer

The `useStaggeredAnimation` composable provides animation delay calculations for sequential element appearances, creating smooth entrance effects for list items.

## Navigation Flow

The application uses declarative routing where each view is mapped to a URL path. The TeamPage uses dynamic segments (`:teamId`) to display different teams based on the URL parameter. Navigation is handled through the AppHeader component which includes dropdown menus and mobile-responsive layouts.

## Build Configuration

Vite serves as the build tool with configuration for path aliases (`@`, `@components`, `@views`, `@data`) enabling clean imports throughout the codebase. The Vue plugin enables Single File Component processing, while the devtools plugin aids development.

## Styling Approach

TailwindCSS provides utility classes for responsive layouts. Custom animations defined in `animation.css` complement Tailwind's utilities. The design uses the Bebas Neue, Oswald, and Anton font families loaded from Google Fonts for a sports-oriented aesthetic.

## State Management

Currently, the application uses a static data model without centralized state management. Team, volunteer, and partner data are imported directly into components as needed. This simple approach suits the current read-only nature of the application.

## Future Extensibility

The architecture supports future enhancements:
- Integration with backend APIs by replacing static data imports with API calls
- Addition of Pinia or another state library if dynamic data management becomes necessary
- Extension of the team detail pages with match results and player statistics
- Implementation of form submissions for the subscription and contact views
