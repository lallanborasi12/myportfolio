import { Heart, Cloud, Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-dark-700/50 bg-dark-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center">
                <Cloud className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Lallan<span className="text-primary-400">Kumar</span>
              </span>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed">
              IT & Cloud System Administrator with 7+ years of experience in cloud infrastructure, 
              system administration, and network management.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Experience', 'Certifications', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-dark-400 hover:text-primary-400 text-sm transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a href="tel:8375097202" className="flex items-center gap-3 text-dark-400 hover:text-primary-400 text-sm transition-colors">
                <Phone className="w-4 h-4" /> 8375097202
              </a>
              <a href="mailto:lallanborasi@gmail.com" className="flex items-center gap-3 text-dark-400 hover:text-primary-400 text-sm transition-colors">
                <Mail className="w-4 h-4" /> lallanborasi@gmail.com
              </a>
              <a href="https://linkedin.com/in/lallan-borasi-431509121" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-dark-400 hover:text-primary-400 text-sm transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            © 2026 Lallan Kumar. All rights reserved.
          </p>
          <p className="text-dark-500 text-sm flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
