interface CardPageProps {
  params: { id: string }
}

export default function CardPage({ params }: CardPageProps) {
  return <h1>Card {params.id} Page</h1>
}
