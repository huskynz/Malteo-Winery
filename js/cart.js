var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Get the cart items div
var cartItemsDiv = document.querySelector('#cart-items');
var messageDiv = document.querySelector('#cart-message');
var cartSummaryDiv = document.querySelector('#cart-summary');

// Function to add cart item to cart box
function addCartItemToCartBox(item) {
    var newItemDiv = document.createElement('div');
    newItemDiv.textContent = item;

    // Create a remove button for the new item
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        // Remove the item from the cart items array
        var index = cartItems.indexOf(item);
        if (index !== -1) {
            cartItems.splice(index, 1);
        }

        // Update the cart items in the local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Remove the item div from the cart box
        cartItemsDiv.removeChild(newItemDiv);

        // Update the cart summary
        updateCartSummary();

        // If there are no items in the cart, show the 'No items in the cart' message
        if (cartItems.length === 0) {
            messageDiv.classList.remove('hidden');
        }
    });

    newItemDiv.appendChild(removeButton);
    cartItemsDiv.appendChild(newItemDiv);
}

// Function to update cart summary
function updateCartSummary() {
    console.log(cartItems);

    var totalItems = cartItems.length;
    var totalPrice = cartItems.reduce(function(total, item) {
        var parts = item.split(' - ');
        if (parts.length < 2) {
            console.error(`Invalid item string: ${item}`);
            return total;
        }
        var price = parseFloat(parts[1].replace('$', ''));
        if (isNaN(price)) {
            console.error(`Invalid price: ${parts[1]}`);
            return total;
        }
        return total + price;
    }, 0);
    cartSummaryDiv.textContent = `Total Items: ${totalItems}, Total Price: $${totalPrice.toFixed(2)}`;
}

// Update the cart box with the loaded cart items
if (cartItems.length === 0) {
    messageDiv.classList.remove('hidden');
} else {
    messageDiv.classList.add('hidden');
    cartItems.forEach(addCartItemToCartBox);
    updateCartSummary();
}

var buttons = document.querySelectorAll('.product-item button');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the product name and price
        var productName = button.parentElement.querySelector('.product-name').textContent;
        var productPrice = button.parentElement.querySelector('.product-price').textContent.replace('$', '');

        // Add the new item to the cart items array
        var newItem = `${productName} - ${productPrice}`;
        cartItems.push(newItem);

        // Update the cart items in the local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Add the new item to the cart box
        addCartItemToCartBox(newItem);

        // Update the cart summary
        updateCartSummary();

        // Hide the 'No items in the cart' message
        messageDiv.classList.add('hidden');
    });
});