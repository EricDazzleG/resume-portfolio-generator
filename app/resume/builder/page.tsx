"use client";
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Save, Download, Eye, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import ResumeForm from "@/components/ResumeForm"
import ResumePreview from "@/components/ResumePreview"
import { useResumeBuilder } from "@/hooks/useResumeBuilder"
import { getTemplateById } from "@/lib/templates"
import TemplateSelector from "@/components/TemplateSelector"
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
  const [selectedTemplate, setSelectedTemplate] = useState("modern")
  const [showTemplateSelector, setShowTemplateSelector] = useState(false)
  const { resumeData, updateResumeData, saveResume, loading } = useResumeBuilder()
  const searchParams = useSearchParams()

  useEffect(() => {
    const templateParam = searchParams.get("template")
    if (templateParam) {
      setSelectedTemplate(templateParam)
    }
  }, [searchParams])

  const progress = (currentStep / steps.length) * 100

  const downloadResume = async () => {
    try {
      // Debug: Log the resume data
      console.log('Resume data for PDF:', resumeData);
      
      // Create a simple HTML structure for PDF
      const data = resumeData as any; // Type assertion to avoid TypeScript errors
      
      // Add some default data if empty for testing
      const testData = {
        firstName: data.firstName || 'John',
        lastName: data.lastName || 'Doe',
        email: data.email || 'john.doe@example.com',
        phone: data.phone || '(555) 123-4567',
        location: data.location || 'New York, NY',
        summary: data.summary || 'Experienced software developer with expertise in modern web technologies.',
        experience: data.experience || [
          {
            position: 'Senior Developer',
            company: 'Tech Corp',
            startDate: '2020',
            endDate: 'Present',
            description: 'Led development of multiple web applications using React and Node.js.'
          }
        ],
        education: data.education || [
          {
            degree: 'Bachelor of Science',
            field: 'Computer Science',
            school: 'University of Technology',
            graduationDate: '2019'
          }
        ],
        skills: data.skills || 'JavaScript, React, Node.js, TypeScript, Python',
        projects: data.projects || [
          {
            name: 'E-commerce Platform',
            technologies: 'React, Node.js, MongoDB',
            description: 'Built a full-stack e-commerce platform with payment integration.'
          }
        ]
      };
      const pdfContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px;">
            <h1 style="font-size: 28px; margin: 0; color: #333;">
              ${testData.firstName} ${testData.lastName}
            </h1>
            <div style="margin-top: 10px; color: #666;">
              <div>${testData.email}</div>
              <div>${testData.phone}</div>
              <div>${testData.location}</div>
            </div>
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="font-size: 18px; margin-bottom: 10px; color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">
              Professional Summary
            </h2>
            <p style="margin: 0; line-height: 1.6; color: #555;">${testData.summary}</p>
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="font-size: 18px; margin-bottom: 15px; color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">
              Work Experience
            </h2>
            ${testData.experience.map((exp: any) => `
              <div style="margin-bottom: 15px; padding-left: 15px; border-left: 3px solid #8b5cf6;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                  <h3 style="margin: 0; font-size: 16px; color: #333;">${exp.position}</h3>
                  <span style="font-size: 14px; color: #666;">${exp.startDate} - ${exp.endDate}</span>
                </div>
                <div style="color: #8b5cf6; font-weight: 500; margin-bottom: 8px;">${exp.company}</div>
                <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #555;">${exp.description}</p>
              </div>
            `).join('')}
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="font-size: 18px; margin-bottom: 15px; color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">
              Education
            </h2>
            ${testData.education.map((edu: any) => `
              <div style="margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                  <h3 style="margin: 0; font-size: 16px; color: #333;">${edu.degree} in ${edu.field}</h3>
                  <span style="font-size: 14px; color: #666;">${edu.graduationDate}</span>
                </div>
                <div style="color: #8b5cf6; margin-bottom: 5px;">${edu.school}</div>
              </div>
            `).join('')}
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="font-size: 18px; margin-bottom: 15px; color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">
              Skills
            </h2>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${testData.skills.split(',').map((skill: string) => `
                <span style="background-color: #f3e8ff; color: #8b5cf6; padding: 4px 12px; border-radius: 15px; font-size: 12px;">
                  ${skill.trim()}
                </span>
              `).join('')}
            </div>
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="font-size: 18px; margin-bottom: 15px; color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px;">
              Projects
            </h2>
            ${testData.projects.map((project: any) => `
              <div style="margin-bottom: 15px;">
                <h3 style="margin: 0 0 5px 0; font-size: 16px; color: #333;">${project.name}</h3>
                <div style="color: #8b5cf6; font-size: 14px; margin-bottom: 8px;">${project.technologies}</div>
                <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #555;">${project.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      // Create temporary element
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = pdfContent;
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      tempDiv.style.top = '-9999px';
      tempDiv.style.width = '8.5in';
      tempDiv.style.backgroundColor = 'white';
      document.body.appendChild(tempDiv);

      const opt = {
        margin: 0.5,
        filename: 'my-resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          allowTaint: true
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait' 
        }
      };

      const html2pdfModule = await html2pdf();
      await html2pdfModule().set(opt).from(tempDiv).save();
      
      // Clean up
      document.body.removeChild(tempDiv);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
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

              <Button 
                variant="outline" 
                className="clay-button-secondary"
                onClick={() => setShowTemplateSelector(true)}
              >
                <Palette className="w-4 h-4 mr-2" />
                Change Template
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
                <ResumePreview data={resumeData} template={selectedTemplate} />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Template Selector Modal */}
      <TemplateSelector
        selectedTemplate={selectedTemplate}
        onTemplateChange={setSelectedTemplate}
        isOpen={showTemplateSelector}
        onClose={() => setShowTemplateSelector(false)}
      />
    </div>
  )
} 