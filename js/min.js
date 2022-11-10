$(document).ready(function () {
  var $carousel = $(".related_post");

  var settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    slide: ".slick-slideshow__slide",
    slidesToShow: 3,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
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
