'use client'

import { useState } from 'react'
import HoverAnimate from '@/components/HoverAnimate'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! We\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-container relative z-10 bg-black">
      <h2 className="section-title mb-12">Get in Touch</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {/* Contact Form */}
        <div className="card">
          <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full px-8 py-4 bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && (
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <a
                  href="mailto:team@devsquad.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  team@devsquad.com
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                <a
                  href="https://linkedin.com/company/devsquad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Connect with us
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">GitHub</h3>
                <a
                  href="https://github.com/devsquad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  View our repositories
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


