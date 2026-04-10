import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M9 3H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 10H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm8-10h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 10h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Fihua<span className="text-blue-600">Chip</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Products</a>
            <a href="#solutions" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Solutions</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Log in</a>
            <a href="#contact" className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <a href="#products" className="block text-sm font-medium text-gray-600 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#solutions" className="block text-sm font-medium text-gray-600 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Solutions</a>
          <a href="#about" className="block text-sm font-medium text-gray-600 hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="block text-sm font-medium text-gray-600 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#contact" className="block w-full bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors" onClick={() => setMenuOpen(false)}>
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
