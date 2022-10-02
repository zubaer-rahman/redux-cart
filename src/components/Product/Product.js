import React from 'react';

const Product = ({product, addToCart}) => {
     
    return (
        <div style={{border: '1px solid tomato', marginBottom:"5px", padding: "0 5px 5px 5px"}}>
            <h4> {product.name} </h4>
            <button onClick={()=> addToCart(product.id, product.name)}> Add to Cart </button>
        </div>
    );
};

export default Product;