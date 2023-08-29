import {
  StaticImport,
  PlaceholderValue,
  OnLoadingComplete,
} from 'next/dist/shared/lib/get-img-props'
import Image, { ImageLoader } from 'next/image'
import { JSX, DetailedHTMLProps, ImgHTMLAttributes, RefAttributes } from 'react'

export default function Img(
  props: JSX.IntrinsicAttributes &
    Omit<
      DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
      'height' | 'width' | 'loading' | 'ref' | 'alt' | 'src' | 'srcSet'
    > & {
      src: string | StaticImport
      alt: string
      width: number | `${number}` | undefined
      height: number | `${number}` | undefined
      fill?: boolean | undefined
      loader?: ImageLoader | undefined
      quality?: number | `${number}` | undefined
      priority?: boolean | undefined
      loading?: 'eager' | 'lazy' | undefined
      placeholder?: PlaceholderValue | undefined
      blurDataURL?: string | undefined
      unoptimized?: boolean | undefined
      onLoadingComplete?: OnLoadingComplete | undefined
      layout?: string | undefined
      objectFit?: string | undefined
      objectPosition?: string | undefined
      lazyBoundary?: string | undefined
      lazyRoot?: string | undefined
    } & RefAttributes<HTMLImageElement | null>
) {
  return <Image {...props} alt={props.alt ?? ''} />
}
