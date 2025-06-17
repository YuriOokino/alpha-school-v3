# Alpha School Components

This directory contains all reusable components for the Alpha School website, organized for optimal AI management and maintainability.

## 🏗️ Architecture Overview

```
components/
├── features/          # Business logic components
├── layout/           # Layout components (navbar, footer)
├── sections/         # Page section components
├── ui/              # Base UI components (shadcn/ui)
└── theme-provider.tsx
```

## 🎯 AI Management Guidelines

### Component Standards
- **File Naming**: Use kebab-case for files, PascalCase for components
- **Props Interface**: Always define TypeScript interfaces for props
- **Default Exports**: Use default exports for main components
- **Consistent Styling**: Use Tailwind utility classes and Alpha brand utilities

### Component Types

#### UI Components (`/ui/`)
Base components from shadcn/ui - these should rarely be modified directly.
Examples: `button.tsx`, `card.tsx`, `input.tsx`

#### Feature Components (`/features/`)
Business-specific components with focused functionality.
Examples: `campus-map.tsx`, `commitment-card.tsx`, `news-carousel.tsx`

#### Section Components (`/sections/`)
Large page sections that combine multiple components.
Examples: `testimonials-section.tsx`, `how-it-works-section.tsx`

#### Layout Components (`/layout/`)
Site-wide layout components.
Examples: `navbar.tsx`, `footer.tsx`

## 🔧 Development Patterns

### Props Interface Pattern
```typescript
interface ComponentProps {
  title: string
  description?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Component({ title, description, variant = 'primary', className }: ComponentProps) {
  // Component logic
}
```

### Import Pattern
```typescript
// External imports first
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Internal imports second
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
```

## 🎨 Styling Guidelines

**📍 See `styles/globals.css` for complete styling documentation and brand utilities.**

### Alpha Brand Utility Classes
Use these custom classes for consistent Alpha School branding:

```typescript
// Section layout
<section className="alpha-section">

// Headings
<h2 className="alpha-heading alpha-blue">

// Cards
<div className="alpha-card">

// Buttons
<button className="alpha-btn-primary">
<button className="alpha-btn-outline">

// Location tags
<span className="alpha-green-tag">
```

### Brand Colors (Tailwind Classes)
- **Primary Blue**: `blue-700` or use `alpha-blue` utility
- **Secondary Gray**: `gray-900` 
- **Accent Green**: `green-100` and `green-800` or use `alpha-green-tag`
- **Text Gray**: `gray-600`

## 🔄 Update Workflow

1. **Individual Components**: Update specific components without affecting others
2. **Section Updates**: Modify page sections independently
3. **Style Updates**: Use Alpha brand utilities from `styles/globals.css`
4. **New Features**: Add new components following established patterns

## 📝 AI Prompt Guidelines

When requesting AI updates, be specific about:
- Component location (`components/sections/hero-section.tsx`)
- Use Alpha brand utilities (`alpha-section`, `alpha-heading`, etc.)
- Functionality needs (props, state, interactions)
- Consistency requirements (follow existing patterns)

Example: "Update the testimonials section to add a new testimonial card using the alpha-card class and maintaining responsive design."

## 🧪 Testing Considerations

- **Responsive Design**: All components should work on mobile, tablet, and desktop
- **Accessibility**: Use semantic HTML and proper ARIA labels
- **Performance**: Optimize images and avoid unnecessary re-renders
- **Browser Support**: Test in modern browsers (Chrome, Firefox, Safari, Edge)
- **Brand Consistency**: Use Alpha utilities and follow `styles/globals.css` guidelines 