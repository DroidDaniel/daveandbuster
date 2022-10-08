$(document).ready(function () {
  $(".message_slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    dots: true,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          dots: false,
          centerPadding: "15%",
        },
      },
    ],
  });
});
