'use client'

import HoverAnimate from '@/components/HoverAnimate'
import SectionDivider from '@/components/SectionDivider'

export default function AboutSection() {
  return (
    <section id="about" className="section-container relative z-10 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Design, build and maintain products
          </h2>
          <p className="text-gray-400 text-sm">
            Rated 5.0/5.0 for design and development services
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-white leading-relaxed">
            Based out of Serbia, DevSquad has become one of the best quality Digital Agency in Europe. 
            Our focus has always been to create enjoyable, intuitive, engaging and remarkable experience 
            for people — that's what sets us apart from everyone else.
          </p>
          <p className="text-white leading-relaxed">
            We are a team of creatives who design identities, custom-built websites and launch digital 
            products that empower teams.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('about')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group px-6 py-3 bg-black text-white border-2 border-white flex items-center gap-2 hover:bg-white hover:text-black transition-colors"
          >
            About us
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
      <SectionDivider />
    </section>
  )
}

