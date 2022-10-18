import React from 'react';
import './Cart.css'
const Cart = ({ cart, clearCart, children }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + +tax;
    return (
        <div className="order-summary">
            <h4 className='title'>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Fee: ${shipping}</p>
            <p>Tax: ${tax} <small>(10%) </small></p>
            <hr />
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <div className='cart-btn'>
                <button onClick={clearCart} className='clear-btn'><span className='btn-title'>Clear Cart</span> </button>
                {children}
            </div>
        </div>
    );
};

export default Cart;