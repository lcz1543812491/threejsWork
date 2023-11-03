'use client'
import { initFlyLight } from './utils'
import { useEffect, useRef } from 'react'

export default function Three() {
  useEffect(() => {
    initFlyLight()
  }, [])

  return (
    <>
      <div className="fixed bottom-20 bg-black text-white p-6">Click to fire (点击页面发射烟花)</div>
      <canvas id="galaxy" style={{ width: '100vw', height: '100vh', background: 'black' }}></canvas>
    </>
  )
}
