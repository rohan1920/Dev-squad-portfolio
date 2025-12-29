'use client'

import { useState, useEffect } from 'react'

const sections = [
  { id: 'cover', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'team', label: 'Team' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'code', label: 'Code' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('cover')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const reversedSections = [...sections].reverse()
      for (const section of reversedSections) {
        const element = document.getElementById(section.id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('cover')}
            className="cursor-pointer font-bold text-xl text-white"
          >
            DevSquad
          </div>

          {/* Menu Button (text + double line icon) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-3 text-white focus:outline-none"
            aria-label="Menu"
          >
            <span className="text-sm font-normal lowercase">menu</span>
            <span className="flex flex-col justify-between h-4 w-6">
              <span className="h-px w-full bg-white" />
              <span className="h-px w-full bg-white" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-40 pt-24"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-6 text-left">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-3xl md:text-4xl font-light tracking-wide transition-colors ${
                    activeSection === section.id
                      ? 'text-white'
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}


