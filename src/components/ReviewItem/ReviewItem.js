import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product }) => {
    console.log(product)
    const { img, name, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details-container">
                <div className='review-details'>
                    <h4>{name}</h4>
                    <p>Price: {price}</p>
                    <small><p>Shipping: {shipping}</p></small>
                    <p>Quantity: {quantity}</p>

                </div>
                <div className='delete-btn'>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;