import React from 'react'
import './BreadCrumb.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

export default function BreadCrumb(props) {
    const {product} = props;
  return (
    <div className='breadcrumb'>
        HOME <img src={arrow_icon} alt=''/> Shop <img src={arrow_icon} alt=''/> {product.category} <img src={arrow_icon} alt=''/> {product.name}
    </div>
  )
}
