// Check Off Specific Todos By Clicking
$("li").click(function () {
  // if li is gray change to gray turn it black else gray
  if ($(this).css("color") === "rgb(128, 128, 128)") {
    $(this).css({
      color: "black",
      textDecoration: "none",
    });
  } else {
    $(this).css({
      color: "gray",
      textDecoration: "line-through",
    });
  }
});
