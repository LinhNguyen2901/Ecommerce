import React, { useContext } from 'react'
import './CSS/Category.css'
import { ProductCategory } from '../Context/ProductCategory'
import all_product from '../Component/Assets/all_product'
import Items from '../Component/Items/Items'

export default function Category(props) {
    const {all_product} = useContext(ProductCategory)
  return (
    <div className='category'>
        <img src={props.banner} alt=''/>
        <div className='index-sorting'>
            <p>
                <span>Showing 1-12</span> out of 36 products 
            </p>
            <form action=''>
                <label>Sort By </label>
                <select name='product-category'>
                    <option value='men'>Men</option>
                    <option value='women'>Women</option>
                    <option value='kids'>Kids</option>
                </select>
            </form>
        </div>
        <div className='products'>
            {all_product.map((item, i)=>{
                if (props.category === item.category) {
                    return <Items key={i} 
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}/>
                } else {
                    return null;
                }
            })}
        </div>
        <div className='loadmore'>
            Explore More
        </div>
    </div>
  )
}
