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
    };
    if($('.product-slider_nav').children.length > 8){
        params = {
            ...params,
            nextArrow: '.product-slider_nav__arrow.next',
            prevArrow: '.product-slider_nav__arrow.prev'
        }
    } else {
        params = {
            ...params,
            arrows: true
        }
    }
    $('.product-slider_nav').slick(params)
})
