import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css'


const Cart = ({ cart, clearCart }) => {
    let shipping = 0;
    let quantity = 0;
    let total = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        shipping = (shipping + product.shipping) * product.quantity;
        total = (total + product.price) * product.quantity;

    }
    let grandTotal = total + shipping;
    return (
        <div className='cart'>
            <h2>
                Order Summury
            </h2>
            <p>
                Selected Items : {quantity}
            </p>
            <p>
                Total : {total}
            </p>
            <p>
                Shipping :{shipping}
            </p>
            <h3>
                GrandTotal :{grandTotal}
            </h3>
            <button onClick={clearCart}>
                Clear Cart
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cart;