import HoverAnimate from '@/components/HoverAnimate'

export default function CoverPage() {
  const teamMembers = [
    { name: 'Member 1', role: 'Frontend Developer' },
    { name: 'Member 2', role: 'Backend Developer' },
    { name: 'Member 3', role: 'AI / ML Specialist' },
    { name: 'Member 4', role: 'Full-Stack Developer' },
    { name: 'Member 5', role: 'QA & Deployment' },
  ]

  return (
    <section id="cover" className="min-h-screen flex items-center justify-center relative">
      <div className="section-container text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-violet-300 to-lavender-300 mb-4 drop-shadow-2xl">
          DevSquad
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 font-medium">
          Building scalable web & AI solutions together
        </p>
        
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <HoverAnimate key={index} variant="card" className="card">
                <h3 className="font-semibold text-lg text-gray-100">{member.name}</h3>
                <p className="text-sm text-gray-300 mt-1">{member.role}</p>
              </HoverAnimate>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-300">
          <div>
            <span className="font-medium">Email:</span> team@devsquad.com
          </div>
          <div className="hidden sm:block">•</div>
          <div>
            <span className="font-medium">GitHub:</span>{' '}
            <a href="https://github.com/devsquad" className="text-teal-300 hover:text-violet-300 hover:underline transition-colors">
              github.com/devsquad
            </a>
          </div>
          <div className="hidden sm:block">•</div>
          <div>
            <span className="font-medium">LinkedIn:</span>{' '}
            <a href="https://linkedin.com/company/devsquad" className="text-teal-300 hover:text-violet-300 hover:underline transition-colors">
              linkedin.com/company/devsquad
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

