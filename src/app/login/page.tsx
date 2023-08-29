import Button from '@/components/atoms/button'
import Input from '@/components/atoms/input'
import { MdAccountCircle } from 'react-icons/md'

export default function Login() {
  return (
    <>
      <div className='w-min mt-8 mx-auto text-9xl'>
        <MdAccountCircle />
      </div>
      <Input className='mt-8' placeholder='Email' type='email' />
      <Input className='mt-4' placeholder='Password' type='password' />
      <Button className='mt-6'>Login</Button>
    </>
  )
}
