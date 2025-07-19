"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FileText, Briefcase, Settings, LogOut, User, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { useTheme } from "@/hooks/useTheme"

interface DashboardSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function DashboardSidebar({ activeTab, setActiveTab }: DashboardSidebarProps) {
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()

  const menuItems = [
    { id: "resumes", label: "Resumes", icon: FileText },
    { id: "portfolios", label: "Portfolios", icon: Briefcase },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 min-h-screen clay-card m-4 mr-0 rounded-r-none"
    >
      <div className="p-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            ResumeForge
          </span>
        </Link>

        {/* User Profile */}
        <div className="flex items-center space-x-3 mb-8 p-3 glass-card">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-medium text-gray-900 dark:text-white">{user?.name || "User"}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{user?.email || "user@example.com"}</div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2 mb-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Theme Toggle */}
        <Button variant="ghost" onClick={toggleTheme} className="w-full justify-start mb-4">
          {theme === "dark" ? <Sun className="w-5 h-5 mr-3" /> : <Moon className="w-5 h-5 mr-3" />}
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>

        {/* Logout */}
        <Button
          variant="ghost"
          onClick={logout}
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </motion.aside>
  )
}
