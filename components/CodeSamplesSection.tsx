import HoverAnimate from '@/components/HoverAnimate'
import SectionDivider from '@/components/SectionDivider'

export default function CodeSamplesSection() {
  return (
    <section id="code" className="section-container relative z-10">
      <h2 className="section-title text-center">Code Samples / GitHub Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <HoverAnimate variant="card" className="card">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/50 flex items-center justify-center icon-hover">
              <span className="text-2xl">📦</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-100">GitHub Repository</h3>
          </div>
          <p className="text-gray-300 mb-6">
            Explore our codebase and contributions on GitHub. View our open-source projects and collaborative work.
          </p>
          <HoverAnimate variant="button">
            <a
              href="https://github.com/devsquad"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 text-center font-medium rounded-lg bg-gradient-to-r from-teal-500 to-violet-500 text-white transition-all hover:shadow-lg hover:shadow-teal-500/50"
            >
              View on GitHub →
            </a>
          </HoverAnimate>
        </HoverAnimate>

        <HoverAnimate variant="card" className="card">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/50 flex items-center justify-center icon-hover">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-100">Architecture & Flow</h3>
          </div>
          <p className="text-gray-300 mb-6">
            Code architecture diagrams and flowcharts showcasing our system design and development workflow.
          </p>
          <div className="px-6 py-3 text-center font-medium rounded-lg border-2 border-violet-500/50 text-violet-300 bg-violet-500/10">
            Coming soon...
          </div>
        </HoverAnimate>
      </div>

      <HoverAnimate variant="card" className="mt-8 card">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center icon-hover">
            <span className="text-2xl">👥</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-100">Team Contributions</h3>
        </div>
        <p className="text-gray-300">
          Detailed breakdown of each team member's contributions, including code snippets, 
          architectural decisions, and explanations of their work. This section highlights 
          our collaborative development process and individual expertise.
        </p>
      </HoverAnimate>
      <SectionDivider />
    </section>
  )
}

