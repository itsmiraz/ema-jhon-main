import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewOrder from '../ReviewOrder/ReviewOrder';

const Order = () => {
    const { initialCart } = useLoaderData()

    const [cart, setcart] = useState(initialCart);
    const clearCart = () => {
        setcart([])
        deleteShoppingCart();
    }
    const handleClick = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setcart(remaining)
        removeFromDb(id)
    }

    return (
        <div>
            <div className='shop'>
                <div className="orders-container">

                    {
                        cart.map(product => <ReviewOrder
                            key={product.id}
                            product={product}
                            handleClick={handleClick}
                        ></ReviewOrder>)
                    }


                </div>
                <div className="order-summry">
                    <Cart clearCart={clearCart} cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;