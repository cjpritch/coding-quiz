var totalTime = 75;
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");
var startDiv = document.getElementById("start");
var startBtn = document.getElementById("startBtn");
var questionDiv = document.getElementById("questionDiv");
var question = document.getElementById("question");
var choiceA = document.getElementById("btn1");
var choiceB = document.getElementById("btn2");
var choiceC = document.getElementById("btn3");
var choiceD = document.getElementById("btn4");
var answerCheck = document.getElementById("checkAnswer");

// questions the quiz will pull from
const questions = [
    {
        question: "TEST QUESTION 1?",
        choices: ["A", "C", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 2?",
        choices: ["A", "C", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 3?",
        choices: ["A", "C", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 4?",
        choices: ["A", "C", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 5?",
        choices: ["A", "C", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 6?",
        choices: ["A", "C", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 7?",
        choices: ["A", "C", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 8?",
        choices: ["A", "C", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 9?",
        choices: ["A", "C", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 10?",
        choices: ["A", "C", "C", "D"],
        answer: "A"
    },
];

function newQuiz() {
    questionIndex = 0;
    totalTime = 75;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};



startBtn.addEventListener("click", newQuiz);
