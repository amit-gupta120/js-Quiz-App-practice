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
            { text: "var", correct: true },
            { text: "let", correct: false },
            { text: "Both a and b", correct: false },
            { text: "All of the above", correct: true }

        ]
    },
    {
        question: "What is the use of the <noscript> tag in Javascript?",
        answers: [
            { text: "The contents are displayed by non-JS-based broswers.", correct: true },
            { text: "Clear all cookies and cache.", correct: false },
            { text: "Both a and b", correct: false },
            { text: "None of the above", correct: true }

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
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + "." + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        console.log("dasdasdasd", answerButtons)
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
    });
}
startQuiz();
