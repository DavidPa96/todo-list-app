// Check Off Specific Todos By Clicking
$("li").click(function () {
  // if li is gray change to gray turn it black else gray
  $(this).toggleClass("completed");
});
