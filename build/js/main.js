$(document).ready(function() {
  $(".more-info").click(function(){
    $(".btnToggle").toggleClass("rotate180")
    $(".more-info__block").slideToggle(300)
  });


  $(".accordion-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    dotsEach:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3,
            nav:false
        }
      }

  });
  //popup окна
    $('.item-carousel a').magnificPopup({
  		type : 'image',
      gallery: {
  			enabled: true,
  			navigateByImgClick: true,

  		},
  	});
    $(".accordion-view").click(function(){
      var childElem = $(this).children(".accord_i")
          childBody = $(this).siblings(".accordion-body")
      $(childElem).toggleClass("i_switch");
      $(childBody).slideToggle(700);

    });
    $(".case-link").magnificPopup();
  //якоря н сайте
  // $(".slide-down").on("click", function (event) {
  //      event.preventDefault();
  //      var id  = $(this).attr('href'),
  //          top = $(id).offset().top;
  //      $('body,html').animate({scrollTop: top}, 1000);
  //  });


});