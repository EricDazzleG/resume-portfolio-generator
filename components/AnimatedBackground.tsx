"use client"

import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Professional Animated Elements */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-200/20 to-slate-200/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 120, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-200/15 to-slate-200/15 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-slate-300/20 to-emerald-300/20 rounded-full blur-2xl"
      />

      {/* Subtle Header Elements */}
      <motion.div
        animate={{
          x: [0, 180, 0],
          y: [0, 15, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 35,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-10 left-1/5 w-20 h-20 bg-gradient-to-r from-emerald-300/30 to-slate-300/30 rounded-full blur-sm"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, -10, 0],
          rotate: [180, 90, 0],
        }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-16 right-1/4 w-16 h-16 bg-gradient-to-r from-amber-300/40 to-slate-300/40 rounded-full blur-sm"
      />

      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -8, 12, 0],
          scale: [1, 1.4, 0.9, 1],
        }}
        transition={{
          duration: 45,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-8 left-1/2 w-12 h-12 bg-gradient-to-r from-slate-400/50 to-emerald-400/50 rounded-full blur-xs"
      />
    </div>
  )
}
