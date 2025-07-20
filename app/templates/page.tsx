"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Star, Eye, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import TemplatePreview from "@/components/TemplatePreview"

import { templates, getTemplatesByCategory } from "@/lib/templates"

const categories = ["All", "Professional", "Executive", "Creative", "Minimal", "Tech", "Academic"]

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const filteredTemplates = getTemplatesByCategory(selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-amber-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="pt-20"
      >
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Choose Your Perfect
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent"> Template</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Professional, creative, or minimal - find the perfect resume template that matches your style and industry
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`clay-button-${selectedCategory === category ? 'primary' : 'secondary'}`}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </section>

        {/* Templates Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="clay-card p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedTemplate(template.id)}
              >
                {/* Template Preview */}
                <div className="relative mb-4">
                  <TemplatePreview templateId={template.id} />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-white/90 dark:bg-gray-800/90">
                      {template.category}
                    </Badge>
                  </div>
                </div>

                {/* Template Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {template.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {template.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {template.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{template.rating}</span>
                    </div>
                    <span>{template.downloads.toLocaleString()} downloads</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {template.features.slice(0, 3).map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 clay-button-secondary"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Preview functionality
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Link href={`/resume/builder?template=${template.id}`} className="flex-1">
                      <Button size="sm" className="w-full clay-button-primary">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Use Template
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="clay-card p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Can't Find the Perfect Template?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Create your own custom template or request a new design. Our team is here to help you stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="clay-button-primary">
                <Download className="w-4 h-4 mr-2" />
                Request Custom Template
              </Button>
              <Button variant="outline" className="clay-button-secondary">
                Contact Support
              </Button>
            </div>
          </motion.div>
        </section>
      </motion.main>

      <Footer />
    </div>
  )
} 