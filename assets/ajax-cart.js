let cartPopup = document.querySelector('.cart-popup');
let cartContainer = document.querySelector('.cart-column');
let cartTrigger = document.querySelector('#cart-icon-bubble');

let cartContents = fetch('/cart.js')
    .then(response => response.json())
    .then(data => renderCartItems(data) );

cartTrigger.addEventListener('click', (e)=>{
    e.preventDefault();
    cartPopup.classList.add('active');
});


document.addEventListener('mouseup', (e)=>{
    if(e.target === cartPopup){
        cartPopup.classList.remove('active')
    }
});

let  renderCartItems = (data) => {
    console.log(data)
}
