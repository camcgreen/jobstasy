import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jobstasy - Find your next job in software',
  description:
    'Portfolio, Cam Green, Cameron, Frontend Developer, Software Developer, Manchesterm UK, Project, Job Search Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
