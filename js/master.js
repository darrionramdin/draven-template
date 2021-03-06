$(function() {
  "use strict";
  // data-image functionality
  const imageElements = $('[data-image]');
    for(let element of imageElements) {
        $(element).css("background-image",`url(${$(element).data('image')})`);
    };

    // Navbar Toggle
    $('.navbar-toggler').on('click', function() {
      if(!$('.navbar').hasClass('bg-dark')) {
        $('.navbar').toggleClass('bg-dark');
      }
    });

    // Navbar Scroll
    $(document).scroll(function() {
         $('.navbar').toggleClass('bg-dark', $(this).scrollTop() > $('.navbar').height());
    });

    // Smooth Scroll
    $('.navbar .nav-link').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
        // $('.navbar-collapse').toggleClass('show');
    });

    // Rellax
    if($('.rellax').length) {
      const rellax = new Rellax('.rellax');
    }

    // AOS
    AOS.init();

    // Filterizr
    const filterizd = $('.filtr-container').filterizr();
    $('.portfolio-filters li').on('click', function() {
      $('.portfolio-filters li').removeClass('active');
      $(this).addClass('active');
    })


    // Particles JS
    if($('.particles').length) {
      particlesJS('particles-js',
      {
      "particles": {
        "number": {
          "value": 15,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ddd"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#888888"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#777",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
    );
  }
})
