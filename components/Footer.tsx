"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-slate-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white/20 rounded-lg"></div>
              </div>
              <span className="text-2xl font-bold">ResumeForge</span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Create sophisticated resumes and portfolios that command attention and deliver professional results.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Product</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-emerald-400 transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-emerald-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/examples" className="hover:text-emerald-400 transition-colors">
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-emerald-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Support</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/help" className="hover:text-emerald-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-emerald-400 transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-400">
          <p>&copy; 2024 ResumeForge. All rights reserved. Crafted with precision for professionals.</p>
        </div>
      </div>
    </footer>
  )
}
