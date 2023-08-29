import React from 'react'

interface DelimiterProps {
  children: React.ReactNode
  padding?: boolean
}

export default function Delimiter(props: DelimiterProps) {
  return (
    <div className={`delimiter ${props.padding && 'p-2'}`}>
      {props.children}
    </div>
  )
}
