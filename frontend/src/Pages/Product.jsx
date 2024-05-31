import React, { useContext } from 'react'
import { ProductCategory } from '../Context/ProductCategory'
import all_product from '../Component/Assets/all_product'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../Component/BreadCrumb/BreadCrumb';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct';

export default function Product() {
    const {all_product} = useContext(ProductCategory);
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
        <BreadCrumb product={product}/>
        <ProductDisplay product={product}/>
        <RelatedProduct/>
    </div>
  )
}
