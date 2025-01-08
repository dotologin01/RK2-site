// Глобальная переменная для хранения ID товаров в корзине
let cartItems = [];

document.addEventListener('DOMContentLoaded', () => {
  const shoppingListModal = document.getElementById('shopping-list-modal');
  const shoppingListItemsContainer = document.getElementById('shopping-list-items');
  const feedbackModal = document.getElementById('feedback-modal');
  const feedbackSubmitBtn = document.getElementById('feedback-submit-btn');
  const feedbackMessageTextarea = document.getElementById('feedback-message');
  const authLinks = document.getElementById('auth-links');
    const productDetailsPage = document.querySelector('.product-details');
      const goToCartButton = document.getElementById('go-to-cart-btn');
  let cartProductGrid = document.getElementById('cart-product-grid');
    let cartEmptyMessage = document.getElementById('cart-empty-message');
    let cartTotalContainer = document.getElementById('cart-total-container');
    let cartTotalDisplay = document.getElementById('cart-total');
  const checkoutForm = document.getElementById('checkout-form');

  function setupEventListeners() {
      const shoppingListBtn = document.getElementById('shopping-list-btn');
      if (shoppingListBtn) {
          shoppingListBtn.addEventListener('click', () => {
              shoppingListModal.style.display = 'block';
              renderShoppingList();
          });
      }
      const feedbackBtn = document.getElementById('feedback-btn');
        if(feedbackBtn){
             feedbackBtn.addEventListener('click', () => {
                 feedbackModal.style.display = 'block';
             });
        }
    if (productDetailsPage && localStorage.getItem('isLoggedIn') === 'true') {
        const addToCartBtn = document.getElementById('add-to-cart-btn')
        addToCartBtn.addEventListener('click', () => {
             const productDetails = getCurrentProduct();
           if(productDetails && !cartItems.includes(productDetails.id)){
                cartItems.push(productDetails.id);
             }
          });
      }
  }
  if (authLinks) {
        setupEventListeners();
      feedbackSubmitBtn.addEventListener('click', () => {
          const message = feedbackMessageTextarea.value;
           feedbackModal.style.display = 'none';
           feedbackMessageTextarea.value = '';
          alert('Сообщение отправлено');
      });
      goToCartButton.addEventListener('click', () => {
         window.location.href = 'shop.html';
        shoppingListModal.style.display = 'none';
      });
  }

      if(cartProductGrid){
          renderCartProducts();
      }


      if (checkoutForm){
        checkoutForm.addEventListener('submit', function (event) {
            event.preventDefault(); // предотвращаем перезагрузку страницы

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
           alert('Спасибо за заказ');
           cartItems = [];
              renderCartProducts();
            window.location.href = 'index.html';
        });
    }

  function renderShoppingList() {
     shoppingListItemsContainer.innerHTML = '';
       if(cartItems.length === 0){
           const listItem = document.createElement('li');
           listItem.textContent = "Корзина пуста";
           shoppingListItemsContainer.appendChild(listItem);
       }else{
           cartItems.forEach((productId, index) => {
             const product = products.find(p => p.id === productId);
             if (product) {
                  const listItem = document.createElement('li');
                 listItem.textContent = `${product.title} - ${product.price}`;
                 const removeButton = document.createElement('button');
                   removeButton.textContent = 'Удалить';
                 removeButton.onclick = () => {
                     cartItems.splice(index, 1);
                       renderShoppingList();
                };
                listItem.appendChild(removeButton);
                shoppingListItemsContainer.appendChild(listItem);
             }
         });
     }
  }

    function getCurrentProduct() {
      return JSON.parse(localStorage.getItem('currentProduct'))
    }


   function renderCartProducts() {
         if (cartItems.length > 0) {
             cartProductGrid.innerHTML = '';
             cartEmptyMessage.style.display = 'none';
             cartTotalContainer.style.display = 'block';
            let totalPrice = 0;
      cartItems.forEach(productId => {
             const product = products.find(p => p.id === productId);
               if (product) {
                    totalPrice += parseFloat(product.price.replace(/\D/g, ''));
                    const productCard = document.createElement('div');
                 productCard.classList.add('product-card');
                    productCard.innerHTML = `
                        <img src="${product.image}" alt="${product.title}">
                        <h3>${product.title}</h3>
                       <p>Цена: ${product.price}</p>
                       <div class="product-buttons">
                        <button class="remove-from-cart-btn" data-product-id="${product.id}">Удалить</button>
                      </div>
                    `;
                    cartProductGrid.appendChild(productCard);
                }
         });
              cartTotalDisplay.textContent = totalPrice.toFixed(2);
        } else{
             cartProductGrid.innerHTML = '';
             cartEmptyMessage.style.display = 'block';
            cartTotalContainer.style.display = 'none';
         }
      cartProductGrid.addEventListener('click', (event) => {
           if (event.target.classList.contains('remove-from-cart-btn')) {
             const productIdToRemove = parseInt(event.target.getAttribute('data-product-id'));
                cartItems = cartItems.filter(productId => productId !== productIdToRemove);
               renderCartProducts();
             }
         });
    }
});