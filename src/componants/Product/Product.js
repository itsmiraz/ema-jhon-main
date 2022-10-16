import React from 'react';
import './Product.css'
const Product = (props) => {
    const { addToCart } = props;
    const { img, name, price, ratings, seller } = props.product;
    // console.log(props.product)
    return (
        <div className='product'>
            <div className="info">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Price:${price}</h4>
                <p>Seller:{seller}</p>
                <p>Ratings:{ratings}Star</p>
            </div>
            <button onClick={() => addToCart(props.product)}>
                <p> Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;