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
        let quant = $('.quantity__input');
        quant.each(function () {
            $(this).change(function(){
                let object = {};
                object = {
                    'quantity': parseInt($(this).val()),
                    'id': parseInt($(this).closest('.cart-item').find('.item_id').val()),
                    'sections': 'custom-header'
                }
                $.ajax({
                    url:'/cart/change.js',
                    type: 'post',
                    dataType: 'json',
                    data:  object,
                    success: function(){
                        let cartContents = fetch('/cart.js')
                            .then(response => response.json())
                            .then(data => { console.log( data); document.querySelector('#cart-counter').innerText = data.item_count });
                    },
                    error: function(){console.log('Error')}
                })
            })
        })

})
