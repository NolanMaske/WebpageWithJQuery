$(document).ready(function() {
  const inText = $("#inText");
  const outText = $("#outText");
  const coords = $("#coords");
  const enlarged = $("#enlarged");

  // Mouse move on the span container
  $("#iconContainer").on("mousemove", function(e) {
    coords.text(`Mouse X: ${e.pageX}, Y: ${e.pageY}`);
  });

  // Icon events
  $("#iconContainer img").on({
    mouseenter: function() {
      const name = $(this).attr("alt");
      inText.text(`In: ${name}`);
      $(this).css("opacity", "0.5");
    },
    mouseleave: function() {
      const name = $(this).attr("alt");
      outText.text(`Out: ${name}`);
      $(this).css("opacity", "1.0");
    },
    click: function(e) {
      const src = $(this).attr("src");
      enlarged.html(`<img src='${src}' style='height:150px;'>`)
        .css({ left: e.pageX + 10, top: e.pageY + 10 })
        .fadeIn(200)
        .delay(1000)
        .fadeOut(300);
    },
    dblclick: function() {
      const url = $(this).data("url");
      window.open(url, "_blank");
    }
  });
});
