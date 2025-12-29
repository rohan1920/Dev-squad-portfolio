'use client'

import { useEffect, useState, useRef } from 'react'
import HoverAnimate from '@/components/HoverAnimate'
import SectionDivider from '@/components/SectionDivider'

interface Service {
  title: string
  description: string
  icon: string
  color: string
}

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const services: Service[] = [
    {
      title: 'Full-Stack Development',
      description: 'End-to-end web applications with modern frameworks and best practices.',
      icon: '💻',
      color: 'teal',
    },
    {
      title: 'AI Integration',
      description: 'Seamless AI/ML integration using OpenAI, LangChain, and custom models.',
      icon: '🤖',
      color: 'violet',
    },
    {
      title: 'Responsive Design',
      description: 'Beautiful, mobile-first designs that work flawlessly across all devices.',
      icon: '🎨',
      color: 'orange',
    },
    {
      title: 'Cloud Deployment',
      description: 'Scalable infrastructure and CI/CD pipelines for reliable deployments.',
      icon: '☁️',
      color: 'teal',
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs built for performance and scalability.',
      icon: '🔌',
      color: 'violet',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that enhances engagement and conversion rates.',
      icon: '✨',
      color: 'orange',
    },
  ]

  return (
    <section
      id="services"
      className="section-container relative z-10 bg-white text-black"
      ref={sectionRef}
    >
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Heading and Icons */}
          <div>
            <h2 className="text-5xl md:text-6xl font-light text-black mb-8 leading-tight">
              Offering best<br />services
            </h2>
            
            {/* Icons Row */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                {/* Dark circular icons similar to reference design */}
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">⚙️</div>
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">📦</div>
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">🎨</div>
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">📱</div>
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">🤖</div>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-base font-semibold">+</div>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm">
              We provide wide range<br />of services
            </p>
          </div>

          {/* Right Section - Paragraphs */}
          <div className="space-y-6">
            <p className="text-gray-800 leading-relaxed">
              We create, products, brands, apps & websites for companies all around the world. 
              To us, world-class digital products take more than intelligent code or creative design. 
              It requires true partnership between the ideators and the innovators. Our collaborations 
              are built on a bedrock of transparency, communication, expert project management, and 
              attention to detail.
            </p>
            <p className="text-gray-800 leading-relaxed">
              From the moment our company was founded, we have helped our clients find exceptional 
              solutions for their businesses, creating memorable brands and digital products. We offer 
              comprehensive services to aid you in the entire product development process.
            </p>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  )
}


