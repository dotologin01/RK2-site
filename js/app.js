document.addEventListener('DOMContentLoaded', function () {
    const productGrid = document.getElementById('product-grid');
    const cart = [];


    function renderProducts() {
      products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.setAttribute('data-product-id', product.id);
            productCard.innerHTML = `
              <img src="${product.image}" alt="${product.title}">
              <h3>${product.title}</h3>
              <p>Цена: ${product.price}</p>
               <div class="product-buttons">
                   <button class="view-product-btn">Подробнее</button>
                    <button class="add-to-cart-btn">Купить</button>
                </div>
              `;

            productGrid.appendChild(productCard);
              // Event listener for card hover
            productCard.addEventListener('mouseenter', () => {
                productCard.style.borderColor = 'purple';
            });
            productCard.addEventListener('mouseleave', () => {
                productCard.style.borderColor = '#ddd'; //reset border color
            });

            // Event listener for 'Подробнее' button
            const viewButton = productCard.querySelector('.view-product-btn');
              viewButton.addEventListener('click', () => {
                window.location.href = `product.html?id=${product.id}`; // Navigate to product page with product ID
              });

            // Event listener for 'Купить' button
              const buyButton = productCard.querySelector('.add-to-cart-btn');
                 buyButton.addEventListener('click', () => {
                      addToCart(product.id);
                 });
        });
    }
       function addToCart(productId) {
           const productToAdd = products.find(product => product.id === productId);

             if (productToAdd) {
                 cart.push(productToAdd);
                 console.log('Product added to cart:', productToAdd);
              // обновление списка корзины в модальном окне
               updateShoppingCartModal();
           }
       }
       
    function updateShoppingCartModal() {
    const shoppingListItems = document.getElementById('shopping-list-items');
    shoppingListItems.innerHTML = ''; // Очищаем список

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.title} - ${item.price}`;
        shoppingListItems.appendChild(listItem);
    });

      if(cart.length === 0){
             const listItem = document.createElement('li');
             listItem.textContent = "Корзина пуста";
              shoppingListItems.appendChild(listItem);
         }
}
    renderProducts(); // Загрузить товары на страницу
    //modal
      const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
     const shoppingListModal = document.getElementById('shopping-list-modal');
    const feedbackModal = document.getElementById('feedback-modal');

    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
     const shoppingListBtn = document.getElementById('shopping-list-btn');
     const feedbackBtn = document.getElementById('feedback-btn');


    const loginClose = loginModal.querySelector('.close');
    const registerClose = registerModal.querySelector('.close');
    const shoppingListClose = shoppingListModal.querySelector('.close');
    const feedbackClose = feedbackModal.querySelector('.close');

    const registerBtn = document.getElementById('register-btn');
     // modal

     // модальное окно авторизации
      loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });
    loginClose.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // модальное окно регистрации
    registerBtn.addEventListener('click', () => {
          loginModal.style.display = 'none'; // скрывает окно авторизации
         registerModal.style.display = 'block';
    });
    registerClose.addEventListener('click', () => {
        registerModal.style.display = 'none';
    });
    // модальное окно список покупок
      shoppingListBtn.addEventListener('click', () => {
        shoppingListModal.style.display = 'block';
         updateShoppingCartModal() // обновляем модальное окно каждый раз когда открываем
    });
    shoppingListClose.addEventListener('click', () => {
         shoppingListModal.style.display = 'none';
    });
    // модальное окно обратной связи
     feedbackBtn.addEventListener('click', () => {
        feedbackModal.style.display = 'block';
    });
     feedbackClose.addEventListener('click', () => {
        feedbackModal.style.display = 'none';
    });
   
     window.addEventListener('click', (event) => {
           if (event.target === loginModal) {
            loginModal.style.display = 'none';
           }
           if (event.target === registerModal) {
            registerModal.style.display = 'none';
           }
             if (event.target === shoppingListModal) {
            shoppingListModal.style.display = 'none';
           }
              if(event.target === feedbackModal){
                feedbackModal.style.display = 'none';
             }
        });
});