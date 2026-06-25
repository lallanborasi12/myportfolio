'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cloud, Server, Network, AppWindow, Database, Container, GitBranch, Monitor } from 'lucide-react'

const skillCategories = [
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      'AWS (EC2, S3, IAM, VPC, RDS, CloudFront)',
      'Docker & Containerization',
      'Jenkins CI/CD',
      'GitHub & Git',
      'Chef Server',
      'CloudWatch Monitoring',
      'Backup & Disaster Recovery',
      'Cloudflare & Namecheap'
    ]
  },
  {
    icon: Server,
    title: 'System Administration',
    color: 'from-emerald-500 to-teal-400',
    skills: [
      'Windows Server Administration',
      'Ubuntu & Red Hat Enterprise Linux',
      'macOS Management',
      'Server Monitoring & Performance',
      'User & Group Management',
      'Security Policy Implementation',
      'Hardware Installation',
      'VMware ESXi Configuration'
    ]
  },
  {
    icon: Network,
    title: 'Networking',
    color: 'from-violet-500 to-purple-400',
    skills: [
      'Routing & Switching',
      'DHCP & DNS Configuration',
      'ACL & VPN Setup',
      'EIGRP, IGRP, OSPF Protocols',
      'Network Troubleshooting',
      'VPC & Subnet Management',
      'Route 53 DNS Management',
      'Load Balancing'
    ]
  },
  {
    icon: AppWindow,
    title: 'Application & Account Management',
    color: 'from-amber-500 to-orange-400',
    skills: [
      'Google Workspace Administration',
      'App Store & Play Store Management',
      'Firebase Integration',
      'AppsFlyer & Qonversion',
      'Business Email Setup',
      'Private Mail Configuration',
      'Subscription & Billing',
      'Domain & Hosting Management'
    ]
  },
  {
    icon: Database,
    title: 'Databases & Web Servers',
    color: 'from-rose-500 to-pink-400',
    skills: [
      'MySQL Administration',
      'MongoDB Atlas',
      'Apache2 Configuration',
      'Nginx Setup & Optimization',
      'Node.js & NPM',
      'PM2 Process Management',
      'Database Backup Strategies',
      'Performance Tuning'
    ]
  },
  {
    icon: Monitor,
    title: 'Tools & Platforms',
    color: 'from-indigo-500 to-blue-400',
    skills: [
      'AWS EC2 Image Builder',
      'S3 Glacier Archive',
      'SES Email Service',
      'MongoDB Atlas Cloud',
      'GitHub Actions',
      'Various Monitoring Tools',
      'Ticketing Systems',
      'Remote Desktop Tools'
    ]
  }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/0 via-primary-500/5 to-dark-950/0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm tracking-wider uppercase">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-dark-400 mt-4 max-w-2xl mx-auto">
            Comprehensive skill set spanning cloud infrastructure, system administration, networking, 
            and application management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-6 hover:bg-dark-700/40 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 shadow-lg`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-dark-700/50 text-dark-300 border border-dark-600/30 hover:border-primary-500/30 hover:text-primary-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
