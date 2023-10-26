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


