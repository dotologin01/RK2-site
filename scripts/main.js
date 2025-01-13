import { products } from './data.js';

// Обработчик событий после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const featuredproductsGrid = document.getElementById('featured-productss-grid');
    const productsTableBody = document.getElementById('products-table-body');
    const cheapFilter = document.querySelector('[data-filter="cheap"]');
    const expensiveFilter = document.querySelector('[data-filter="expensive"]');
    const allFilter = document.querySelector('[data-filter="all"]');
    const authForm = document.getElementById('auth-form');
    const logoutButton = document.getElementById('logout-button');
    const cartLink = document.getElementById('cart-link');
    const registerButton = document.getElementById('register-button');
    if (registerButton) {
        registerButton.addEventListener('click', () => {
            window.location.href = 'register.html';
        });
    }
    // Отрисовка популярных книг на главной странице
    if (featuredproductsGrid) {
        renderFeaturedproducts(featuredproductsGrid);
    }

    // Отрисовка всех книг в магазине
    if (productsTableBody) {
        renderproducts(products, productsTableBody);
    }

    // Фильтрация книг в магазине
    if (cheapFilter) {
        cheapFilter.addEventListener('click', () => {
            const sortedproducts = [...products].sort((a, b) => a.price - b.price);
            renderproducts(sortedproducts, productsTableBody);
        });
    }

    if (expensiveFilter) {
        expensiveFilter.addEventListener('click', () => {
            const sortedproducts = [...products].sort((a, b) => b.price - a.price);
            renderproducts(sortedproducts, productsTableBody);
        });
    }

    if (allFilter) {
        allFilter.addEventListener('click', () => {
            renderproducts(products, productsTableBody);
        });
    }
    // Проверяем статус авторизации при загрузке страницы
    checkAuthStatus();

    // Обработчик формы авторизации
    if (authForm) {
        authForm.addEventListener('submit', handleAuth);
    }

    // Обработчик кнопки выхода
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }
});

// Функции для отрисовки книг
function renderFeaturedproducts(container) {
    // Выбираем случайные 3 книги
    const featuredproducts = getRandomproducts(products, 3);
    featuredproducts.forEach(products => {
        const productsElement = createproductsElement(products);
        container.appendChild(productsElement);
    });
}

function renderproducts(products, container) {
    container.innerHTML = '';
    products.forEach(products => {
        const row = createproductsRow(products);
        container.appendChild(row);
    });
}

function createproductsElement(products) {
    const productsElement = document.createElement('div');
    productsElement.classList.add('products-card');
    productsElement.innerHTML = `
    <img src="${products.image}" alt="${products.title}">
    <div class="products-details">
        <h3><a href="product.html?id=${products.id}">${products.title}</a></h3>
        <p>Автор: ${products.author}</p>
        <p>Цена: ${products.price} руб.</p>
        <p>${products.description}</p>
        <button class="add-to-cart-button" data-products-id="${products.id}">В список</button>
    </div>
`;
    // Добавляем обработчик для кнопки "В список"
    const addToCartButton = productsElement.querySelector('.add-to-cart-button');
    addToCartButton.addEventListener('click', () => {
        handleClick(products) // Здесь меняем на products
    });

    // Добавляем обработчик клика по названию книги
    const productsTitleLink = productsElement.querySelector('h3 a');
    productsTitleLink.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
        const productsId = products.id;
        window.location.href = `product.html?id=${productsId}`; // Перенаправляем на страницу товара
    });

    return productsElement;
}

function createproductsRow(products) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td><img src="${products.image}" alt="${products.title}" id="table-image-product"></td>
    <td><a href="product.html?id=${products.id}">${products.title}</a></td>
    <td>${products.author}</td>
    <td>${products.price} руб.</td>
    <td>${products.description}</td>
    <td><button class="add-to-cart-button" data-products-id="${products.id}">В список</button></td>
`;
    // Добавляем обработчик для кнопки "В список"
    const addToCartButton = row.querySelector('.add-to-cart-button');
    addToCartButton.addEventListener('click', () => {
        handleClick(products) // Здесь меняем на products
    });

    // Добавляем обработчик клика по названию книги
    const productsTitleLink = row.querySelector('td a');
    productsTitleLink.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
        const productsId = products.id;
        window.location.href = `product.html?id=${productsId}`; // Перенаправляем на страницу товара
    });

    return row;
}
// Функция которая проверяет авторизацию и добавляет книгу
function handleClick(products) {
    if (isLoggedIn()) {
        addToCart(products); // Здесь меняем productsId.toString() на products
        alert('Книга добавлена в список покупок!');
    } else {
        alert('Пожалуйста, авторизуйтесь, чтобы добавить книгу в список покупок.');
    }
}

// Вспомогательная функция для выбора случайных книг
function getRandomproducts(products, count) {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

//слайдер
let slideIndex = 1;
showSlides(slideIndex);

// Вперед/назад
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Текущий слайд
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function removeFeedbackButton() {
    const feedbackLink = document.getElementById('feedback-link');
    if (feedbackLink && feedbackLink.parentElement) {
        feedbackLink.parentElement.removeChild(feedbackLink);
    }
}