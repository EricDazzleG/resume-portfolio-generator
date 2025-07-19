"use client"

import { useState, createContext, useContext, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    // Return mock data for development
    return {
      user: {
        id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
      },
      login: async (email: string, password: string) => {
        console.log("Mock login:", email, password)
      },
      signup: async (name: string, email: string, password: string) => {
        console.log("Mock signup:", name, email, password)
      },
      logout: () => {
        console.log("Mock logout")
      },
      loading: false,
    }
  }
  return context
}

// Mock implementation for development
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  const login = async (email: string, password: string) => {
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({
      id: "1",
      name: "John Doe",
      email: email,
    })
    setLoading(false)
  }

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({
      id: "1",
      name: name,
      email: email,
    })
    setLoading(false)
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, loading }}>{children}</AuthContext.Provider>
}
