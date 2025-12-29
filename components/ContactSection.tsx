import HoverAnimate from '@/components/HoverAnimate'

export default function ContactSection() {
  return (
    <section id="contact" className="section-container relative z-10">
      <h2 className="section-title text-center">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <HoverAnimate variant="card" className="card text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-teal-500/20 border border-teal-500/50 flex items-center justify-center icon-hover">
            <span className="text-3xl">📧</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-100 mb-2">Email</h3>
          <p className="text-gray-400 text-sm mb-4">Get in touch with our team</p>
          <HoverAnimate variant="link">
            <a
              href="mailto:team@devsquad.com"
              className="text-teal-300 hover:text-violet-300 font-medium transition-colors"
            >
              team@devsquad.com
            </a>
          </HoverAnimate>
        </HoverAnimate>

        <HoverAnimate variant="card" className="card text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-violet-500/20 border border-violet-500/50 flex items-center justify-center icon-hover">
            <span className="text-3xl">💼</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-100 mb-2">LinkedIn</h3>
          <p className="text-gray-400 text-sm mb-4">Connect with us professionally</p>
          <HoverAnimate variant="link">
            <a
              href="https://linkedin.com/company/devsquad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300 hover:text-teal-300 font-medium transition-colors"
            >
              linkedin.com/company/devsquad
            </a>
          </HoverAnimate>
        </HoverAnimate>

        <HoverAnimate variant="card" className="card text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center icon-hover">
            <span className="text-3xl">💻</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-100 mb-2">GitHub</h3>
          <p className="text-gray-400 text-sm mb-4">Explore our code repositories</p>
          <HoverAnimate variant="link">
            <a
              href="https://github.com/devsquad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-teal-300 font-medium transition-colors"
            >
              github.com/devsquad
            </a>
          </HoverAnimate>
        </HoverAnimate>
      </div>
    </section>
  )
}

