'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, CheckCircle, Calendar, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    level: 'Associate',
    issuer: 'Amazon Web Services',
    date: '30 May 2025',
    badge: 'AWS',
    color: 'from-amber-500 to-orange-400',
    description: 'Validates expertise in designing distributed systems on AWS, including architectural best practices, cost optimization, and security.'
  },
  {
    title: 'Microsoft Certified Solutions Expert',
    level: 'MCSE',
    issuer: 'Microsoft',
    date: 'Completed',
    badge: 'MS',
    color: 'from-blue-500 to-cyan-400',
    description: 'Demonstrates expertise in Microsoft solutions, including Windows Server, Active Directory, and enterprise infrastructure management.'
  },
  {
    title: 'Diploma in Computer Hardware & Networking',
    level: 'Diploma',
    issuer: 'Technical Institute',
    date: 'Completed',
    badge: 'IT',
    color: 'from-emerald-500 to-teal-400',
    description: 'Comprehensive training in computer hardware, networking fundamentals, routing & switching, and system troubleshooting.'
  }
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/0 via-primary-500/5 to-dark-950/0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm tracking-wider uppercase">Credentials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-dark-400 mt-4 max-w-2xl mx-auto">
            Industry-recognized certifications that validate expertise in cloud architecture, system administration, and networking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-8 hover:bg-dark-700/40 transition-all group relative overflow-hidden"
            >
              {/* Background glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />

              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Award className="w-8 h-8 text-white" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-0.5 text-xs font-bold bg-gradient-to-r ${cert.color} text-white rounded-md`}>
                    {cert.badge}
                  </span>
                  <span className="text-dark-400 text-sm flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-primary-400 font-medium text-sm mb-3">{cert.level}</p>
                <p className="text-dark-500 text-sm mb-1">{cert.issuer}</p>
                <p className="text-dark-400 text-sm leading-relaxed">{cert.description}</p>

                <div className="mt-6 flex items-center gap-2 text-primary-400 text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>Verified Credential</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
