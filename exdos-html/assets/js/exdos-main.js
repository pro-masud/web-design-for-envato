(function($) {
    $(document).ready(function() {  

      // Testimonial Slider
      var swiper = new Swiper(".exdos-testimonial-slider", {
          slidesPerView: 1,
          spaceBetween: 30,
          keyboard: {
            enabled: true,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-test-button-next",
            prevEl: ".swiper-test-button-prev",
          },
      });

      // Brand Slider Top
      var swiper = new Swiper(".exdos-brand-top", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
      });

      // Brand Slider Bottom
      var swiper = new Swiper(".exdos-brand-bottom", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
      });

    });
})(jQuery);