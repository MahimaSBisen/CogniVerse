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
    // console.log(data);
    // console.log(data[0].question.text);
    // console.log(data[0].correctAnswer);
    // console.log(data[0].incorrectAnswers[0]);
    // console.log(data[0].incorrectAnswers[1]);
    // console.log(data[0].incorrectAnswers[2]);
    quiz.innerHTML = `<h3 id="ques"> Question:  ${data[0].question.text} </h3>
    <button class="optionAns"  id="ansBut"> A. ${data[0].correctAnswer}</button> 
    <button class="optionAns"  id="IansBut1"> B. ${data[0].incorrectAnswers[0]}</button> 
    <button class="optionAns"  id="IansBut2"> C. ${data[0].incorrectAnswers[1]}</button> 
    <button class="optionAns"  id="IansBut3"> D. ${data[0].incorrectAnswers[2]}</button> 
    <button id="next">Next</button>`


const cAns = document.querySelector('#ansBut')
  cAns.addEventListener('click',function(e){
    if(e.target === cAns){
    quiz.innerHTML = `<h3 id="ques"> Question:  ${data[0].question.text} </h3>
    <button class="optionAns"  id="ansBut"> A. ${data[0].correctAnswer}</button> 
    <button class="optionAns"  id="IansBut1"> B. ${data[0].incorrectAnswers[0]}</button> 
    <button class="optionAns"  id="IansBut2"> C. ${data[0].incorrectAnswers[1]}</button> 
    <button class="optionAns"  id="IansBut3"> D. ${data[0].incorrectAnswers[2]}</button> 
    <button id="next">Next</button>
    <button id="butCAns"> Correct Answer </button>`
    } 
  })

  const wAns1 = document.querySelector('#IansBut1')
    wAns1.addEventListener('click',function(e){
      if(e.target === wAns1){
        quiz.innerHTML = `<h3 id="ques"> Question:  ${data[0].question.text} </h3>
        <button class="optionAns"  id="ansBut"> A. ${data[0].correctAnswer}</button> 
        <button class="optionAns"  id="IansBut1"> B. ${data[0].incorrectAnswers[0]}</button> 
        <button class="optionAns"  id="IansBut2"> C. ${data[0].incorrectAnswers[1]}</button> 
        <button class="optionAns"  id="IansBut3"> D. ${data[0].incorrectAnswers[2]}</button> 
        <button id="next">Next</button>
        <button class="butWAns">Incorrect Answer</button>`
      }
  })

  const wAns2 = document.querySelector('#IansBut2')
    wAns2.addEventListener('click',function(e){
      if(e.target === wAns2){
        quiz.innerHTML = `<h3 id="ques"> Question:  ${data[0].question.text} </h3>
        <button class="optionAns"  id="ansBut"> A. ${data[0].correctAnswer}</button> 
        <button class="optionAns"  id="IansBut1"> B. ${data[0].incorrectAnswers[0]}</button> 
        <button class="optionAns"  id="IansBut2"> C. ${data[0].incorrectAnswers[1]}</button> 
        <button class="optionAns"  id="IansBut3"> D. ${data[0].incorrectAnswers[2]}</button> 
        <button id="next">Next</button>
        <button class="butWAns"> Incorrect Answer</button>`
      }
  })

  const wAns3 = document.querySelector('#IansBut3')
    wAns3.addEventListener('click',function(e){
      if(e.target === wAns3){
        quiz.innerHTML = `<h3 id="ques"> Question:  ${data[0].question.text} </h3>
        <button class="optionAns"  id="ansBut"> A. ${data[0].correctAnswer}</button> 
        <button class="optionAns"  id="IansBut1"> B. ${data[0].incorrectAnswers[0]}</button> 
        <button class="optionAns"  id="IansBut2"> C. ${data[0].incorrectAnswers[1]}</button> 
        <button class="optionAns"  id="IansBut3"> D. ${data[0].incorrectAnswers[2]}</button> 
        <button id="next">Next</button>
        <button class="butWAns">Incorrect Answer</button>`
      }
  })

 

  const nextButton = document.querySelector('#next')
  
nextButton.addEventListener('click',function(e){
  console.log("next");



 
})

 


}
};



xhr.send();
});






