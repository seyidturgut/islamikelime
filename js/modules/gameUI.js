import { gameState, saveGameHistory } from './gameState.js';
import { checkAnswer, nextQuestion } from './gameLogic.js';

// UI Elementleri
const scoreElement = document.getElementById('score');
const correctElement = document.getElementById('correct');
const wrongElement = document.getElementById('wrong');
const timeLeftElement = document.getElementById('timeLeft');
const currentQuestionElement = document.getElementById('currentQuestion');
const totalQuestionsElement = document.getElementById('totalQuestions');
const questionTextElement = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const categoryTitle = document.getElementById('categoryTitle');
const resultModal = document.getElementById('resultModal');
const wrongAnswerModal = document.getElementById('wrongAnswerModal');
const correctAnswerElement = document.getElementById('correctAnswer');
const answerExplanationElement = document.getElementById('answerExplanation');
const continueButton = document.getElementById('continueButton');

// UI güncellemelerini optimize etmek için RAF kullanımı
let updatePending = false;
const updates = {
    score: null,
    correct: null,
    wrong: null,
    currentQuestion: null,
    timeLeft: null
};

function scheduleUpdate() {
    if (!updatePending) {
        updatePending = true;
        requestAnimationFrame(() => {
            performUpdate();
            updatePending = false;
        });
    }
}

function performUpdate() {
    if (updates.score !== null) {
        scoreElement.textContent = updates.score;
        updates.score = null;
    }
    if (updates.correct !== null) {
        correctElement.textContent = updates.correct;
        updates.correct = null;
    }
    if (updates.wrong !== null) {
        wrongElement.textContent = updates.wrong;
        updates.wrong = null;
    }
    if (updates.currentQuestion !== null) {
        currentQuestionElement.textContent = updates.currentQuestion;
        updates.currentQuestion = null;
    }
    if (updates.timeLeft !== null) {
        timeLeftElement.textContent = updates.timeLeft;
        updates.timeLeft = null;
    }
}

// Event delegation için tek bir click handler
optionsContainer.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (button && !button.disabled) {
        const answer = button.dataset.answer;
        const question = gameState.questions[gameState.currentQuestionIndex];
        checkAnswer(answer, question.correctAnswer, question.explanation);
    }
});

// Devam Et butonuna tıklama olayı
continueButton.addEventListener('click', () => {
    hideWrongAnswerModal();
    // Butonları tekrar aktif et
    const allButtons = optionsContainer.querySelectorAll('button');
    allButtons.forEach(btn => btn.disabled = false);
    // Bir sonraki soruya geç
    nextQuestion();
});

// UI Güncelleme Fonksiyonları
export function updateScore() {
    updates.score = gameState.score;
    updates.correct = gameState.correctAnswers;
    updates.wrong = gameState.wrongAnswers;
    updates.currentQuestion = gameState.currentQuestionIndex + 1;
    scheduleUpdate();
}

export function updateTimer() {
    updates.timeLeft = gameState.timeLeft;
    scheduleUpdate();
}

export function updateQuestionUI(question) {
    try {
        questionTextElement.textContent = question.question;
        
        // Fragment kullanarak DOM manipülasyonlarını optimize et
        const fragment = document.createDocumentFragment();
        const options = shuffleArray([...question.options]);
        
        options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-button bg-white hover:bg-emerald-50 text-emerald-800 font-semibold py-4 px-6 rounded-xl shadow-sm transition-colors mb-4 md:mb-0';
            button.dataset.answer = option;
            button.textContent = option;
            fragment.appendChild(button);
        });

        // Tek seferde DOM'u güncelle
        optionsContainer.innerHTML = '';
        optionsContainer.appendChild(fragment);

    } catch (error) {
        console.error('Soru UI güncellenirken hata:', error);
    }
}

export function showWrongAnswerModal(correctAnswer, explanation) {
    correctAnswerElement.textContent = correctAnswer;
    answerExplanationElement.textContent = explanation;
    wrongAnswerModal.classList.remove('hidden');
}

export function hideWrongAnswerModal() {
    wrongAnswerModal.classList.add('hidden');
}

export function showResultModal() {
    const finalScore = gameState.score;
    const correctCount = gameState.correctAnswers;
    const wrongCount = gameState.wrongAnswers;
    const totalQuestions = gameState.questions.length;
    const accuracy = Math.round((correctCount / totalQuestions) * 100);

    // Sonuç modalını güncelle
    document.getElementById('finalScore').textContent = finalScore;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;
    document.getElementById('accuracy').textContent = accuracy;

    // Performans mesajını belirle
    let performanceMessage = '';
    if (accuracy >= 90) {
        performanceMessage = 'Mükemmel! Harika bir performans gösterdiniz! ';
    } else if (accuracy >= 70) {
        performanceMessage = 'Çok iyi! Güzel bir performans! ';
    } else if (accuracy >= 50) {
        performanceMessage = 'İyi! Biraz daha pratik yaparak daha da gelişebilirsiniz. ';
    } else {
        performanceMessage = 'Daha fazla pratik yaparak kendini geliştirebilirsin. ';
    }
    document.getElementById('performanceMessage').textContent = performanceMessage;

    // Modalı göster
    resultModal.classList.remove('hidden');
}

export function updateCategoryTitle(category, level) {
    categoryTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} - Seviye ${level}`;
}

// Yardımcı fonksiyonlar
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
