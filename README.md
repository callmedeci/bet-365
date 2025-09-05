# Bet365 Clone - Minimal Sports Betting Interface

A minimal, production-quality Next.js application replicating bet365's home layout with internationalization support.

## Architecture

- **Feature-based structure**: Each feature (`matches`, `ui`) contains components, types, and Redux slices
- **Next.js App Router**: Modern routing with layout composition
- **Redux Toolkit**: State management for matches and filtering
- **next-intl**: Internationalization with EN/FA locale support
- **TypeScript**: Full type safety throughout the application

## Quick Start

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint checks

## Internationalization

- Switch locales using the language toggle in the header
- Edit translations in `messages/en.json` (FA already configured)
- Locale routing handled automatically by next-intl middleware

## Features

- Responsive match cards with live odds
- Category-based filtering (Football, Tennis, Basketball)
- Mobile-first design with collapsible sidebar
- Accessibility-focused with proper ARIA labels and keyboard navigation
