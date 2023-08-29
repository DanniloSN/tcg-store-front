import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={`w-full p-2 bg-[--primary-color] text-[--white] rounded-md shadow-md ${
        props.className ?? ''
      }`}
    >
      {props.children}
    </button>
  )
}
