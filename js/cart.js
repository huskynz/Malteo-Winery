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

    // Update the cart summary
    updateCartSummary();
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
        var price = parseFloat(parts[1]);
        if (isNaN(price)) {
            console.error(`Invalid price: ${parts[1]}`);
            return total;
        }
        return total + price;
    }, 0);
    cartSummaryDiv.textContent = `Total Items: ${totalItems}, Total Price: $${totalPrice.toFixed(2)}`;
}

function updateCartSummary() {
    fetch('/json/shop.json')
        .then(response => response.json())
        .then(data => {
            var totalItems = cartItems.length;
            var totalPrice = cartItems.reduce(function(total, item) {
                var parts = item.split(' - ');
                if (parts.length < 2) {
                    console.error(`Invalid item string: ${item}`);
                    return total;
                }
                // Find the item in the data array
                var itemData = data.find(d => d.name === parts[0]);
                if (!itemData) {
                    console.error(`Item not found in data: ${parts[0]}`);
                    return total;
                }
                // Use the price from the data array
                var price = parseFloat(itemData.price);
                if (isNaN(price)) {
                    console.error(`Invalid price: ${itemData.price}`);
                    return total;
                }
                return total + price;
            }, 0);
            cartSummaryDiv.textContent = `Total Items: ${totalItems}, Total Price: $${totalPrice.toFixed(2)}`;
        })
        .catch(error => console.error('Error:', error));
}