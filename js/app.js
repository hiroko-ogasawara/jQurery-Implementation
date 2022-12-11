
$(document).on('click', '.page-top', function(){
    $('html, body').animate({scrollTop: 0}, 500);
});

//sulider//
const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1.8,
    centeredSlides:true,
    spaceBetween: 20,

    pagination: {
        el: 'swiper-pagination'
    },

    navigation : {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay : {
        speed: 1000
    }
});

// hamburger menu //
const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function(){
    ham.toggleClass('active');
    nav.toggleClass('active');
});