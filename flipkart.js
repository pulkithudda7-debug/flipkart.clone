const products = [
    {
        id: 1,
        title: "Samsung Galaxy S25",
        price: 81999,
        image: "s25.avif"
    },
    {
        id: 2,
        title: "Nike Men's Shoes",
        price: 3299,
        image: "nike.avif"
    },
    {
        id: 3,
        title: "Sony 43\" LED TV",
        price: 39999,
        image: "sonyledtv.webp"
    },
    {
        id: 4,
        title: "Pulsar 125",
        price: 82000,
        image: "pulsar.webp"
    }
];

let cart = [];

function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}">
                <div class="product-title">${product.title}</div>
                <div class="product-price">₹${product.price}</div>
                <button class="add-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

function toggleCart() {
    const cartPopup = document.getElementById("cart");
    cartPopup.style.display = cartPopup.style.display === "block" ? "none" : "block";
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item.title} - ₹${item.price}</li>`;
    });
}

document.addEventListener("DOMContentLoaded", renderProducts);
