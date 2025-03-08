document.addEventListener("DOMContentLoaded", () => {
    const cartSection = document.querySelector(".cart");
    if (cart.length > 0) {
        cart.forEach(item => {
            const cartItemDiv = document.createElement("div");
            cartItemDiv.classList.add("cart-item");
            cartItemDiv.innerHTML = `
                <div>
                    <h2>${item.name}</h2>
                    <p>Color: ${item.selectedColor}</p>
                    <p>$${item.price}</p>
                </div>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartSection.appendChild(cartItemDiv);
        });
    } else {
        cartSection.innerHTML = "<p>Your cart is empty.</p>";
    }
});

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        location.reload();
    }
}

function checkout() {
    alert("Proceeding to checkout...");
}