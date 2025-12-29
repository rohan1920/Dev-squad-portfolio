# Premium Cursor Animation Guide

## Overview

This portfolio includes a **high-end, futuristic cursor animation system** with premium hover effects. The design uses a sophisticated color palette (Purple, Emerald, Amber) and smooth animations for a professional, modern feel.

## Components

### 1. CursorEffect Component

**Location:** `components/CursorEffect.tsx`

A custom cursor that:
- Follows mouse movement with smooth easing
- Changes size and color when hovering over interactive elements
- Generates particle effects on mouse movement
- Uses `mix-blend-difference` for visual depth
- Has a trailing effect for smooth motion

**Features:**
- **Main Cursor**: Glowing circle with border (8px default, 12px on hover)
- **Outer Glow**: Blurred ring that expands on hover
- **Trailing Effect**: Secondary cursor with delay for smooth motion
- **Particles**: Dynamic particles that spawn on mouse movement
- **Color Transitions**: Purple (default) → Emerald (on hover)

### 2. HoverAnimate Component

**Location:** `components/HoverAnimate.tsx`

A wrapper component that adds premium hover animations to any element.

**Variants:**

#### `default`
- Scale: 105%
- Gradient background: Purple → Emerald
- Enhanced shadow with glow
- Border color transition

#### `card`
- Scale: 102%
- Vertical lift: -4px
- Multi-color gradient: Purple → Amber → Emerald
- Stronger shadow with multiple glows
- Best for cards and containers

#### `button`
- Scale: 110%
- Full gradient background fill
- Text color change to white
- Strong glow effect
- Active state: 105% scale

#### `link`
- Scale: 105%
- Text color change to purple
- Underline animation with emerald accent
- Decoration offset for elegance

## Usage Examples

### Basic Card Hover
```tsx
import HoverAnimate from '@/components/HoverAnimate'

<HoverAnimate variant="card" className="card">
  <h3>Card Title</h3>
  <p>Card content</p>
</HoverAnimate>
```

### Button with Hover Effect
```tsx
<HoverAnimate variant="button">
  <button className="px-8 py-4 rounded-lg border-2 border-purple-400">
    Click Me
  </button>
</HoverAnimate>
```

### Link with Animation
```tsx
<HoverAnimate variant="link">
  <a href="/about">About Us</a>
</HoverAnimate>
```

## Custom CSS Classes

### Glow Effects
- `.hover-glow-purple` - Purple glow on hover
- `.hover-glow-emerald` - Emerald glow on hover
- `.hover-glow-amber` - Amber glow on hover

### Icon Animation
- `.icon-hover` - Rotates 12° and scales 110% on hover with glow

### Text Reveal
- `.text-reveal` - Gradient overlay animation on hover

## Color Palette

### Primary Colors
- **Purple**: `#a855f7` (purple-400)
- **Emerald**: `#34d399` (emerald-400)
- **Amber**: `#fbbf24` (amber-400)

### Usage in Gradients
```css
/* Purple to Emerald */
bg-gradient-to-br from-purple-400 to-emerald-400

/* Multi-color */
bg-gradient-to-br from-purple-400 via-emerald-400 to-amber-400

/* Subtle backgrounds */
from-purple-50 to-emerald-50
```

## Animation Timing

All animations use:
- **Duration**: 300-500ms
- **Easing**: `cubic-bezier(0.23, 1, 0.32, 1)` (smooth, natural)
- **Cursor Movement**: 150ms with easing

## Performance Considerations

1. **Particles**: Limited to 50 particles max, auto-cleanup
2. **RequestAnimationFrame**: Used for smooth particle animation
3. **CSS Transforms**: Hardware-accelerated for smooth performance
4. **Pointer Events**: Cursor has `pointer-events: none` to not block clicks
5. **Mobile**: Default cursor shown on touch devices

## Customization

### Change Cursor Colors
Edit `components/CursorEffect.tsx`:
```tsx
// Default cursor
border-purple-400 bg-purple-400/10

// Hover cursor
border-emerald-400 bg-emerald-400/10
```

### Adjust Particle Frequency
In `CursorEffect.tsx`, modify the random threshold:
```tsx
if (Math.random() > 0.7) { // Lower = more particles
  createParticle(e.clientX, e.clientY)
}
```

### Modify Hover Scale
In `HoverAnimate.tsx`, change scale values:
```tsx
hover:scale-105  // Change to scale-110 for more dramatic effect
```

## Demo Page

Visit `/demo` to see all animation variants in action with examples.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS transforms and transitions required
- `mix-blend-difference` may not work in all browsers (graceful degradation)

## Tips

1. **Don't overuse**: Use hover effects sparingly for maximum impact
2. **Consistent variants**: Use the same variant for similar elements
3. **Test performance**: Monitor FPS on lower-end devices
4. **Accessibility**: Ensure hover effects don't interfere with keyboard navigation

