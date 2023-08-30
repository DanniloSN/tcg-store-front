'use client'
import Button from '@/components/atoms/button'
import { useRouter } from 'next/navigation'

export default function StorePage() {
  const router = useRouter()
  return (
    <>
      <div className='shadow-md flex justify-center items-center py-16'>
        Sales Graphic
      </div>
      <div className='shadow-md flex justify-center items-center py-16 mt-4'>
        Costumers Graphic
      </div>
      <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4'>
        <Button onClick={() => router.push('store/cards')}>Cards</Button>
        <Button onClick={() => router.push('store/orders')}>Orders</Button>
        <Button onClick={() => router.push('store/settings')}>Settings</Button>
      </div>
    </>
  )
}
