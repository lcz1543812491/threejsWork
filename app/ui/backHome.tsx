'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function BackHome() {
  const currentPath = usePathname()

  return (
    <Link href="/" style={{ position: 'fixed', display: currentPath === '/' ? 'none' : 'block' }} className="text-white fixed top-5 left-5 z-50">
      Back to Home
    </Link>
  )
}
