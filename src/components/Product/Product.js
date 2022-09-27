import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className="product-info">
                <h2>{name}</h2>
                <p><strong>Price: ${price}</strong></p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <p onClick={() => handleAddToCart(product)} className='addToCart'><strong className='add-to-cart'>Add to Cart</strong>
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </p>
        </div>
    );
};

export default Product;