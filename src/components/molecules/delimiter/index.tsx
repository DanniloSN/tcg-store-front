import React from 'react'

interface PropsDelimiter {
  children: React.ReactNode
  padding?: boolean
}

export default function Delimiter(props: PropsDelimiter) {
  return (
    <div className={`delimiter ${props.padding && 'p-2'}`}>
      {props.children}
    </div>
  )
}
