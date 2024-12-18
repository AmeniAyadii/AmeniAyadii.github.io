const quizData = [
    {
        question: "Is an orange called an orange because of its color, or is the color called orange because of the fruit?",
        options: [
            "The fruit came first",
            "The color came first",
            "They were named independently",
            "Neither, it's a coincidence"
        ],
        correct: 0
    },
    {
        question: "If you cry in space, where do your tears go?",
        options: [
            "They float away",
            "They stick to your face",
            "They evaporate instantly",
            "They fall down normally"
        ],
        correct: 1
    },
    {
        question: "Do penguins have knees?",
        options: [
            "Yes",
            "No",
            "Only emperor penguins do",
            "They have ankle joints instead"
        ],
        correct: 0
    },
    {
        question: "What happens to a grape when you microwave it?",
        options: [
            "It explodes",
            "It creates plasma",
            "It shrivels up",
            "Nothing happens"
        ],
        correct: 1
    },
    {
        question: "Why don't birds fall off branches when they sleep?",
        options: [
            "They're very light",
            "They have sticky feet",
            "Their toes lock automatically",
            "They don't actually sleep"
        ],
        correct: 2
    },
    {
        question: "Is water wet?",
        options: [
            "Yes",
            "No",
            "Only when touching something dry",
            "It depends on temperature"
        ],
        correct: 2
    },
    {
        question: "Do fish get thirsty?",
        options: [
            "Yes",
            "No",
            "Only saltwater fish",
            "Only freshwater fish"
        ],
        correct: 1
    },
    {
        question: "Why is the sky blue?",
        options: [
            "It reflects the ocean",
            "Because of nitrogen",
            "Due to Rayleigh scattering",
            "It's an optical illusion"
        ],
        correct: 2
    },
    {
        question: "Do all countries have 4 seasons?",
        options: [
            "Yes",
            "No",
            "Only in the Northern hemisphere",
            "Only developed countries"
        ],
        correct: 1
    },
    {
        question: "Why do cats purr?",
        options: [
            "Only when happy",
            "Only when content",
            "When healing or content",
            "Random vibrations"
        ],
        correct: 2
    }
];

function createQuiz() {
    const quizForm = document.getElementById('quiz-form');
    quizData.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <div class="options">
                ${q.options.map((opt, i) => `
                    <label>
                        <input type="radio" name="q${index}" value="${i}" required>
                        ${opt}
                    </label>
                `).join('')}
            </div>
        `;
        quizForm.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit Quiz';
    submitButton.className = 'submit-btn';
    quizForm.appendChild(submitButton);

    quizForm.addEventListener('submit', calculateScore);
}

function calculateScore(e) {
    e.preventDefault();
    let score = 0;
    let total = quizData.length;

    quizData.forEach((q, index) => {
        const answer = document.querySelector(`input[name="q${index}"]:checked`);
        if (answer && parseInt(answer.value) === q.correct) {
            score++;
        }
    });

    showResults(score, total);
}

function showResults(score, total) {
    const percentage = (score / total) * 100;
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    
    let message;
    if (percentage >= 80) {
        message = "Excellent! You're a genius! 🎉";
    } else if (percentage >= 60) {
        message = "Good job! You did well! 👏";
    } else if (percentage >= 40) {
        message = "Not bad, but there's room for improvement! 📚";
    } else {
        message = "Keep learning and try again! 💪";
    }

    resultDiv.innerHTML = `
        <h2>Quiz Results</h2>
        <p>You scored ${score} out of ${total}</p>
        <p>Percentage: ${percentage}%</p>
        <p>${message}</p>
        <button onclick="location.reload()" class="retry-btn">Try Again</button>
    `;

    const quizForm = document.getElementById('quiz-form');
    quizForm.style.display = 'none';
    quizForm.parentNode.appendChild(resultDiv);
}

document.addEventListener('DOMContentLoaded', createQuiz); 
document.addEventListener('DOMContentLoaded', createQuiz); 