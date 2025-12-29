import HoverAnimate from '@/components/HoverAnimate'
import SectionDivider from '@/components/SectionDivider'

export default function AboutSection() {
  return (
    <section id="about" className="section-container relative z-10">
      <h2 className="section-title text-center">About DevSquad</h2>
      <div className="max-w-4xl mx-auto mt-12">
        <HoverAnimate variant="card" className="card">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500/20 to-violet-500/20 border border-teal-500/50 mb-6 icon-hover">
              <span className="text-4xl">🚀</span>
            </div>
          </div>
          <p className="text-lg text-gray-200 leading-relaxed text-center">
            DevSquad is a team of 5 developers focused on building AI-powered, scalable web solutions. 
            Each member contributes specialized skills to deliver efficient and innovative projects.
          </p>
        </HoverAnimate>
      </div>
      <SectionDivider />
    </section>
  )
}

