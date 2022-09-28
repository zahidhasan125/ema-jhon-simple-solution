import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, []);
    
    useEffect(() => {
        const storedCart = getStoredCart();
        for (const id in storedCart) {
               console.log(id);
            
        }
    }, [products])
    
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                
            </div>
            <div className='cart'>
                <Order cart={cart}></Order>
            </div>
        </div>
    );
};

export default Shop;