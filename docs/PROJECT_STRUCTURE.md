# Project Structure

## Root Directory Organization

```
sjl-front/
├── src/                    # Application source code
├── public/                 # Static assets served directly
├── docs/                   # Project documentation
├── .vscode/                # Editor workspace settings
├── .github/                # GitHub configuration
├── index.html              # HTML entry point
├── vite.config.ts          # Vite build configuration
├── tsconfig.json           # TypeScript compiler settings
├── tailwind.config.js      # TailwindCSS configuration
├── postcss.config.js       # PostCSS processor config
├── eslint.config.ts        # ESLint rules
├── package.json            # Dependencies and scripts
└── pnpm-lock.yaml          # Locked dependency versions
```

## Source Code Structure (`/src`)

### Application Entry

**main.ts**: Bootstrap file that creates the Vue application instance, registers the router plugin, and mounts the app to the DOM element. Also imports global styles.

**App.vue**: Root component providing the application shell with header, main content area, and footer. Uses flexbox layout to ensure footer stays at bottom.

**env.d.ts**: TypeScript declarations for environment types and module augmentations.

### Views Directory (`/src/views`)

Each view represents a distinct page in the application:

- **HomeView.vue**: Club homepage with hero content and introductions
- **TeamsView.vue**: Grid display of all volleyball teams with navigation cards
- **TeamPage.vue**: Detailed page for individual teams showing trainer, schedule, and team photo
- **VolunteersView.vue**: Volunteer profiles with cards and descriptions
- **PartnersView.vue**: Partner organization showcase
- **ScheduleView.vue**: Training calendar aggregated across teams
- **SubscriptionView.vue**: Membership registration interface
- **ContactView.vue**: Club location and contact details

### Components Directory (`/src/components`)

**common/**: Reusable components used across multiple views
- `LocationMap.vue`: Interactive map component for displaying venue locations

**layout/**: Application shell components
- `AppHeader/`: Header navigation with multiple subcomponents
  - `AppHeader.vue`: Main header wrapper
  - `DesktopHeader.vue`: Full desktop navigation bar
  - `MobileHeader.vue`: Responsive mobile menu
  - `TeamDropdown.vue`: Dropdown menu for team navigation
- `AppFooter/`: Footer component with club information

**volunteers/**: Domain-specific components for the volunteers section
- `VolunteerCard.vue`: Individual volunteer profile card
- `SectionHeader.vue`: Styled header for volunteer sections

### Router Directory (`/src/router`)

**index.ts**: Defines all application routes, mapping URL paths to view components. Includes static routes for main pages and dynamic route for team details using `:teamId` parameter.

### Data Directory (`/src/data`)

Static data modules exporting TypeScript-typed information:

**team.ts**: 
- Exports `TeamData` interface defining team structure
- Exports `TeamSchedule` interface for practice schedules
- Contains `teamsData` object with 14 teams from youth to senior levels
- Includes image imports for team photos, trainer pictures, and calendars

**volunteer.ts**: Volunteer profile data with names, roles, and photos

**partner.ts**: Partner organization information and logos

**navigationData.ts**: Menu structure data for header navigation elements

### Composables Directory (`/src/composables`)

**useStaggeredAnimation.ts**: Composition function that calculates progressive animation delays for list item entrances. Takes a delay increment parameter and returns a function to compute per-item delays.

### Assets Directory (`/src/assets`)

**images/**: Organized by feature area
- `teams/`: Team photos, trainer images, and schedule graphics per team
- `volunteers/`: Volunteer profile photos
- `partners/`: Partner organization logos
- `logo.png`, `logo.jpg`: Club branding
- `clubpic1.jpg`, `clubpic2.jpg`: General club photos
- `schedule.png`: Training schedule overview image

**styles/**:
- `main.css`: Global styles and Tailwind directives
- `animation.css`: Custom CSS animations for page transitions and effects

## Configuration Files

**vite.config.ts**: Defines build settings including path aliases (`@`, `@components`, `@views`, `@data`) and enables Vue DevTools plugin.

**tsconfig.json**: Base TypeScript configuration extending Vue recommended settings

**tsconfig.app.json**: Application-specific TypeScript settings including source includes/excludes

**tsconfig.node.json**: Node.js-specific TypeScript settings for config files

**tailwind.config.js**: Configures Tailwind content paths and theme customizations

**eslint.config.ts**: ESLint configuration using flat config format with Vue and TypeScript rules

**.prettierrc.json**: Code formatting rules for Prettier

**package.json**: Defines scripts (`dev`, `build`, `lint`, `format`), dependencies, and engine requirements (Node 20.19+ or 22.12+)

## Import Path Aliases

The project uses path aliases configured in `vite.config.ts`:

- `@/` → `/src/`
- `@components/` → `/src/components/`
- `@views/` → `/src/views/`
- `@data/` → `/src/data/`

These enable cleaner imports: `import HomeView from '@/views/HomeView.vue'` instead of relative paths with multiple `../` segments.

## Naming Conventions

**Views**: PascalCase with "View" suffix (e.g., `TeamsView.vue`, `ContactView.vue`)

**Components**: PascalCase descriptive names (e.g., `VolunteerCard.vue`, `TeamDropdown.vue`)

**Data Files**: camelCase with descriptive names (e.g., `team.ts`, `navigationData.ts`)

**Composables**: camelCase with "use" prefix (e.g., `useStaggeredAnimation.ts`)

## Build Output

Running `pnpm build` generates a production-ready bundle in the `/dist` directory with optimized assets, code splitting, and minification applied by Vite.
