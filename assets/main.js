jQuery(document).ready(function($) {
     $('.brand-carousel').owlCarousel({

      loop:false,

      autoplayHoverPause:true,

      mouseDrag: false,

      autoplay:false,

      margin: 30,

      nav: true,

      dots: false,

      navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",

      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],

      responsive:{

        0:{

          items:1,

          stagePadding: 75,

          margin: 10,

        },

        480:{items:2,},

        768:{items:3},

        992:{items:4}

      }

    });

   $('.customers-testimonials').owlCarousel({
	 loop: true,
     center: true,
	 autoplay: false,
     mouseDrag: false,
     autoHeight: true,
     nav: true,
     dots: false,
     autoplayHoverPause: true,
     navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
	 responsive: {
		0: { items: 1,margin: 15, },
		600: { items: 1,margin: 15,},
		768: { items: 1 }
    }
   });

   $('.team-carousel').owlCarousel({
	 loop:false,
      autoplayHoverPause:true,
      autoplay:false,
      mouseDrag: false,
      margin: 30,
      nav: true,
      dots: false,
       navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
      responsive:{
        0:{
          items:1,
          stagePadding: 75,
          margin: 10,
        },
        480:{
          items:2,
          stagePadding: 75,
          margin: 10,
        },
        768:{
          items:2,
          stagePadding: 75,
        }
      }
   });

  $('.benefits-carousel').owlCarousel({
	 loop: false,
     margin: 20,
     stagePadding: 2,
     slideSpeed: 2000,
     autoHeight: true,
     mouseDrag: false,
     //center: true,
	 autoplay: false,
     nav: true,
     dots: false,
     autoplayHoverPause: true,
     navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
	 responsive: {
		0: { 
            items: 1,
            stagePadding:60,
           center: true,
            margin: 15
        },
		360: { 
          items: 1,
          center: true,
          stagePadding: 80,
          margin: 15
        },
	   768: { items: 2 },
       1000: { items: 4 }
    }
   });

  $('.benefits-carousel-mobile').owlCarousel({
	 loop: false,
     margin: 10,
     autoHeight: true,
     //center: true,
	 autoplay: false,
     mouseDrag: false,
     nav: true,
     dots: false,
     autoplayHoverPause: true,
     navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
	 responsive: {
		0: { items: 2,stagePadding: 0,},
		600: { items: 2,stagePadding: 0,},
		768: { items: 0 }
    }
   });

   $('.card-carousel-mobile').owlCarousel({
	 loop: false,
     margin: 20,
      autoWidth:true,
     autoHeight: true,
     //center: true,
	 autoplay: false,
     mouseDrag: false,
     nav: true,
     dots: false,
     autoplayHoverPause: true,
     navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
	 responsive: {
		0: { items: 1, stagePadding: 0,},
		600: { items: 1,stagePadding: 0,},
		768: { items: 1 }
    }
   });

  $('.flex-leagues-carousel').owlCarousel({
	 loop: false,
     autoHeight: true,
     //center: true,
	 autoplay: false,
     mouseDrag: false,
     nav: false,
     dots: false,
     autoplayHoverPause: true,
     navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
	 responsive: {
		0: { 
          items: 1,
          stagePadding: 60,
          margin: 10
        },
		600: { 
          items: 1,
          stagePadding: 60,
          margin: 10
        },
       768: { items: 0, margin: 0,stagePadding: 0,}
    }
   });

  $('.flex-leagues-carousel-mobile').owlCarousel({
	 loop: false,
     autoHeight: true,
     //center: true,
	 autoplay: false,
     mouseDrag: false,
     nav: false,
     dots: false,
     autoplayHoverPause: true,
     navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
	 responsive: {
		0: { 
          items: 1,
          stagePadding: 60,
          margin: 10,
          nav: true
        },
		600: { 
          items: 1,
          stagePadding: 60,
          margin: 10,
          nav: true
        },
       768: { items: 0, margin: 0,stagePadding: 0, }

    }
   });

   $('.additional-carousel').owlCarousel({
	 loop: false,
    margin: 30,
    autoHeight: true,
    //mouseDrag: false,
	 autoplay: false,
     nav: true,
     autoplayHoverPause: true,
     //touchDrag: false,
     stopOnHover : false,
     autoplayTimeout:500000,
     navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
	 responsive: {
		0: { 
            items: 1,
            stagePadding: 30,
            margin: 10,
            autoplay: false,
            mouseDrag: true,
            touchDrag: true,
            nav: false,
            dots: true,
        },
		600: { 
            items: 2,
            stagePadding: 30,
            margin: 10,
            nav: false,
            dots: true,
            mouseDrag: false,
            touchDrag: false,
        },
		768: { items: 2, mouseDrag: false, touchDrag: false},
        1000: { items: 3, mouseDrag: false, touchDrag: false}
    }
   });

  $('.threecolumn-carousel').owlCarousel({
	 loop: false,
    margin: 30,
    autoHeight: true,
     //center: true,
	 autoplay: false,
     mouseDrag: false,
     autoplayHoverPause: true,
     navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
	 responsive: {
		0: { 
            items: 1,
            stagePadding: 30,
            margin: 10,
            dots: true,
            nav: false,
            mouseDrag: false,
        },
		600: { 
          items: 1,
            stagePadding: 30,
            margin: 10,
            dots: true,
            nav: false,
            mouseDrag: false,
        },
		768: { items: 2 },
       1000: { items: 3 }
    }
   });

  $('.twocolumn-carousel').owlCarousel({
	 loop: false,
    margin: 10,
    autoHeight: true,
    mouseDrag: false,
    dots: false,
    nav: true,
     //center: true,
	 autoplay: false,
     autoplayHoverPause: true,
      navText: [
        '<svg width="40" height="40" viewBox="0 0 40 40"><path fill="#000000" d="M23.6344 13.3672C24.1219 13.8547 24.1219 14.6422 23.6344 15.1297L18.7844 19.9797L23.6344 24.8297C24.1219 25.3172 24.1219 26.1047 23.6344 26.5922C23.1469 27.0797 22.3594 27.0797 21.8719 26.5922L16.1344 20.8547C15.6469 20.3672 15.6469 19.5797 16.1344 19.0922L21.8719 13.3547C22.3469 12.8797 23.1469 12.8797 23.6344 13.3672Z"/></svg>',
        '<svg width="40" height="40" viewBox="0 0 40 40" version="1.1"><path d="M16.3656 13.3672C15.8781 13.8547 15.8781 14.6422 16.3656 15.1297L21.2156 19.9797L16.3656 24.8297C15.8781 25.3172 15.8781 26.1047 16.3656 26.5922C16.8531 27.0797 17.6406 27.0797 18.1281 26.5922L23.8656 20.8547C24.3531 20.3672 24.3531 19.5797 23.8656 19.0922L18.1281 13.3547C17.6531 12.8797 16.8531 12.8797 16.3656 13.3672Z" fill="#000000"/></svg>'
      ],
	 responsive: {
		0: { 
            items: 1,
        },
		600: { items: 1,},
	   768: { items: 1 },
       992: { items: 2 }
    }
   });

  $('.threecolumn-event-ptt-carousel').owlCarousel({
	 loop: true,
     nav: true,
     dots: false,
      margin: 30,
      autoHeight: true,
     //center: true,
	 autoplay: false,
     mouseDrag: false,
     autoplayHoverPause: true,
     navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
	 responsive: {
		0: { 
            items: 1,
            stagePadding: 40,
            margin: 10,
        },
		600: { 
          items: 1,
            stagePadding: 40,
            margin: 10,
        },
		768: { items: 2 },
       1000: { items: 3 }
    }
   });
   $('.resources-carousel').owlCarousel({
	 loop: false,
	 autoplay: false,
     mouseDrag: false,
     margin: 30,
     nav: true,
     dots: false,
     autoplayHoverPause: true,
     navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
	 responsive: {
		0: { items: 1 },
		600: { items: 2,},
		768: { items: 2 }
    }
   });
  
   $('.three-cols-carousel').owlCarousel({
	 loop: false,
	 autoplay: false,
     mouseDrag: false,
     margin: 30,
     nav: true,
     dots: false,
     autoplayHoverPause: true,
     navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
	 responsive: {
		0: { items: 1},
		600: { items: 2,},
		768: { items: 2 },
        1000: { items: 3 }
    }
   });
  
  $('.keyfeature-carousel').owlCarousel({
	  loop: false,
      margin: 10,
      autoHeight: true,
     //center: true,
	 autoplay: false,
     mouseDrag: false,
     nav: false,
     dots: true,
     autoplayHoverPause: true,
     navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
	 responsive: {
		0: { 
            items: 1,
            stagePadding: 30,
            margin: 15
        },
		600: { 
          items: 1,
          stagePadding: 30,
          margin: 15
        },
		768: { items: 2},
        1000: { items: 3}
    }
   });
  
  $('.joincommunity-carousel').owlCarousel({
	 loop: false,
    margin: 30,
    autoHeight: true,
     //center: true,
	 autoplay: false,
    mouseDrag: false,
     nav: true,
     dots: false,
     autoplayHoverPause: true,
     navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
	 responsive: {
		0: { 
            items: 1,
            stagePadding: 20,
            margin: 10,
        },
		600: { 
          items: 1,
            stagePadding: 20,
            margin: 10,
        },
		768: { items: 3, stagePadding: 20, },
        1000: { items: 4 }
    }
   });

  $('.wantmore-carousel').owlCarousel({
	 loop: false,
     autoHeight: true,
	 autoplay: false,
     mouseDrag: false,
     nav: true,
     dots: false,
     autoplayHoverPause: true,
      navText : ["<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-left_ca496818-8957-48f5-afb5-dac64c36737e.svg?v=1675748941' />",
      "<img src='https://cdn.shopify.com/s/files/1/0690/8071/1488/files/arrow-right_cd5e75b6-5dd5-4c8a-bfa8-2925d0930f72.svg?v=1675748941'  />"],
	 responsive: {
		0: { 
          stagePadding: 80,
          margin: 10,
          items: 1,
          nav: false,
          dots: true,
        },
       480: { 
          stagePadding: 150,
          margin: 10,
          items: 1,
          nav: false,
          dots: true,
        },
		749: { 
          stagePadding: 180,
          margin: 10,
          items: 2
        },
		750: { items: 2,  margin: 20 },
        992: { items: 3,  margin: 20 },
        1200: { items: 4,  margin: 20 }
    }
   });
  
   $('.why-feed-carousel').owlCarousel({
	 loop: false,
     center: true,
	 autoplay: false,
     mouseDrag: false,
     autoplayHoverPause: true,
	 responsive: {
		0: { items: 1,},
		600: { items: 1,},
		768: { items: 3, margin: 16 }
    }
   });
});

$('.tab-link').click( function() {
	var tabID = $(this).attr('data-tab');
	$(this).addClass('active').siblings().removeClass('active');
	$('#tab-'+tabID).addClass('active').siblings().removeClass('active');
});

$(document).ready(function() {
	$('.popup-youtube, .popup-youtube2, .popup-vimeo, .popup-gmaps').magnificPopup({
		//disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});

//country flag dropdown//
function setCountry(code){
        if(code || code==''){
            var text = jQuery('a[cunt_code="'+code+'"]').html();
            $(".flagdropdown dt a span").html(text);
        }
    }
    $(document).ready(function() {
        $(".flagdropdown img.flag").addClass("flagvisibility");
        $(".flagdropdown dt a").click(function() {
            $(".flagdropdown dd ul").toggle();
        });
        $(".flagdropdown dd ul li a").click(function() {
            var text = $(this).html();
            $(".flagdropdown dt a span").html(text);
            $(".flagdropdown dd ul").hide();
            $("#result").html("Selected value is: " + getSelectedValue("country-select"));
        });
        function getSelectedValue(id) {
            return $("#" + id).find("dt a span.value").html();
        }
        $(document).bind('click', function(e) {
            var $clicked = $(e.target);
            if (! $clicked.parents().hasClass("flagdropdown"))
                $(".flagdropdown dd ul").hide();
        });
        $("#flagSwitcher").click(function() {
            $(".flagdropdown img.flag").toggleClass("flagvisibility");
        });
    });