const button = document.querySelector("#start");
const quiz = document.querySelector('#quizContainer')
button.addEventListener("click", function (e) {
button.style.visibility = "hidden";

const reqUrl = "https://the-trivia-api.com/v2/questions";
const xhr = new XMLHttpRequest();
xhr.open("GET", reqUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(typeof data);
    // console.log(data.name);
    console.log(data);
    console.log(data[0].question.text);
    console.log(data[0].correctAnswer);
    console.log(data[0].incorrectAnswers[0]);
    console.log(data[0].incorrectAnswers[1]);
    console.log(data[0].incorrectAnswers[2]);

  quiz.innerHTML = `Question: ${data[0].question.text}
  \n a. ${data[0].correctAnswer}
  \n b. ${data[0].incorrectAnswers[1]}
  \n c. ${data[0].incorrectAnswers[0]}
  \n d. ${data[0].incorrectAnswers[2]}` 
}
};

xhr.send();
});