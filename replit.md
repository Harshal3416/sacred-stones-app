# Sacred Stones - Spiritual Products Shopping App

## Overview

Sacred Stones is a spiritual e-commerce web application designed for selling healing crystals, tarot cards, spiritual bracelets, and mystical products. The application emphasizes a serene, trustworthy aesthetic that honors the mystical nature of spiritual products while maintaining modern accessibility. It features a WhatsApp-first commerce approach, enabling customers to complete purchases through conversational commerce.

The application is built as a full-stack TypeScript project with a React frontend and Express backend, currently using in-memory storage with a database schema ready for PostgreSQL migration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server with HMR support
- Wouter for lightweight client-side routing (no React Router dependency)

**UI Component System:**
- Shadcn/ui component library with Radix UI primitives for accessible, composable components
- Tailwind CSS for utility-first styling with custom design system
- Class Variance Authority (CVA) for type-safe component variants
- Custom theme system supporting light/dark modes with CSS variables

**State Management:**
- TanStack Query (React Query) for server state management and data fetching
- React hooks (useState) for local component state (shopping cart, UI state)
- No global state management library (Redux/Zustand) - keeping state simple and localized

**Design System:**
- Custom color palette: Deep Purple (mystical), Warm Gold (prosperity), Soft Cream/Rich Charcoal backgrounds
- Typography: Playfair Display (headings), Inter (body text), Cormorant Garamond (accents)
- Spacing uses Tailwind's 4px-based scale for consistent rhythm
- Responsive design with mobile-first approach

### Backend Architecture

**Server Framework:**
- Express.js for HTTP server and API endpoints
- TypeScript throughout for type safety
- ESM module system (type: "module" in package.json)

**API Design:**
- RESTful API structure with `/api` prefix
- Simple route handlers in `server/routes.ts`
- Middleware for request logging and error handling
- JSON-based request/response format

**Data Layer:**
- Currently: In-memory storage (`MemStorage` class) loading from `server/data.json`
- Future-ready: Drizzle ORM configured for PostgreSQL migration
- Storage interface (`IStorage`) allows swapping implementations without changing business logic
- Schema defined with Drizzle in `shared/schema.ts` using PostgreSQL types

**Development Tools:**
- Custom Vite middleware integration for SSR in development
- Request/response logging middleware
- Error handling middleware with proper status codes

### Data Storage Solutions

**Current Implementation:**
- File-based JSON storage (`server/data.json`) for product catalog
- In-memory data access through `MemStorage` class
- Synchronous file reads on server startup

**Database Schema (PostgreSQL-ready):**
```typescript
products table:
- id: UUID (primary key, auto-generated)
- title: text
- description: text
- shortDescription: text
- price: decimal(10,2)
- category: text
- image: text (path to image)
- benefits: text[] (array)
- inStock: integer (default 1)
```

**Migration Strategy:**
- Drizzle Kit configured for PostgreSQL with Neon serverless driver
- Migration files output to `./migrations` directory
- Schema validation with Zod through `drizzle-zod`
- `db:push` script ready for schema synchronization

**Data Models:**
- `Product`: Core product entity with pricing, images, benefits
- `CartItem`: Client-side cart structure (product + quantity)
- `ContactInfo`: Business contact information (phone, email, WhatsApp)

### External Dependencies

**Database & ORM:**
- `@neondatabase/serverless`: PostgreSQL serverless driver for Neon
- `drizzle-orm`: Type-safe ORM with SQL-like API
- `drizzle-kit`: Schema migration and management tool
- `drizzle-zod`: Zod schema generation from Drizzle tables

**UI Component Libraries:**
- Radix UI primitives (20+ component packages): Accessible, unstyled components
- `cmdk`: Command menu component
- `embla-carousel-react`: Carousel/slider functionality
- `react-day-picker`: Calendar/date picker
- `vaul`: Drawer component
- `input-otp`: OTP input component

**Styling:**
- `tailwindcss`: Utility-first CSS framework
- `autoprefixer`: CSS vendor prefixing
- `class-variance-authority`: Type-safe component variants
- `tailwind-merge`: Merging Tailwind classes without conflicts
- `clsx`: Conditional className utility

**Forms & Validation:**
- `react-hook-form`: Performant form state management
- `@hookform/resolvers`: Form validation resolvers
- `zod`: TypeScript-first schema validation

**State & Data Fetching:**
- `@tanstack/react-query`: Server state management, caching, and synchronization

**Third-Party Integrations:**
- WhatsApp Business API: Direct link integration for conversational commerce (`wa.me` links)
- Contact Info: Phone, email, and WhatsApp number stored in `client/src/lib/contact-info.ts`

**Build & Development:**
- `vite`: Fast build tool with HMR
- `@vitejs/plugin-react`: React support for Vite
- `esbuild`: Backend bundling for production
- `tsx`: TypeScript execution for development server
- Replit-specific plugins: cartographer, dev-banner, runtime-error-modal

**Utilities:**
- `date-fns`: Date manipulation and formatting
- `nanoid`: Unique ID generation
- `react-icons`: Icon library (including WhatsApp icon)
- `lucide-react`: Additional icon set

**Assets:**
- Image assets stored in `attached_assets/generated_images/`
- Carousel images imported directly in components
- Product images referenced via relative paths in JSON data

**Fonts:**
- Google Fonts: Architects Daughter, DM Sans, Fira Code, Geist Mono, Inter, Playfair Display, Cormorant Garamond (loaded via HTML link tags)