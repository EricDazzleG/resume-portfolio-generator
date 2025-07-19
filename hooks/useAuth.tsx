"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { supabase } from "@/lib/supabaseClient"

interface User {
  id: string
  name: string | null
  email: string | null
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (data?.user) {
        setUser({
          id: data.user.id,
          name: data.user.user_metadata?.name || null,
          email: data.user.email,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    }
    getSession()
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          name: session.user.user_metadata?.name || null,
          email: session.user.email,
        })
      } else {
        setUser(null)
      }
    })
    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) throw error
  }

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    })
    setLoading(false)
    if (error) throw error
  }

  const logout = async () => {
    setLoading(true)
    await supabase.auth.signOut()
    setUser(null)
    setLoading(false)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
