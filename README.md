# AR Tech Frontend Web Application

Enterprise-grade **Next.js App Router** frontend foundation for **AR Tech**, an independent technology and digital solutions studio.

---

## Architecture Overview

The frontend is architected for peak performance, search engine optimization (SEO), and type-safe developer ergonomics:

- **Next.js App Router**: Utilizing React Server Components (RSC) by default for zero client JavaScript overhead, with selective Client Components for rich interactivity.
- **Strict TypeScript**: Strict typechecking across all components, hooks, schemas, and API client requests.
- **Curated Design Tokens**: Tailwind CSS paired with custom HSL CSS variables, glassmorphism tokens, and responsive typography.
- **Typed API Client**: Centralized HTTP client (`apiClient`) with standard envelope handling (`ApiResponse<T>`) communicating with the Express backend.
- **Feature-Based Modularization**: Structured domain slices (`services/`, `portfolio/`, `leads/`) containing dedicated schemas, API callers, hooks, and presentation components.
- **Form State & Validation**: React Hook Form with Zod schema resolution for client-side and server-side alignment.
- **Server State Caching**: TanStack Query (React Query v5) with QueryProvider integration.
- **Test Infrastructure**: Unit and component tests with Vitest and React Testing Library; end-to-end testing with Playwright.

---

## Directory Structure

```
frontend/
├── public/
│   ├── fonts/                    # Static typography assets
│   ├── icons/                    # Vector icons and favicons
│   ├── images/
│   │   ├── branding/             # Logos, open graph previews
│   │   ├── projects/             # Portfolio project screenshots
│   │   └── services/             # Service feature visuals
│   └── videos/                   # Demonstration video assets
├── src/
│   ├── app/                      # Next.js App Router routes & layouts
│   │   ├── (marketing)/          # Public marketing route group
│   │   │   ├── about/            # Studio ethos and vision
│   │   │   ├── case-studies/     # Technical engineering case studies
│   │   │   ├── contact/          # Inquiries and WhatsApp communication
│   │   │   ├── portfolio/        # Portfolio showcase & detail pages
│   │   │   ├── privacy-policy/   # Privacy policy
│   │   │   ├── services/         # Studio capabilities catalog
│   │   │   ├── terms/            # Terms of service
│   │   │   └── page.tsx          # Studio homepage
│   │   ├── error.tsx             # Interactive route error boundary
│   │   ├── global-error.tsx      # Root layout global crash boundary
│   │   ├── layout.tsx            # Global HTML shell & providers
│   │   ├── loading.tsx           # Page transition loading state
│   │   ├── manifest.ts           # PWA web manifest
│   │   ├── not-found.tsx         # 404 page
│   │   └── sitemap.ts            # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── cards/                # Domain-agnostic card layouts
│   │   ├── feedback/             # Feedback banners & alert states
│   │   ├── forms/                # Form controls & wrappers
│   │   ├── layout/               # Navbar, footer, navigation items
│   │   ├── sections/             # Page sections (hero, services, portfolio, cta)
│   │   ├── shared/               # Shared UI atoms (section headers, badges)
│   │   └── ui/                   # Primitive design system components (Button, Card)
│   ├── features/                 # Modular domain features
│   │   ├── leads/                # Inbound lead capture form & mutation hooks
│   │   ├── portfolio/            # Projects list & detail components
│   │   └── services/             # Capabilities list & detail components
│   ├── hooks/                    # Reusable React hooks
│   ├── lib/
│   │   ├── analytics/            # Telemetry stubs
│   │   ├── api/                  # Typed API client
│   │   ├── constants/            # Site config & navigation links
│   │   ├── env/                  # Zod environment variable validation
│   │   ├── seo/                  # OpenGraph & metadata helpers
│   │   └── utils/                # Utility helpers (cn, formatting)
│   ├── providers/                # React context providers (QueryProvider)
│   ├── styles/                   # Global CSS and Tailwind directives
│   └── types/                    # Shared TypeScript interfaces
├── tests/
│   ├── component/                # Component unit tests (React Testing Library)
│   ├── e2e/                      # Playwright end-to-end browser tests
│   ├── unit/                     # Utility unit tests (Vitest)
│   └── setup.ts                  # Test environment setup
├── .env.example
├── .gitignore
├── components.json               # shadcn/ui configuration
├── eslint.config.mjs             # Next.js flat ESLint configuration
├── next.config.ts                # Next.js application configuration
├── package.json
├── playwright.config.ts          # Playwright test configuration
├── postcss.config.mjs            # PostCSS plugins configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript strict configuration
└── vitest.config.ts              # Vitest test configuration
```

---

## Environment Variables

Copy `.env.example` to create `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Type | Default | Description |
|---|---|---|---|
| `NEXT_PUBLIC_API_URL` | string | `http://localhost:5000/api/v1` | Public backend API URL |
| `NEXT_PUBLIC_SITE_URL` | string | `http://localhost:3000` | Canonical site origin for SEO |
| `NEXT_PUBLIC_SITE_NAME` | string | `AR Tech` | Site brand name |
| `NEXT_PUBLIC_ANALYTICS_ENABLED` | boolean | `false` | Enable/disable client analytics |

---

## Getting Started

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Run in Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Run Automated Tests

```bash
# Run unit and component tests with Vitest
npm test

# Run tests in watch mode
npm run test:watch

# Run Playwright E2E tests (requires running frontend server or webServer)
npm run test:e2e
```

### 4. Code Quality & Type Checking

```bash
# Run TypeScript type check
npm run typecheck

# Lint with Next.js ESLint
npm run lint

# Format with Prettier
npm run format
```

### 5. Production Build

```bash
# Generate optimized production build
npm run build

# Start production server
npm start
```
# AR_Tech_Frontend
