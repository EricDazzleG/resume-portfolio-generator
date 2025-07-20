"use client";
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Save, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import ResumeForm from "@/components/ResumeForm"
import ResumePreview from "@/components/ResumePreview"
import { useResumeBuilder } from "@/hooks/useResumeBuilder"
// Dynamic import for html2pdf to avoid SSR issues
const html2pdf = () => import('html2pdf.js').then(module => module.default);

const steps = [
  { id: 1, title: "Personal Info", description: "Basic information and contact details" },
  { id: 2, title: "Experience", description: "Work history and achievements" },
  { id: 3, title: "Education", description: "Academic background and certifications" },
  { id: 4, title: "Skills", description: "Technical and soft skills" },
  { id: 5, title: "Projects", description: "Notable projects and accomplishments" },
  { id: 6, title: "Review", description: "Final review and customization" },
]

export default function ResumeBuilderPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showPreview, setShowPreview] = useState(false)
  const { resumeData, updateResumeData, saveResume, loading } = useResumeBuilder()

  const progress = (currentStep / steps.length) * 100

  const downloadResume = async () => {
    try {
      // Create a temporary div to render the resume for PDF
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = document.querySelector('.resume-preview')?.innerHTML || '';
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      tempDiv.style.top = '-9999px';
      document.body.appendChild(tempDiv);

      const opt = {
        margin: 0.3,
        filename: 'my-resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      const html2pdfModule = await html2pdf();
      html2pdfModule().set(opt).from(tempDiv).save().then(() => {
        // Clean up the temporary div
        document.body.removeChild(tempDiv);
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      {/* Header */}
      <div className="border-b border-white/20 backdrop-blur-md bg-white/80 dark:bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Resume Builder</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => setShowPreview(!showPreview)} className="clay-button-secondary">
                <Eye className="w-4 h-4 mr-2" />
                {showPreview ? "Hide Preview" : "Show Preview"}
              </Button>

              <Button variant="outline" onClick={saveResume} disabled={loading}>
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>

              <Button className="clay-button-primary" onClick={downloadResume}>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`grid ${showPreview ? "lg:grid-cols-2" : "lg:grid-cols-1"} gap-8`}>
          {/* Form Section */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            {/* Step Navigation */}
            <div className="clay-card p-6">
              <div className="flex flex-wrap gap-2 mb-6">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(step.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      currentStep === step.id
                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                        : currentStep > step.id
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    }`}
                  >
                    {step.id}. {step.title}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {steps[currentStep - 1].title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{steps[currentStep - 1].description}</p>
              </div>

              {/* Form Content */}
              <ResumeForm step={currentStep} data={resumeData} onChange={updateResumeData} />

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="clay-button-secondary bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <Button onClick={handleNext} disabled={currentStep === steps.length} className="clay-button-primary">
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Preview Section */}
          {showPreview && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="sticky top-8">
              <div className="clay-card p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Live Preview</h3>
                <ResumePreview data={resumeData} />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
} 