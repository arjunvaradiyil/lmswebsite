import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'LearnX - World\'s Finest for Individual Tuition',
  description: 'LearnX offers comprehensive education from Kindergarten to Post-Graduation across all subjects and syllabi. Expert tutors, flexible learning options, and personalized mentoring.',
  keywords: 'education, tuition, online learning, tutoring, LearnX, individual tuition, expert tutors',
  authors: [{ name: 'LearnX' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
} 