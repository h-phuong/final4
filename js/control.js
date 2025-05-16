// JavaScript Document
// control.js
$(document).ready(function(){
  $('#slide').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    animateOut: 'fadeOut'
  });
});