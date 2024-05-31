import React, { createContext } from "react";
import all_product from '../Component/Assets/all_product'

export const ProductCategory = createContext(null);

const ProductCategoryProvider = (props) => {
    const productValue ={all_product};

    return (
        <ProductCategory.Provider value={productValue}>
            {props.children}
        </ProductCategory.Provider>
    )
}

export default ProductCategoryProvider