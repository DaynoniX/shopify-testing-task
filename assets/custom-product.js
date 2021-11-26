jQuery(document).ready(function($){
    $('.product-slider').slick({
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        prevArrow: '.product-slider_arrow.prev',
        nextArrow: '.product-slider_arrow.next',
        asNavFor: '.product-slider_nav'
    });

    let params = {
        asNavFor: '.product-slider',
        slidesToShow: 8,
        slidesToScroll: 1,
        focusOnSelect: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            }
        ],
        nextArrow: '.product-slider_nav__arrow.next',
        prevArrow: '.product-slider_nav__arrow.prev'
    };
    $('.product-slider_nav').slick(params)
})
