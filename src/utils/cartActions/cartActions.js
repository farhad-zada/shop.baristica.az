// add empty cart array if there are no cart in local storage
const addCart = () => {
    let cart = localStorage.getItem('cart')
    if (!cart) {
        cart = []
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    return cart;
}
// add product to cart
const addToCart = (e, productToCart) => {
    e.stopPropagation();

    const selectedOption = productToCart.selectedOption;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the product in the cart with the same id and selected option
    const productIndex = cart.findIndex(product =>
        product._id === productToCart._id &&
        product.selectedOption._id === selectedOption._id
    );

    if (productIndex !== -1) {
        // If found, update the cart count of the existing product
        cart[productIndex].cartCount += productToCart.cartCount;
    } else {
        // If not found, add the new product to the cart
        cart.push(productToCart);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
};

// delete product from cart
const deleteFromCart = (productFromCart) => {
    const selectedOption = productFromCart.selectedOption;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the product in the cart with the same id and selected option
    cart = cart.filter(product =>
        !(product._id === productFromCart._id &&
            product.selectedOption._id === selectedOption._id)
    );

    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
}



export { addCart, addToCart, deleteFromCart }