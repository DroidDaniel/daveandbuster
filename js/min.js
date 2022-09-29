$(document).ready(function () {
  window.onresize = triggerSlideronResize;
  function slider() {
    $(".gallery-photo-slider")
      .not(".slick-initialized")
      .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 9999,
            settings: "unslick",
          },
          {
            breakpoint: 601,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
  }
  function triggerSlideronResize() {
    slider();
  }
  slider();
});
