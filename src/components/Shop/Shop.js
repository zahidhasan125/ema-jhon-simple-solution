import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            setCart(savedCart);
        }
    }, [products])
    
    const handleAddToCart = (selectedProduct) => {

        // console.log(selectedProduct);
        let newCart = [];
        //find if the selectedProduct exist in the cart
        const exist = cart.find(product => product.id === selectedProduct.id)
        // if not exist means, selectedProduct adding for first time. 
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        //if exist means, you have to increase the quantity of the selected product
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            selectedProduct.quantity = selectedProduct.quantity + 1;
            newCart = [...rest, selectedProduct];
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
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
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/orders'>
                        <button className='order-btn'><span className='btn-title'>Review Order</span></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;