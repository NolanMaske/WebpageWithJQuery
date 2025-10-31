//Nolan Maske
//COMP 322
$(document).ready(function() {
  // Cache elements for performance
  const inText = $("#inText");
  const outText = $("#outText");
  const coords = $("#coords");
  const enlarged = $("#enlarged");

  // Mouse move on the span container and updates coordinates of mouse
  $("#iconContainer").on("mousemove", function(e) {
    coords.text(`Mouse X: ${e.pageX}, Y: ${e.pageY}`);
  });

  // when mouse enters an icon
  $("#iconContainer img").on({
    mouseenter: function() {
      const name = $(this).attr("alt");
      inText.text(`In: ${name}`);
      $(this).css("opacity", "0.5");
    },
    // When mouse leaves an icon
    mouseleave: function() {
      const name = $(this).attr("alt");
      outText.text(`Out: ${name}`);
      $(this).css("opacity", "1.0");
    },
    // On click → show enlarged preview near cursor
    click: function(e) {
      const src = $(this).attr("src");
      enlarged.html(`<img src='${src}' style='height:150px;'>`)
        .css({ left: e.pageX + 10, top: e.pageY + 10 })
        .fadeIn(200)
        .delay(1000)
        .fadeOut(300);
    },
    // On double click → open the website in new tab
    dblclick: function() {
      const url = $(this).data("url");
      window.open(url, "_blank");
    }
  });
});
