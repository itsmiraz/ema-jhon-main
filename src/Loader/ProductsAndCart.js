import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCart = async () => {
    // get data
    const productData = await fetch('products.json');
    const products = await productData.json();

    // get cart
    const savedCart = getStoredCart();

    // Previous Cart 
    const initialCart = [];
    for (const id in savedCart) {
        const addedProducts = products.find(product => product.id === id);
        if (addedProducts) {
            // LocalStorage Quantity
            const quantity = savedCart[id];

            // Product er Quantity
            addedProducts.quantity = quantity;

            initialCart.push(addedProducts)
        }
    }
    return { products, initialCart };
}