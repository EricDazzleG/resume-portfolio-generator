"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Plus, Trash2, Download, Save } from "lucide-react"

interface ResumeFormProps {
  step: number
  data: any
  onChange: (data: any) => void
}

export default function ResumeForm({ step, data, onChange }: ResumeFormProps) {
  const updateField = (field: string, value: any) => {
    onChange({ ...data, [field]: value })
  }

  const addArrayItem = (field: string, item: any) => {
    const currentArray = data[field] || []
    onChange({ ...data, [field]: [...currentArray, item] })
  }

  const removeArrayItem = (field: string, index: number) => {
    const currentArray = data[field] || []
    onChange({ ...data, [field]: currentArray.filter((_: any, i: number) => i !== index) })
  }

  const updateArrayItem = (field: string, index: number, item: any) => {
    const currentArray = data[field] || []
    const newArray = [...currentArray]
    newArray[index] = item
    onChange({ ...data, [field]: newArray })
  }

  switch (step) {
    case 1: // Personal Info
      return (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={data.firstName || ""}
                onChange={(e) => updateField("firstName", e.target.value)}
                className="clay-input"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={data.lastName || ""}
                onChange={(e) => updateField("lastName", e.target.value)}
                className="clay-input"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={data.email || ""}
              onChange={(e) => updateField("email", e.target.value)}
              className="clay-input"
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={data.phone || ""}
                onChange={(e) => updateField("phone", e.target.value)}
                className="clay-input"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={data.location || ""}
                onChange={(e) => updateField("location", e.target.value)}
                className="clay-input"
                placeholder="New York, NY"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="summary">Professional Summary</Label>
            <Textarea
              id="summary"
              value={data.summary || ""}
              onChange={(e) => updateField("summary", e.target.value)}
              className="clay-input min-h-[120px]"
              placeholder="Brief overview of your professional background and key achievements..."
            />
          </div>
        </div>
      )

    case 2: // Experience
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Work Experience</h3>
            <Button
              onClick={() =>
                addArrayItem("experience", {
                  company: "",
                  position: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                })
              }
              className="clay-button-primary"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Experience
            </Button>
          </div>

          {(data.experience || []).map((exp: any, index: number) => (
            <div key={index} className="clay-card p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-gray-900 dark:text-white">Experience {index + 1}</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeArrayItem("experience", index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Company</Label>
                  <Input
                    value={exp.company || ""}
                    onChange={(e) => updateArrayItem("experience", index, { ...exp, company: e.target.value })}
                    className="clay-input"
                    placeholder="Company Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Position</Label>
                  <Input
                    value={exp.position || ""}
                    onChange={(e) => updateArrayItem("experience", index, { ...exp, position: e.target.value })}
                    className="clay-input"
                    placeholder="Job Title"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input
                    type="month"
                    value={exp.startDate || ""}
                    onChange={(e) => updateArrayItem("experience", index, { ...exp, startDate: e.target.value })}
                    className="clay-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input
                    type="month"
                    value={exp.endDate || ""}
                    onChange={(e) => updateArrayItem("experience", index, { ...exp, endDate: e.target.value })}
                    className="clay-input"
                    placeholder="Leave empty if current"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={exp.description || ""}
                  onChange={(e) => updateArrayItem("experience", index, { ...exp, description: e.target.value })}
                  className="clay-input min-h-[100px]"
                  placeholder="Describe your responsibilities and achievements..."
                />
              </div>
            </div>
          ))}

          {(!data.experience || data.experience.length === 0) && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No work experience added yet. Click "Add Experience" to get started.
            </div>
          )}
        </div>
      )

    case 3: // Education
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Education</h3>
            <Button
              onClick={() =>
                addArrayItem("education", {
                  school: "",
                  degree: "",
                  field: "",
                  graduationDate: "",
                  gpa: "",
                })
              }
              className="clay-button-primary"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Education
            </Button>
          </div>

          {(data.education || []).map((edu: any, index: number) => (
            <div key={index} className="clay-card p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-gray-900 dark:text-white">Education {index + 1}</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeArrayItem("education", index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <Label>School/University</Label>
                <Input
                  value={edu.school || ""}
                  onChange={(e) => updateArrayItem("education", index, { ...edu, school: e.target.value })}
                  className="clay-input"
                  placeholder="University Name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Degree</Label>
                  <Input
                    value={edu.degree || ""}
                    onChange={(e) => updateArrayItem("education", index, { ...edu, degree: e.target.value })}
                    className="clay-input"
                    placeholder="Bachelor's, Master's, etc."
                  />
                </div>
                <div className="space-y-2">
                  <Label>Field of Study</Label>
                  <Input
                    value={edu.field || ""}
                    onChange={(e) => updateArrayItem("education", index, { ...edu, field: e.target.value })}
                    className="clay-input"
                    placeholder="Computer Science, Business, etc."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Graduation Date</Label>
                  <Input
                    type="month"
                    value={edu.graduationDate || ""}
                    onChange={(e) => updateArrayItem("education", index, { ...edu, graduationDate: e.target.value })}
                    className="clay-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label>GPA (Optional)</Label>
                  <Input
                    value={edu.gpa || ""}
                    onChange={(e) => updateArrayItem("education", index, { ...edu, gpa: e.target.value })}
                    className="clay-input"
                    placeholder="3.8/4.0"
                  />
                </div>
              </div>
            </div>
          ))}

          {(!data.education || data.education.length === 0) && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No education added yet. Click "Add Education" to get started.
            </div>
          )}
        </div>
      )

    case 4: // Skills
      return (
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="skills">Skills</Label>
            <Textarea
              id="skills"
              value={data.skills || ""}
              onChange={(e) => updateField("skills", e.target.value)}
              className="clay-input min-h-[120px]"
              placeholder="List your skills separated by commas (e.g., JavaScript, React, Node.js, Python, etc.)"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Separate each skill with a comma. These will be displayed as tags on your resume.
            </p>
          </div>
        </div>
      )

    case 5: // Projects
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Projects</h3>
            <Button
              onClick={() =>
                addArrayItem("projects", {
                  name: "",
                  description: "",
                  technologies: "",
                  link: "",
                })
              }
              className="clay-button-primary"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </div>

          {(data.projects || []).map((project: any, index: number) => (
            <div key={index} className="clay-card p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-gray-900 dark:text-white">Project {index + 1}</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeArrayItem("projects", index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Project Name</Label>
                <Input
                  value={project.name || ""}
                  onChange={(e) => updateArrayItem("projects", index, { ...project, name: e.target.value })}
                  className="clay-input"
                  placeholder="Project Name"
                />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={project.description || ""}
                  onChange={(e) => updateArrayItem("projects", index, { ...project, description: e.target.value })}
                  className="clay-input min-h-[100px]"
                  placeholder="Describe what the project does and your role in it..."
                />
              </div>

              <div className="space-y-2">
                <Label>Technologies Used</Label>
                <Input
                  value={project.technologies || ""}
                  onChange={(e) => updateArrayItem("projects", index, { ...project, technologies: e.target.value })}
                  className="clay-input"
                  placeholder="React, Node.js, MongoDB, etc."
                />
              </div>

              <div className="space-y-2">
                <Label>Project Link (Optional)</Label>
                <Input
                  value={project.link || ""}
                  onChange={(e) => updateArrayItem("projects", index, { ...project, link: e.target.value })}
                  className="clay-input"
                  placeholder="https://github.com/username/project"
                />
              </div>
            </div>
          ))}

          {(!data.projects || data.projects.length === 0) && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No projects added yet. Click "Add Project" to get started.
            </div>
          )}
        </div>
      )

    case 6: // Review
      return (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Review Your Resume</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Take a final look at your resume before downloading or publishing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Button className="clay-button-primary h-16 text-lg">
              <Download className="w-6 h-6 mr-3" />
              Download PDF
            </Button>
            <Button variant="outline" className="clay-button-secondary h-16 text-lg bg-transparent">
              <Save className="w-6 h-6 mr-3" />
              Save & Continue Later
            </Button>
          </div>

          <div className="clay-card p-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resume Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Name:</span>
                <span className="text-gray-900 dark:text-white">
                  {data.firstName} {data.lastName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Email:</span>
                <span className="text-gray-900 dark:text-white">{data.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Experience Entries:</span>
                <span className="text-gray-900 dark:text-white">{(data.experience || []).length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Education Entries:</span>
                <span className="text-gray-900 dark:text-white">{(data.education || []).length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Projects:</span>
                <span className="text-gray-900 dark:text-white">{(data.projects || []).length}</span>
              </div>
            </div>
          </div>
        </div>
      )

    default:
      return <div>Invalid step</div>
  }
}
