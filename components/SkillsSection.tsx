import HoverAnimate from '@/components/HoverAnimate'
import SectionDivider from '@/components/SectionDivider'

export default function SkillsSection() {
  const skills = {
    frontend: { 
      icon: '💻', 
      color: 'teal', 
      items: ['React.js', 'Next.js', 'Tailwind CSS'] 
    },
    backend: { 
      icon: '⚙️', 
      color: 'violet', 
      items: ['Node.js', 'Express.js', 'MongoDB'] 
    },
    ai: { 
      icon: '🤖', 
      color: 'yellow', 
      items: ['OpenAI SDK', 'LangChain', 'Tavily API'] 
    },
    others: { 
      icon: '🛠️', 
      color: 'lavender', 
      items: ['Git', 'GitHub', 'Figma', 'Deployment', 'CI/CD'] 
    },
  }

  const colorClasses = {
    teal: 'bg-teal-500/20 border-teal-500/50 text-teal-300',
    violet: 'bg-violet-500/20 border-violet-500/50 text-violet-300',
    yellow: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-300',
    lavender: 'bg-purple-500/20 border-purple-500/50 text-purple-300',
  }

  return (
    <section id="skills" className="section-container relative z-10">
      <h2 className="section-title text-center">Skills & Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {Object.entries(skills).map(([key, skill]) => (
          <HoverAnimate key={key} variant="card" className="card">
            <div className="text-center mb-4">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${colorClasses[skill.color as keyof typeof colorClasses]} mb-4 icon-hover`}>
                <span className="text-3xl">{skill.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 capitalize">{key}</h3>
            </div>
            <ul className="space-y-3">
              {skill.items.map((item, index) => (
                <li key={index} className="text-gray-300 flex items-center text-sm">
                  <span className={`w-2 h-2 rounded-full mr-3 ${colorClasses[skill.color as keyof typeof colorClasses].split(' ')[0]}`}></span>
                  {item}
                </li>
              ))}
            </ul>
          </HoverAnimate>
        ))}
      </div>
      <SectionDivider />
    </section>
  )
}

