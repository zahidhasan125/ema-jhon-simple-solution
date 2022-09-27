import React from 'react';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { img, name, price, seller, ratings, id } = product;
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className="product-info">
                <h2>{name}</h2>
                <p><strong>Price: ${price}</strong></p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <p onClick={() => handleAddToCart(product)} className='addToCart'><strong>Add to Cart</strong></p>
        </div>
    );
};

export default Product;