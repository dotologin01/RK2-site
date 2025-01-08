document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('product-slider');
  const productIds = getRandomProductIds(4);
  let currentIndex = 0;
  let slides;
  let slideWidth;

  function getRandomProductIds(count) {
      const productsCount = products.length;
      if(count >= productsCount){
           return products.map(product => product.id);
      }
      const ids = new Set();
      while (ids.size < count) {
          ids.add(Math.floor(Math.random() * productsCount) + 1);
      }
      return Array.from(ids);
  }

  function generateSlides() {
         slider.innerHTML = ''; // очищаем предыдущие слайды
       slides = productIds.map(id => {
        const product = products.find(p => p.id === id);
          if(product){
            const slide = document.createElement('div');
            slide.classList.add('slide');
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.title;
            slide.appendChild(img);
            return slide;
          }
      }).filter(Boolean); // фильтруем undefined или null значения
     slides.forEach(slide => slider.appendChild(slide));
      slideWidth = slides[0].offsetWidth; // Ширина слайда
  }
  
   function updateSlider(animate = true) {
     if(animate){
         slider.style.transition = 'transform 0.5s ease-in-out';
     }else{
       slider.style.transition = 'none';
     }
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
  
  function cloneFirstSlides(){
    for(let i = 0; i< slides.length; i++){
     const clone = slides[i].cloneNode(true);
     slider.appendChild(clone);
    }
  }

  function nextSlide() {
      currentIndex++;
         if (currentIndex >= slides.length) {
          currentIndex = 0; //  возвращаемся в начало списка
          updateSlider(false); // без анимации
         
            setTimeout(() =>{
                 cloneFirstSlides();
                updateSlider(); // после того как добавили клоны, переходим к слайду с анимацией
             }, 0)
             
             
          }else{
           updateSlider()
          }
  }
  
  function prevSlide() {
       currentIndex--;
       if (currentIndex < 0) {
            currentIndex = slides.length -1;
          updateSlider(false);
               setTimeout(() => {
              updateSlider();
                 },0);
         }else{
             updateSlider();
         }
  }


  generateSlides(); // генерируем слайды при загрузке страницы
   cloneFirstSlides(); // клонируем слайды
  
  setInterval(nextSlide, 5000); // автоматическая прокрутка каждые 5 сек
  
  // управление с клавиатуры
    //  document.addEventListener('keydown', function(event) {
     // if (event.key === 'ArrowRight') {
       //   nextSlide();
    //  } else if (event.key === 'ArrowLeft') {
     //  prevSlide();
    //  }
    // });
});