"use client"

import { getTemplateById } from "@/lib/templates"

interface TemplatePreviewProps {
  templateId: string
  className?: string
}

export default function TemplatePreview({ templateId, className = "" }: TemplatePreviewProps) {
  const template = getTemplateById(templateId)
  const styles = template?.styles || getTemplateById("modern")!.styles

  const renderTemplateContent = () => {
    switch (templateId) {
      case "modern":
        return (
          <div className="h-full p-4 flex flex-col">
            {/* Modern Header */}
            <div className="text-center mb-3">
              <div 
                className={`text-lg ${styles.typography.headingFont} mb-1`}
                style={{ color: styles.colors.primary }}
              >
                John Doe
              </div>
              <div 
                className={`text-xs ${styles.typography.bodyFont}`}
                style={{ color: styles.colors.muted }}
              >
                john.doe@email.com • +1 (555) 123-4567
              </div>
            </div>

            {/* Modern Content */}
            <div className="flex-1 space-y-2">
              <div>
                <div 
                  className={`text-sm ${styles.typography.headingFont} mb-1 border-b`}
                  style={{ 
                    color: styles.colors.primary,
                    borderColor: styles.colors.muted
                  }}
                >
                  Experience
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <div 
                      className={`text-xs ${styles.typography.headingFont}`}
                      style={{ color: styles.colors.primary }}
                    >
                      Senior Developer
                    </div>
                    <div 
                      className={`text-xs ${styles.typography.bodyFont}`}
                      style={{ color: styles.colors.muted }}
                    >
                      2020-Present
                    </div>
                  </div>
                  <div 
                    className={`text-xs ${styles.typography.bodyFont}`}
                    style={{ color: styles.colors.accent }}
                  >
                    Tech Company Inc.
                  </div>
                </div>
              </div>

              <div>
                <div 
                  className={`text-sm ${styles.typography.headingFont} mb-1 border-b`}
                  style={{ 
                    color: styles.colors.primary,
                    borderColor: styles.colors.muted
                  }}
                >
                  Skills
                </div>
                <div className="flex flex-wrap gap-1">
                  {["React", "TypeScript", "Node.js"].map((skill, index) => (
                    <span
                      key={index}
                      className={`px-2 py-0.5 rounded text-xs ${styles.typography.bodyFont}`}
                      style={{
                        backgroundColor: `${styles.colors.accent}20`,
                        color: styles.colors.accent
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case "classic":
        return (
          <div className="h-full p-4 flex flex-col">
            {/* Classic Header */}
            <div className="text-center mb-3">
              <div 
                className={`text-lg ${styles.typography.headingFont} mb-1`}
                style={{ color: styles.colors.primary }}
              >
                JOHN DOE
              </div>
              <div 
                className={`text-xs ${styles.typography.bodyFont}`}
                style={{ color: styles.colors.muted }}
              >
                john.doe@email.com | +1 (555) 123-4567
              </div>
            </div>

            {/* Classic Content */}
            <div className="flex-1 space-y-2">
              <div>
                <div 
                  className={`text-sm ${styles.typography.headingFont} mb-1 border-b-2`}
                  style={{ 
                    color: styles.colors.primary,
                    borderColor: styles.colors.primary
                  }}
                >
                  PROFESSIONAL EXPERIENCE
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <div 
                      className={`text-xs ${styles.typography.headingFont}`}
                      style={{ color: styles.colors.primary }}
                    >
                      Senior Developer
                    </div>
                    <div 
                      className={`text-xs ${styles.typography.bodyFont}`}
                      style={{ color: styles.colors.muted }}
                    >
                      2020-Present
                    </div>
                  </div>
                  <div 
                    className={`text-xs ${styles.typography.bodyFont}`}
                    style={{ color: styles.colors.accent }}
                  >
                    Tech Company Inc.
                  </div>
                </div>
              </div>

              <div>
                <div 
                  className={`text-sm ${styles.typography.headingFont} mb-1 border-b-2`}
                  style={{ 
                    color: styles.colors.primary,
                    borderColor: styles.colors.primary
                  }}
                >
                  SKILLS
                </div>
                <div className="flex flex-wrap gap-1">
                  {["React", "TypeScript", "Node.js"].map((skill, index) => (
                    <span
                      key={index}
                      className={`px-2 py-0.5 text-xs ${styles.typography.bodyFont}`}
                      style={{ color: styles.colors.text }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case "creative":
        return (
          <div className="h-full p-4 flex flex-col">
            {/* Creative Header */}
            <div className="text-center mb-3">
              <div 
                className={`text-lg ${styles.typography.headingFont} mb-1`}
                style={{ color: styles.colors.primary }}
              >
                John Doe
              </div>
              <div 
                className={`text-xs ${styles.typography.bodyFont}`}
                style={{ color: styles.colors.muted }}
              >
                Creative Developer & Designer
              </div>
            </div>

            {/* Creative Content */}
            <div className="flex-1 space-y-2">
              <div>
                <div 
                  className={`text-sm ${styles.typography.headingFont} mb-1`}
                  style={{ color: styles.colors.primary }}
                >
                  ✨ Experience
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <div 
                      className={`text-xs ${styles.typography.headingFont}`}
                      style={{ color: styles.colors.primary }}
                    >
                      Senior Developer
                    </div>
                    <div 
                      className={`text-xs ${styles.typography.bodyFont}`}
                      style={{ color: styles.colors.muted }}
                    >
                      2020-Present
                    </div>
                  </div>
                  <div 
                    className={`text-xs ${styles.typography.bodyFont}`}
                    style={{ color: styles.colors.accent }}
                  >
                    Tech Company Inc.
                  </div>
                </div>
              </div>

              <div>
                <div 
                  className={`text-sm ${styles.typography.headingFont} mb-1`}
                  style={{ color: styles.colors.primary }}
                >
                  🎨 Skills
                </div>
                <div className="flex flex-wrap gap-1">
                  {["React", "TypeScript", "Node.js"].map((skill, index) => (
                    <span
                      key={index}
                      className={`px-2 py-0.5 rounded-full text-xs ${styles.typography.bodyFont}`}
                      style={{
                        backgroundColor: styles.colors.accent,
                        color: "white"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case "minimal":
        return (
          <div className="h-full p-4 flex flex-col">
            {/* Minimal Header */}
            <div className="text-center mb-3">
              <div 
                className={`text-lg ${styles.typography.headingFont} mb-1`}
                style={{ color: styles.colors.primary }}
              >
                John Doe
              </div>
              <div 
                className={`text-xs ${styles.typography.bodyFont}`}
                style={{ color: styles.colors.muted }}
              >
                john.doe@email.com
              </div>
            </div>

            {/* Minimal Content */}
            <div className="flex-1 space-y-2">
              <div>
                <div 
                  className={`text-sm ${styles.typography.headingFont} mb-1`}
                  style={{ color: styles.colors.primary }}
                >
                  Experience
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <div 
                      className={`text-xs ${styles.typography.headingFont}`}
                      style={{ color: styles.colors.primary }}
                    >
                      Senior Developer
                    </div>
                    <div 
                      className={`text-xs ${styles.typography.bodyFont}`}
                      style={{ color: styles.colors.muted }}
                    >
                      2020-Present
                    </div>
                  </div>
                  <div 
                    className={`text-xs ${styles.typography.bodyFont}`}
                    style={{ color: styles.colors.text }}
                  >
                    Tech Company Inc.
                  </div>
                </div>
              </div>

              <div>
                <div 
                  className={`text-sm ${styles.typography.headingFont} mb-1`}
                  style={{ color: styles.colors.primary }}
                >
                  Skills
                </div>
                <div className="flex flex-wrap gap-1">
                  {["React", "TypeScript", "Node.js"].map((skill, index) => (
                    <span
                      key={index}
                      className={`text-xs ${styles.typography.bodyFont}`}
                      style={{ color: styles.colors.text }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case "tech":
        return (
          <div className="h-full p-4 flex flex-col">
            {/* Tech Header */}
            <div className="text-center mb-3">
              <div 
                className={`text-lg ${styles.typography.headingFont} mb-1`}
                style={{ color: styles.colors.primary }}
              >
                John Doe
              </div>
              <div 
                className={`text-xs ${styles.typography.bodyFont}`}
                style={{ color: styles.colors.muted }}
              >
                Full Stack Developer
              </div>
            </div>

            {/* Tech Content */}
            <div className="flex-1 space-y-2">
              <div>
                <div 
                  className={`text-sm ${styles.typography.headingFont} mb-1`}
                  style={{ color: styles.colors.primary }}
                >
                  &gt; Experience
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <div 
                      className={`text-xs ${styles.typography.headingFont}`}
                      style={{ color: styles.colors.primary }}
                    >
                      Senior Developer
                    </div>
                    <div 
                      className={`text-xs ${styles.typography.bodyFont}`}
                      style={{ color: styles.colors.muted }}
                    >
                      2020-Present
                    </div>
                  </div>
                  <div 
                    className={`text-xs ${styles.typography.bodyFont}`}
                    style={{ color: styles.colors.accent }}
                  >
                    Tech Company Inc.
                  </div>
                </div>
              </div>

              <div>
                <div 
                  className={`text-sm ${styles.typography.headingFont} mb-1`}
                  style={{ color: styles.colors.primary }}
                >
                  &gt; Skills
                </div>
                <div className="flex flex-wrap gap-1">
                  {["React", "TypeScript", "Node.js"].map((skill, index) => (
                    <span
                      key={index}
                      className={`px-2 py-0.5 rounded text-xs ${styles.typography.bodyFont}`}
                      style={{
                        backgroundColor: `${styles.colors.accent}20`,
                        color: styles.colors.accent
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case "academic":
        return (
          <div className="h-full p-4 flex flex-col">
            {/* Academic Header */}
            <div className="text-center mb-3">
              <div 
                className={`text-lg ${styles.typography.headingFont} mb-1`}
                style={{ color: styles.colors.primary }}
              >
                John Doe, Ph.D.
              </div>
              <div 
                className={`text-xs ${styles.typography.bodyFont}`}
                style={{ color: styles.colors.muted }}
              >
                Research Scientist
              </div>
            </div>

            {/* Academic Content */}
            <div className="flex-1 space-y-2">
              <div>
                <div 
                  className={`text-sm ${styles.typography.headingFont} mb-1 border-b`}
                  style={{ 
                    color: styles.colors.primary,
                    borderColor: styles.colors.primary
                  }}
                >
                  Research Experience
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <div 
                      className={`text-xs ${styles.typography.headingFont}`}
                      style={{ color: styles.colors.primary }}
                    >
                      Senior Researcher
                    </div>
                    <div 
                      className={`text-xs ${styles.typography.bodyFont}`}
                      style={{ color: styles.colors.muted }}
                    >
                      2020-Present
                    </div>
                  </div>
                  <div 
                    className={`text-xs ${styles.typography.bodyFont}`}
                    style={{ color: styles.colors.accent }}
                  >
                    University Research Lab
                  </div>
                </div>
              </div>

              <div>
                <div 
                  className={`text-sm ${styles.typography.headingFont} mb-1 border-b`}
                  style={{ 
                    color: styles.colors.primary,
                    borderColor: styles.colors.primary
                  }}
                >
                  Publications
                </div>
                <div className="flex flex-wrap gap-1">
                  {["Machine Learning", "Data Science", "AI"].map((skill, index) => (
                    <span
                      key={index}
                      className={`px-2 py-0.5 text-xs ${styles.typography.bodyFont}`}
                      style={{ color: styles.colors.text }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="h-full p-4 flex flex-col">
            <div className="text-center mb-3">
              <div className="text-lg font-bold mb-1" style={{ color: styles.colors.primary }}>
                John Doe
              </div>
              <div className="text-xs" style={{ color: styles.colors.muted }}>
                john.doe@email.com
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <div>
                <div className="text-sm font-semibold mb-1 border-b" style={{ color: styles.colors.primary }}>
                  Experience
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <div className="text-xs font-semibold" style={{ color: styles.colors.primary }}>
                      Senior Developer
                    </div>
                    <div className="text-xs" style={{ color: styles.colors.muted }}>
                      2020-Present
                    </div>
                  </div>
                  <div className="text-xs" style={{ color: styles.colors.accent }}>
                    Tech Company Inc.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div 
      className={`w-full h-full rounded-lg border ${className}`}
      style={{ 
        backgroundColor: styles.colors.background,
        borderColor: styles.colors.muted
      }}
    >
      {renderTemplateContent()}
    </div>
  )
} 