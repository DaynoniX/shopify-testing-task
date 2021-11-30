let cartPopup = document.querySelector('.cart-popup');
let cartContainer = document.querySelector('.cart-column');
let cartTrigger = document.querySelector('#cart-icon-bubble');
let closeBtn = document.querySelector('#closePopupCart');


cartTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    cartPopup.classList.add('active');
});
document.addEventListener('mouseup', (e) => {
    if (e.target === cartPopup || e.target === closeBtn) {
        cartPopup.classList.remove('active')
    }
});

jQuery(document).ready(function ($) {
    // init callback functions
    interactWithCart();


    // init observer to watch cart items list when it re-renders
    let target = document.querySelector('.cart-item_list');
    const config = {
        childList: true,
        characterData: true,
        subtree: true
    };
    const observer = new MutationObserver(interactWithCart);
    observer.observe(target, config);

    function interactWithCart() {
            let quant = $('.cart-item_info .quantity__input');
            let deleteBtn = $('.cart-item .customIcon.delete');
            quant.each(function () {
                $(this).change(function () {
                    let object = {};
                    object = {
                        quantity: parseInt($(this).val()),
                        id: parseInt($(this).closest('.cart-item').find('.item_id').val()),
                        sections: 'ajax-cart-list'
                    }
                    $.ajax({
                        url: '/cart/change.js',
                        type: 'post',
                        dataType: 'json',
                        data: object,
                        success: function (data) {
                            document.querySelector('.cart-item_list').innerHTML = data.sections['ajax-cart-list'];
                            document.querySelector('#cart-counter').innerText = data.item_count;
                        },
                        error: function () {
                            console.log('Error')
                        }
                    })
                })
            });
            deleteBtn.each(function(){
                $(this).click(function (){
                    let object = {};
                    let itemId = $(this).closest('.cart-item').find('.item_id').val()
                    object = {
                        updates: {[itemId]: 0},
                        sections: 'ajax-cart-list'
                    }
                    console.log( );
                   $.ajax({
                       url: '/cart/update.js',
                       type: 'post',
                       dataType: 'json',
                       data: object,
                       success: function (data) {
                           document.querySelector('.cart-item_list').innerHTML = data.sections['ajax-cart-list'];
                           document.querySelector('#cart-counter').innerText = data.item_count;
                       },
                       error: function () {
                           console.log('Error')
                       }
                   })
                })
            })

    }

})
