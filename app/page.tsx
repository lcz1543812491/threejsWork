'use client'

//import { initHomePage } from '@/app/ui/home/home'
import { Router } from '@/app/ui/home/router'

export default function Page() {
  return (
    <>
      {/* <div className='text-white'>{new Date().toLocaleTimeString()}</div> */}
      <Router />
    </>
  )
}
