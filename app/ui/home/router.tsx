'use client'

import Link from 'next/link'
import { createWater } from '@/app/ui/home/home2/home2'
import { useEffect } from 'react'

export function Router() {

  useEffect(() => {
    createWater()
  }, [])

  return (
    <>
      <main className="fixed bottom-32 left-10 flex w-4/5 flex-col  text-white bg-transparent">
        <main className="font-black	text-6xl">Three JS</main>
        <main className="font-black	text-9xl">Individual works</main>
        <main className="flex  flex-row items-center bg-black p-4 gap-8 flex-wrap opacity-40">
          <Link href="/ragingSea">Raging Sea</Link>
          <Link href="/portal">Portal</Link>
          <Link href="/flyLight">FlyLight Fireworks</Link>
          <Link href="/smartCity">Smart City</Link>
        </main>
      </main>
      <canvas id="galaxy" style={{ width: '100vw', height: '100vh', background: 'black' }}></canvas>
    </>
  )
}
