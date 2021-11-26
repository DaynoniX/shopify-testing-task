jQuery(document).ready(function($){
 $('.custom-header .navbar .icon-burger').click(function(){
   $('.mobile-menu').addClass('active')
 });
 $('.custom-header .navbar .mobile-menu .icon-close').click(function(){
   $('.mobile-menu').removeClass('active')
 });
});
