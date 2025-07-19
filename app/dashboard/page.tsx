"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, FileText, Briefcase, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import DashboardSidebar from "@/components/DashboardSidebar"
import ResumeCard from "@/components/ResumeCard"
import PortfolioCard from "@/components/PortfolioCard"
import { useAuth } from "@/hooks/useAuth"
import { useResumeData } from "@/hooks/useResumeData"
import { usePortfolioData } from "@/hooks/usePortfolioData"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("resumes")
  const [searchQuery, setSearchQuery] = useState("")
  const { user } = useAuth()
  const { resumes, loading: resumesLoading } = useResumeData()
  const { portfolios, loading: portfoliosLoading } = usePortfolioData()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="flex">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 p-8">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome back, {user?.name || "User"}!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Continue building your professional presence</p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-2 gap-4 mb-8"
          >
            <Button className="clay-button-primary h-16 text-lg group">
              <Plus className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Create New Resume
            </Button>
            <Button variant="outline" className="clay-button-secondary h-16 text-lg group bg-transparent">
              <Briefcase className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Build Portfolio
            </Button>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search your documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 clay-input"
              />
            </div>
            <Button variant="outline" className="clay-button-secondary bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </motion.div>

          {/* Content Tabs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-6 clay-card p-1 w-fit">
              <button
                onClick={() => setActiveTab("resumes")}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === "resumes"
                    ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <FileText className="w-4 h-4 inline mr-2" />
                Resumes ({resumes.length})
              </button>
              <button
                onClick={() => setActiveTab("portfolios")}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === "portfolios"
                    ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4 inline mr-2" />
                Portfolios ({portfolios.length})
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "resumes" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resumesLoading
                  ? // Loading skeletons
                    [...Array(6)].map((_, i) => (
                      <div key={i} className="clay-card p-6 animate-pulse">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                      </div>
                    ))
                  : resumes.map((resume, index) => (
                      <motion.div
                        key={resume.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <ResumeCard resume={resume} />
                      </motion.div>
                    ))}
              </div>
            )}

            {activeTab === "portfolios" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfoliosLoading
                  ? // Loading skeletons
                    [...Array(6)].map((_, i) => (
                      <div key={i} className="clay-card p-6 animate-pulse">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                      </div>
                    ))
                  : portfolios.map((portfolio, index) => (
                      <motion.div
                        key={portfolio.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <PortfolioCard portfolio={portfolio} />
                      </motion.div>
                    ))}
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
