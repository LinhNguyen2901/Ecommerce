import React from 'react'
import './Items.css'
import data_product from '../Assets/data'

export default function Items(props) {
  return (
    <div className='item'>
        <img src={props.image} alt=''/>
        <p>{props.name}</p>
        <div className='prices'>
            <div className='price-new'>
                ${props.new_price}
            </div>
            <div className='price-old'>
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}
