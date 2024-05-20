fetch('/json/shop.json')
    .then(response => response.json())
    .then(products => {
        const productGrid = document.querySelector('.product-grid');
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="Product Image" class="product-image">
                <h2 class="product-name">${product.name}</h2>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${product.price}</p>
                <button class="add-to-cart">Add to cart</button>
            `;
            productGrid.appendChild(productItem);

             // Add event listener to the "Add to cart" button
            productItem.querySelector('.add-to-cart').addEventListener('click', () => {
                addToCart(product);
            });
        });
    });

function addToCart(product) {
    // Add the product to the cartItems array
    cartItems.push(product.name);

    // Update the cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Add the cart item to the cart box
    addCartItemToCartBox(product.name);

    // Update the cart text with the total number of items
    updateCartText();
}

function updateCartText() {
    const cartText = document.querySelector('.cart-text');
    cartText.textContent = `Total items in cart: ${cartItems.length}`;
}