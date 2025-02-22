(function($) {
    $(document).ready(function() {

      // Inline Background Image URL
      $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
      });

      // Inline Background Color
      $("[data-bg-color]").each(function() {
        $(this).css("background-color", $(this).attr("data-bg-color"));
      });
      
      // magnificPopup
      $('.exdos-video').magnificPopup({
        type: 'iframe'
        // other options
      });
      $('.exdox-image').magnificPopup({
        type: 'image'
        // other options
      });

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

      // Team Slider
      var swiper = new Swiper(".exdos-team-slider", {
            slidesPerView: 4,
            spaceBetween: 30,
            keyboard: {
              enabled: true,
            },
            navigation: {
              nextEl: ".swiper-team-button-prev",
              prevEl: ".swiper-team-button-next",
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            },
        });

    });
})(jQuery);