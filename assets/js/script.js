var totalTime = 75;
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

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
var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");

// questions the quiz will pull from
const questions = [
    {
        question: "TEST QUESTION 1?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 2?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 3?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 4?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 5?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 6?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 7?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 8?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 9?",
        choices: ["A", "B", "C", "D"],
        answer: "A"
    },
    {
        question: "TEST QUESTION 10?",
        choices: ["A", "B", "C", "D"],
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

function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    question.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // correct answer, add 1 score to final score
        correctAns++;
        // console.log(correctAns);
        answerCheck.textContent = "Correct!";
    } else {
        // wrong answer, deduct 10 second from timer
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Incorrect! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    // repeat with the rest of questions 
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // if no more question, run game over function
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }
function chooseB() { checkAnswer(1); }
function chooseC() { checkAnswer(2); }
function chooseD() { checkAnswer(3); }


startBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);