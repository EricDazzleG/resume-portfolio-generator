"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Software Engineer",
    company: "Google",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "ResumeForge helped me transition from startup to FAANG. The professional templates and AI suggestions were game-changing for my career advancement.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Director",
    company: "Microsoft",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "The sophisticated design system made my resume stand out among hundreds. I received interview calls from top-tier companies within days.",
    rating: 5,
  },
  {
    name: "Elena Kowalski",
    role: "Creative Director",
    company: "Adobe",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "As a design professional, I'm extremely particular about aesthetics. ResumeForge exceeded my expectations with its refined, professional approach.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-slate-100">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Join thousands of successful professionals who've elevated their careers with ResumeForge's sophisticated
            approach to professional presentation.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:scale-105 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed text-lg">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-200 dark:border-slate-700"
                />
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100 text-lg">{testimonial.name}</div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
