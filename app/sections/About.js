'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Server, Cloud, Shield, Wrench, Users, Globe } from 'lucide-react'

const highlights = [
  { icon: Cloud, label: 'Cloud Infrastructure', desc: 'AWS, Azure, Cloud-native' },
  { icon: Server, label: 'System Admin', desc: 'Linux, Windows, macOS' },
  { icon: Shield, label: 'Security', desc: 'Policies, VPN, ACL' },
  { icon: Wrench, label: 'DevOps', desc: 'Docker, Jenkins, CI/CD' },
  { icon: Users, label: 'Support', desc: 'Technical & User Support' },
  { icon: Globe, label: 'Networking', desc: 'Routing, DNS, DHCP' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Professional <span className="text-gradient">Summary</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 glow">
              <p className="text-dark-300 leading-relaxed text-lg mb-6">
                Experienced <strong className="text-white">IT & Cloud System Administrator</strong> with over{' '}
                <strong className="text-primary-400">7 years</strong> of expertise in cloud infrastructure, 
                system administration, technical support, and network management.
              </p>
              <p className="text-dark-300 leading-relaxed text-lg mb-6">
                Skilled in managing <strong className="text-white">AWS environments</strong>, Windows/Linux servers, 
                and cloud-native solutions. Strong experience in troubleshooting, server monitoring, deployment 
                automation, and maintaining mission-critical applications.
              </p>
              <p className="text-dark-300 leading-relaxed text-lg">
                Currently working as an <strong className="text-primary-400">AWS Solutions Architect</strong> at 
                Explode Media LLC, where I manage AWS infrastructure, cloud deployments, server monitoring, 
                and performance optimization.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-dark-700/30">
                  <div className="text-2xl font-bold text-primary-400">7+</div>
                  <div className="text-xs text-dark-400 mt-1">Years Exp</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-dark-700/30">
                  <div className="text-2xl font-bold text-cyan-400">50+</div>
                  <div className="text-xs text-dark-400 mt-1">Projects</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-dark-700/30">
                  <div className="text-2xl font-bold text-emerald-400">3</div>
                  <div className="text-xs text-dark-400 mt-1">Certifications</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 hover:bg-dark-700/50 transition-all group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                <p className="text-dark-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
