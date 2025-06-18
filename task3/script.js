const quizData = [
    {
        question: "What is the capital city of India?",
        options: ["Mumbai", "New Delhi", "Hyderabad", "Bangalore"],
        correct: "New Delhi"
    },
    {
        question: "Which language is primarily used for web development in the browser?",
        options: ["Python", "C++", "Java", "JavaScript"],
        correct: "JavaScript"
    },
    {
        question: "What does HTML stand for?",
        options: ["HyperText Makeup Language", "Hyper Transfer Markup Language", "HyperText Markup Language", "HighText Markup Language"],
        correct: "HyperText Markup Language"
    },
    {
        question: "Which property is used in CSS for flexible layout design?",
        options: ["grid", "float", "position", "flex"],
        correct: "flex"
    },
    {
        question: "Which HTML tag is used to link an external CSS file?",
        options: ["<script>", "<link>", "<style>", "<css>"],
        correct: "<link>"
    }
];

let current = 0;

function loadQuestion() {
    const q = quizData[current];
    document.getElementById("question").textContent = q.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = '';
    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option, btn);
        optionsDiv.appendChild(btn);
    });
    document.getElementById("result").textContent = '';
}

function checkAnswer(selected, button) {
    const correct = quizData[current].correct;
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll("#options button");

    buttons.forEach(btn => btn.disabled = true);

    if (selected === correct) {
        result.textContent = "✅ Correct!";
        result.style.color = "green";
        button.style.backgroundColor = "#2ecc71";
    } else {
        result.textContent = `❌ Wrong! Correct: "${correct}"`;
        result.style.color = "red";
        button.style.backgroundColor = "#e74c3c";
    }
}

function nextQuestion() {
    current++;
    if (current < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("question").textContent = "🎉 Quiz Completed!";
        document.getElementById("options").innerHTML = '';
        document.getElementById("result").textContent = '';
        document.getElementById("next-btn").style.display = "none";
    }
}

// Load first question
window.onload = loadQuestion;
