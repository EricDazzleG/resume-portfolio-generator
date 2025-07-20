"use client";
import { useState, useEffect, Suspense } from "react"
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

function ResumeBuilderContent() {
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

      console.log('Test data being used:', testData);

      // Create a simpler, more reliable PDF content
      const pdfContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Resume - ${testData.firstName} ${testData.lastName}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 0; 
              padding: 20px; 
              background: white; 
              color: #333;
            }
            .header { 
              text-align: center; 
              margin-bottom: 30px; 
              border-bottom: 2px solid #333; 
              padding-bottom: 20px; 
            }
            .header h1 { 
              font-size: 28px; 
              margin: 0; 
              color: #333; 
            }
            .contact-info { 
              margin-top: 10px; 
              color: #666; 
            }
            .section { 
              margin-bottom: 25px; 
            }
            .section h2 { 
              font-size: 18px; 
              margin-bottom: 10px; 
              color: #333; 
              border-bottom: 1px solid #ccc; 
              padding-bottom: 5px; 
            }
            .experience-item { 
              margin-bottom: 15px; 
              padding-left: 15px; 
              border-left: 3px solid #8b5cf6; 
            }
            .experience-header { 
              display: flex; 
              justify-content: space-between; 
              margin-bottom: 5px; 
            }
            .experience-title { 
              font-size: 16px; 
              font-weight: bold; 
              color: #333; 
            }
            .experience-date { 
              font-size: 14px; 
              color: #666; 
            }
            .company { 
              color: #8b5cf6; 
              font-weight: 500; 
              margin-bottom: 8px; 
            }
            .description { 
              font-size: 14px; 
              line-height: 1.5; 
              color: #555; 
            }
            .skills-container { 
              display: flex; 
              flex-wrap: wrap; 
              gap: 8px; 
            }
            .skill-tag { 
              background-color: #f3e8ff; 
              color: #8b5cf6; 
              padding: 4px 12px; 
              border-radius: 15px; 
              font-size: 12px; 
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${testData.firstName} ${testData.lastName}</h1>
            <div class="contact-info">
              <div>${testData.email}</div>
              <div>${testData.phone}</div>
              <div>${testData.location}</div>
            </div>
          </div>

          <div class="section">
            <h2>Professional Summary</h2>
            <p>${testData.summary}</p>
          </div>

          <div class="section">
            <h2>Work Experience</h2>
            ${testData.experience.map((exp: any) => `
              <div class="experience-item">
                <div class="experience-header">
                  <div class="experience-title">${exp.position}</div>
                  <div class="experience-date">${exp.startDate} - ${exp.endDate}</div>
                </div>
                <div class="company">${exp.company}</div>
                <div class="description">${exp.description}</div>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <h2>Education</h2>
            ${testData.education.map((edu: any) => `
              <div class="experience-item">
                <div class="experience-header">
                  <div class="experience-title">${edu.degree} in ${edu.field}</div>
                  <div class="experience-date">${edu.graduationDate}</div>
                </div>
                <div class="company">${edu.school}</div>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <h2>Skills</h2>
            <div class="skills-container">
              ${testData.skills.split(',').map((skill: string) => `
                <span class="skill-tag">${skill.trim()}</span>
              `).join('')}
            </div>
          </div>

          <div class="section">
            <h2>Projects</h2>
            ${testData.projects.map((project: any) => `
              <div class="experience-item">
                <div class="experience-title">${project.name}</div>
                <div class="company">${project.technologies}</div>
                <div class="description">${project.description}</div>
              </div>
            `).join('')}
          </div>
        </body>
        </html>
      `;

      console.log('PDF content generated:', pdfContent);

      // Create temporary element
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = pdfContent;
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      tempDiv.style.top = '-9999px';
      tempDiv.style.width = '8.5in';
      tempDiv.style.backgroundColor = 'white';
      tempDiv.style.color = 'black';
      document.body.appendChild(tempDiv);

      console.log('Temporary div created and added to DOM');

      const opt = {
        margin: 0.5,
        filename: 'my-resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff'
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait' 
        }
      };

      console.log('Starting PDF generation...');
      const html2pdfModule = await html2pdf();
      console.log('html2pdf module loaded');
      
      await html2pdfModule().set(opt).from(tempDiv).save();
      console.log('PDF generation completed');
      
      // Clean up
      document.body.removeChild(tempDiv);
      console.log('Temporary div removed from DOM');
    } catch (error) {
      console.error('Error generating PDF:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert('Failed to generate PDF. Please try again. Error: ' + errorMessage);
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

export default function ResumeBuilderPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading resume builder...</p>
        </div>
      </div>
    }>
      <ResumeBuilderContent />
    </Suspense>
  )
} 