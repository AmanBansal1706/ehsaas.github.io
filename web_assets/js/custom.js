/*==================================================
    PROJECT: HELPING HANDS
    VERSION: 1.0
    CREATED DATE: 25/02/20
    LAST CHANGE: --/--/--
    AUTHOR : IQONIQ THEMES
/*==================================================
    * TABLE OF CONTENTS :
    * 1.0 - #PAGELOADER SCRIPT
    * 2.0 - #RESPONSIVE MENU  SCRIPT
    * 3.0 - #MAIN BANNER SLIDER  SCRIPT
    * 4.0 - #TESTIMONIAL SLIDER  SCRIPT
    * 5.0 - #BRAND SLIDER  SCRIPT
    * 6.0 - #PARALLAX BACKGROUND  SCRIPT
    [THIS SCRIPTS MANAGE ALL THE JS FUNCTIONS AND THE 3RD PARTY PLUGINS]
==================================================*/
(function($) {
"use strict";
  /* #PAGELOADER SCRIPT ====================================== */
  $(window).load(function () {
    $("body").imagesLoaded(function () {
      $(".loader-cont").fadeOut();
      $("#loader-overflow").delay(200).fadeOut(700);
    });
  });
  /* #RESPONSIVE MENU  SCRIPT ====================================== */
  jQuery(".main-menu").meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991"
  });
  /* #MAIN BANNER SLIDER  SCRIPT ====================================== */
  $('.main-slider').slick({
    arrows:false,
    dots:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  /* #TESTIMONIAL SLIDER  SCRIPT ====================================== */
  $('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 3,
    arrows:false,
    dots:false,
    slidesToScroll:1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '0px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1
              }
            }
        ]
  });
  /* #BRAND SLIDER  SCRIPT ====================================== */
  $('.brand-slider').slick({
    arrows:false,
    dots:false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '0px',
                slidesToShow: 4
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 3
              }
            }
        ]
  });
  /* #PARALLAX BACKGROUND  SCRIPT ====================================== */
  if ( $('.sub-header,.parallax-section').length ){
    $.stellar({
      responsive: true,
    }); 
  }  
    /* #GOOGE MAP  SCRIPT ====================================== */
  if ( $('.map-canvas').length ){
    initMap();
  };
  function initMap(){
      var gmMapDiv = $(".map-canvas");
      (function($){
        var gmCenterAddress = gmMapDiv.attr("data-address");
        var gmMarkerAddress = gmMapDiv.attr("data-address");
        var gmstreetViewControl = gmMapDiv.attr("data-view");
        gmMapDiv.gmap3({
            action: "init",
            marker: {
                address: gmMarkerAddress,
                options: {
                    icon: "../images/loc-marker.png" /* Location marker */
                }
            },
            map: {
                options: {
                    zoom: 17,
                    zoomControl: true,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL
                    },
                    mapTypeControl: true, /* hide/show (false/true) mapTypeControl*/
                    scaleControl: false, /*hide/show (false/true) scaleControl */
                    scrollwheel: false, /*hide/show (false/true) scrollwheel*/
                    streetViewControl: gmstreetViewControl, /*hide/show (false/true) streetViewControl*/
                    draggable: true,
                    styles:[ 
                        {
                            "featureType": "administrative.country",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                },
                                {
                                    "hue": "#ff0000"
                                }
                            ]
                        }
                    ] /*CHANGE STYLE (colors and etc.) */
                }
            }
        });
    })(jQuery);
  }
})(jQuery);
