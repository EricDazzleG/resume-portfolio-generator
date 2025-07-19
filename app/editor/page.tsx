"use client"

import dynamic from "next/dynamic"
import React, { useState } from "react"

// Dynamically import react-page to avoid SSR issues
const Editor = dynamic(() => import("@react-page/editor"), { ssr: false })
const slate = dynamic(() => import("@react-page/plugins-slate"), { ssr: false })
const image = dynamic(() => import("@react-page/plugins-image"), { ssr: false })
const background = dynamic(() => import("@react-page/plugins-background"), { ssr: false })

export default function ResumeBlockEditorPage() {
  // Initial value for the editor
  const [value, setValue] = useState<any>(null)

  // Plugins (dynamically loaded)
  // @ts-ignore
  const plugins = [slate, image, background]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 p-8">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Resume Block Editor (Beta)</h1>
        <div className="mb-8">
          <Editor
            value={value}
            onChange={setValue}
            plugins={plugins}
            lang="en"
          />
        </div>
        <div className="mt-12 text-center text-gray-500 dark:text-gray-400">
          <p>PDF Preview coming soon...</p>
        </div>
      </div>
    </div>
  )
} 