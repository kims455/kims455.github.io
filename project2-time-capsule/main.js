// var counter = 1;

// $(window).click(function(event) {
//   $(".first").addClass("red");
//   $(".second").addClass("green");
//   $("#third").addClass("blue");
//   $("body").append("<p>Hi, I'm paragraph number " + counter + "!</p>");
//   counter++;
// });

$(window).mousemove(function(event) {
  console.log(event.pageX + "px");
  console.log(event.pageY + "px");
  $("h1").css("top",event.pageY + "px");
  $("h1").css("left",event.pageX + "px");
});
