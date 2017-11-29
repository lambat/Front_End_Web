$(document).ready(function() {

          /* Sticky Nav bar */


    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });



        /* Navigation scroll */

          $('.js--scroll-to-plans').click(function () {
             $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 3000);
          });

          $('.js--scroll-to-start').click(function () {
             $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 2000);
          });


          $('.js--how-it-works').click(function () {
             $('html, body').animate({scrollTop: $('.js--section-works-step').offset().top}, 2000);
          });-+

          $('.js--location').click(function () {
             $('html, body').animate({scrollTop: $('.js--located-cities').offset().top}, 2000);
          });

          $('.js--sign-up').click(function () {
             $('html, body').animate({scrollTop: $('.js--sign-me-up').offset().top}, 2000);
          });

          /* Animation scroll */

          $('.js--1').waypoint(function(direction){

                $('.js--1').addClass('animated fadingIn');
          }, {
              offset: '50%'
          });

          $('.js--2').waypoint(function(direction) {
              $('.js--2').addClass('animated fadingUp');
          }, {
              offset: '50%'
          });

          $('.js--3').waypoint(function(direction) {
              $('.js--3').addClass('animated fadingIn');
          }, {
              offset: '50%'
          });

          $('.js--4').waypoint(function(direction) {
              $('.js--4').addClass('animated pulse');
          }, {
              offset: '50%'
          });

          /* Mobile Navigation javascript */

          $('.js--nav-icon').click(function() {
              var nav = $('.js--main-nav');
              var icon = $('.js--nav-icon i');

              nav.slideToggle(200);

              if (icon.hasClass('fa-bars')) {
                  icon.addClass('fa-times');
                  icon.removeClass('fa-bars');
              } else {
                  icon.addClass('fa-bars');
                  icon.removeClass('fa-times');
              }
          });

    });

          function myMap() {
          var mapProp= {
              center:new google.maps.LatLng(41.653419,-73.577499),
              zoom:5,
          };
          var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
          }
