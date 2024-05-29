import React from 'react'
import './WomenPopular.css'
import data_product from '../Assets/data'
import Items from '../Items/Items'

export default function WomenPopular() {
  return (
    <div className='women-popular'>
        <h1>Popular For Women</h1>
        <hr />
        <div className='popular-items'>
            {data_product.map((item,i)=>{
                return <Items key={i} 
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
