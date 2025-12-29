'use client'

import { ReactNode } from 'react'

interface HoverAnimateProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'card' | 'button' | 'link'
}

/**
 * HoverAnimate Component
 * 
 * Wraps elements with premium hover animations including:
 * - Smooth scale-up effect
 * - Glow/shadow enhancement
 * - Background color transitions
 * - Text/icon reveal animations
 * 
 * Variants:
 * - default: General purpose hover effect
 * - card: Card-style hover with lift effect
 * - button: Button-specific hover with pulse
 * - link: Link-style hover with underline
 */
export default function HoverAnimate({
  children,
  className = '',
  variant = 'default',
}: HoverAnimateProps) {
  const baseClasses = 'hover-animate transition-all duration-300 ease-out cursor-pointer'
  
  const variantClasses = {
    default: `
      hover:scale-105 
      hover:bg-gradient-to-br hover:from-teal-900/40 hover:to-violet-900/40 
      hover:shadow-[0_10px_40px_rgba(20,184,166,0.3),0_0_20px_rgba(139,92,246,0.2)]
      hover:border-teal-500/50
    `,
    card: `
      hover:scale-[1.02] 
      hover:-translate-y-1
      hover:bg-gradient-to-br hover:from-teal-900/50 hover:via-yellow-900/30 hover:to-violet-900/50
      hover:shadow-[0_20px_60px_rgba(20,184,166,0.4),0_0_30px_rgba(250,204,21,0.3)]
      hover:border-teal-400/60
    `,
    button: `
      hover:scale-110 
      hover:bg-gradient-to-r hover:from-teal-500 hover:to-violet-500
      hover:text-white
      hover:shadow-[0_0_30px_rgba(20,184,166,0.5),0_0_15px_rgba(139,92,246,0.3)]
      hover:border-transparent
      active:scale-105
    `,
    link: `
      hover:scale-105 
      hover:text-teal-300
      hover:underline hover:underline-offset-4
      hover:decoration-violet-400
      hover:decoration-2
    `,
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  )
}

