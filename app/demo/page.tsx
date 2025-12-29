'use client'

import HoverAnimate from '@/components/HoverAnimate'
import Navigation from '@/components/Navigation'

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-emerald-600 to-amber-600 bg-clip-text text-transparent">
              Premium Cursor Animations
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience futuristic hover effects and custom cursor interactions
            </p>
          </div>

          {/* Card Variants */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Card Hover Effects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <HoverAnimate key={i} variant="card" className="card">
                  <div className="flex items-center justify-center h-48">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-emerald-400 icon-hover" />
                      <h3 className="text-xl font-semibold mb-2">Card {i}</h3>
                      <p className="text-gray-600 text-sm">
                        Hover to see the premium animation effect
                      </p>
                    </div>
                  </div>
                </HoverAnimate>
              ))}
            </div>
          </section>

          {/* Button Variants */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Button Hover Effects</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <HoverAnimate variant="button">
                <button className="px-8 py-4 rounded-lg border-2 border-purple-400 font-semibold text-purple-600">
                  Primary Button
                </button>
              </HoverAnimate>
              
              <HoverAnimate variant="button">
                <button className="px-8 py-4 rounded-lg border-2 border-emerald-400 font-semibold text-emerald-600">
                  Success Button
                </button>
              </HoverAnimate>
              
              <HoverAnimate variant="button">
                <button className="px-8 py-4 rounded-lg border-2 border-amber-400 font-semibold text-amber-600">
                  Action Button
                </button>
              </HoverAnimate>
            </div>
          </section>

          {/* Link Variants */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Link Hover Effects</h2>
            <div className="flex flex-col gap-4 items-center">
              <HoverAnimate variant="link">
                <a href="#" className="text-2xl font-semibold text-gray-800">
                  Portfolio Projects
                </a>
              </HoverAnimate>
              
              <HoverAnimate variant="link">
                <a href="#" className="text-2xl font-semibold text-gray-800">
                  Team Members
                </a>
              </HoverAnimate>
              
              <HoverAnimate variant="link">
                <a href="#" className="text-2xl font-semibold text-gray-800">
                  Contact Us
                </a>
              </HoverAnimate>
            </div>
          </section>

          {/* Default Hover Effects */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Default Hover Effects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HoverAnimate variant="default" className="card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-emerald-400 icon-hover flex items-center justify-center">
                    <span className="text-white text-xl">✨</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Feature One</h3>
                    <p className="text-gray-600">
                      Smooth scale-up with premium gradient background and glow effect
                    </p>
                  </div>
                </div>
              </HoverAnimate>

              <HoverAnimate variant="default" className="card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-amber-400 icon-hover flex items-center justify-center">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
                    <p className="text-gray-600">
                      Elegant transitions with shadow enhancement on hover
                    </p>
                  </div>
                </div>
              </HoverAnimate>
            </div>
          </section>

          {/* Color Palette Showcase */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Premium Color Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <HoverAnimate variant="card" className="card text-center p-6">
                <div className="w-full h-24 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 mb-4 hover-glow-purple" />
                <h3 className="font-semibold">Purple</h3>
                <p className="text-sm text-gray-600">#a855f7</p>
              </HoverAnimate>
              
              <HoverAnimate variant="card" className="card text-center p-6">
                <div className="w-full h-24 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 mb-4 hover-glow-emerald" />
                <h3 className="font-semibold">Emerald</h3>
                <p className="text-sm text-gray-600">#34d399</p>
              </HoverAnimate>
              
              <HoverAnimate variant="card" className="card text-center p-6">
                <div className="w-full h-24 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 mb-4 hover-glow-amber" />
                <h3 className="font-semibold">Amber</h3>
                <p className="text-sm text-gray-600">#fbbf24</p>
              </HoverAnimate>
              
              <HoverAnimate variant="card" className="card text-center p-6">
                <div className="w-full h-24 rounded-lg bg-gradient-to-br from-purple-400 via-emerald-400 to-amber-400 mb-4" />
                <h3 className="font-semibold">Gradient</h3>
                <p className="text-sm text-gray-600">Multi-color</p>
              </HoverAnimate>
            </div>
          </section>

          {/* Instructions */}
          <section className="card bg-gradient-to-br from-purple-50 to-emerald-50 border-purple-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Use</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">1. Cursor Effect</h3>
                <p>Move your mouse around to see the custom cursor with particle effects. The cursor changes size and color when hovering over interactive elements.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. HoverAnimate Component</h3>
                <p>Wrap any element with the HoverAnimate component and choose a variant: default, card, button, or link.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Custom Classes</h3>
                <p>Use utility classes like hover-glow-purple, icon-hover, and text-reveal for additional effects.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

