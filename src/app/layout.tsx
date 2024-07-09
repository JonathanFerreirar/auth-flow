import './globals.css'

import type { Metadata } from 'next'

import { cn } from '@/lib/utils'
import ProgressBar from '@/navigation/progressBar'

import { poppins } from './font'

export const metadata: Metadata = {
  title: 'Auth flow & Supabase',
  description: 'Generated by create next app',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="pt">
      <body className={cn('bg-white', poppins.className)}>
        <ProgressBar>{children}</ProgressBar>
      </body>
    </html>
  )
}

export default RootLayout
