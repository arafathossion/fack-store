import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img,name,price,seller,ratings} = props.product;
    // console.log(props)
    return (
        <div >
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{price}</p>
            <p>{seller}</p>
            <p>{ratings}</p>
            <button onClick={() => props.cartFunction(props.product)}>Add to Cart</button>
        </div>
    );
};

export default Product;