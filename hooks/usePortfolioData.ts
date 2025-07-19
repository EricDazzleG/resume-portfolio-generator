"use client"

import { useState, useEffect } from "react"

interface Portfolio {
  id: string
  title: string
  template: string
  lastModified: string
  status: "draft" | "published"
  url?: string
}

export function usePortfolioData() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchPortfolios = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const mockPortfolios: Portfolio[] = [
        {
          id: "1",
          title: "Personal Portfolio",
          template: "Minimal",
          lastModified: "1 day ago",
          status: "published",
          url: "https://johndoe.dev",
        },
        {
          id: "2",
          title: "Design Portfolio",
          template: "Creative",
          lastModified: "5 days ago",
          status: "draft",
        },
      ]

      setPortfolios(mockPortfolios)
      setLoading(false)
    }

    fetchPortfolios()
  }, [])

  return { portfolios, loading }
}
