$(document).ready(function () {
  // $(".message_slider").slick({
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   cssEase: "linear",
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   centerPadding: "30%",
  //   pauseOnHover: true,
  //   responsive: [
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         centerMode: true,
  //         dots: false,
  //         centerPadding: "15%",
  //       },
  //     },
  //   ],
  // });

  var $carousel = $(".game_slider");

  var settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    slide: ".slick-slideshow__slide",
    slidesToShow: 2,
    // centerMode: true,
    // centerPadding: "60px",
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
  //$carousel.slick("slickGoTo", 1);
  setSlideVisibility();

  $carousel.on("afterChange", function () {
    setSlideVisibility();
  });
});
