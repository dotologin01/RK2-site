// Вспомогательная функция для получения массива пользователей из localStorage
function getUsers() {
    const usersData = localStorage.getItem('users');
    return usersData ? JSON.parse(usersData) : []; // Если данных нет, возвращаем пустой массив
}

// Добавление книги в список покупок
function addToCart(products) {
    let cart = getCart();
    if (!cart.some(cartItem => cartItem.id === products.id)) {
        cart.push(products);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }
}

// Удаление книги из списка покупок
function removeFromCart(productsId) {
    let cart = getCart();
    const index = cart.findIndex(products => products.id === productsId);
    if (index > -1) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }
}

// Получение списка покупок из localStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}