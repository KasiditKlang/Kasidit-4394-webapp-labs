var answers = document.querySelectorAll('#answers li');
var rightAnswer = answers[0];
var wrongAnswer1 = answers[1];
var wrongAnswer2 = answers[2];
rightAnswer.onclick = function() {
    rightAnswer.className = "right-answer";
}
wrongAnswer1.onclick = function() {
    wrongAnswer1.className = "wrong-answer";
}
wrongAnswer2.onclick = function() {
    wrongAnswer2.className = "wrong-answer";
}