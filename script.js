
/* ========================================
   QUIZ TIME — GAME LOGIC
   Vanilla JavaScript | No dependencies
   ======================================== */

"use strict";

/* ---------- QUESTION DATABASE ---------- */

const questionBank = {
    easy: [
        {
            question: "What is the capital city of France?",
            answers: ["Madrid", "Paris", "Rome", "Lisbon"],
            correct: 1,
            explanation: "Paris is the capital and largest city of France."
        },
        {
            question: "How many days are there in a normal year?",
            answers: ["364", "365", "366", "360"],
            correct: 1,
            explanation: "A normal year has 365 days. A leap year has 366."
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Venus", "Jupiter", "Mars", "Mercury"],
            correct: 2,
            explanation: "Mars looks reddish because its surface contains iron oxide."
        },
        {
            question: "Which animal is commonly called the king of the jungle?",
            answers: ["Tiger", "Elephant", "Leopard", "Lion"],
            correct: 3,
            explanation: "The lion is traditionally known by this nickname."
        },
        {
            question: "How many sides does a triangle have?",
            answers: ["Three", "Four", "Five", "Six"],
            correct: 0,
            explanation: "A triangle is a polygon with exactly three sides."
        },
        {
            question: "Which ocean is the largest on Earth?",
            answers: ["Atlantic", "Indian", "Pacific", "Arctic"],
            correct: 2,
            explanation: "The Pacific Ocean is the largest and deepest ocean on Earth."
        },
        {
            question: "What is the main language spoken in Brazil?",
            answers: ["Spanish", "Portuguese", "French", "Italian"],
            correct: 1,
            explanation: "Portuguese is the official language of Brazil."
        },
        {
            question: "Which instrument measures temperature?",
            answers: ["Barometer", "Compass", "Thermometer", "Telescope"],
            correct: 2,
            explanation: "A thermometer measures temperature."
        },
        {
            question: "How many hours are there in one day?",
            answers: ["12", "18", "24", "48"],
            correct: 2,
            explanation: "A standard day contains 24 hours."
        },
        {
            question: "Which star is closest to Earth?",
            answers: ["Sirius", "Polaris", "The Sun", "Betelgeuse"],
            correct: 2,
            explanation: "The Sun is Earth's nearest star."
        },
        {
            question: "What is the chemical symbol for water?",
            answers: ["CO2", "O2", "H2O", "NaCl"],
            correct: 2,
            explanation: "A water molecule contains two hydrogen atoms and one oxygen atom."
        },
        {
            question: "On which continent is Egypt primarily located?",
            answers: ["Asia", "Africa", "Europe", "South America"],
            correct: 1,
            explanation: "Most of Egypt lies in northeastern Africa; the Sinai Peninsula lies in Asia."
        }
    ],

    medium: [
        {
            question: "In which year did the first human land on the Moon?",
            answers: ["1965", "1969", "1972", "1975"],
            correct: 1,
            explanation: "Apollo 11 landed on the Moon in July 1969."
        },
        {
            question: "What is the chemical symbol for gold?",
            answers: ["Ag", "Gd", "Go", "Au"],
            correct: 3,
            explanation: "Au comes from the Latin word aurum, meaning gold."
        },
        {
            question: "Which country is home to the ancient city of Petra?",
            answers: ["Jordan", "Egypt", "Greece", "Turkey"],
            correct: 0,
            explanation: "Petra is an ancient archaeological city in Jordan."
        },
        {
            question: "What is the largest organ of the human body?",
            answers: ["Liver", "Brain", "Skin", "Lungs"],
            correct: 2,
            explanation: "The skin is the largest organ of the human body."
        },
        {
            question: "Who wrote the play Romeo and Juliet?",
            answers: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Oscar Wilde"],
            correct: 1,
            explanation: "Romeo and Juliet is a tragedy written by William Shakespeare."
        },
        {
            question: "What is the hardest naturally occurring mineral?",
            answers: ["Quartz", "Diamond", "Topaz", "Granite"],
            correct: 1,
            explanation: "Diamond ranks highest on the traditional Mohs mineral hardness scale."
        },
        {
            question: "Which gas do plants absorb during photosynthesis?",
            answers: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
            correct: 2,
            explanation: "Plants use carbon dioxide, water and light to produce sugars during photosynthesis."
        },
        {
            question: "What is the smallest prime number?",
            answers: ["0", "1", "2", "3"],
            correct: 2,
            explanation: "Two is the smallest prime number and the only even prime."
        },
        {
            question: "Which strait separates Spain from Morocco?",
            answers: ["Bering Strait", "Strait of Gibraltar", "Bosporus", "Dover Strait"],
            correct: 1,
            explanation: "The Strait of Gibraltar separates southern Spain from northern Morocco."
        },
        {
            question: "What is the currency of Japan?",
            answers: ["Won", "Yuan", "Yen", "Baht"],
            correct: 2,
            explanation: "The yen is the official currency of Japan."
        },
        {
            question: "Which planet has the most prominent ring system?",
            answers: ["Mars", "Saturn", "Venus", "Mercury"],
            correct: 1,
            explanation: "Saturn is famous for its large, bright and extensive ring system."
        },
        {
            question: "What is the approximate speed of light in a vacuum?",
            answers: ["30,000 km/s", "150,000 km/s", "300,000 km/s", "3,000,000 km/s"],
            correct: 2,
            explanation: "Light travels at approximately 300,000 kilometres per second in a vacuum."
        }
    ],

    hard: [
        {
            question: "Which element has the atomic number 74?",
            answers: ["Tungsten", "Platinum", "Osmium", "Rhenium"],
            correct: 0,
            explanation: "Tungsten, symbol W, has atomic number 74."
        },
        {
            question: "Which treaty formally ended the state of war between Germany and the Allied Powers after World War I?",
            answers: [
                "Treaty of Utrecht",
                "Treaty of Versailles",
                "Treaty of Tordesillas",
                "Treaty of Paris (1783)"
            ],
            correct: 1,
            explanation: "The Treaty of Versailles was signed in 1919 and addressed the peace settlement with Germany."
        },
        {
            question: "Which scientist formulated the uncertainty principle in quantum mechanics?",
            answers: [
                "Niels Bohr",
                "Erwin Schrödinger",
                "Werner Heisenberg",
                "Max Planck"
            ],
            correct: 2,
            explanation: "Werner Heisenberg formulated the uncertainty principle in 1927."
        },
        {
            question: "What is the SI unit of electric capacitance?",
            answers: ["Tesla", "Farad", "Weber", "Henry"],
            correct: 1,
            explanation: "The farad, named after Michael Faraday, is the SI unit of capacitance."
        },
        {
            question: "Which ancient civilization developed cuneiform writing?",
            answers: ["Sumerians", "Romans", "Aztecs", "Phoenicians"],
            correct: 0,
            explanation: "The Sumerians of ancient Mesopotamia developed early cuneiform writing."
        },
        {
            question: "Which moon is the largest in the Solar System?",
            answers: ["Titan", "Europa", "Ganymede", "Earth's Moon"],
            correct: 2,
            explanation: "Ganymede, a moon of Jupiter, is the largest moon in the Solar System."
        },
        {
            question: "What is the capital of Kazakhstan?",
            answers: ["Almaty", "Tashkent", "Bishkek", "Astana"],
            correct: 3,
            explanation: "Astana is the capital of Kazakhstan. Almaty was the capital until 1997."
        },
        {
            question: "Which mathematician is associated with the incompleteness theorems?",
            answers: ["Kurt Gödel", "Blaise Pascal", "Leonhard Euler", "Pierre-Simon Laplace"],
            correct: 0,
            explanation: "Kurt Gödel published his famous incompleteness theorems in 1931."
        },
        {
            question: "Which strait connects the Persian Gulf to the Gulf of Oman?",
            answers: ["Malacca Strait", "Hormuz Strait", "Dardanelles", "Magellan Strait"],
            correct: 1,
            explanation: "The Strait of Hormuz connects the Persian Gulf with the Gulf of Oman."
        },
        {
            question: "What is the SI unit of magnetic flux?",
            answers: ["Tesla", "Weber", "Gauss", "Farad"],
            correct: 1,
            explanation: "The weber is the SI unit of magnetic flux; the tesla measures magnetic flux density."
        },
        {
            question: "Which economist wrote The Wealth of Nations?",
            answers: ["John Maynard Keynes", "David Ricardo", "Adam Smith", "Thomas Malthus"],
            correct: 2,
            explanation: "Adam Smith published An Inquiry into the Nature and Causes of the Wealth of Nations in 1776."
        },
        {
            question: "Which layer of Earth's atmosphere contains most of its ozone layer?",
            answers: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            correct: 1,
            explanation: "Most atmospheric ozone is concentrated in the stratosphere."
        }
    ]
};

/* ---------- GAME SETTINGS ---------- */

const settings = {
    easy: {
        label: "🌱 EASY",
        seconds: 25,
        questionCount: 10
    },
    medium: {
        label: "⚡ MEDIUM",
        seconds: 20,
        questionCount: 10
    },
    hard: {
        label: "🔥 HARD",
        seconds: 15,
        questionCount: 10
    }
};

const STORAGE_PREFIX = "quizTimeBest_";
const LETTERS = ["A", "B", "C", "D"];

let selectedDifficulty = "easy";
let questions = [];
let currentIndex = 0;
let score = 0;
let secondsLeft = 0;
let timerId = null;
let answered = false;
let soundEnabled = true;
let audioContext = null;
let answerHistory = [];

/* ---------- DOM ELEMENTS ---------- */

const $ = (id) => document.getElementById(id);

const screens = {
    start: $("start-screen"),
    quiz: $("quiz-screen"),
    result: $("result-screen")
};

const elements = {
    startButton: $("start-btn"),
    restartButton: $("restart-btn"),
    quitButton: $("quit-btn"),
    nextButton: $("next-btn"),
    reviewButton: $("review-btn"),
    closeReviewButton: $("close-review-btn"),

    difficultyCards: document.querySelectorAll(".difficulty-card"),

    currentQuestion: $("current-question"),
    questionIndex: $("question-index"),
    totalQuestions: $("total-questions"),
    questionText: $("question-text"),
    questionHint: $("question-hint"),
    answersContainer: $("answers-container"),

    score: $("score"),
    progress: $("progress"),
    progressTrack: $("progress-track"),

    timer: $("timer"),
    timerCircle: $("timer-circle"),
    timerBox: $("timer-box"),

    feedback: $("feedback"),
    answerStatus: $("answer-status"),
    activeDifficulty: $("active-difficulty"),

    finalScore: $("final-score"),
    maxScore: $("max-score"),
    percentage: $("percentage"),
    resultTitle: $("result-title"),
    resultMessage: $("result-message"),
    resultIcon: $("result-icon"),
    correctCount: $("correct-count"),
    wrongCount: $("wrong-count"),
    resultBest: $("result-best"),
    headerBest: $("header-best"),
    visualBest: $("visual-best"),
    newRecord: $("new-record"),
    scoreCircle: $("score-circle"),

    reviewSection: $("review-section"),
    reviewList: $("review-list"),

    soundToggle: $("sound-toggle"),
    soundIcon: $("sound-icon")
};

/* ---------- STORAGE ---------- */

function getBestScore(difficulty) {
    try {
        const saved = localStorage.getItem(STORAGE_PREFIX + difficulty);

        if (saved === null) return 0;

        const value = Number(saved);

        return Number.isFinite(value)
            ? Math.max(0, Math.min(10, Math.floor(value)))
            : 0;
    } catch (error) {
        console.warn("Best score storage is unavailable.", error);
        return 0;
    }
}

function saveBestScore(difficulty, value) {
    try {
        localStorage.setItem(STORAGE_PREFIX + difficulty, String(value));
        return true;
    } catch (error) {
        console.warn("Could not save the best score.", error);
        return false;
    }
}

function updateBestScoreDisplay() {
    const best = getBestScore(selectedDifficulty);

    elements.headerBest.textContent = `${best}/10`;
    elements.visualBest.textContent = `${best} / 10`;
}

/* ---------- SCREEN NAVIGATION ---------- */

function showScreen(screenName) {
    Object.values(screens).forEach((screen) => {
        screen.classList.remove("active");
    });

    screens[screenName].classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ---------- SOUND EFFECTS ---------- */

function playTone(frequency, duration = 0.12, type = "sine") {
    if (!soundEnabled) return;

    try {
        const AudioContextClass =
            window.AudioContext || window.webkitAudioContext;

        if (!AudioContextClass) return;

        if (!audioContext) {
            audioContext = new AudioContextClass();
        }

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const now = audioContext.currentTime;

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.12, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            now + duration
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start(now);
        oscillator.stop(now + duration + 0.02);
    } catch (error) {
        // Sound is optional. The quiz remains playable if audio is unavailable.
    }
}

function playCorrectSound() {
    playTone(660, 0.12);
    window.setTimeout(() => playTone(880, 0.16), 100);
}

function playWrongSound() {
    playTone(260, 0.2, "triangle");
}

function playTimeoutSound() {
    playTone(190, 0.28, "triangle");
}

function updateSoundButton() {
    elements.soundIcon.textContent = soundEnabled ? "🔊" : "🔇";
    elements.soundToggle.setAttribute(
        "aria-label",
        soundEnabled ? "Turn sound off" : "Turn sound on"
    );
    elements.soundToggle.setAttribute(
        "aria-pressed",
        String(soundEnabled)
    );
}

/* ---------- DIFFICULTY SELECTION ---------- */

elements.difficultyCards.forEach((card) => {
    card.addEventListener("click", () => {
        selectedDifficulty = card.dataset.difficulty;

        elements.difficultyCards.forEach((item) => {
            const selected = item === card;

            item.classList.toggle("selected", selected);
            item.setAttribute("aria-pressed", String(selected));
        });

        updateBestScoreDisplay();
        playTone(520, 0.07);
    });
});

/* ---------- START / RESTART ---------- */

function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function startQuiz() {
    clearInterval(timerId);

    const config = settings[selectedDifficulty];

    questions = shuffleArray(questionBank[selectedDifficulty])
        .slice(0, config.questionCount);

    currentIndex = 0;
    score = 0;
    answered = false;
    answerHistory = [];

    elements.score.textContent = "0";
    elements.totalQuestions.textContent = String(questions.length);
    elements.maxScore.textContent = String(questions.length);
    elements.reviewSection.hidden = true;
    elements.reviewList.replaceChildren();
    elements.newRecord.hidden = true;

    elements.activeDifficulty.textContent = config.label;

    showScreen("quiz");
    loadQuestion();
}

/* ---------- LOAD QUESTION ---------- */

function loadQuestion() {
    clearInterval(timerId);

    if (currentIndex >= questions.length) {
        finishQuiz();
        return;
    }

    answered = false;

    const question = questions[currentIndex];

    elements.currentQuestion.textContent = String(currentIndex + 1);
    elements.questionIndex.textContent = String(currentIndex + 1);
    elements.questionText.textContent = question.question;
    elements.questionHint.textContent = "";
    elements.score.textContent = String(score);

    elements.progress.style.width =
        `${(currentIndex / questions.length) * 100}%`;

    elements.progressTrack.setAttribute(
        "aria-valuemax",
        String(questions.length)
    );

    elements.progressTrack.setAttribute(
        "aria-valuenow",
        String(currentIndex)
    );

    elements.answersContainer.replaceChildren();
    elements.feedback.hidden = true;
    elements.feedback.className = "feedback";
    elements.nextButton.disabled = true;
    elements.nextButton.querySelector("span").textContent =
        currentIndex === questions.length - 1
            ? "See Results"
            : "Next Question";

    elements.answerStatus.textContent = "Select the best answer";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-btn";

        const letter = document.createElement("span");
        letter.className = "answer-letter";
        letter.textContent = LETTERS[index];

        const text = document.createElement("span");
        text.className = "answer-text";
        text.textContent = answer;

        button.append(letter, text);

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        elements.answersContainer.appendChild(button);
    });

    startTimer();
}

/* ---------- COUNTDOWN TIMER ---------- */

function startTimer() {
    clearInterval(timerId);

    secondsLeft = settings[selectedDifficulty].seconds;
    updateTimerDisplay();

    timerId = window.setInterval(() => {
        if (answered) {
            clearInterval(timerId);
            return;
        }

        secondsLeft -= 1;
        updateTimerDisplay();

        if (secondsLeft <= 5 && secondsLeft > 0) {
            playTone(420, 0.045);
        }

        if (secondsLeft <= 0) {
            clearInterval(timerId);
            handleTimeout();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const totalSeconds = settings[selectedDifficulty].seconds;
    const remaining = Math.max(0, secondsLeft);

    const circumference = 2 * Math.PI * 20;
    const offset = circumference * (1 - remaining / totalSeconds);

    elements.timer.textContent = String(remaining);
    elements.timerCircle.style.strokeDasharray = String(circumference);
    elements.timerCircle.style.strokeDashoffset = String(offset);

    elements.timerBox.classList.toggle("warning", remaining <= 5);
}

/* ---------- ANSWER SELECTION ---------- */

function selectAnswer(selectedIndex) {
    if (answered) return;

    answered = true;
    clearInterval(timerId);

    const question = questions[currentIndex];
    const isCorrect = selectedIndex === question.correct;

    answerHistory.push({
        question: question.question,
        answers: [...question.answers],
        correctIndex: question.correct,
        selectedIndex,
        isCorrect,
        explanation: question.explanation,
        timedOut: false
    });

    if (isCorrect) {
        score += 1;
        playCorrectSound();
        elements.answerStatus.textContent = "Great job! That's correct.";
    } else {
        playWrongSound();
        elements.answerStatus.textContent = "Not quite. Keep going!";
    }

    elements.score.textContent = String(score);

    showAnswerFeedback(selectedIndex, isCorrect);
    elements.nextButton.disabled = false;
}

function showAnswerFeedback(selectedIndex, isCorrect) {
    const question = questions[currentIndex];
    const buttons = elements.answersContainer.querySelectorAll(".answer-btn");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.correct) {
            button.classList.add("correct");
            addAnswerMark(button, "✓");
        } else if (index === selectedIndex && !isCorrect) {
            button.classList.add("wrong");
            addAnswerMark(button, "✕");
        }
    });

    elements.feedback.className = isCorrect
        ? "feedback correct-feedback"
        : "feedback wrong-feedback";

    elements.feedback.replaceChildren();

    const title = document.createElement("strong");
    title.textContent = isCorrect ? "✓ Correct! " : "✕ Incorrect. ";

    const explanation = document.createElement("span");
    explanation.textContent = question.explanation;

    elements.feedback.append(title, explanation);
    elements.feedback.hidden = false;
}

function addAnswerMark(button, symbol) {
    const mark = document.createElement("span");
    mark.className = "answer-mark";
    mark.textContent = symbol;
    mark.setAttribute("aria-hidden", "true");
    button.appendChild(mark);
}

/* ---------- TIMEOUT ---------- */

function handleTimeout() {
    if (answered) return;

    answered = true;
    playTimeoutSound();

    const question = questions[currentIndex];

    answerHistory.push({
        question: question.question,
        answers: [...question.answers],
        correctIndex: question.correct,
        selectedIndex: null,
        isCorrect: false,
        explanation: question.explanation,
        timedOut: true
    });

    const buttons = elements.answersContainer.querySelectorAll(".answer-btn");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.correct) {
            button.classList.add("correct");
            addAnswerMark(button, "✓");
        }
    });

    elements.feedback.className = "feedback wrong-feedback";
    elements.feedback.replaceChildren();

    const title = document.createElement("strong");
    title.textContent = "⏰ Time's up! ";

    const explanation = document.createElement("span");
    explanation.textContent =
        `The correct answer is ${question.answers[question.correct]}. ${question.explanation}`;

    elements.feedback.append(title, explanation);
    elements.feedback.hidden = false;

    elements.answerStatus.textContent = "Time expired. Try the next one.";
    elements.nextButton.disabled = false;
}

/* ---------- NEXT QUESTION ---------- */

function nextQuestion() {
    if (!answered) return;

    currentIndex += 1;

    if (currentIndex >= questions.length) {
        finishQuiz();
    } else {
        loadQuestion();
    }
}

/* ---------- FINISH QUIZ ---------- */

function finishQuiz() {
    clearInterval(timerId);

    const total = questions.length;
    const correct = score;
    const incorrect = total - correct;
    const percentage = Math.round((correct / total) * 100);

    const previousBest = getBestScore(selectedDifficulty);
    const isNewRecord = score > previousBest;
    const best = Math.max(previousBest, score);

    if (isNewRecord) {
        saveBestScore(selectedDifficulty, score);
    }

    elements.progress.style.width = "100%";
    elements.progressTrack.setAttribute("aria-valuenow", String(total));

    elements.finalScore.textContent = String(score);
    elements.maxScore.textContent = String(total);
    elements.percentage.textContent = `${percentage}%`;
    elements.correctCount.textContent = String(correct);
    elements.wrongCount.textContent = String(incorrect);
    elements.resultBest.textContent = `${best}/${total}`;

    elements.scoreCircle.style.background =
        `conic-gradient(#a66cff 0%, #5485ff ${percentage}%, rgba(255,255,255,0.08) ${percentage}%)`;

    elements.newRecord.hidden = !isNewRecord;

    if (percentage === 100) {
        elements.resultIcon.textContent = "🏆";
        elements.resultTitle.textContent = "Perfect score!";
        elements.resultMessage.textContent =
            "Incredible! You answered every question correctly.";
    } else if (percentage >= 80) {
        elements.resultIcon.textContent = "🎉";
        elements.resultTitle.textContent = "Excellent work!";
        elements.resultMessage.textContent =
            "You know your stuff! Keep challenging yourself.";
    } else if (percentage >= 60) {
        elements.resultIcon.textContent = "👏";
        elements.resultTitle.textContent = "Well done!";
        elements.resultMessage.textContent =
            "You're making great progress. A little more practice will help.";
    } else if (percentage >= 40) {
        elements.resultIcon.textContent = "💪";
        elements.resultTitle.textContent = "Keep it up!";
        elements.resultMessage.textContent =
            "You're learning. Review your answers and give it another try.";
    } else {
        elements.resultIcon.textContent = "📚";
        elements.resultTitle.textContent = "Keep learning!";
        elements.resultMessage.textContent =
            "Every attempt is a chance to learn something new.";
    }

    updateBestScoreDisplay();
    showScreen("result");
}

/* ---------- REVIEW ANSWERS ---------- */

function renderReview() {
    elements.reviewList.replaceChildren();

    answerHistory.forEach((entry, index) => {
        const item = document.createElement("article");
        item.className = `review-item ${
            entry.isCorrect ? "review-correct" : "review-wrong"
        }`;

        const number = document.createElement("span");
        number.className = "review-question-number";
        number.textContent = `QUESTION ${index + 1}`;

        const title = document.createElement("h3");
        title.textContent = entry.question;

        const yourAnswer = document.createElement("p");
        yourAnswer.className = "review-answer";

        const yourLabel = document.createElement("strong");
        yourLabel.textContent = "Your answer: ";

        const yourValue = document.createElement("span");
        yourValue.className = entry.isCorrect
            ? "review-correct-text"
            : "review-wrong-text";

        if (entry.timedOut) {
            yourValue.textContent = "Time ran out";
        } else {
            yourValue.textContent =
                entry.answers[entry.selectedIndex];
        }

        yourAnswer.append(yourLabel, yourValue);

        const correctAnswer = document.createElement("p");
        correctAnswer.className = "review-answer";

        const correctLabel = document.createElement("strong");
        correctLabel.textContent = "Correct answer: ";

        const correctValue = document.createElement("span");
        correctValue.className = "review-correct-text";
        correctValue.textContent = entry.answers[entry.correctIndex];

        correctAnswer.append(correctLabel, correctValue);

        const explanation = document.createElement("p");
        explanation.className = "review-explanation";
        explanation.textContent = entry.explanation;

        item.append(
            number,
            title,
            yourAnswer,
            correctAnswer,
            explanation
        );

        elements.reviewList.appendChild(item);
    });

    elements.reviewSection.hidden = false;

    window.requestAnimationFrame(() => {
        elements.reviewSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

/* ---------- EVENT LISTENERS ---------- */

elements.startButton.addEventListener("click", startQuiz);
elements.restartButton.addEventListener("click", startQuiz);
elements.nextButton.addEventListener("click", nextQuestion);

elements.quitButton.addEventListener("click", () => {
    const shouldQuit = window.confirm(
        "Exit this quiz? Your current game progress will be lost."
    );

    if (!shouldQuit) return;

    clearInterval(timerId);
    showScreen("start");
    updateBestScoreDisplay();
});

elements.soundToggle.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    updateSoundButton();

    if (soundEnabled) {
        playTone(550, 0.08);
    }
});

elements.reviewButton.addEventListener("click", renderReview);

elements.closeReviewButton.addEventListener("click", () => {
    elements.reviewSection.hidden = true;

    elements.resultCard?.scrollIntoView?.({
        behavior: "smooth",
        block: "start"
    });

    screens.result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

/* ---------- INITIALIZE ---------- */

updateSoundButton();
updateBestScoreDisplay();
