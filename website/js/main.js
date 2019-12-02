(function($) {
  "use strict";
  $(window).on("load", function() { 
    //preloader
    $("#status").fadeOut(); 
    $("#preloader").delay(450).fadeOut("slow"); 
       
  });


  $(document).ready(function(){  

    
    $(document).on("scroll", onScroll);
 
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
 
      $('a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');
 
      var target = this.hash;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });

    
    //scroll js
    smoothScroll.init({
      selector: '[data-scroll]', 
      selectorHeader: '[data-scroll-header]', 
      speed: 500, 
      easing: 'easeInOutCubic', 
      updateURL: true, 
      offset: 0, 
      callback: function ( toggle, anchor ) {} 
    });

    //menu
    var bodyEl = document.body,
    content = document.querySelector( '.content-wrap' ),
    openbtn = document.getElementById( 'open-button' ),
    closebtn = document.getElementById( 'close-button' ),
    isOpen = false;

    function inits() {
      initEvents();
    }

    function initEvents() {
      openbtn.addEventListener( 'click', toggleMenu );
      if( closebtn ) {
        closebtn.addEventListener( 'click', toggleMenu );
      }
    }

    function toggleMenu() {
      if( isOpen ) {
        classie.remove( bodyEl, 'show-menu' );
      }
      else {
        classie.add( bodyEl, 'show-menu' );
      }
      isOpen = !isOpen;
    }

    inits();


    //owl carousel
    $('.owl-carousel').owlCarousel({
      autoPlay: 3000, 
 
      items : 1,
      itemsDesktop : [1199,1],
      

      // CSS Styles
      baseClass : "owl-carousel",
      theme : "owl-theme"
    });

    $('.owl-carousel2').owlCarousel({
      autoPlay: 3000, 
      items : 1,
      itemsDesktop : [1199,1],
      autoPlay : false,

      baseClass : "owl-carousel",
      theme : "owl-theme"
    });
  });
  
  
  //navbar-active
  function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('.menu-list a').each(function () {
      var currentLink = $(this);
      var refElement = $(currentLink.attr("href"));
      if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
        $('.menu-list a').removeClass("active");
        currentLink.addClass("active");
      }
      else{
        currentLink.removeClass("active");
      }
    });
  }

})(jQuery);