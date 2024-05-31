import React from 'react'
import './Subscribe.css'

export default function Subscribe() {
  return (
    <div className='subscribe'>
        <h1>Exclusive Offers and Updates from Tesla&Corp.</h1>
        <div className='email'>
            <input type='email' placeholder='Enter your email'></input>
            <button type='submit'>Subscribe</button>
        </div>
    </div>
  )
}
