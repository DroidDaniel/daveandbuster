$(document).ready(function () {
  $(".testimonial__slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "25%",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0%",
        },
      },
    ],
  });
});
