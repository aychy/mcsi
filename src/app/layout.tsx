import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from './providers'
import './globals.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export const metadata: Metadata = {
  title: 'Mosque Website',
  description: 'Welcome to our mosque',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Header className="sticky top-0 z-50" />
          <main className="flex-grow">{children}</main>
          <Footer className="mt-auto" />
        </Providers>
      </body>
    </html>
  )
}
