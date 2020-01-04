'use strict';

agCookie.create('example-cookie', true, 1);

var readValue = agCookie.read('example-cookie');

console.log(readValue);

agCookie.erase('example-cookie');

function markoFunkcija(args) {
    console.log(args);

    return true;
}
'use strict';

$(document).ready(function () {
  // home slider
  $(".owl-carousel-1").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    dots: true,
    responsive: {
      0: {
        nav: false
      },
      767: {
        nav: true
      }
    }
  });
  // add class for menu on scroll
  $(document).on('scroll', function () {
    if ($(document).scrollTop() > $(window).height() - 110) {
      if (!$('header').hasClass('with-color')) {
        $('header').addClass('with-color');
      }
    } else {
      $('header').removeClass('with-color');
    }
  });
  // custom tabs
  $('.latest-projects .tab-title').click(function (e) {
    var activeNumber = e.target.dataset.number;
    $('.latest-projects .tab-title').removeClass('active');
    $('.latest-projects .tab-title[data-number="' + activeNumber + '"]').addClass('active');
    $('.latest-projects .tabs-content').removeClass('show');
    $('.latest-projects .tabs-content[data-number="' + activeNumber + '"]').addClass('show');
  });
  //video
  $('#open-video').click(function () {
    $('#video-modal').addClass('show');
  });
  $('#video-modal-overlay').click(function () {
    $('.video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $('#video-modal').removeClass('show');
  });
  // second slider
  $(".owl-carousel-2").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: ['<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>'],
    dots: false,
    margin: 30,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      550: {
        items: 2
      },
      767: {
        items: 2,
        nav: true
      },
      992: {
        items: 3
      }
    }
  });
  // custom slider
  // (function () {
  //   let isAnimation = false;
  //   $('.slide-X').on('mouseenter', function(e) {
  //     if(!isAnimation) {
  //       if($(this).hasClass('img-left')) {
  //         isAnimation = true;
  //         reset();
  //         if ($(this).prev().length) {
  //           $(this).prev('.slide-X').addClass('img-left');
  //         } else {
  //           $('.slide-X').last().addClass('img-left');
  //         }
  //         if ($(this).next().length) {
  //           $(this).next('.slide-X').addClass('img-right');
  //         } else {
  //           $('.slide-X').first().addClass('img-right');
  //         }
  //         $(this).addClass('img-center');
  //         setTimeout(() => isAnimation = false , 1500)
  //       }
  //       // if($(this).hasClass('img-right')) {
  //       //   isAnimation = true;
  //       //   reset();
  //       //   if ($(this).prev().length) {
  //       //     $(this).prev('.slide-X').addClass('img-left');
  //       //   } else {
  //       //     $('.slide-X').last().addClass('img-left');
  //       //   }
  //       //   if ($(this).next().length) {
  //       //     $(this).next('.slide-X').addClass('img-right');
  //       //   } else {
  //       //     $('.slide-X').first().addClass('img-right');
  //       //   }
  //       //   $(this).addClass('img-center');
  //       //   setTimeout(() => isAnimation = false , 1500)
  //       // }
  //     }
  //   });
  //   // $('.img-right').on('mouseenter',);
  //   function reset() {
  //     $('.img-left').removeClass('img-left');
  //     $('.img-right').removeClass('img-right');
  //     $('.img-center').removeClass('img-center');
  //   }
  // })();

  //menu-mob
  $('#menu-toggle').click(function () {
    $('#mobile-navigation').toggleClass('open');
  });

  //scroll
  $(".scroll-link").click(function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top - 100 }, 1500);
  });
});