# Design Guidelines: Spiritual Products Shopping App

## Design Approach

**Selected Approach:** Reference-Based, drawing inspiration from Etsy's artisan marketplace aesthetic combined with modern spiritual wellness brands (Goop, The Alchemist's Kitchen). The design will balance mystical/spiritual elements with clean e-commerce functionality.

**Key Design Principles:**
- Spiritual Serenity: Calm, trustworthy atmosphere that honors the mystical nature of products
- Visual Storytelling: Let product imagery and spiritual symbolism guide the experience
- Approachable Mysticism: Modern, accessible design that respects traditional spiritual practices
- WhatsApp-First Commerce: Seamless integration of conversational commerce

## Core Design Elements

### Color Palette

**Primary Colors:**
- Deep Purple: 270 45% 25% (mystical, spiritual depth)
- Warm Gold: 45 70% 55% (spiritual energy, prosperity)
- Soft Cream: 40 35% 95% (light mode background)
- Rich Charcoal: 240 8% 15% (dark mode background)

**Supporting Colors:**
- Sage Green: 140 25% 45% (healing, nature)
- Twilight Blue: 240 30% 35% (intuition, calm)
- Muted Rose: 350 35% 75% (gentle accents)

**Semantic Colors:**
- Success (WhatsApp): 142 70% 45%
- Background Light: 40 20% 98%
- Background Dark: 240 10% 12%

### Typography

**Font Families:**
- Headings: 'Playfair Display' (serif, elegant, mystical)
- Body: 'Inter' (sans-serif, modern readability)
- Accent/Special: 'Cormorant Garamond' (services, spiritual text)

**Type Scale:**
- Hero Headline: text-5xl md:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-semibold
- Product Titles: text-xl md:text-2xl, font-medium
- Body Text: text-base, leading-relaxed
- Small Text: text-sm

### Layout System

**Spacing Primitives:**
Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm (p-4, m-8, gap-6, py-20, etc.)

**Container Widths:**
- Full sections: w-full with max-w-7xl mx-auto px-4
- Product grids: max-w-6xl mx-auto
- Content sections: max-w-4xl for text-heavy areas

**Grid Systems:**
- Products: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8
- Featured Items: grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4

## Component Library

### Header
- Sticky navigation with backdrop-blur on scroll
- Logo: Mystical symbol or elegant typography treatment (left-aligned)
- Navigation: About | Contact | Services | Products (right-aligned)
- Cart indicator with item count badge
- Mobile: hamburger menu with slide-in drawer

### Hero Carousel (Home Page)
- 4 full-width slides with overlay text capability
- Autoplay with 5s intervals, manual controls
- Overlay gradient: from-purple-900/60 to-transparent
- Height: h-[500px] md:h-[600px]
- Content overlay: positioned bottom-left with generous padding

### Service Cards
- Glass-morphism effect: backdrop-blur-md with subtle border
- Icon or symbolic imagery at top
- Service name in Cormorant Garamond
- Brief description (2-3 lines)
- Hover: subtle lift with shadow-lg transition
- Background: bg-white/80 dark:bg-gray-800/80

### Product Cards
- Clean card design with shadow-md, rounded-lg
- Square aspect ratio product image (aspect-square)
- Image: object-cover with hover zoom effect
- Title in Playfair Display
- Price: prominent, warm gold color
- "Add to Cart" button: primary purple with white text
- Quick view icon (optional) on image hover

### Product Detail Layout
- Two-column: 60% image gallery | 40% product info
- Image gallery: Main image with thumbnail strip below
- Sticky product info panel on desktop
- Prominent "Add to Cart" with quantity selector
- Breadcrumb navigation at top
- Related products carousel at bottom

### Shopping Cart / Checkout
- Clean table/card layout showing product thumbnails
- Individual pricing clearly visible
- Total calculation prominently displayed
- WhatsApp "Buy Now" button: green with WhatsApp icon, stands out
- Include small text: "Order will be sent via WhatsApp"

### Footer
- Three-column layout: About | Quick Links | Contact
- Social media icons (if applicable)
- Contact details with icons (phone, email, WhatsApp)
- Mystical decorative element or subtle pattern
- Copyright and essential links

## Images

**Hero Carousel (4 images):**
1. Mystical stones display with soft lighting on purple fabric
2. Tarot cards spread with candles in background
3. Healing crystals arranged in mandala pattern
4. Close-up of ornate bracelets with spiritual symbols

**Service Section Icons/Images:**
Small illustrative icons or photos for each service (Reiki hands, tarot deck, kundali chart, numerology symbols, vastu diagram)

**Product Images:**
- High-quality, well-lit photos on neutral backgrounds
- Consistent aspect ratio (square preferred)
- Alternative angles for detail page
- Lifestyle shots where appropriate

**Background Elements:**
- Subtle mystical patterns or mandalas as section dividers (very low opacity)
- Soft gradient overlays in purple-to-blue or gold-to-purple

## Interactions & Animations

**Minimal, Purposeful Animations:**
- Smooth scroll behavior
- Subtle fade-in on scroll for product cards
- Hover lift on cards (transform: translateY(-4px))
- Cart add animation: brief scale pulse
- Carousel transitions: smooth fade

## WhatsApp Integration

- Prominent WhatsApp icon: floating or in contact section
- Green accent color (#25D366) for all WhatsApp elements
- "Chat with us" quick action
- Checkout "Buy Now" clearly labeled with WhatsApp icon
- Message format: Clean product list with details

## Accessibility & Dark Mode

- Full dark mode support with inverted color scheme
- Maintain purple/gold accent colors in both modes
- Ensure text contrast meets WCAG AA standards
- All interactive elements have focus states
- Form inputs consistent across modes

## Overall Aesthetic

Create a **Modern Mystical Marketplace** that feels trustworthy, serene, and spiritually aligned while maintaining professional e-commerce functionality. The design should evoke calm confidence in spiritual practices while making shopping intuitive and delightful.