import './ui/global.css'
import { Inter } from 'next/font/google'
import { BackHome } from '@/app/ui/backHome'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className} style={{ background: 'transparent', height: '100vh', margin: 0 }}>
        <BackHome />
        {children}
      </body>
    </html>
  )
}
