import BaseLayout from '@/components/templates/base-layout'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <BaseLayout>{children}</BaseLayout>
}
