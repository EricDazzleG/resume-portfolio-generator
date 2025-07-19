import React from "react"

export default function EasterEggPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-10 flex flex-col items-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
          <span className="text-3xl font-bold text-white">R</span>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">🎉 ResumeForge Easter Egg 🎉</h1>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">Meet the creators behind the magic:</p>
        <ul className="space-y-2 text-xl font-semibold text-purple-700 dark:text-cyan-300">
          <li>Eric Dazzle George</li>
          <li>Samyak Nigam</li>
          <li>Ujjwal Soni</li>
          <li>Akshay Joshi</li>
        </ul>
        <p className="mt-8 text-gray-500 text-sm">Thank you for discovering our hidden credits! 🚀</p>
      </div>
    </div>
  )
} 