import React from 'react'
import Header from '@/components/organisms/header'
import Footer from '@/components/organisms/footer'
import Delimiter from '@/components/molecules/delimiter'

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className='bg-[--background-color]'>
      <Header />
      <Delimiter padding>{children}</Delimiter>
      <Footer />
    </body>
  )
}
