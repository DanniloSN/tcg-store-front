'use client'
import Button from '@/components/atoms/button'
import Input from '@/components/atoms/input'
import { useRouter } from 'next/navigation'
import { BsPersonFill } from 'react-icons/bs'

export default function Login() {
  const router = useRouter()
  return (
    <>
      <div className='w-min mt-8 mx-auto text-9xl'>
        <BsPersonFill />
      </div>
      <Input className='mt-8' placeholder='Email' type='email' />
      <Input className='mt-4' placeholder='Password' type='password' />
      <Button className='mt-6'>Login</Button>
      <Button
        className='mt-2'
        color='SECONDARY'
        onClick={() => router.push('/register')}
      >
        Register
      </Button>
    </>
  )
}
