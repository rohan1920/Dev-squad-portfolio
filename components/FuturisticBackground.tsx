'use client'

import { useEffect, useState, useRef } from 'react'

interface Blob {
  id: number
  x: number
  y: number
  size: number
  color: string
  opacity: number
  speedX: number
  speedY: number
  pulseSpeed: number
  initialX: number
  initialY: number
}

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speedX: number
  speedY: number
  life: number
}

export default function FuturisticBackground() {
  const [blobs, setBlobs] = useState<Blob[]>([])
  const [particles, setParticles] = useState<Particle[]>([])
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()
  const particleIdRef = useRef(0)

  // Initialize blobs
  useEffect(() => {
    const colors = [
      'rgba(94, 234, 212, 0.2)', // teal
      'rgba(139, 92, 246, 0.25)', // violet
      'rgba(250, 204, 21, 0.2)', // yellow
      'rgba(196, 181, 253, 0.2)', // lavender
      'rgba(153, 246, 228, 0.2)', // mint
    ]

    const newBlobs: Blob[] = []
    for (let i = 0; i < 12; i++) {
      newBlobs.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 150 + Math.random() * 200,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.15 + Math.random() * 0.15,
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: (Math.random() - 0.5) * 0.02,
        pulseSpeed: 0.3 + Math.random() * 0.4,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
      })
    }
    setBlobs(newBlobs)
  }, [])

  // Mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scroll tracking for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setBlobs((prevBlobs) =>
        prevBlobs.map((blob) => ({
          ...blob,
          x: blob.initialX + Math.sin(Date.now() * blob.speedX * 0.001) * 10,
          y: blob.initialY + Math.cos(Date.now() * blob.speedY * 0.001) * 10,
        }))
      )

      // Update particles
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.speedX,
            y: particle.y + particle.speedY,
            opacity: particle.opacity - 0.005,
            life: particle.life - 1,
          }))
          .filter((particle) => particle.life > 0 && particle.opacity > 0)
      )

      // Spawn new particles occasionally
      if (Math.random() > 0.95 && particles.length < 30) {
        const newParticle: Particle = {
          id: particleIdRef.current++,
          x: Math.random() * (containerRef.current?.clientWidth || window.innerWidth),
          y: Math.random() * (containerRef.current?.clientHeight || window.innerHeight),
          size: 1 + Math.random() * 2,
          opacity: 0.3 + Math.random() * 0.4,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          life: 200 + Math.random() * 200,
        }
        setParticles((prev) => [...prev, newParticle])
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [particles.length])

  // Calculate blob interaction with cursor
  const getBlobStyle = (blob: Blob) => {
    if (!containerRef.current) return {}

    const rect = containerRef.current.getBoundingClientRect()
    const blobX = (blob.x / 100) * rect.width
    const blobY = (blob.y / 100) * rect.height + scrollY

    const distance = Math.sqrt(
      Math.pow(cursorPosition.x - blobX, 2) + Math.pow(cursorPosition.y - blobY, 2)
    )

    const maxDistance = 300
    const influence = Math.max(0, 1 - distance / maxDistance)
    const scale = 1 + influence * 0.4
    const opacity = blob.opacity + influence * 0.15

    // Parallax effect based on scroll
    const parallaxOffset = scrollY * 0.1 * (blob.id % 3 - 1) * 0.1

    return {
      left: `${blob.x}%`,
      top: `${blob.y + parallaxOffset}%`,
      width: `${blob.size}px`,
      height: `${blob.size}px`,
      backgroundColor: blob.color,
      opacity: Math.min(opacity, 0.4),
      transform: `translate(-50%, -50%) scale(${scale})`,
      filter: `blur(${40 + influence * 20}px)`,
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out, filter 0.3s ease-out',
    }
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Base gradient background - Charcoal → Deep Teal → Soft Lavender */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-teal-900 to-purple-800" />

      {/* Texture overlay - radial dots pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Soft grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating blobs */}
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className="absolute rounded-full"
          style={getBlobStyle(blob)}
        >
          <div
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              animation: `pulse ${3 + blob.pulseSpeed}s ease-in-out infinite`,
              backgroundColor: blob.color,
            }}
          />
        </div>
      ))}

      {/* Cursor blob follower */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(60px)',
          transition: 'opacity 0.3s ease-out',
        }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'rgba(255, 255, 255, 0.6)',
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${particle.size * 2}px rgba(139, 92, 246, 0.5)`,
          }}
        />
      ))}

      {/* Additional depth layer - soft waves */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `
            radial-gradient(ellipse at top, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(94, 234, 212, 0.2) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  )
}

