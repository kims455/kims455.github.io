$(window).mousemove(function(event) {
  console.log(event.pageX + "px");
  console.log(event.pageY + "px");
  $("h1").css("top",event.pageY + "px");
  $("h1").css("left",event.pageX + "px");
});
