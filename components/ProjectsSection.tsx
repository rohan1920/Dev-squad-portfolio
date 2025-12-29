'use client'

import { useEffect, useState, useRef } from 'react'
import HoverAnimate from '@/components/HoverAnimate'
import SectionDivider from '@/components/SectionDivider'

interface Project {
  name: string
  challenge: string
  solution: string
  outcome: string
  techStack: string[]
  image?: string
  demoUrl?: string
  githubUrl?: string
}

export default function ProjectsSection() {
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

  // Placeholder for projects - replace with actual project data
  const projects: Project[] = []

  return (
    <section id="projects" className="section-container relative z-10" ref={sectionRef}>
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="section-title">Our Portfolio</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-teal-500"></div>
        </div>
        
        {projects.length === 0 ? (
          <div className="mt-12">
            <HoverAnimate variant="card" className="card text-center py-20">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-3xl font-semibold text-gray-100 mb-4">Coming Soon</h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Our amazing projects will be showcased here soon. Each project will feature a detailed case study 
                showing the challenge, our solution, and the outcome.
              </p>
            </HoverAnimate>
          </div>
        ) : (
          <div className="space-y-16 mt-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <HoverAnimate variant="card" className="card">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Project Image Placeholder */}
                    <div className="relative h-64 lg:h-full min-h-[300px] rounded-xl bg-gradient-to-br from-teal-500/20 to-violet-500/20 border border-teal-500/30 flex items-center justify-center overflow-hidden">
                      {project.image ? (
                        <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-6xl opacity-50">📱</div>
                      )}
                    </div>

                    {/* Case Study Content */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-100 mb-2">{project.name}</h3>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.techStack.map((tech, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/50">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-teal-300 uppercase tracking-wide mb-2">Challenge</h4>
                          <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-violet-300 uppercase tracking-wide mb-2">Solution</h4>
                          <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-orange-300 uppercase tracking-wide mb-2">Outcome</h4>
                          <p className="text-gray-300 leading-relaxed">{project.outcome}</p>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        {project.demoUrl && (
                          <HoverAnimate variant="button">
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 font-medium rounded-lg bg-gradient-to-r from-teal-500 to-violet-500 text-white transition-all hover:shadow-lg hover:shadow-teal-500/50 flex items-center gap-2"
                            >
                              View Demo
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </a>
                          </HoverAnimate>
                        )}
                        {project.githubUrl && (
                          <HoverAnimate variant="button">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 font-medium rounded-lg border-2 border-teal-500/50 text-teal-300 transition-all hover:bg-teal-500/20 hover:border-teal-500 flex items-center gap-2"
                            >
                              GitHub
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </HoverAnimate>
                        )}
                      </div>
                    </div>
                  </div>
                </HoverAnimate>
              </div>
            ))}
          </div>
        )}
      </div>
      <SectionDivider />
    </section>
  )
}


