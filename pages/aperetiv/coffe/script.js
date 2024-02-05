var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  btn.style.display = "none";
}
span.onclick = function() {
  modal.style.display = "none";
  btn.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    btn.style.display = "block";
  }
}
