var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
let answer1 = document.getElementsByClassName("question-text")[1];// кофе
console.log(answer1);
let answer2 = document.getElementsByClassName("question-text")[2];//чай
console.log(answer2);
let answersto = document.querySelector('.answers-to-answers');
let answermodal = document.getElementsByClassName("question-text")[3]; //чай-чай
console.log(answermodal);
let answermodal1 = document.getElementsByClassName("question-text")[4];//кофе-кофе
console.log(answermodal1);
let answermodal2 = document.getElementsByClassName("question-text")[5];// знает
console.log(answermodal2);
let cat1 = document.querySelector('.cat-img');
let cat2 = document.querySelector('.cat-img-2');
let next = document.querySelector('.next-text');




span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let question = document.querySelector('.question');
let answers = document.querySelector('.answers');
question.onclick = function() {
    answers.style.display = "flex";//чай,кофе
  }

answer1.onclick = function() {  
  answersto.style.display = "flex";
  answermodal.style.display = "none";
  answermodal1.style.display = "flex";
}
answer2.onclick = function() {
  answersto.style.display = "flex";
  answermodal1.style.display = "none";
  answermodal.style.display = "flex";
}


var modalto = document.querySelector('.modal2');
answermodal2.onclick = function() {
  modalto.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modalto) {
    modalto.style.display = "none";
  }
}
var span2 = document.getElementsByClassName("close")[1];
span2.onclick = function() {
  modalto.style.display = "none";
  cat1.style.display = "none";
  cat2.style.display = "flex";
  next.style.display = "flex";
}