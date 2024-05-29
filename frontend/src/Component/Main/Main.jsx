import React from 'react'
import main_image from '../Assets/main_image.png'
import arrow from '../Assets/arrow.png'
import './Main.css'

export default function Main() {
  return (
    <div className='main'>
        <div className='main-left'>
            <h1>NEW ARRIVALS!</h1>
            <div className='main-collection'>
                <p>New Collections</p>
                <p>For Everyone</p>
            </div>
            <div className='collection-btn'>
                <button>Collections</button>
                <img src={arrow} alt=''/>
            </div>
        </div>

        <div className='main-right'>
          <img src={main_image} alt=''/>
        </div>
    </div>
  )
}
