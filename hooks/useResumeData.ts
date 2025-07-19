"use client"

import { useState, useEffect } from "react"

interface Resume {
  id: string
  title: string
  template: string
  lastModified: string
  status: "draft" | "published"
}

export function useResumeData() {
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchResumes = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const mockResumes: Resume[] = [
        {
          id: "1",
          title: "Software Engineer Resume",
          template: "Modern",
          lastModified: "2 days ago",
          status: "published",
        },
        {
          id: "2",
          title: "Frontend Developer CV",
          template: "Creative",
          lastModified: "1 week ago",
          status: "draft",
        },
        {
          id: "3",
          title: "Full Stack Resume",
          template: "Professional",
          lastModified: "3 days ago",
          status: "published",
        },
      ]

      setResumes(mockResumes)
      setLoading(false)
    }

    fetchResumes()
  }, [])

  return { resumes, loading }
}
