'use client'

import { useEffect, useState, useRef } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  vx: number
  vy: number
  life: number
}

export default function CursorEffect() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const cursorRef = useRef<HTMLDivElement>(null)
  const particleIdRef = useRef(0)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })

      // Create particles on mouse move
      if (Math.random() > 0.7) {
        createParticle(e.clientX, e.clientY)
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Detect hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('.hover-animate') ||
        target.closest('button, a, [role="button"]')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('.hover-animate') ||
        target.closest('button, a, [role="button"]')
      ) {
        // Check if we're still hovering over another hoverable element
        const relatedTarget = e.relatedTarget as HTMLElement
        if (!relatedTarget?.closest('button, a, .hover-animate, [role="button"]')) {
          setIsHovering(false)
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Particle animation loop
  useEffect(() => {
    const animateParticles = () => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            opacity: particle.opacity - 0.02,
            life: particle.life - 1,
          }))
          .filter((particle) => particle.life > 0 && particle.opacity > 0)
      )

      animationFrameRef.current = requestAnimationFrame(animateParticles)
    }

    animationFrameRef.current = requestAnimationFrame(animateParticles)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const createParticle = (x: number, y: number) => {
    const angle = Math.random() * Math.PI * 2
    const velocity = 0.5 + Math.random() * 1.5
    const newParticle: Particle = {
      id: particleIdRef.current++,
      x,
      y,
      size: 2 + Math.random() * 3,
      opacity: 0.6 + Math.random() * 0.4,
      vx: Math.cos(angle) * velocity,
      vy: Math.sin(angle) * velocity,
      life: 30 + Math.random() * 20,
    }

    setParticles((prev) => [...prev, newParticle])
  }

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) translate(-50%, -50%)`,
          transition: 'transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        {/* Outer glow ring */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
            isHovering
              ? 'w-16 h-16 bg-emerald-400/20 blur-xl'
              : 'w-12 h-12 bg-purple-400/20 blur-lg'
          }`}
        />
        
        {/* Main cursor circle */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ${
            isHovering
              ? 'w-12 h-12 border-emerald-400 bg-emerald-400/10 shadow-[0_0_20px_rgba(52,211,153,0.5)]'
              : 'w-8 h-8 border-purple-400 bg-purple-400/10 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
          }`}
        />
        
        {/* Inner dot */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
            isHovering
              ? 'w-2 h-2 bg-emerald-300'
              : 'w-1.5 h-1.5 bg-purple-300'
          }`}
        />
      </div>

      {/* Trailing cursor effect */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) translate(-50%, -50%)`,
          transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ${
            isHovering
              ? 'w-6 h-6 bg-emerald-400/30 blur-sm'
              : 'w-4 h-4 bg-purple-400/30 blur-sm'
          }`}
        />
      </div>

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(52,211,153,0.4) 100%)`,
            borderRadius: '50%',
            boxShadow: `0 0 ${particle.size * 2}px rgba(168,85,247,0.6)`,
          }}
        />
      ))}
    </>
  )
}

