"use client"

import { motion } from "framer-motion"
import { Palette, Download, Zap, Shield, Users, Sparkles } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Professional Templates",
    description:
      "Sophisticated, industry-tested templates designed by professionals to make your resume stand out in any field.",
  },
  {
    icon: Zap,
    title: "AI-Powered Optimization",
    description:
      "Advanced algorithms analyze your content and provide intelligent suggestions to maximize your resume's impact.",
  },
  {
    icon: Download,
    title: "Multi-Format Export",
    description:
      "Export your resume in PDF, Word, or web formats with pixel-perfect precision and professional quality.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and privacy protection. Your professional data remains completely confidential.",
  },
  {
    icon: Users,
    title: "Collaboration Tools",
    description: "Share drafts with mentors, colleagues, or career advisors for professional feedback and refinement.",
  },
  {
    icon: Sparkles,
    title: "Real-time Preview",
    description: "See your changes instantly with our advanced preview system as you craft your perfect resume.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="text-slate-900 dark:text-slate-100">Why Choose </span>
            <span className="bg-gradient-to-r from-emerald-600 via-slate-700 to-amber-600 bg-clip-text text-transparent">
              ResumeForge?
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Our platform combines sophisticated design principles with cutting-edge technology to help you create
            professional documents that command attention and deliver results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="clay-card p-8 group hover:scale-105 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-slate-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">{feature.title}</h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
