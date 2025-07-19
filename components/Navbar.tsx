"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/useTheme"
import { useAuth } from "@/hooks/useAuth"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { user } = useAuth()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
    >
      {/* Professional animated background for navbar */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/30 via-transparent to-amber-50/30 dark:from-emerald-950/20 dark:via-transparent dark:to-amber-950/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Professional Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-600 to-slate-700 rounded-xl flex items-center justify-center">
              <div className="w-5 h-5 bg-white/20 rounded-md"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800 dark:from-slate-200 dark:via-emerald-400 dark:to-slate-200 bg-clip-text text-transparent">
              ResumeForge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="/templates"
              className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
            >
              Templates
            </Link>
            <Link
              href="/pricing"
              className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
            >
              Pricing
            </Link>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {user ? (
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center">
                  <img
                    src={"/placeholder-user.jpg"}
                    alt="Profile"
                    className="w-9 h-9 object-cover"
                  />
                </div>
                <span className="font-medium text-slate-700 dark:text-slate-200">{user.name || user.email}</span>
              </div>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost" className="clay-button-secondary">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button className="clay-button-primary">Get Started</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <Link
              href="/features"
              className="block text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium"
            >
              Features
            </Link>
            <Link
              href="/templates"
              className="block text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium"
            >
              Templates
            </Link>
            <Link
              href="/pricing"
              className="block text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium"
            >
              Pricing
            </Link>
            <div className="flex space-x-4 pt-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center">
                    <img
                      src={"/placeholder-user.jpg"}
                      alt="Profile"
                      className="w-9 h-9 object-cover"
                    />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-200">{user.name || user.email}</span>
                </div>
              ) : (
                <>
                  <Link href="/auth/login">
                    <Button variant="ghost" className="clay-button-secondary">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button className="clay-button-primary">Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
