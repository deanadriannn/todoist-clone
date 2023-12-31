import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { cn } from '@/lib/utils'
import AuthProvider from '@/providers/auth-provider'

import './globals.css'

const font = Poppins({ 
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Todoist Clone",
  description: "Created By Dean Adrian Baihaqi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("container", font.className)}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
