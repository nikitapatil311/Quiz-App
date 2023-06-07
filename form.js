//form element display

const form = document.querySelector('[data-js="form-data"]');
const displayCard = document.querySelector('[data-js="display-card"]');
const formQuestionElement = document.getElementById("question");
const formAnswerElement = document.getElementById("answer");

function addEntry(formObj) {
  const newLi = document.createElement("li");
  const newQuestion = document.createElement("h1");
  const newAnswer = document.createElement("h3");
  console.log("formObj", formObj);
  newQuestion.textContent = formObj.question;
  console.log(formObj.question.value);
  newAnswer.textContent = formObj.answer;

  newLi.append(newQuestion, newAnswer);
  displayCard.append(newLi);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  console.log("formObj", formObj);

  form.reset();
  formQuestionElement.focus();
  formAnswerElement.focus();

  addEntry(formObj);
});

//Form characters count

var question1 = document.getElementById("question");
var ansWer1 = document.getElementById("answer");

var result = document.getElementById("result");
var result1 = document.getElementById("result1");
var limit = 150;

result.textContent = 0 + "/" + limit;
result1.textContent = 0 + "/" + limit;

question1.addEventListener("input", () => {
  var questionLength = question1.value.length;
  console.log(questionLength);
  result.textContent = questionLength + "/" + limit;
});

ansWer1.addEventListener("input", () => {
  var answerLength = ansWer1.value.length;
  console.log(answerLength);
  result1.textContent = answerLength + "/" + limit;
});
