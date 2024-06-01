import React, { useContext } from 'react'
import './CartItems.css'
import { ProductCategory } from '../../Context/ProductCategory'
import remove_icon from '../Assets/cart_cross_icon.png'

export default function CartItems() {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ProductCategory) 
  return (
    <div className='cartitems'>
        <div className='format-main'>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if (cartItems[e.id]>0) {
                return <div>
                        <div className='cartitems-format'>
                            <img src={e.image} alt='' className='carticon-product-icon'></img>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''/>
                        </div>
                        <hr/>
                    </div>    
            }
            return null;
        })}
        <div className='cart-down'>
            <div className="cart-total">
                <h1>Cart Total</h1>
                <div>
                    <div className='total-items'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className='total-items'>
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='total-items'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed to checkout</button>
            </div>
            <div className='promocode'>
                <p>If you have a promo code, enter it here</p>
                <div className='promobox'>
                    <input type='text' placeholder='Promo Code'></input>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
