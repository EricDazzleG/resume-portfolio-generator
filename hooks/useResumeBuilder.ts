"use client"

import { useState } from "react"

export function useResumeBuilder() {
  const [resumeData, setResumeData] = useState({})
  const [loading, setLoading] = useState(false)

  const updateResumeData = (newData: any) => {
    setResumeData(newData)
  }

  const saveResume = async () => {
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Resume saved:", resumeData)
    setLoading(false)
  }

  return {
    resumeData,
    updateResumeData,
    saveResume,
    loading,
  }
}
