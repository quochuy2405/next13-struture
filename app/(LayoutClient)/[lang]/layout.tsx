import Header from '@/components/share/header.component'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}
export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}
export default function RootLayout({ children, params }: { children: React.ReactNode; params: any }) {
  return (
    <html lang={params.lang}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  )
}
