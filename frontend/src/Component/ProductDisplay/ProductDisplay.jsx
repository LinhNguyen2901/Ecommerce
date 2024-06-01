import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ProductCategory } from '../../Context/ProductCategory'

export default function ProductDisplay(props) {
    const {product} = props
    const {addToCart} = useContext(ProductCategory);
  return (
    <div className='productdisplay'>
        <div className='display-left'>
            <div className='image-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className='display-img'>
                <img className='main-image' src={product.image} alt=''/>
            </div>
        </div>

        <div className='display-right'>
            <h1>{product.name}</h1>
            <div className='product-prices'>
                <div className='product-old-price'>${product.old_price}</div>
                <div className='product-new-price'>${product.new_price}</div>
            </div>
            <div className='product-size'>
                <h1>Select Size</h1>
                <div className='size-choice'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>

                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>Add to cart</button>
        </div>
    </div>
  )
}
