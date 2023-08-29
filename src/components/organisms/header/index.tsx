import Delimiter from '@/components/molecules/delimiter'
import Link from 'next/link'
import { BiUserCircle } from 'react-icons/bi'

export default function Header() {
  return (
    <header className='py-6 bg-[--primary-color] shadow-md'>
      <Delimiter>
        <div className='grid grid-cols-3'>
          <Link href='/'>
            <span className='pl-2'>#</span>
          </Link>
          <Link href='/'>
            <h1 className='text-center text-[--white]'>TCG STORE</h1>
          </Link>
          <Link href='/login' className='text-2xl ml-auto pr-2'>
            <BiUserCircle />
          </Link>
        </div>
      </Delimiter>
    </header>
  )
}
