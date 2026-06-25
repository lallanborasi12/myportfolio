'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Linkedin, MessageSquare } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '8375097202',
    href: 'tel:8375097202',
    color: 'from-emerald-500 to-teal-400'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'lallanborasi@gmail.com',
    href: 'mailto:lallanborasi@gmail.com',
    color: 'from-primary-500 to-cyan-400'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'New Delhi, India',
    href: '#',
    color: 'from-rose-500 to-pink-400'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/lallan-borasi-431509121',
    href: 'https://linkedin.com/in/lallan-borasi-431509121',
    color: 'from-blue-500 to-indigo-400'
  }
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/0 via-primary-500/5 to-dark-950/0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm tracking-wider uppercase">Connect</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-dark-400 mt-4 max-w-2xl mx-auto">
            Open to new opportunities, collaborations, and discussions about cloud infrastructure and system administration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card p-8 glow">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Contact Information</h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-dark-700/30 hover:bg-dark-700/50 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-dark-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-primary-400 transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary-500/10 to-cyan-500/10 border border-primary-500/20">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-5 h-5 text-primary-400" />
                <h4 className="text-white font-semibold">Preferred Communication</h4>
              </div>
              <p className="text-dark-400 text-sm leading-relaxed">
                Available via phone, email, or LinkedIn. Typically responds within 24 hours. 
                Open to remote opportunities and on-site roles in Delhi NCR.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
