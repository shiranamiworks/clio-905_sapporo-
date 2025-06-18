//タブ切り替え
$(function () {
    $(".change-buttons .button").on("click", function (e) {
      e.preventDefault();
      var _target = $(this).data("target");
      $(".change-buttons .button").removeClass("current");
      $(this).addClass("current");
      $(".tab-inner").removeClass("current");
      $(".tab-inner." + _target).addClass("current");
    });
});



