"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap } from "lucide-react"
import AnimatedBackground from "@/components/AnimatedBackground"
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const { user } = useAuth()
  const router = useRouter()

  const handleStartBuilding = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!user) {
      router.push("/auth/login")
    } else {
      router.push("/resume/builder")
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Professional Header Background */}
      <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden">
        <div className="animate-wave-slow absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-100/40 via-slate-100/30 to-amber-100/40 transform -skew-y-1"></div>
        <div className="animate-wave-medium absolute top-3 left-0 w-full h-full bg-gradient-to-r from-slate-200/20 via-emerald-200/20 to-slate-200/20 transform skew-y-1"></div>
        <div className="animate-wave-fast absolute top-6 left-0 w-full h-full bg-gradient-to-r from-amber-100/30 via-slate-100/30 to-emerald-100/30"></div>
      </div>

      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-50 to-slate-50 dark:from-emerald-950/50 dark:to-slate-950/50 px-5 py-3 rounded-2xl mb-8 clay-card border border-emerald-200/50 dark:border-emerald-800/30"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wide">
                PROFESSIONAL RESUME BUILDER
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="text-slate-900 dark:text-slate-100">Craft. </span>
              <span className="bg-gradient-to-r from-emerald-600 via-slate-700 to-amber-600 bg-clip-text text-transparent">
                Create.
              </span>
              <br />
              <span className="text-slate-900 dark:text-slate-100">Conquer.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed"
            >
              Build exceptional resumes and portfolios with our sophisticated design system. Professional templates meet
              intelligent automation to elevate your career prospects.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button className="clay-button-primary group px-8 py-4 text-lg" onClick={handleStartBuilding}>
                Start Building
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Link href="/portfolio/builder">
                <Button variant="outline" className="clay-button-secondary bg-transparent px-8 py-4 text-lg">
                  View Templates
                </Button>
              </Link>
            </motion.div>

            {/* Professional Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">150K+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">98%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">4.9★</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Resume Card */}
              <div className="clay-card p-10 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm transform rotate-1 hover:rotate-0 transition-all duration-700 border border-slate-200/50 dark:border-slate-700/50">
                <div className="space-y-6">
                  <div className="flex items-center space-x-5">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-slate-600 rounded-2xl flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl"></div>
                    </div>
                    <div className="flex-1">
                      <div className="h-5 bg-gradient-to-r from-slate-300 to-emerald-300 rounded-lg w-40 mb-3"></div>
                      <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-32"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-full"></div>
                    <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-4/5"></div>
                    <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-3/5"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                      <div className="h-2 w-12 bg-emerald-500 rounded"></div>
                    </div>
                    <div className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                      <div className="h-2 w-16 bg-amber-500 rounded"></div>
                    </div>
                    <div className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">
                      <div className="h-2 w-10 bg-slate-500 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Professional Elements */}
              <motion.div
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-6 -right-6 clay-card p-5 bg-gradient-to-br from-emerald-50 to-slate-50 dark:from-emerald-950/50 dark:to-slate-950/50 border border-emerald-200/50 dark:border-emerald-800/30"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-slate-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [12, -12, 12] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-6 -left-6 clay-card p-5 bg-gradient-to-br from-amber-50 to-slate-50 dark:from-amber-950/50 dark:to-slate-950/50 border border-amber-200/50 dark:border-amber-800/30"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-slate-600 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
