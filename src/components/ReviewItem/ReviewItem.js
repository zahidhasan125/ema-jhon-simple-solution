import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handleRemoveItem }) => {
    const {id, img, name, price, shipping, quantity } = product;
    const itemTotal = price * quantity;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details-container">
                <div className='review-details'>
                    <h4>{name}</h4>
                    <p>Price: <strong className='price'>${price}</strong></p>
                    <small><p>Quantity: {quantity}</p></small>
                    <small><p>Total: {itemTotal}</p></small>
                    <p>Shipping: ${shipping}</p>

                </div>
                <div className='delete-btn'>
                    <button
                       onClick={()=>handleRemoveItem(id)} className='button-area'><FontAwesomeIcon className='remove-icon' icon={faTrashCan}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;