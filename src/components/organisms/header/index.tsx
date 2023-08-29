import Img from '@/components/atoms/img'
import Delimiter from '@/components/molecules/delimiter'
import Link from 'next/link'
import { BiUserCircle } from 'react-icons/bi'

export default function Header() {
  return (
    <header className='py-3 bg-[--primary-color] shadow-md'>
      <Delimiter>
        <div className='flex justify-between items-center px-2 text-[--white]'>
          <Link href='/'>
            <Img width={100} height={20} src='/next.svg' alt="Site's logo" />
          </Link>
          <Link href='/login' className='text-4xl'>
            <BiUserCircle />
          </Link>
        </div>
      </Delimiter>
    </header>
  )
}
