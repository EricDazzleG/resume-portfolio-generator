"use client"

import { motion } from "framer-motion"

interface ResumePreviewProps {
  data: any
}

export default function ResumePreview({ data }: ResumePreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-h-[800px] overflow-y-auto"
    >
      {/* Header */}
      <div className="text-center mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {data.firstName || "First"} {data.lastName || "Last"}
        </h1>
        <div className="text-gray-600 dark:text-gray-400 space-y-1">
          {data.email && <div>{data.email}</div>}
          {data.phone && <div>{data.phone}</div>}
          {data.location && <div>{data.location}</div>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-1">
            Professional Summary
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-1">
            Work Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp: any, index: number) => (
              <div key={index} className="border-l-2 border-purple-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{exp.position || "Position"}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </span>
                </div>
                <div className="text-purple-600 dark:text-purple-400 font-medium mb-2">{exp.company || "Company"}</div>
                {exp.description && (
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-1">
            Education
          </h2>
          <div className="space-y-3">
            {data.education.map((edu: any, index: number) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {edu.degree || "Degree"} in {edu.field || "Field"}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{edu.graduationDate}</span>
                </div>
                <div className="text-purple-600 dark:text-purple-400">{edu.school || "School"}</div>
                {edu.gpa && <div className="text-sm text-gray-600 dark:text-gray-400">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-1">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.split(",").map((skill: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-1">
            Projects
          </h2>
          <div className="space-y-4">
            {data.projects.map((project: any, index: number) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{project.name || "Project Name"}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 dark:text-purple-400 text-sm hover:underline"
                    >
                      View Project
                    </a>
                  )}
                </div>
                {project.technologies && (
                  <div className="text-sm text-purple-600 dark:text-purple-400 mb-2">{project.technologies}</div>
                )}
                {project.description && (
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
