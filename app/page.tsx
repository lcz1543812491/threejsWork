import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col  text-white bg-black w-full h-full">
      <main className="flex min-h-screen flex-col items-center p-24 bg-black gap-8">
        <Link href="/ragingSea">Raging Sea</Link>
        <Link href="/portal">Portal</Link>
        <Link href="/flyLight">FlyLight Fireworks</Link>
        <Link href="/smartCity">Smart City</Link>
      </main>
    </main>
  )
}
