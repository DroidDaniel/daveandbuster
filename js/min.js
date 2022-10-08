$(document).ready(function () {
  $(".message_slider").slick({
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "25%",
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
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
