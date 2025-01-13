document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');
    // Проверяем, есть ли cartItemsList на странице
    if (cartItemsList) {
        displayCartItems();
    }
    // Проверяем, есть ли clearCartButton на странице
    if (clearCartButton) {
        clearCartButton.addEventListener('click', clearCart);
    }
});



// Очистка списка покупок
function clearCart() {
    localStorage.removeItem('cart');
    displayCartItems(); // Обновляем отображение списка после очистки
}

// Отображение списка покупок на странице cart.html
function displayCartItems() {
    const cartItemsList = document.getElementById("cart-items");
    if (!cartItemsList) return;

    const cart = getCart();
    cartItemsList.innerHTML = "";

    if (cart.length === 0) {
        const emptyCartMessage = document.createElement("li");
        emptyCartMessage.textContent = "Список покупок пуст.";
        cartItemsList.appendChild(emptyCartMessage);
    } else {
        cart.forEach((products) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
      <div class="products-info">
        <img src="${products.image}" alt="${products.title}">
        <div>
          <h4>${products.title}</h4>
          <p>Цена: ${products.price} руб.</p>
        </div>
      </div>
      <button class="remove-from-cart" data-products-id="${products.id}">Удалить</button>
      `;

            cartItemsList.appendChild(listItem);

            const removeButton = listItem.querySelector(".remove-from-cart");
            removeButton.addEventListener("click", () => {
                removeFromCart(products.id);
                displayCartItems();
            });
        });
    }
}