

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach((item) => {
  item.addEventListener('click', open)
})


function open(e) {
 
  tabItem.forEach(i => i.classList.remove('tabs__btn-item--active'));
  e.target.classList.add('tabs__btn-item--active');
  ;

  tabContent.forEach(i => i.classList.remove('tabs__content-item--active'));

  document.querySelector(`#${e.target.getAttribute('data-button')}`).classList.add('tabs__content-item--active')
 
}


const swiper = new Swiper('.swiper', {
   
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,
  effect: "fade",
  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  autoplay:{
delay: 3000,
disableOnInteraction: false,
  }

  

 
});

