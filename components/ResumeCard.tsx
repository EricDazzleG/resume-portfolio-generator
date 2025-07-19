"use client"

import { motion } from "framer-motion"
import { MoreHorizontal, Edit, Download, Trash2, Eye, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Resume {
  id: string
  title: string
  template: string
  lastModified: string
  status: "draft" | "published"
}

interface ResumeCardProps {
  resume: Resume
}

export default function ResumeCard({ resume }: ResumeCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="clay-card p-6 group cursor-pointer">
      {/* Preview */}
      <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg mb-4 flex items-center justify-center">
        <div className="text-gray-400 dark:text-gray-500">
          <FileText className="w-12 h-12" />
        </div>
      </div>

      {/* Content */}
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900 dark:text-white truncate">{resume.title}</h3>

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
            <DropdownMenuItem>
              <Download className="w-4 h-4 mr-2" />
              Download
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Template: {resume.template}</p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 dark:text-gray-400">{resume.lastModified}</span>

        <span
          className={`px-2 py-1 text-xs rounded-full ${
            resume.status === "published"
              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
          }`}
        >
          {resume.status}
        </span>
      </div>
    </motion.div>
  )
}
