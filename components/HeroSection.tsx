'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="cover"
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-tight">
            We help companies all around the world to grow
          </h1>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={scrollToProjects}
              className="group px-12 py-4 bg-white text-black rounded-full font-medium flex items-center gap-3 hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <span>Our portfolio</span>
            </button>

            <button
              onClick={scrollToContact}
              className="group px-12 py-4 bg-neutral-900 text-white rounded-full font-medium flex items-center gap-3 hover:bg-black transition-colors"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <span>Contact us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


