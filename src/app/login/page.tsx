'use client'
import Button from '@/components/atoms/button'
import Form from '@/components/atoms/form'
import Input from '@/components/atoms/input'
import { useRouter } from 'next/navigation'
import { BsPersonFill } from 'react-icons/bs'

interface LoginSubmitProps {
  email: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()

  const onSubmit = (data: LoginSubmitProps) => {
    console.log(data)
  }

  return (
    <>
      <div className='w-min mt-8 mx-auto text-9xl'>
        <BsPersonFill />
      </div>
      <Form onSubmit={onSubmit}>
        <Input
          className='mt-8'
          placeholder='Email'
          name='email'
          type='email'
          required
        />
        <Input
          className='mt-4'
          placeholder='Password'
          name='password'
          type='password'
          required
        />
        <Button className='mt-6'>Login</Button>
      </Form>
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
