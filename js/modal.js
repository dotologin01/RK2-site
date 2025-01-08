document.addEventListener('DOMContentLoaded', () => {
   const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const loginCloseBtn = loginModal.querySelector('.close');
    const registerCloseBtn = registerModal.querySelector('.close');
    const loginSubmitBtn = document.getElementById('login-submit-btn');
    const registerSubmitBtn = document.getElementById('register-submit-btn');
      const registerBtn = document.getElementById('register-btn')
        const shoppingListModal = document.getElementById('shopping-list-modal');
        const shoppingListCloseBtn = shoppingListModal.querySelector('.close');
    const feedbackModal = document.getElementById('feedback-modal');
    const feedbackCloseBtn = feedbackModal.querySelector('.close');
    const feedbackSubmitBtn = document.getElementById('feedback-submit-btn');
    const feedbackMessageTextarea = document.getElementById('feedback-message');
    const loginBtn = document.getElementById('login-btn');
       
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
       loginSubmitBtn.addEventListener('click', () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

         const users = JSON.parse(localStorage.getItem('users') || '[]');
         const user = users.find(user => user.username === username && user.password === password);

         if (user){
             localStorage.setItem('isLoggedIn', 'true');
             localStorage.setItem('currentUser', JSON.stringify(user));
           
             loginModal.style.display = 'none';
               location.reload();

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
     
});