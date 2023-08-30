'use client'
import Button from '@/components/atoms/button'
import Img from '@/components/atoms/img'
import useSWRInfinite from 'swr/infinite'

export default function Home() {
  const getKey = (pageIndex: any, previousPageData: string | any[]) => {
    if (previousPageData && !previousPageData.length) return null
    return `cards/catalog?page=${pageIndex + 1}`
  }

  const fetcher = async (url: string) => {
    return (await fetch(`http://localhost/api/${url}`)).json()
  }

  const { data, isLoading, setSize } = useSWRInfinite(getKey, fetcher)

  return (
    <>
      <div className='grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
        {data?.map((page, pageIndex) =>
          page?.map((card, cardIndex) => (
            <Img
              key={`${pageIndex}-${cardIndex}`}
              src={card.image}
              alt={card.name}
              loading='lazy'
            />
          ))
        )}
      </div>
      <br />
      {data?.length ? (
        <Button onClick={() => setSize((old) => old + 1)} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load More'}
        </Button>
      ) : (
        <h1>Loading cards</h1>
      )}
    </>
  )
}
