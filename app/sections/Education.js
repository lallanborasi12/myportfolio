'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Arts (B.A.)',
    institution: 'Kanpur University',
    location: 'Uttar Pradesh',
    year: '2009',
    icon: GraduationCap,
    color: 'from-primary-500 to-cyan-400'
  },
  {
    degree: 'Senior Secondary (12th)',
    institution: 'UP Board',
    location: 'Uttar Pradesh',
    year: '2006',
    icon: BookOpen,
    color: 'from-violet-500 to-purple-400'
  },
  {
    degree: 'Secondary (10th)',
    institution: 'UP Board',
    location: 'Uttar Pradesh',
    year: '2004',
    icon: BookOpen,
    color: 'from-emerald-500 to-teal-400'
  }
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm tracking-wider uppercase">Academic</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-8 hover:bg-dark-700/40 transition-all group text-center"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <edu.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-primary-400 font-semibold mb-3">{edu.institution}</p>

              <div className="flex items-center justify-center gap-4 text-dark-400 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
