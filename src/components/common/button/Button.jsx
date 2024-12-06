import React from 'react'
import Link from 'next/link'
import "./button.css"
const Button = ({url , title}) => {
  return (
    <Link href={`${url}`} className='button-custome'>{title}</Link>
  )
}

export default Button
