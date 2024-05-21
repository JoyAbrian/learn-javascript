const questions = [
    {
        questions: "What was the original name of the search engine 'Google'?",
        answers: [
            { text: 'Backrub', correct: true },
            { text: 'Webcrawler', correct: false },
            { text: 'Yahoo Search', correct: false },
            { text: 'Altavista', correct: false }
        ]
    },
    {
        questions: "What does CPU stand for?",
        answers: [
            { text: 'Central Process Unit', correct: false },
            { text: 'Computer Personal Unit', correct: false },
            { text: 'Central Processing Unit', correct: true },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        questions: "What does GPU stand for?",
        answers: [
            { text: 'Graphical Process Unit', correct: false },
            { text: 'Graphical Processing Unit', correct: true },
            { text: 'Graphical Personal Unit', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        questions: "What does RAM stand for?",
        answers: [
            { text: 'Random Access Memory', correct: true },
            { text: 'Read Access Memory', correct: false },
            { text: 'Randomly Access Memory', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        questions: "What does ROM stand for?",
        answers: [
            { text: 'Read Only Memory', correct: true },
            { text: 'Read On Memory', correct: false },
            { text: 'Read Off Memory', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        questions: "What does HTML stand for?",
        answers: [
            { text: 'Hyper Text Markup Language', correct: true },
            { text: 'Hyperlinks and Text Markup Language', correct: false },
            { text: 'Home Tool Markup Language', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        questions: "What year was JavaScript launched?",
        answers: [
            { text: '1996', correct: false },
            { text: '1995', correct: true },
            { text: '1994', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        questions: "What does CSS stand for?",
        answers: [
            { text: 'Creative Style Sheets', correct: false },
            { text: 'Computer Style Sheets', correct: false },
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        questions: "What does HTTP stand for?",
        answers: [
            { text: 'HyperText Transfer Protocol', correct: true },
            { text: 'HyperText Test Protocol', correct: false },
            { text: 'HyperTransfer Text Protocol', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        questions: "What does URL stand for?",
        answers: [
            { text: 'Uniform Resource Locator', correct: true },
            { text: 'Uniform Resource Link', correct: false },
            { text: 'Uniform Resource Location', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        questions: "Which planet is known as the Red Planet?",
        answers: [
            { text: 'Mars', correct: true },
            { text: 'Venus', correct: false },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        questions: "What is the capital of France?",
        answers: [
            { text: 'Paris', correct: true },
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Rome', correct: false }
        ]
    },
    {
        questions: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: 'William Shakespeare', correct: true },
            { text: 'George Bernard Shaw', correct: false },
            { text: 'Jane Austen', correct: false },
            { text: 'Mark Twain', correct: false }
        ]
    },
    {
        questions: "What is the chemical symbol for water?",
        answers: [
            { text: 'H2O', correct: true },
            { text: 'O2', correct: false },
            { text: 'CO2', correct: false },
            { text: 'H2', correct: false }
        ]
    },
    {
        questions: "Which element has the atomic number 1?",
        answers: [
            { text: 'Hydrogen', correct: true },
            { text: 'Oxygen', correct: false },
            { text: 'Carbon', correct: false },
            { text: 'Helium', correct: false }
        ]
    },
    {
        questions: "Who was the first President of the United States?",
        answers: [
            { text: 'George Washington', correct: true },
            { text: 'Thomas Jefferson', correct: false },
            { text: 'Abraham Lincoln', correct: false },
            { text: 'John Adams', correct: false }
        ]
    },
    {
        questions: "Which is the largest ocean on Earth?",
        answers: [
            { text: 'Pacific Ocean', correct: true },
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false }
        ]
    },
    {
        questions: "What is the smallest prime number?",
        answers: [
            { text: '2', correct: true },
            { text: '1', correct: false },
            { text: '3', correct: false },
            { text: '5', correct: false }
        ]
    },
    {
        questions: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: 'Japan', correct: true },
            { text: 'China', correct: false },
            { text: 'South Korea', correct: false },
            { text: 'Thailand', correct: false }
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = "Your Score is " + score + " out of " + questions.length;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();