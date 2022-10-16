import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [cart, addtoCartHandle] = useState([])

    const clearCart = () => {
        addtoCartHandle([])
        deleteShoppingCart();
    }

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            // console.log(selectedProduct)
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            console.log(selectedProduct)
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]

        }
        addtoCartHandle(newCart)
        addToDb(selectedProduct.id)
    }
    const products = useLoaderData()
    useEffect(() => {
        const storedCart = getStoredCart()
        console.log(storedCart)
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);



            }
            addtoCartHandle(savedCart)
        }
    }, [products])
    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        addToCart={addToCart}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="order-summry">
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;