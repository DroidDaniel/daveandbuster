$(document).ready(function () {
  var $carousel = $(".game_slider");

  var settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    slide: ".slick-slideshow__slide",
    slidesToShow: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };

  function setSlideVisibility() {
    var visibleSlides = $carousel.find(
      '.slick-slideshow__slide[aria-hidden="false"]'
    );

    $(visibleSlides).each(function () {
      $(this).css("opacity", 1);
    });

    $(visibleSlides).first().prev().css("opacity", 0);
  }

  $carousel.slick(settings);

  setSlideVisibility();

  $carousel.on("afterChange", function () {
    setSlideVisibility();
  });
});
