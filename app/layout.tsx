import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from "@/hooks/useAuth"

export const metadata: Metadata = {
  title: 'resumeforge',
  description: 'Create and showcase your resume with resumeforge',
  generator: 'resumeforge',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
