'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const experiences = [
  {
    title: 'AWS Solutions Architect',
    company: 'Explode Media LLC',
    location: 'Remote / USA',
    period: 'April 2026 – Present',
    current: true,
    responsibilities: [
      'Managing AWS infrastructure, cloud deployments, and server architecture',
      'Server monitoring and performance optimization across all environments',
      'Implementing cloud-native solutions and best practices',
      'Ensuring high availability and scalability of cloud resources',
      'Cost optimization and resource management'
    ]
  },
  {
    title: 'System & Cloud Administrator',
    company: 'Harshit Info Solution',
    location: 'Ghaziabad, India',
    period: 'December 2020 – April 2026',
    current: false,
    responsibilities: [
      'Managed AWS infrastructure and cloud server deployments',
      'Provided technical support and optimized cloud services performance',
      'Maintained Linux and Windows server environments',
      'Handled domain, hosting, and email configurations',
      'Managed Google Workspace and private email systems',
      'Handled App Store & Play Store app publishing and Firebase integration'
    ]
  },
  {
    title: 'Technical Support Engineer',
    company: 'Schneider Prototyping',
    location: 'Noida, India',
    period: 'June 2018 – November 2020',
    current: false,
    responsibilities: [
      'Supported Windows servers and user management systems',
      'Network troubleshooting and connectivity issue resolution',
      'Hardware setup and configuration for enterprise systems',
      'User access control and security policy enforcement'
    ]
  },
  {
    title: 'Technical Support Engineer',
    company: 'WOG Group Technologies',
    location: 'Delhi, India',
    period: 'May 2016 – May 2018',
    current: false,
    responsibilities: [
      'Provided technical support for Windows systems and workstations',
      'Hardware setup, installation, and maintenance',
      'End-user support and IT asset management',
      'System imaging and software deployment'
    ]
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm tracking-wider uppercase">Career</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-dark-400 mt-4 max-w-2xl mx-auto">
            A progressive career journey spanning cloud architecture, system administration, and technical support.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 via-primary-500/30 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-900 md:-translate-x-2 z-10 mt-6">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary-400 animate-ping" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                }`}>
                  <div className="glass-card p-6 hover:bg-dark-700/40 transition-all group">
                    <div className={`flex items-center gap-2 mb-2 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-500/20 text-emerald-400 rounded-full">
                          Current
                        </span>
                      )}
                      <span className="text-primary-400 font-semibold text-sm">{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <div className={`flex items-center gap-4 text-dark-400 text-sm mb-4 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className={`space-y-2 ${
                      index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                    }`}>
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className={`flex items-start gap-2 text-dark-300 text-sm ${
                          index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                        }`}>
                          <ChevronRight className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
