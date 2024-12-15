(function($) {
    $(document).ready(function() {  
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
    });
})(jQuery);