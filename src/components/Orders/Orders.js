import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    
    
    const [cart, setCart] = useState(initialCart)

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(item => item.id !== id)
        setCart(remaining);
        removeFromDb(id);
    }
    
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;