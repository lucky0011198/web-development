$(document).ready(function () {
  $(".toggle").click(function () {
    $(".text").toggle("slow");
  });

  $("#popoverData").popover();
  $("#popoverOption").popover({ trigger: "hover" });
  $("#popoverData1").popover();
  $("#popoverData2").popover();
  $("#popoverOption").popover({ trigger: "hover" });
});
function on() {
  document.getElementById("on").style.fill = "url(#linear-gradient)";
}
function off() {
  document.getElementById("on").style.fill = "#909090";
}
var i = 0;
function myFunction() {
  i++;
  document.getElementById("n").innerHTML += i + "<br>";
  var k = document.getElementById("myText").value;
  document.getElementById("print").innerHTML += k + "<br>";

  var k1 = document.getElementById("myText1").value;
  document.getElementById("print1").innerHTML += k1 + "<br>";
  var k2 = document.getElementById("myText2").value;
  document.getElementById("print2").innerHTML += k2 + "<br>";
}
function hide() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("body").style.display = "block";
}
