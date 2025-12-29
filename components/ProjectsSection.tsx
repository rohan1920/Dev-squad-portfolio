import HoverAnimate from '@/components/HoverAnimate'
import SectionDivider from '@/components/SectionDivider'

export default function ProjectsSection() {
  // Placeholder for projects - replace with actual project data
  const projects: Array<{
    name: string
    type: string
    techStack: string[]
    teamMembers: string
    description: string
    demoUrl?: string
    githubUrl?: string
  }> = []

  return (
    <section id="projects" className="section-container relative z-10">
      <h2 className="section-title text-center">Projects Overview</h2>
      
      {projects.length === 0 ? (
        <div className="mt-12">
          <HoverAnimate variant="card" className="card text-center py-16">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-2">Coming Soon</h3>
            <p className="text-gray-400">
              Our amazing projects will be showcased here soon. Check back later!
            </p>
          </HoverAnimate>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <HoverAnimate key={index} variant="card" className="card">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-100">{project.name}</h3>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/50">
                  {project.type}
                </span>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
              
              <div className="mb-4">
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded bg-violet-500/20 text-violet-300 border border-violet-500/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-xs text-gray-400 mb-1">Team: <span className="text-gray-300">{project.teamMembers}</span></p>
              </div>
              
              <div className="flex gap-3 mt-6">
                {project.demoUrl && (
                  <HoverAnimate variant="button">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-teal-500 to-violet-500 text-white text-center transition-all hover:shadow-lg hover:shadow-teal-500/50"
                    >
                      Demo
                    </a>
                  </HoverAnimate>
                )}
                {project.githubUrl && (
                  <HoverAnimate variant="button">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-sm font-medium rounded-lg border-2 border-teal-500/50 text-teal-300 text-center transition-all hover:bg-teal-500/20 hover:border-teal-500"
                    >
                      GitHub
                    </a>
                  </HoverAnimate>
                )}
              </div>
            </HoverAnimate>
          ))}
        </div>
      )}

      <SectionDivider />
    </section>
  )
}

