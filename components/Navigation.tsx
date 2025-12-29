'use client'

import { useState, useEffect } from 'react'

const sections = [
  { id: 'cover', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'team', label: 'Team' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'code', label: 'Code Samples' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('cover')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
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
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-md shadow-lg py-3 border-b border-gray-700/50'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            onClick={() => scrollToSection('cover')}
            className="cursor-pointer font-bold text-xl bg-gradient-to-r from-teal-300 via-violet-300 to-lavender-300 bg-clip-text text-transparent hover:from-teal-200 hover:via-violet-200 hover:to-lavender-200 transition-all"
          >
            DevSquad
          </div>
          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'text-teal-300'
                    : 'text-gray-300 hover:text-violet-300'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

