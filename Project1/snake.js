const menuOpenButton=document.querySelector("#menu-open-button");
const menuCloseButton=document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",()=>{
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");

})


menuCloseButton.addEventListener("click",()=>menuOpenButton.click());


// Iniial Swiper
const swiper = new Swiper('.slider-wrapper', {
   
    loop: true,
    // effect:'cards',
    // cardEffect:{
    //     slideShows:true,
    //     rotate:false,
    //     perSlideOffset:30,
    //     perSlideRotate:2,
    // },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Keyboard controls
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

    // Mouse controls
    mousewheel: {
        invert: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },

    // Responsive Breakpoints
    breakpoints:{
        0:{
            slidesPerView:1,
            effect:'card',
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3
        }
    },
    
 
  
    
  });