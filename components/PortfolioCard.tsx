"use client"

import { motion } from "framer-motion"
import { MoreHorizontal, Edit, ExternalLink, Trash2, Eye, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Portfolio {
  id: string
  title: string
  template: string
  lastModified: string
  status: "draft" | "published"
  url?: string
}

interface PortfolioCardProps {
  portfolio: Portfolio
}

export default function PortfolioCard({ portfolio }: PortfolioCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="clay-card p-6 group cursor-pointer">
      {/* Preview */}
      <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-900/30 dark:to-cyan-900/30 rounded-lg mb-4 flex items-center justify-center">
        <div className="text-purple-400 dark:text-purple-500">
          <Briefcase className="w-12 h-12" />
        </div>
      </div>

      {/* Content */}
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900 dark:text-white truncate">{portfolio.title}</h3>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </DropdownMenuItem>
            {portfolio.status === "published" && (
              <DropdownMenuItem>
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live
              </DropdownMenuItem>
            )}
            <DropdownMenuItem className="text-red-600">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Template: {portfolio.template}</p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 dark:text-gray-400">{portfolio.lastModified}</span>

        <span
          className={`px-2 py-1 text-xs rounded-full ${
            portfolio.status === "published"
              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
          }`}
        >
          {portfolio.status}
        </span>
      </div>
    </motion.div>
  )
}
