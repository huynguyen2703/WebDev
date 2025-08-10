document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-btn");
  const nextButton = document.getElementById("next-btn");
  const restartButton = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choiceList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startButton.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextButton.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choiceList.innerHTML = "";
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => {
        selectAnswer(choice);
      });
      choiceList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (choice === correctAnswer) {
      score++;
    }

    Array.from(choiceList.children).forEach((li) => {
      li.style.pointerEvents = "none";
      if (li.textContent === correctAnswer) {
        li.style.backgroundColor = "lightgreen";
      } else if (li.textContent === choice) {
        li.style.backgroundColor = "lightcoral";
      }
    });

    nextButton.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
