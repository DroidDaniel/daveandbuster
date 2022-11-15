$(document).ready(function () {
  $(".play_video_btn").click(function () {
    var showVideoContainer = $(this).next(
      ".blog_landing_video_modal_container"
    );
    var playVideo = $(this)
      .next(".blog_landing_video_modal_container")
      .parent()
      .find(".blog_landing_video_modal__source")
      .children();
    $(showVideoContainer).addClass("show");
    $(playVideo).trigger("play");
  });

  $(".close_video_btn").click(function () {
    var stopVideo = $(".close_video_btn").next();
    var hideVideoContainer = $(".close_video_btn").parents();
    $(stopVideo).trigger("pause");
    $(hideVideoContainer).removeClass("show");
  });
});
