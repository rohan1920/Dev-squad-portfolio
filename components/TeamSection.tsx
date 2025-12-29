import HoverAnimate from '@/components/HoverAnimate'
import SectionDivider from '@/components/SectionDivider'

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Member 1',
      role: 'Frontend Developer',
      skills: 'React, Tailwind',
      responsibilities: 'UI/UX, frontend development',
      icon: '🎨',
    },
    {
      name: 'Member 2',
      role: 'Backend Developer',
      skills: 'Node.js, MongoDB',
      responsibilities: 'Server-side logic, APIs',
      icon: '⚙️',
    },
    {
      name: 'Member 3',
      role: 'AI / ML Specialist',
      skills: 'OpenAI SDK, LangChain',
      responsibilities: 'AI integration, chatbot development',
      icon: '🤖',
    },
    {
      name: 'Member 4',
      role: 'Full-Stack Developer',
      skills: 'React, Node',
      responsibilities: 'Bridges frontend & backend',
      icon: '🚀',
    },
    {
      name: 'Member 5',
      role: 'QA & Deployment',
      skills: 'Testing, CI/CD',
      responsibilities: 'Ensures code quality, deploys projects',
      icon: '✅',
    },
  ]

  return (
    <section id="team" className="section-container relative z-10">
      <h2 className="section-title text-center">Team Members & Roles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {teamMembers.map((member, index) => (
          <HoverAnimate key={index} variant="card" className="card">
            <div className="flex items-start gap-4">
              <div className="text-4xl icon-hover">{member.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-100 mb-1">{member.name}</h3>
                <p className="text-teal-300 font-medium mb-3">{member.role}</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Skills</span>
                    <p className="text-sm text-gray-300">{member.skills}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Responsibilities</span>
                    <p className="text-sm text-gray-300">{member.responsibilities}</p>
                  </div>
                </div>
              </div>
            </div>
          </HoverAnimate>
        ))}
      </div>
      <SectionDivider />
    </section>
  )
}

