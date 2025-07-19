"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/hooks/useAuth"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const { signup, loading } = useAuth()
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }
    try {
      await signup(formData.name, formData.email, formData.password)
      // Optionally redirect here
    } catch (err: any) {
      setError(err.message || "Signup failed")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              ResumeForge
            </span>
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Create Account</h1>
          <p className="text-gray-600 dark:text-gray-400">Join thousands of professionals building amazing resumes</p>
        </div>

        {/* Signup Form */}
        <div className="clay-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pl-10 clay-input"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 clay-input"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10 clay-input"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="pl-10 clay-input"
                  required
                />
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-2">
              <input type="checkbox" className="mt-1 rounded border-gray-300" required />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                I agree to the{" "}
                <Link href="/terms" className="text-purple-600 hover:text-purple-700">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-purple-600 hover:text-purple-700">
                  Privacy Policy
                </Link>
              </span>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            {/* Submit Button */}
            <Button type="submit" disabled={loading} className="w-full clay-button-primary group">
              {loading ? "Creating account..." : "Create Account"}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full clay-button-secondary bg-transparent">
              <img src="/placeholder.svg?height=20&width=20" alt="Google" className="w-5 h-5 mr-2" />
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full clay-button-secondary bg-transparent">
              <img src="/placeholder.svg?height=20&width=20" alt="GitHub" className="w-5 h-5 mr-2" />
              Continue with GitHub
            </Button>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-purple-600 hover:text-purple-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
