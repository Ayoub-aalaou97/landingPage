/*start client carousel */
$(document).ready(function(){
  var owl = $('.logo-carousel');
  owl.owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 6 }
    }
  });

  $('.carousel-next').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.carousel-prev').click(function() {
    owl.trigger('prev.owl.carousel');
  });
});


/*end client carousel */
