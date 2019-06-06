var i = 0;
var move = "Move anywhere you like...";

function typeMove() {
  if (i < move.length) {
    document.getElementById("offer").innerHTML += move.charAt(i);
    i++;
    setTimeout(typeMove, 200);
  }
}

setInterval(typeMove, 1500);
