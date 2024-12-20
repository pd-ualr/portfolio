$(document).mousemove(function (event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();

  mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
  mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

  $(".radial-gradient").css(
    "background",
    "radial-gradient(at " +
      mouseXpercentage +
      "% " +
      mouseYpercentage +
      "%, #E2E3E7, #fbf8f3)"
  );
});
