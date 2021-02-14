/* Mobile Nav */
// (function () {
//     var toggle = document.querySelector('.nav-toggle');
          
//     toggle.addEventListener('click', function(e) {
//       this.classList.toggle('opened');
//     });

// })();


/* Nav Toggle */ 
let nav = $("#nav");
let navToggle = $("#navToggle");
  
$("#navToggle").on("click", function(event) {
  event.preventDefault();
  nav.toggleClass("show");
});


$('.nav-toggle').on('click', function(event){
  $('.nav-toggle').toggleClass('opened');
  $('#body').toggleClass('no-scroll');
});

$('.nav__link').on('click', function(event){
  $('#body').removeClass('no-scroll');
  $('.nav').removeClass('show');
  $('.nav-toggle').removeClass('opened');
});




/* Smooth Scroll */
$("[data-scroll]").on("click", function(event) {
  event.preventDefault();
      
    let elementId = $(this).data(`scroll`);
    let elementOffset = $(elementId).offset().top;
              
$("html, body").animate({
  scrollTop: elementOffset - 0
  }, 600);
});




/* Gallery Slider */
$('.gallery__slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  arrows: true,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
            slidesToShow: 4
        }
      },
      {
        breakpoint: 900,
        settings: {
            slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 2
        }
      },
      {
        breakpoint: 370,
        settings: {
            slidesToShow: 1
        }
      }
    ]
});





/* Reviews Slider */
$('.reviews__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 5000,
  dots: true,
  arrows: false,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
            slidesToShow: 1
        }
      }
    ]
}); 





/* Scroll Up Button */
  
$(document).ready(function() { //when document is ready
$(window).scroll(function() { //when webpage is scrolled
  if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
$('.scroll-up').fadeIn(); //display element with class 'top-scroll'; opacity increases
  } else { //if not
$('.scroll-up').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
    }
  });
});