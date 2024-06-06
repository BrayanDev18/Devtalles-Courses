import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import ConvexClerkProvider from '../providers/ConvexClerkProvider'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Podcaster',
  description: 'Generated your podcast using AI',
  icons: {
    icon: '/icons/logo.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <ConvexClerkProvider>
        <body className={inter.className}>{children}</body>
      </ConvexClerkProvider>
    </html>
  )
}
