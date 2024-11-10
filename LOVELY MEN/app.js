let cart = [];

// Add product to cart
function addToCart(productName, productPrice) {
    let product = { name: productName, price: productPrice };
    cart.push(product);
    alert(`${productName} added to cart!`);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
}

// Load cart items and calculate total on cart page
function loadCart() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    
    cartContainer.innerHTML = '';
    let totalAmount = 0;
    
    cartItems.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `<span>${item.name}</span><span>₹${item.price}</span>`;
        cartContainer.appendChild(itemElement);
        totalAmount += item.price;
    });

    totalAmountElement.textContent = totalAmount;
}

// Run loadCart function when the cart page is opened
if (window.location.pathname.endsWith('cart.html')) {
    loadCart();
}
