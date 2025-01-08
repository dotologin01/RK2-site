import { products } from './products.js';

document.addEventListener('DOMContentLoaded', () => {
    const authLinks = document.getElementById('auth-links');
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const loginCloseBtn = loginModal.querySelector('.close');
    const registerCloseBtn = registerModal.querySelector('.close');
    const loginSubmitBtn = document.getElementById('login-submit-btn');
    const registerSubmitBtn = document.getElementById('register-submit-btn');
    const registerBtn = document.getElementById('register-btn')
    const productDetailsPage = document.querySelector('.product-details');
    const shoppingListModal = document.getElementById('shopping-list-modal');
    const shoppingListCloseBtn = shoppingListModal.querySelector('.close');
    const shoppingListItemsContainer = document.getElementById('shopping-list-items');
    const feedbackModal = document.getElementById('feedback-modal');
    const feedbackCloseBtn = feedbackModal.querySelector('.close');
    const feedbackSubmitBtn = document.getElementById('feedback-submit-btn');
    const feedbackMessageTextarea = document.getElementById('feedback-message');
    let currentSlide = 0;

     let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
     if (isLoggedIn){
        updateAuthUI();
     }

     if(document.querySelector('.slider')){
          const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const slideWidth = slides[0].offsetWidth;

        function showSlide(slideIndex) {
            slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
            currentSlide = slideIndex
        }

         setInterval(() => {
             currentSlide = (currentSlide + 1) % slides.length
             showSlide(currentSlide);
        }, 3000);
     }

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

     registerBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
    });

    loginCloseBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });
    registerCloseBtn.addEventListener('click', () => {
         registerModal.style.display = 'none';
    });
    shoppingListCloseBtn.addEventListener('click', () => {
       shoppingListModal.style.display = 'none';
    });
    feedbackCloseBtn.addEventListener('click', () => {
      feedbackModal.style.display = 'none';
    });

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        isLoggedIn = false;
        updateAuthUI();
    });

    loginSubmitBtn.addEventListener('click', () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

         const users = JSON.parse(localStorage.getItem('users') || '[]');
         const user = users.find(user => user.username === username && user.password === password);

         if (user){
             localStorage.setItem('isLoggedIn', 'true');
             localStorage.setItem('currentUser', JSON.stringify(user));
             isLoggedIn = true;
             loginModal.style.display = 'none';
              updateAuthUI();
             if (document.querySelector('.product-details')){
                  const shoppingList = localStorage.getItem('shoppingList') ? JSON.parse(localStorage.getItem('shoppingList')) : [];
                 const addToCartBtn = document.getElementById('add-to-cart-btn')
                  addToCartBtn.addEventListener('click', () => {
                  const productDetails = getCurrentProduct()
                      shoppingList.push(productDetails)
                      localStorage.setItem('shoppingList', JSON.stringify(shoppingList))
                  })
             }
         } else{
             alert('Неверное имя пользователя или пароль')
         }
    });
    registerSubmitBtn.addEventListener('click', () => {
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
       
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        const existingUser = users.find(user => user.username === username);

         if (existingUser) {
           alert('Пользователь с таким именем уже существует');
          return;
         }

       users.push({username:username, password: password});
         localStorage.setItem('users', JSON.stringify(users));
          registerModal.style.display = 'none';
          alert('Регистрация успешна');
    })


    window.addEventListener('click', (event) => {
         if (event.target === loginModal) {
             loginModal.style.display = 'none';
         }
        if(event.target === registerModal){
             registerModal.style.display = 'none';
        }
         if (event.target === shoppingListModal) {
            shoppingListModal.style.display = 'none';
         }
         if(event.target === feedbackModal) {
             feedbackModal.style.display = 'none';
        }
    });


    function updateAuthUI() {
        if (isLoggedIn) {
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'inline';
            let shoppingListBtn = document.createElement('a')
            shoppingListBtn.id='shopping-list-btn'
            shoppingListBtn.innerText = 'Список покупок';
             shoppingListBtn.href = '#';
            authLinks.appendChild(shoppingListBtn);

            let feedbackBtn = document.createElement('a');
             feedbackBtn.id = 'feedback-btn';
             feedbackBtn.innerText= 'Обратная связь'
              feedbackBtn.href= '#';
               authLinks.appendChild(feedbackBtn)

            shoppingListBtn.addEventListener('click', () => {
                shoppingListModal.style.display = 'block';
                renderShoppingList();
            });
            feedbackBtn.addEventListener('click', () => {
               feedbackModal.style.display = 'block';
            });
           feedbackSubmitBtn.addEventListener('click', () => {
               const message = feedbackMessageTextarea.value;
                console.log('Сообщение обратной связи:', message);
                feedbackModal.style.display = 'none';
                feedbackMessageTextarea.value = '';
                alert('Сообщение отправлено')
           })

        } else {
            loginBtn.style.display = 'inline';
            logoutBtn.style.display = 'none';
             const shoppingListBtn = document.getElementById('shopping-list-btn')
             if(shoppingListBtn){
                 shoppingListBtn.remove();
             }
             const feedbackBtn = document.getElementById('feedback-btn');
             if(feedbackBtn){
                 feedbackBtn.remove();
             }
        }
    }
      function renderShoppingList() {
        shoppingListItemsContainer.innerHTML = ''; 
        const shoppingList = localStorage.getItem('shoppingList') ? JSON.parse(localStorage.getItem('shoppingList')) : [];

        shoppingList.forEach((item, index) => {
              const listItem = document.createElement('li');
                listItem.textContent = item.title + ' - ' + item.price;
             const removeButton = document.createElement('button');
               removeButton.textContent = 'Удалить';
             removeButton.onclick = () => {
                  shoppingList.splice(index, 1);
                    localStorage.setItem('shoppingList', JSON.stringify(shoppingList))
                    renderShoppingList();
               };
                listItem.appendChild(removeButton);
                shoppingListItemsContainer.appendChild(listItem);
        });
    }

    if (document.querySelector('.product-list')) {
            renderProducts();
    }
     function renderProducts() {
        const productTableBody = document.getElementById('product-table-body');

        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                 <td><img src="${product.image}" alt="${product.title}"></td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.description}</td>
                <td>
                    <button class="view-product-btn" data-product-id="${product.id}">Подробнее</button>
                </td>
            `;
           productTableBody.appendChild(row);
        });

         const viewButtons = document.querySelectorAll('.view-product-btn')
         viewButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                  const productId = e.target.dataset.productId
                  const product = products.find(product => product.id == productId);

                 if (product) {
                     localStorage.setItem('currentProduct', JSON.stringify(product))
                       window.location.href = `product.html?id=${product.id}`;
                   }
                });
         })
    }
    if (productDetailsPage) {
         const currentProduct = getCurrentProduct()
         if(currentProduct) {
           document.getElementById('product-image-details').src = currentProduct.image;
           document.getElementById('product-title-details').innerText = currentProduct.title;
           document.getElementById('product-price-details').innerText = currentProduct.price;
           document.getElementById('product-availability-details').innerText = currentProduct.availability + 'шт';
           document.getElementById('product-description-details').innerText = currentProduct.description;
           const specsList = document.getElementById('product-specs-details');
           currentProduct.specs.forEach(spec => {
                const li = document.createElement('li');
                li.innerText = spec;
               specsList.appendChild(li)
            });
        }
    }
     function getCurrentProduct(){
        return JSON.parse(localStorage.getItem('currentProduct'))
     }
         const viewProductButtons = document.querySelectorAll('.view-product-btn');
      viewProductButtons.forEach(button => {
         button.addEventListener('click', (event) => {
             const productId = event.target.closest('.product-card').getAttribute('data-product-id');
             window.location.href = `product.html?id=${productId}`;
        });
      });
});