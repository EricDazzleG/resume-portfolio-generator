export interface Template {
  id: string
  name: string
  description: string
  category: string
  difficulty: string
  rating: number
  downloads: number
  preview: string
  features: string[]
  colors: string[]
  tags: string[]
  styles: TemplateStyles
}

export interface TemplateStyles {
  layout: 'modern' | 'classic' | 'creative' | 'minimal' | 'tech' | 'academic'
  typography: {
    headingFont: string
    bodyFont: string
    fontSize: string
  }
  spacing: {
    sectionGap: string
    itemGap: string
    padding: string
  }
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
    muted: string
  }
  sections: {
    header: boolean
    summary: boolean
    experience: boolean
    education: boolean
    skills: boolean
    projects: boolean
    contact: boolean
  }
}

export const templates: Template[] = [
  {
    id: "modern",
    name: "Modern Professional",
    description: "Clean and contemporary design perfect for tech and creative industries",
    category: "Professional",
    difficulty: "Easy",
    rating: 4.8,
    downloads: 1247,
    preview: "/templates/modern-preview.png",
    features: ["Clean Layout", "Professional Typography", "Color Accents", "Easy Customization"],
    colors: ["#3B82F6", "#1F2937", "#F3F4F6"],
    tags: ["Tech", "Creative", "Modern"],
    styles: {
      layout: "modern",
      typography: {
        headingFont: "font-bold",
        bodyFont: "font-normal",
        fontSize: "text-sm"
      },
      spacing: {
        sectionGap: "mb-6",
        itemGap: "mb-4",
        padding: "p-6"
      },
      colors: {
        primary: "#3B82F6",
        secondary: "#1F2937",
        accent: "#10B981",
        background: "#FFFFFF",
        text: "#1F2937",
        muted: "#6B7280"
      },
      sections: {
        header: true,
        summary: true,
        experience: true,
        education: true,
        skills: true,
        projects: true,
        contact: true
      }
    }
  },
  {
    id: "classic",
    name: "Classic Executive",
    description: "Traditional format trusted by executives and corporate professionals",
    category: "Executive",
    difficulty: "Medium",
    rating: 4.9,
    downloads: 2156,
    preview: "/templates/classic-preview.png",
    features: ["Traditional Layout", "Executive Style", "Conservative Design", "ATS Friendly"],
    colors: ["#1F2937", "#6B7280", "#F9FAFB"],
    tags: ["Corporate", "Executive", "Traditional"],
    styles: {
      layout: "classic",
      typography: {
        headingFont: "font-semibold",
        bodyFont: "font-normal",
        fontSize: "text-sm"
      },
      spacing: {
        sectionGap: "mb-8",
        itemGap: "mb-3",
        padding: "p-8"
      },
      colors: {
        primary: "#1F2937",
        secondary: "#6B7280",
        accent: "#374151",
        background: "#FFFFFF",
        text: "#1F2937",
        muted: "#9CA3AF"
      },
      sections: {
        header: true,
        summary: true,
        experience: true,
        education: true,
        skills: true,
        projects: false,
        contact: true
      }
    }
  },
  {
    id: "creative",
    name: "Creative Portfolio",
    description: "Bold and artistic design for designers, artists, and creative professionals",
    category: "Creative",
    difficulty: "Hard",
    rating: 4.7,
    downloads: 892,
    preview: "/templates/creative-preview.png",
    features: ["Bold Typography", "Creative Layout", "Colorful Design", "Portfolio Focus"],
    colors: ["#8B5CF6", "#EC4899", "#F59E0B"],
    tags: ["Design", "Creative", "Portfolio"],
    styles: {
      layout: "creative",
      typography: {
        headingFont: "font-bold",
        bodyFont: "font-medium",
        fontSize: "text-base"
      },
      spacing: {
        sectionGap: "mb-8",
        itemGap: "mb-6",
        padding: "p-8"
      },
      colors: {
        primary: "#8B5CF6",
        secondary: "#EC4899",
        accent: "#F59E0B",
        background: "#FFFFFF",
        text: "#1F2937",
        muted: "#6B7280"
      },
      sections: {
        header: true,
        summary: true,
        experience: true,
        education: true,
        skills: true,
        projects: true,
        contact: true
      }
    }
  },
  {
    id: "minimal",
    name: "Minimal Clean",
    description: "Ultra-clean design with maximum readability and minimal distractions",
    category: "Minimal",
    difficulty: "Easy",
    rating: 4.6,
    downloads: 1567,
    preview: "/templates/minimal-preview.png",
    features: ["Minimal Design", "High Readability", "Clean Typography", "Focus on Content"],
    colors: ["#374151", "#9CA3AF", "#FFFFFF"],
    tags: ["Minimal", "Clean", "Readable"],
    styles: {
      layout: "minimal",
      typography: {
        headingFont: "font-medium",
        bodyFont: "font-normal",
        fontSize: "text-sm"
      },
      spacing: {
        sectionGap: "mb-4",
        itemGap: "mb-2",
        padding: "p-4"
      },
      colors: {
        primary: "#374151",
        secondary: "#9CA3AF",
        accent: "#6B7280",
        background: "#FFFFFF",
        text: "#1F2937",
        muted: "#D1D5DB"
      },
      sections: {
        header: true,
        summary: true,
        experience: true,
        education: true,
        skills: true,
        projects: false,
        contact: true
      }
    }
  },
  {
    id: "tech",
    name: "Tech Developer",
    description: "Specialized template for software developers and tech professionals",
    category: "Tech",
    difficulty: "Medium",
    rating: 4.8,
    downloads: 2034,
    preview: "/templates/tech-preview.png",
    features: ["Code Highlighting", "Tech Skills Focus", "Project Showcase", "GitHub Integration"],
    colors: ["#10B981", "#1F2937", "#F3F4F6"],
    tags: ["Developer", "Tech", "Code"],
    styles: {
      layout: "tech",
      typography: {
        headingFont: "font-bold",
        bodyFont: "font-mono",
        fontSize: "text-sm"
      },
      spacing: {
        sectionGap: "mb-6",
        itemGap: "mb-4",
        padding: "p-6"
      },
      colors: {
        primary: "#10B981",
        secondary: "#1F2937",
        accent: "#059669",
        background: "#FFFFFF",
        text: "#1F2937",
        muted: "#6B7280"
      },
      sections: {
        header: true,
        summary: true,
        experience: true,
        education: true,
        skills: true,
        projects: true,
        contact: true
      }
    }
  },
  {
    id: "academic",
    name: "Academic Research",
    description: "Perfect for researchers, academics, and educational professionals",
    category: "Academic",
    difficulty: "Medium",
    rating: 4.5,
    downloads: 678,
    preview: "/templates/academic-preview.png",
    features: ["Research Focus", "Publication List", "Academic Credentials", "Citation Style"],
    colors: ["#DC2626", "#1F2937", "#FEF2F2"],
    tags: ["Academic", "Research", "Education"],
    styles: {
      layout: "academic",
      typography: {
        headingFont: "font-semibold",
        bodyFont: "font-normal",
        fontSize: "text-sm"
      },
      spacing: {
        sectionGap: "mb-6",
        itemGap: "mb-3",
        padding: "p-6"
      },
      colors: {
        primary: "#DC2626",
        secondary: "#1F2937",
        accent: "#B91C1C",
        background: "#FFFFFF",
        text: "#1F2937",
        muted: "#6B7280"
      },
      sections: {
        header: true,
        summary: true,
        experience: true,
        education: true,
        skills: true,
        projects: true,
        contact: true
      }
    }
  }
]

export function getTemplateById(id: string): Template | undefined {
  return templates.find(template => template.id === id)
}

export function getTemplatesByCategory(category: string): Template[] {
  if (category === "All") return templates
  return templates.filter(template => template.category === category)
} 