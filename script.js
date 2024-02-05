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

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slides = document.querySelectorAll('.slide')
let slider = document.querySelectorAll('.slides')
console.log(slides);
console.log(slider);
console.log(slides[0]);
let i = 0;
next.addEventListener('click', function(){
  slides[i+1].classList.toggle('active');
  slides[i].classList.toggle('active');
  i++;
});
prev.addEventListener('click', function(){
    slides[i-1].classList.toggle('active');
    slides[i].classList.toggle('active');
    i--;
  });