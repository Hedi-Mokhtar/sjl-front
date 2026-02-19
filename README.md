[![PR Checks](https://github.com/Hedi-Mokhtar/sjl-front/actions/workflows/pr-check.yml/badge.svg)](https://github.com/Hedi-Mokhtar/sjl-front/actions/workflows/pr-check.yml)
[![Vercel](https://img.shields.io/badge/deployed-vercel-black?logo=vercel)](https://sjl-front.vercel.app)
[![Vue 3](https://img.shields.io/badge/vue-3-42b883?logo=vue.js)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/typescript-5-3178c6?logo=typescript)](https://www.typescriptlang.org)

# Sport Joie Lille - Frontend Website

Public-facing website for Sport Joie Lille volleyball club in Lille, France. This application presents club information including competitive teams (from youth to senior level), volunteer opportunities, partner organizations, training schedules, and membership registration.

## What This Application Does

The Sport Joie Lille frontend serves as the digital presence for the volleyball club, featuring:

- **Team Showcase**: Displays all club teams from youth categories (M13, M15, M18, M21) to senior competitive levels (Départementale, Régionale, Pré-Nationale), plus recreational Compet'lib groups
- **Volunteer Portal**: Highlights volunteer contributors with profile cards and role descriptions
- **Partner Directory**: Showcases sponsoring organizations and collaborators
- **Schedule Browser**: Interactive calendar showing training times and venue locations for each team
- **Subscription Interface**: Handles new member registration workflows
- **Contact Information**: Provides club contact details and location mapping

## Getting Started

**Required Software**: Node.js 20.19+ or 22.12+ with pnpm package manager

**Quick Start Commands**:

```bash
pnpm install          # Install dependencies
pnpm dev              # Launch development server (http://localhost:5173)
pnpm build            # Create production bundle
pnpm preview          # Test production build locally
pnpm lint             # Check code quality with ESLint
pnpm format           # Apply Prettier formatting
```

## Technical Foundation

Built with Vue 3 Composition API, TypeScript for type safety, Vite for fast builds, Vue Router for navigation, and TailwindCSS for styling. The application uses pnpm workspaces and requires Node 20.19.0+ or 22.12.0+.

**Editor Recommendation**: VS Code with Vue Language Features (Volar) extension enabled

## Documentation Structure

Further technical details are available in `/docs`:

- Architecture decisions and component hierarchy
- Folder organization and file naming conventions
- Development workflows and contribution guidelines

See the docs folder for comprehensive technical documentation.

## Deployment

Automatically deployed to Vercel on every push to `main`.
Environment variables must be configured in the Vercel dashboard.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable             | Description                         |
| -------------------- | ----------------------------------- |
| `VITE_RECAPTCHA_KEY` | Google reCAPTCHA v3 public site key |
| `VITE_FORMSPREE_URL` | Formspree form endpoint URL         |
| `VITE_CONTACT_EMAIL` | Club contact email for CC           |
