import './ui/global.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-black'>
      <body className={inter.className} style={{ background: 'transparent', height: '100vh', margin: 0 }}>
      <Link href="/" style={{ position: 'fixed' }} className='text-white fixed top-5 left-5 z-50'>Back to Home</Link>
        {children}
      </body>
    </html>
  )
}
