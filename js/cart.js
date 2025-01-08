document.addEventListener('DOMContentLoaded', () => {
  const shoppingListModal = document.getElementById('shopping-list-modal');
  const shoppingListItemsContainer = document.getElementById('shopping-list-items');
  const feedbackModal = document.getElementById('feedback-modal');
  const feedbackSubmitBtn = document.getElementById('feedback-submit-btn');
  const feedbackMessageTextarea = document.getElementById('feedback-message');
  const productDetailsPage = document.querySelector('.product-details');
  const authLinks = document.getElementById('auth-links');
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

 function setupEventListeners() {
      const shoppingListBtn = document.getElementById('shopping-list-btn');
     if(shoppingListBtn){
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
       if(productDetailsPage && localStorage.getItem('isLoggedIn') === 'true'){
           const addToCartBtn = document.getElementById('add-to-cart-btn')
             addToCartBtn.addEventListener('click', () => {
               const productDetails = getCurrentProduct()
                if (productDetails && !cart.includes(productDetails.id)) {
                   cart.push(productDetails.id);
                }
                 localStorage.setItem('cart', JSON.stringify(cart));
              });
     }
 }
 if(authLinks){
     setupEventListeners();
          feedbackSubmitBtn.addEventListener('click', () => {
              const message = feedbackMessageTextarea.value;
            feedbackModal.style.display = 'none';
             feedbackMessageTextarea.value = '';
          alert('Сообщение отправлено');
     });
 }
   if (shoppingListModal && localStorage.getItem('isLoggedIn') === 'true'){
        renderShoppingList();
   }
   function renderShoppingList() {
       shoppingListItemsContainer.innerHTML = '';
       cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
      cart.forEach((productId, index) => {
           const product = products.find(p => p.id === productId);
             if(product){
                   const listItem = document.createElement('li');
                    listItem.textContent = `${product.title} - ${product.price}`;
                  const removeButton = document.createElement('button');
                     removeButton.textContent = 'Удалить';
                    removeButton.onclick = () => {
                      cart.splice(index, 1);
                         localStorage.setItem('cart', JSON.stringify(cart));
                        renderShoppingList();
                };
                     listItem.appendChild(removeButton);
                    shoppingListItemsContainer.appendChild(listItem);
             }
       });
  }
  function getCurrentProduct(){
      return JSON.parse(localStorage.getItem('currentProduct'))
 }
});