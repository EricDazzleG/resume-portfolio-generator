"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <Link href="/easter-egg" aria-label="ResumeForge Easter Egg">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer">
              <span className="text-white text-lg font-bold">R</span>
            </div>
          </Link>
          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
            © 2024 ResumeForge. All rights reserved. Crafted with precision for professionals.
          </span>
        </div>
      </div>
    </footer>
  )
}
