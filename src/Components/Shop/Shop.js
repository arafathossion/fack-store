import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
       useEffect(() =>{
           fetch('products.json')
           .then(res => res.json())
           .then(data => setProducts(data))
       },[])

       const addtoCart= (single_product) =>{
           console.log(single_product);
           const newCart = [...cart, single_product];
           setCart(newCart)
       }
    return (
        <div className='products-container'>
            <div className="product-container">
                  
                  {
                      products.map(product => <Product key={product.id} product ={product} cartFunction={addtoCart}></Product>)
                  }
            </div>
            <div className="cart-container">
                 <h5>df</h5>
                 <h5>Cart Length:{cart.length}</h5>
            </div>
        </div>
    );
};

export default Shop;