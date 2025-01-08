document.addEventListener('DOMContentLoaded', () => {
    const authLinks = document.getElementById('auth-links');
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn){
        updateAuthUI();
    }

    logoutBtn.addEventListener('click', () => {
        console.log('localStorage при загрузке:', localStorage);
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedIn');
        isLoggedIn = false;
        updateAuthUI();
         location.reload();
    });


 function updateAuthUI() {
            const shoppingListBtn = document.getElementById('shopping-list-btn');
            const feedbackBtn = document.getElementById('feedback-btn');
            console.log('updateAuthUI is LoggedIn:', isLoggedIn);
             if (isLoggedIn) {
                loginBtn.style.display = 'none';
                logoutBtn.style.display = 'inline';

               if(!shoppingListBtn){
                   let shoppingListBtn = document.createElement('a');
                    shoppingListBtn.id='shopping-list-btn';
                     shoppingListBtn.innerText = 'Список покупок';
                     shoppingListBtn.href = '#';
                   authLinks.appendChild(shoppingListBtn);
                }
                if(!feedbackBtn){
                     let feedbackBtn = document.createElement('a');
                     feedbackBtn.id = 'feedback-btn';
                      feedbackBtn.innerText = 'Обратная связь';
                      feedbackBtn.href = '#';
                      authLinks.appendChild(feedbackBtn);
                  }

            } else {
                loginBtn.style.display = 'inline';
                logoutBtn.style.display = 'none';
                 if(shoppingListBtn){
                     shoppingListBtn.remove();
                 }
                  if(feedbackBtn){
                     feedbackBtn.remove();
                 }
            }
        }
    });