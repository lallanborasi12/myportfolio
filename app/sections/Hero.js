'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              Available for Opportunities
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Hi, I'm{' '}
              <span className="text-gradient">Lallan</span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl text-dark-200">Kumar</span>
            </h1>

            <p className="text-xl text-primary-400 font-semibold mb-4">
              IT & Cloud System Administrator
            </p>

            <p className="text-dark-400 text-lg leading-relaxed mb-8 max-w-lg">
              Experienced IT & Cloud System Administrator with over 7 years of expertise in cloud infrastructure, 
              system administration, technical support, and network management. Specializing in AWS environments, 
              Windows/Linux servers, and cloud-native solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 glass-card text-white font-semibold hover:bg-dark-700/60 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                View Experience
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-dark-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-400" />
                New Delhi, India
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400" />
                8375097202
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-cyan-500/30 rounded-full blur-3xl scale-110" />

              {/* Circular image container with original background */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-2xl glow-strong">
                <Image
                  src="/images/profile.jpg"
                  alt="Lallan Kumar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-2 px-4 py-2 glass-card text-sm font-semibold text-primary-400 rounded-full"
              >
                7+ Years Exp
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-2 -left-2 px-4 py-2 glass-card text-sm font-semibold text-cyan-400 rounded-full"
              >
                AWS Certified
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-dark-500 hover:text-primary-400 transition-colors">
            <span className="text-xs">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
