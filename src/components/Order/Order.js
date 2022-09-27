import React from 'react';
import './Order.css'
const Order = ({ cart }) => {
    
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + +tax;
    return (
        <div className="order-summary">
                <h4 className='title'>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Fee: ${shipping}</p>
                <p>Tax: ${tax} <small>(10%) </small></p>
                <hr />
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            </div>
    );
};

export default Order;