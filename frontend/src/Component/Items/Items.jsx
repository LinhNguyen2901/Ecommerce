import React from 'react'
import './Items.css'
import data_product from '../Assets/data'
import { Link } from 'react-router-dom'

export default function Items(props) {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=''/></Link>
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
