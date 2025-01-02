import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'User Management Table',
  description: 'A simple user management table using Next.js, Shadcn, TanStack Query, and TanStack Table',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="container mx-auto py-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}

