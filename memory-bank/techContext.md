# Technical Context

## Internationalization Tools and Libraries
- **Built-in Next.js features**: Dynamic routes, middleware, and metadata support
- **Server components**: For efficient loading of language-specific content
- **Client components**: For interactive language switching
- **JSON translation files**: Simple, maintainable structure for multilingual content
- **hreflang tags**: For proper SEO across language variants
- **Dynamic sitemap generation**: For complete language-specific SEO

## Core Technologies
- **Next.js**: React framework for production-ready websites with server-side rendering and static site generation
  - Uses App Router with dedicated route handlers for sitemap.xml and robots.txt
- **TypeScript**: For type safety and improved development experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React**: JavaScript library for building user interfaces

## Development Environment
- Project is located at `C:\Users\vikto\ClaudeFilesystem\portfolio-page`
- Standard Next.js project structure
- Node.js and npm for package management

## Project Structure
```
portfolio-page/
│
├── .next/                # Next.js build output
├── memory-bank/          # Project documentation
├── node_modules/         # Project dependencies
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # React components
│   ├── pages/            # Next.js pages
│   ├── styles/           # CSS and styling
│   └── utils/            # Utility functions
├── .gitignore
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration (for Tailwind)
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Key Dependencies
From examining package.json:

### Core Framework and UI:
- **Next.js**: v14.0.3 - React framework for production-ready websites
- **React & React DOM**: v18.2.0 - UI library
- **TypeScript**: v5.1.6 - Type system

### UI Components and Styling:
- **Tailwind CSS**: v3.3.3 - Utility-first CSS framework
- **Radix UI**: Various components (@radix-ui/react-dialog, react-dropdown-menu, react-icons, react-label, react-slot, react-toast)
- **class-variance-authority**: v0.7.1 - For creating variant styles
- **clsx**: v2.0.0 - Utility for constructing className strings
- **tailwind-merge**: v1.14.0 - For merging Tailwind CSS classes
- **tailwindcss-animate**: v1.0.6 - Animation utilities for Tailwind
- **next-themes**: v0.2.1 - Theme management for Next.js

### Animation and Icons:
- **framer-motion**: v10.15.0 - Animation library
- **lucide-react**: v0.263.1 - Icon library

### Development Tools:
- **ESLint**: v8.46.0 - Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: v10.4.14 - CSS vendor prefixing

## Technical Constraints
- Must maintain optimal performance for SEO benefits
- Should be responsive for all device sizes
- Needs to accommodate future project additions
- Should follow accessibility best practices

## Build & Deployment
- Next.js standard build process
- Deployed to Netlify with custom domain 'eken-consulting.com'
- Specific Netlify configuration:
  - Uses @netlify/plugin-nextjs for Next.js optimization
  - Custom redirects to ensure sitemap.xml and robots.txt are directly accessible

## SEO Considerations
- Server-side rendering for improved SEO
- Proper metadata management
- Semantic HTML structure
- Performance optimization for core web vitals
- Built-in Next.js sitemap generation using MetadataRoute.Sitemap
- Well-configured robots.txt pointing to sitemap.xml

## Performance Targets
- Excellent Lighthouse scores (90+ for all categories)
- Fast initial load time (under 2 seconds)
- Optimized assets for quick loading
- Minimal JavaScript bundle size
