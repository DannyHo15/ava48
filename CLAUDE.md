# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server on port 3030 with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server on port 3030
- `pnpm lint` - Run ESLint with auto-fix
- `pnpm check-types` - Run TypeScript strict type checking

**Note**: This project uses pnpm as the package manager.

## Architecture Overview

### Full-Screen Sectioned Landing Page

The application is a single-page landing page with full-screen sections that users can navigate between using:

- Scroll wheel (desktop only)
- Keyboard arrow keys and spacebar (desktop only)
- Touch/swipe gestures (mobile)
- Drag gestures (mobile)

The navigation system uses:

- **Dual Approach**: GSAP Observer for desktop (scroll/keyboard) + KeenSlider for mobile (touch/drag)
- **Animation Coordination**: GSAP prevents animation conflicts between both systems with `animating.current` lock
- **Responsive Detection**: Desktop navigation (1024px+) vs mobile handling
- **Custom scrollbar**: Visual indicator that tracks current section position with GSAP animations

### Internationalization Structure

- **Next.js 15 App Router** with next-intl for i18n
- **Supported locales**: English (en), Japanese (ja), Chinese Simplified (zh-cn), Chinese Traditional (zh-tw)
- **Locale prefix always required** in URLs (e.g., `/en`, `/ja`)
- **Message files**: Located in `messages/` directory as JSON files
- **Translation key structure**: Uses nested objects under `LandingPage` namespace

### Component Architecture

- **Layout Hierarchy**: `RootLayout` → `ContextProvider` → `GlobalLayout` → Individual sections
- **Section components** in `src/components/home/`: Each full-screen section is a separate component
- **Persistent Elements**: Logo, navigation buttons, language selector, footer links fixed in `GlobalLayout`
- **Component Patterns**: Each section uses `useTranslations()` and `useParams()` for i18n

### Key Technologies

- **Next.js 15** with App Router and TypeScript
- **GSAP** for animations and scroll handling
- **KeenSlider** for mobile carousel functionality
- **Tailwind CSS v4** for styling
- **Radix UI** for accessible component primitives
- **Firebase** for analytics

### Important Implementation Details

- **SVG handling**: Custom webpack configuration supports both direct SVG imports and React components via @svgr/webpack
- **Animation timing**: 2000ms duration with power2 easing
- **Theme system**: Server action cookies for theme persistence (`royal-dark-mode`/`violet-kiss-mode`)
- **GSAP Integration**: Observer plugin for scroll/keyboard events, precise animation timing
- **KeenSlider Setup**: Vertical orientation, single view, custom animations
- **Mobile responsiveness**: Navigation method changes based on screen width (desktop uses scroll/keyboard, mobile uses touch/drag)
- **Styling approach**: Uses Tailwind v4 with custom CSS variables for theming

### Development Notes

- The main page component (`src/app/[locale]/page.tsx`) manages the section slider and navigation state
- Each section component is self-contained and can be developed independently
- Custom styling uses extensive Tailwind utilities with design tokens
- The project uses pnpm workspaces for dependency management

