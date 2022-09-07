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
var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");
var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

// questions the quiz will pull from
const questions = [
    {
        question: "What is the correct way to write a comment in JavaScript?",
        choices: [
            "A. {#...#}", 
            "B. <!---....---!>", 
            "C. //...", 
            "D. \\..."
        ],
        answer: "C. //..."
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: [
            "A. <js>", 
            "B. <scripting>", 
            "C. <javascript>", 
            "D. <script>"
        ],
        answer: "D. <script>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: [
            "A. msg('Hello World')",
            "B. alert('Hello World')", 
            "C. alertBox('Hello World')", 
            "D. msgBox('Hello World')"
        ],
        answer: "B. alert('Hello World')"
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: [
            "A. function = myFunction()", 
            "B. function:myFunction()", 
            "C. function myFunction()", 
            "D. function = myFunction"
        ],
        answer: "C. function myFunction()"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        choices: [
            "A. call myFunction()", 
            "B. call function myFunction()", 
            "C. myFunction()", 
            "D. call function = myFunction()"
        ],
        answer: "C. myFunction()"
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        choices: [
            "A. if i = 5 then", 
            "B. if i == 5 then", 
            "C. if i=5", 
            "D. if (i ==5)"
        ],
        answer: "D. if (i ==5)"
    },
    {
        question: "How does a WHILE loop start?",
        choices: [
            "A. while i = 1 to 10", 
            "B. while (i <= 10; i++)", 
            "C. while (i <= 10)", 
            "D. while i (< 10) "
        ],
        answer: "C. while (i <= 10)"
    },
    {
        question: "How does a FOR loop start?",
        choices: [
            "A. for (i = 0; i <= 5; i++)", 
            "B for i = 1 to 5", 
            "C. for (i <= 5; i++)", 
            "D. for (i=0; i<=5)"
        ],
        answer: "A. for (i = 0; i <= 5; i++)"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choices: [
            "A. var colors = (1:'red', 2:'green', 3:'blue'", 
            "B. var colors = 1. red, 2. green, 3. blue",
            "C. var colors = ['red', 'green', 'blue']", 
            "D. var color = 'red', 'green', 'blue'"
        ],
        answer: "C. var colors = ['red', 'green', 'blue']"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: [
            "A. onclick", 
            "B. onmouseclick", 
            "C. onselect", 
            "D. onchange"
        ],
        answer: "A. onclick"
    },
];
// sets baseline for a new quiz and starts the timer when called 
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
// displays options for questions 
function nextQuestion() {
    question.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}


// checks if the selected answer is correct
function checkAnswer(answer) {

   answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        correctAns++;
        answerCheck.textContent = "Correct!";
    } else {
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Incorrect! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }
function chooseB() { checkAnswer(1); }
function chooseC() { checkAnswer(2); }
function chooseD() { checkAnswer(3); }

// displays a summmary when the game ends
function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    finalScore.textContent = correctAns;
}

// enter initials for scoreboard
function storeHighScores(event) {
    event.preventDefault();

    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    } 

    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";   

    // store scores into local storage
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    scoresArray.push(userScore);

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    // show current highscores
    showHighScores();
}


// show high scores
var i = 0;
function showHighScores() {

    startDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    if (savedHighScores === null) {
        return;
    }

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("li");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score + " points";
        listOfHighScores.appendChild(eachNewHighScore);
    }
}

startBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

// event listeners 
submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
});

goBackBtn.addEventListener("click", function() {
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";
});

clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";
});


