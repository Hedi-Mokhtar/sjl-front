# Development Guidelines

## Development Environment Setup

### Initial Configuration

After cloning the repository, install dependencies using pnpm (not npm or yarn, as this project uses pnpm workspaces):

```bash
pnpm install
```

Launch the development server which provides hot module replacement:

```bash
pnpm dev
```

Access the application at `http://localhost:5173`. Changes to source files trigger automatic browser updates without losing application state.

### Editor Configuration

Visual Studio Code is recommended with these extensions:
- Vue Language Features (Volar) - provides Vue 3 syntax support and type checking
- ESLint - displays linting errors inline
- Prettier - formats code on save

**Important**: Disable the Vetur extension if installed, as it conflicts with Volar.

Workspace settings are pre-configured in `.vscode/` directory.

## Code Quality Standards

### Linting

ESLint enforces code quality rules combining Vue, TypeScript, and import conventions. Run the linter with auto-fix:

```bash
pnpm lint
```

The configuration uses the flat config format (`eslint.config.ts`) with:
- Vue plugin for Single File Component rules
- TypeScript ESLint for type-aware linting
- Import plugin with TypeScript resolver for import ordering

Address all linting errors before committing code.

### Formatting

Prettier handles code formatting consistently. Format all files:

```bash
pnpm format
```

Configuration in `.prettierrc.json` defines formatting rules. Set up your editor to format on save for automatic formatting.

### Type Checking

TypeScript provides compile-time error detection. Run type checking independently:

```bash
pnpm type-check
```

This executes `vue-tsc` which understands Vue Single File Components. Fix type errors before building for production.

## Working with Components

### Creating New Components

1. Decide component placement:
   - **Domain-specific**: Place in feature folder under `src/components/` (e.g., `volunteers/`, `teams/`)
   - **Reusable**: Place in `src/components/common/`
   - **Layout**: Place in `src/components/layout/`

2. Use PascalCase naming matching the component name (e.g., `TeamSchedule.vue`)

3. Follow the Composition API pattern used throughout the codebase

4. Add TypeScript types for props using `defineProps<T>()`

### Component Structure Pattern

Components in this project follow a consistent structure:

```vue
<template>
  <!-- HTML markup with Tailwind classes -->
</template>

<script setup lang="ts">
// Imports
// Interface definitions
// Props/emits
// Composables
// Reactive state
// Computed properties
// Functions
</script>
```

No separate `<style>` blocks - all styling uses TailwindCSS utilities.

## Working with Views

Views represent complete pages and live in `src/views/`. Each view:

- Uses PascalCase with "View" suffix except `TeamPage.vue` which displays individual teams
- Imports necessary components, data, and composables
- Handles page-level layout and composition

When adding a new view:

1. Create the component file in `src/views/`
2. Register the route in `src/router/index.ts`
3. Add navigation links where appropriate (typically in AppHeader)

## Data Management

Static data resides in `src/data/` as TypeScript modules. When adding or modifying data:

1. Define TypeScript interfaces for type safety
2. Export typed data objects
3. Import images using relative paths for Vite processing
4. Document placeholder data with TODO comments

Example pattern from `team.ts`:
- Define interfaces (`TeamData`, `TeamSchedule`)
- Import assets (images)
- Export typed data structure

Future API integration would replace these static imports with fetch calls.

## Styling Guidelines

### TailwindCSS Usage

The project exclusively uses TailwindCSS utility classes for styling. Custom CSS is limited to `src/assets/styles/`:
- `main.css`: Global styles and Tailwind directives
- `animation.css`: Custom animations not available in Tailwind

Configuration in `tailwind.config.js` includes content paths for proper tree-shaking.

### Responsive Design

Use Tailwind's responsive modifiers for different screen sizes:
- Mobile-first approach (base styles apply to mobile)
- `md:` prefix for tablet and up
- `lg:` prefix for desktop

The header demonstrates this pattern with separate mobile and desktop components.

### Animation Patterns

For staggered list animations, use the `useStaggeredAnimation` composable:

```typescript
const { getAnimationDelay } = useStaggeredAnimation(0.05)
// In template: :style="getAnimationDelay(index)"
```

## Routing Conventions

### Adding Routes

Register new routes in `src/router/index.ts`:

```typescript
{
  path: '/your-path',
  name: 'routeName',
  component: YourView
}
```

For dynamic routes (like team details), use parameters:

```typescript
{
  path: '/teams/:teamId',
  name: 'Team',
  component: TeamPage
}
```

Access route parameters in components via `useRoute()` from vue-router.

### Navigation

Use `<RouterLink>` for internal navigation rather than anchor tags. This prevents full page reloads and maintains single-page app behavior.

## Build and Deployment

### Production Build

Create optimized production bundle:

```bash
pnpm build
```

This process:
1. Runs TypeScript type checking (`vue-tsc`)
2. Builds optimized assets with Vite
3. Outputs to `/dist` directory

### Preview Production Build

Test the production build locally before deployment:

```bash
pnpm preview
```

This serves the `/dist` directory, allowing verification of the production build.

### Build Artifacts

The `/dist` directory contains:
- Minified JavaScript bundles with code splitting
- Optimized CSS
- Processed images and static assets
- Generated HTML

Never commit the `/dist` directory - it's excluded via `.gitignore`.

## Git Workflow

### Before Committing

1. Run linting: `pnpm lint`
2. Run type checking: `pnpm type-check`  
3. Test the application: `pnpm dev`
4. Review changes carefully

### Commit Messages

Write clear, descriptive commit messages explaining what changed and why.

## Common Development Tasks

### Adding a New Team

1. Add team images to `src/assets/images/teams/[team-id]/`
2. Update `src/data/team.ts` with new team entry
3. Team automatically appears in TeamsView grid and dropdown

### Adding a New Volunteer

1. Add photo to `src/assets/images/volunteers/`
2. Update `src/data/volunteer.ts` with volunteer details
3. Profile card renders automatically in VolunteersView

### Adding a New Partner

1. Add logo to `src/assets/images/partners/`
2. Update `src/data/partner.ts` with partner information
3. Partner displays automatically in PartnersView

### Modifying Navigation

Update `src/data/navigationData.ts` to change menu structure. Changes apply to both desktop and mobile headers.

## Debugging Tips

### Vue DevTools

Install Vue DevTools browser extension for component inspection, route debugging, and state examination.

### TypeScript Errors

If seeing "Cannot find module" errors for `.vue` imports, ensure Volar extension is active and TypeScript version matches project requirements.

### Build Failures

Check Node.js version matches engine requirements (20.19.0+ or 22.12.0+). Verify all dependencies installed with `pnpm install`.

## Performance Considerations

### Image Optimization

Images are processed by Vite during build. Use appropriate image formats and sizes. Consider WebP format for better compression.

### Code Splitting

Vite automatically splits code by route. Each view's components are bundled separately for optimal loading.

### Bundle Size

Run build to see bundle sizes. Large dependencies increase load times - evaluate necessity of each dependency.

## Testing Approach

Currently, the project lacks automated tests. When implementing tests:
- Use Vitest (Vite-native test framework)
- Test components in isolation with Vue Test Utils
- Focus on user interactions and component behavior
- Mock router and data imports as needed
