import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { RouteChangeListener } from './routeChange'
import './globals.css'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jobstasy - Find your next job in software',
  description:
    'Portfolio, Cam Green, Cameron, Frontend Developer, Software Developer, Manchester, UK, Project, Job Search Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <RouteChangeListener />
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
