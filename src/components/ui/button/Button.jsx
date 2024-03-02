import React from 'react'

function Button({title, pd}) {
  return (
    <button className='button' style={{padding: `16px ${pd}px`}}>{title}</button>
  )
}

export default Button