'use client'

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-container bg-white text-black relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-gray-600 mb-4 uppercase tracking-wide">Scale up your business!</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12">
          Let's make something great together!
        </h2>
        <button
          onClick={scrollToContact}
          className="group px-12 py-4 bg-black text-white rounded-full flex items-center gap-3 mx-auto hover:bg-gray-900 transition-colors"
        >
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <span className="font-medium">Contact us</span>
        </button>
      </div>
    </section>
  )
}

