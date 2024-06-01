import React, { createContext, useState } from "react";
import all_product from '../Component/Assets/all_product'

export const ProductCategory = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ProductCategoryProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart()); 

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartQuantity = () => {
        let totalQuantity = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalQuantity += cartItems[item];
            }
        }
        return totalQuantity;
    }

    const productValue ={getTotalCartQuantity, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart};

    return (
        <ProductCategory.Provider value={productValue}>
            {props.children}
        </ProductCategory.Provider>
    )
}

export default ProductCategoryProvider