const questions = [
    {
        question: "What type of language is Javascript?",
        answers: [
            { text: "Object-Oriented", correct: true },
            { text: "Object-Based", correct: false },
            { text: "Procedural", correct: false },
            { text: "None of the above", correct: false }

        ]
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "Both a and b", correct: false },
            { text: "All of the above", correct: true }

        ]
    },
    {
        question: 'In JavaScript, what is a block of statement?',
        answers: [
            { text: "Conditional block", correct: false },
            { text: "block that combines a number of statements into a single compound statement.", correct: true },
            { text: "both conditional block and a single statement", correct: false },
            { text: "block that contains a single statement", correct: false }

        ]
    },
    {
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        answers: [
            { text: "Boolean", correct: false },
            { text: "Undefined", correct: false },
            { text: "Null", correct: false },
            { text: "Object", correct: true }

        ]
    },
    {
        question: "What does the ‘toLocateString()’ method do in JS?",
        answers: [
            { text: "Returns a localised object representation,", correct: false },
            { text: "Returns a parsed string.", correct: false },
            { text: "Returns a localised string representation of an object.", correct: true },
            { text: "None of the above", correct: false }

        ]
    }
]

const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer_buttons')
const nextButton = document.getElementById('next-button')

let currentQuestionIndex = 0
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion()
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + "." + currentQuestion.question
    currentQuestion.answers.forEach(answer => {
        // console.log("answerButtons", answerButtons)
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)

    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    console.log("isCorrect", isCorrect);

    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++
        console.log("Score", score)
    }
    else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
    });
    nextButton.style.display = "block"
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your Score is ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play again'
    nextButton.style.display = "block"
}

function handleNextQuestion() {
    currentQuestionIndex++;
    // console.log("currentQuestionIndex",currentQuestionIndex);
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore()
    }
}

nextButton.addEventListener("click", () => {
    console.log("clicked");
    if (currentQuestionIndex < questions.length) {
        handleNextQuestion()
    } else {
        startQuiz();
    }
})
startQuiz();
