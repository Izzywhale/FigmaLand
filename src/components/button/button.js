import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text}) => {
  return (
   <Link href="/" className='buttonStyle'>
      {text}
   </Link>
  )
}

export default Button