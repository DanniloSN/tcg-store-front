import BaseLayout from '@/components/templates/base-layout'
import './globals.css'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>TCG Store</title>
      </head>
      <BaseLayout>{children}</BaseLayout>
    </html>
  )
}
