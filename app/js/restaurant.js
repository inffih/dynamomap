function kokkiMouseOver() {
  var image = document.getElementById('cook');
  if (image.src.match("../img/cook_colourless.png")) {
    image.src="../img/Cook_colored.png";
  } else {
    image.src = "../img/Cook_colourless.png";
  }
}

function kokkiMouseOut() {
  var image = document.getElementById('cook');
  if (image.src.match("../img/cook_colored.png")) {
  image.src="../img/Cook_colored.png";
  } else {
  image.src = "../img/cook_colourless.png";
  }
}

$("document").ready(function(e) {
  $("#shirt, #sback").click(function(e) {
      $("#dsodexo").fadeToggle(1000);
  });
 });
