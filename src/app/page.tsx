'use client'
import Button from '@/components/atoms/button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Button onClick={() => router.push('cards')}>Cards</Button>
    </>
  )
}
