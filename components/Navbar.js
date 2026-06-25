'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Cloud, Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center shadow-lg group-hover:shadow-primary-500/30 transition-shadow">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">
              Lallan<span className="text-primary-400">Kumar</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-dark-300 hover:text-white rounded-lg hover:bg-dark-700/50 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:8375097202" className="flex items-center gap-2 text-sm text-dark-300 hover:text-primary-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>8375097202</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-dark-300 hover:text-white rounded-lg hover:bg-dark-700/50 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden glass border-t border-dark-700/50">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-dark-300 hover:text-white hover:bg-dark-700/50 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-dark-700/50 space-y-3">
              <a href="tel:8375097202" className="flex items-center gap-2 px-4 text-sm text-dark-300">
                <Phone className="w-4 h-4" /> 8375097202
              </a>
              <a href="mailto:lallanborasi@gmail.com" className="flex items-center gap-2 px-4 text-sm text-dark-300">
                <Mail className="w-4 h-4" /> lallanborasi@gmail.com
              </a>
              <div className="flex items-center gap-2 px-4 text-sm text-dark-300">
                <MapPin className="w-4 h-4" /> New Delhi
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
