import { products } from './data.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productsId = parseInt(urlParams.get('id'));

    const product = products.find(b => b.id === productsId);

    if (product) {
        displayproductsDetails(product);
    } else {
        console.error('продукт не найдена');
    }
    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            if (isLoggedIn()) {
                addToCart(product);
                alert('Товар добавлена в список покупок!');
            } else {
                alert('Пожалуйста, авторизуйтесь, чтобы добавить товар в список покупок.');
            }
        });
    }
});

function displayproductsDetails(product) {
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.title;
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-genre').textContent = product.category;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-stock').textContent = product.availability;
    document.getElementById('product-fullDescription').textContent = product.description;
}