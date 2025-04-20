const quizData = [
  {
    question: "How do you say 'Hello' in Spanish?",
    options: ["Hola", "Bonjour", "Ciao", "Hallo"],
    answer: "Hola"
  },
  {
    question: "What is the French word for 'Thank you'?",
    options: ["Danke", "Merci", "Gracias", "Grazie"],
    answer: "Merci"
  },
  {
    question: "Translate 'Goodbye' to German.",
    options: ["Adiós", "Au revoir", "Tschüss", "Ciao"],
    answer: "Tschüss"
  },
  {
    question: "What is the Italian word for 'Please'?",
    options: ["Per favore", "Por favor", "Bitte", "S'il vous plaît"],
    answer: "Per favore"
  },
  {
    question: "What is 'Yes' in Japanese?",
    options: ["Hai", "Oui", "Ja", "Sí"],
    answer: "Hai"
  },
  {
    question: "Translate 'No' to French.",
    options: ["Nein", "Non", "No", "Nee"],
    answer: "Non"
  },
  {
    question: "What is the Spanish word for 'Water'?",
    options: ["Agua", "Eau", "Acqua", "Wasser"],
    answer: "Agua"
  },
  {
    question: "What does 'Gracias' mean in English?",
    options: ["Thanks", "Hello", "Please", "Goodnight"],
    answer: "Thanks"
  },
  {
    question: "Which language uses the word 'Ciao' for Hello/Bye?",
    options: ["Italian", "German", "French", "Spanish"],
    answer: "Italian"
  },
  {
    question: "What is 'Bread' in French?",
    options: ["Pain", "Pane", "Pan", "Brötchen"],
    answer: "Pain"
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  const startButton = document.querySelector('#quiz-section .start-quiz');
  const resetButton = document.querySelector('#quiz-section .reset-quiz');
  if (resetButton) resetButton.style.display = 'none';
  if (startButton) startButton.style.display = 'none';
  currentQuestion = 0;
  score = 0;
  document.getElementById('quiz-container').innerHTML = '';
  showQuestion();
}

function showQuestion() {
  const q = quizData[currentQuestion];
  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <p class="text-lg font-medium mb-2">${q.question}</p>
    ${q.options.map(opt =>
      `<button onclick="checkAnswer('${opt}')" class="m-1 p-2 bg-gray-200 rounded hover:bg-gray-300">${opt}</button>`
    ).join('')}
  `;
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = `
    <h3 class="text-xl font-semibold">🎉 Quiz Completed!</h3>
    <p class="text-lg mt-2">You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong>.</p>
    <button onclick="startQuiz()" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Retry Quiz</button>
  `;
}

function finishQuiz() {
  const startButton = document.querySelector('#quiz-section .start-quiz');
  const resetButton = document.querySelector('#quiz-section .reset-quiz');
  if (startButton) startButton.style.display = 'none';
  if (resetButton) resetButton.style.display = 'block';
}

function resetQuiz() {
  const startButton = document.querySelector('#quiz-section .start-quiz');
  const resetButton = document.querySelector('#quiz-section .reset-quiz');
  if (startButton) startButton.style.display = 'block';
  if (resetButton) resetButton.style.display = 'none';
}