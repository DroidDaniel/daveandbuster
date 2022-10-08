$(document).ready(function () {
  $(".message_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "25%",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "15%",
        },
      },
    ],
  });
});
