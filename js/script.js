/* Hussain Lodge, Tirunelveli. */
/* Main JavaScript file */
/* Created by Ajmal Hussain Hy, https://ajmalhussain.in */

$('.navbar-toggler').on('click', function(e) {
    $('.navbar').toggleClass("bg-dark"); //you can list several class names 
    e.preventDefault();
  });

$(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

// navbar menu smooth scroller
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});