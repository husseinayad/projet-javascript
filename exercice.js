function agrandir() {
    var myImg = document.getElementById("myImg");
    var height = myImg.clientHeight;
        myImg.style.height = (height + 20) + "px";
}
function couleur(){
var couleur=document.getElementById('myImg');
 couleur.style.background="blue";
}
function couleur2(){
  var couleur=document.getElementById('myImg');
   couleur.style.background="crimson";
  }

function masquer() {
  var x = document.getElementById("myImg");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
function afficher() {
  var x = document.getElementById("myImg");
  if (x.style.display === "block") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
