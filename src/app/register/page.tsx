'use client'
import Button from '@/components/atoms/button'
import Form from '@/components/atoms/form'
import Input from '@/components/atoms/input'
import { useRouter } from 'next/navigation'
import { BsPersonFillAdd } from 'react-icons/bs'

interface RegisterSubmitProps {
  name: string
  phone: string
  email: string
  password: string
}

export default function RegisterPage() {
  const router = useRouter()

  const onSubmit = (data: RegisterSubmitProps) => {
    console.log(data)
  }

  return (
    <>
      <div className='w-min mt-8 mx-auto text-9xl'>
        <BsPersonFillAdd />
      </div>
      <Form className='mt-8' onSubmit={onSubmit}>
        <Input name='name' placeholder='Name' required />
        <Input className='mt-4' name='phone' placeholder='Phone' type='tel' required />
        <Input className='mt-4' name='email' placeholder='Email' type='email' required />
        <Input
          className='mt-4'
          name='password'
          placeholder='Password'
          type='password'
          required
        />
        <Button className='mt-6'>Register</Button>
      </Form>
      <Button
        className='mt-2'
        color='SECONDARY'
        onClick={() => router.push('/login')}
      >
        Already have an account
      </Button>
    </>
  )
}
