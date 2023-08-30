import React from 'react'

export default function Delimiter(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  return (
    <div {...props} className={`delimiter ${props.className ?? ''}`}>
      {props.children}
    </div>
  )
}
