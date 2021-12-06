import M from 'materialize-css/dist/js/materialize.min.js';
const  carrousel=() =>{
     
        let carouselElem = document.querySelectorAll('.carousel.carousel-slider');
            
      M.Carousel.init(carouselElem,{
          indicators : true,
          fullWidth : true,
          duration : 150
      });
    
        setTimeout(()=>{
         M.Carousel.getInstance(carouselElem[0]).next();
      },4000);
    
    
}

