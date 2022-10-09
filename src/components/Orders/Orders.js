import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    // const 
    
    const [cart, setCart] = useState(initialCart)
    
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                
                {
                    cart.map(product=> <ReviewItem key={product.id} product={product}></ReviewItem>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;