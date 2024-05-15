// Load cart items from local storage when page loads
var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Update the cart box with the loaded cart items
cartItems.forEach(addCartItemToCartBox);

var buttons = document.querySelectorAll('.product-item button'); // select the 'Add to cart' buttons
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the product name and price
        var productName = button.parentElement.querySelector('.product-name').textContent;
        var productPrice = button.parentElement.querySelector('.product-price').textContent;

        // Add the new item to the cart items array
        var newItem = `${productName} - ${productPrice}`;
        cartItems.push(newItem);

        // Update the cart items in the local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Add the new item to the cart box
        addCartItemToCartBox(newItem);
    });
});

function addCartItemToCartBox(item) {
    // Create a new cart item
    var newItemElement = document.createElement('div');
    newItemElement.textContent = item;

    // Add a remove button to the new cart item
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-button';
    removeButton.addEventListener('click', function() {
        // Remove the cart item
        newItemElement.parentElement.removeChild(newItemElement);

        // Remove the item from the cart items array
        var itemIndex = cartItems.indexOf(item);
        if (itemIndex > -1) {
            cartItems.splice(itemIndex, 1);
        }

        // Update the cart items in the local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    });
    newItemElement.appendChild(removeButton);

    // Add the new item to the cart items div
    var cartItemsDiv = document.querySelector('#cart-items');
    cartItemsDiv.appendChild(newItemElement);
}