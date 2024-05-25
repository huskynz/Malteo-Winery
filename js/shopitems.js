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
                <p class="product-price">${product.price}</p>
                <button class="read-description">Read Description</button>
                <button class="add-to-cart">Add to cart</button>
            `;
            productGrid.appendChild(productItem);

            // Add event listener to the "Read Description" button
            productItem.querySelector('.read-description').addEventListener('click', () => {
                document.getElementById('modal-text').textContent = product.description;
                document.getElementById('myModal').style.display = "block";
            });

            // Add event listener to the "Add to cart" button
            productItem.querySelector('.add-to-cart').addEventListener('click', () => {
                addToCart(product);
            });
        });

        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
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