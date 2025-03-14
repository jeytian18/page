(function($) { 
  "use strict";
  
  /*================================================================= 
      pre loader 
  ==================================================================*/
  // $('.js-preloader').preloadinator({
  //   animation: 'fadeOut',
  //   animationDuration: 5
  // });
  
  
  
  /*================================================================= 
      Isotope initialization 
  ==================================================================*/
  var $grid = $('.grid').isotope({
    // options
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  }); 
  
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
  /* checking active filter */
  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.button-group');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
  }
  
  function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  buttonGroup.querySelector('.active').classList.remove('active');
  event.target.classList.add('active');
  });
  }
  
  
  // menu button
  // window.onscroll = () => {
  // 	menu.classList.remove('bx-x');
  // 	navlist.classList.remove('open');
  // };
  
  
  /*================================================================= 
      Testimonial carousel
  ==================================================================*/
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    breakpoints: {
      1200:{
        slidesPerView: 3,
      },
      992:{
        slidesPerView: 2, 
      },
      576:{
        slidesPerView: 1
      },
     },
    //slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    autoplay: {
       delay: 5000,
     },
     
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
  });
  
  
  /*================================================================= 
      Partner carousel
  ==================================================================*/
  const swiper2 = new Swiper('.partnerCarousel', {
    // Optional parameters
    breakpoints: {
      1200:{
        slidesPerView: 6,
      },
      992:{
        slidesPerView: 4, 
      },
      576:{
        slidesPerView: 3
      },
      320:{
        slidesPerView: 2
      },
     },
    //slidesPerView: 6,
    spaceBetween: 24,
    loop: true,
    autoplay: {
       delay: 5000,
     },
  
  });
  
  
  /*================================================================= 
      Map
  ==================================================================*/
  var map = L.map('mapwrapper').setView([0.311144, 32.583711], 12);
  //https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/#map=19/0.311159/32.583687">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  
  var greenIcon = L.icon({
      iconUrl: "image/location.png",
  
      iconSize:     [48, 48], // size of the icon
  });
  
  L.marker([-37.817160, 144.955937], {icon: greenIcon}).addTo(map);
  
  
  
  /*================================================================= 
      Navbar fixed top
  ==================================================================*/
  $(document).ready(function () {
  
      var menu = $('.site-header nav');
      var origOffsetY = $('.hero-area').height();
  
      function scroll() {
          if ($(window).scrollTop() >= origOffsetY) {
              $('.site-header nav').addClass('fixed-top');
              
          } else {
              $('.site-header nav').removeClass('fixed-top');
             
          }
      }
  
      document.onscroll = scroll;
  
  });
  
  /*================================================================= 
      Promo cards
  ==================================================================*/
  const promo_cards = document.querySelectorAll('.promo-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.5,
  });
  
  promo_cards.forEach((promo_card) => {
    observer.observe(promo_card);
  });
  
  
  
  
  /*================================================================= 
      Contact form 
  ==================================================================*/
  
  
  /*================================================================= 
      Animating numbers
  ==================================================================*/
  $('.counter').counterUp({
      delay: 10,
      time: 3000
  });
  
  
  /*================================================================= 
      Progress bar animation
  ==================================================================*/
  var waypoint = new Waypoint({
    element: document.getElementById('skill-section'),
    handler: function() {
      $('.progress .progress-bar').css("width",function() {
        return $(this).attr("aria-valuenow") + "%";
    })
    },
    //offset: 'bottom-in-view',
    offset: 700,
  })
  
  
  /*================================================================= 
      Animate on scroll initialization
  ==================================================================*/
  AOS.init({
    once: true,
  });
  
  })(jQuery);
  