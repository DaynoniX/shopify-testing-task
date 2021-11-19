jQuery(document).ready(function($){
    $('.product-slider').slick({
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 1
    });
    $('.product-slider_nav').slick({
        asNavFor: '.product-slider',
        slidesToShow: 8,
        slidesToScroll: 1,
        focusOnSelect: true,
        // centerMode: true,
        infinite: false
    })
})
