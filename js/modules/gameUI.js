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

// Devam Et butonuna tıklama olayını bir kere tanımla
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
    scoreElement.textContent = gameState.score;
    correctElement.textContent = gameState.correctAnswers;
    wrongElement.textContent = gameState.wrongAnswers;
    currentQuestionElement.textContent = gameState.currentQuestionIndex + 1;
}

export function updateTimer() {
    timeLeftElement.textContent = gameState.timeLeft;
}

export function updateQuestionUI(question) {
    try {
        questionTextElement.textContent = question.question;
        optionsContainer.innerHTML = '';

        console.log('Soru yükleniyor:', question);
        console.log('Doğru cevap:', question.correctAnswer);

        // Seçenekleri karıştır
        const options = [...question.options];
        shuffleArray(options);

        options.forEach((option) => {
            const button = document.createElement('button');
            button.className = 'option-button w-full bg-white hover:bg-emerald-50 text-emerald-800 font-semibold py-3 px-6 rounded-lg border-2 border-emerald-100 transition-colors mb-2';
            button.textContent = option;
            button.onclick = () => {
                // Tüm butonları devre dışı bırak
                const allButtons = optionsContainer.querySelectorAll('button');
                allButtons.forEach(btn => btn.disabled = true);
                
                // Cevabı kontrol et
                checkAnswer(option, question.correctAnswer, question.explanation);
            };
            optionsContainer.appendChild(button);
        });
    } catch (error) {
        console.error('Soru arayüzü güncellenirken hata:', error);
        window.location.href = 'categories.html';
    }
}

export function showWrongAnswerModal(correctAnswer, explanation) {
    correctAnswerElement.textContent = correctAnswer;
    answerExplanationElement.textContent = explanation || 'Açıklama bulunmuyor.';
    wrongAnswerModal.classList.remove('hidden');
}

export function hideWrongAnswerModal() {
    wrongAnswerModal.classList.add('hidden');
}

export function showResultModal(stats) {
    const finalScoreElement = document.getElementById('finalScore');
    const finalCorrectElement = document.getElementById('finalCorrect');
    const finalWrongElement = document.getElementById('finalWrong');
    const highScoreElement = document.getElementById('highScore');
    const completionRateElement = document.getElementById('completionRate');
    const playCountElement = document.getElementById('playCount');
    const lastPlayedElement = document.getElementById('lastPlayed');

    // Temel istatistikleri güncelle
    finalScoreElement.textContent = stats.score;
    finalCorrectElement.textContent = stats.correctAnswers;
    finalWrongElement.textContent = stats.wrongAnswers;

    // Local storage'dan önceki verileri al
    const storageKey = `${gameState.selectedCategory}_${gameState.selectedLevel}`;
    const previousHighScore = parseInt(localStorage.getItem(`highScore_${storageKey}`)) || 0;
    const previousPlayCount = parseInt(localStorage.getItem(`playCount_${storageKey}`)) || 0;

    // Yeni değerleri hesapla
    const newHighScore = Math.max(stats.score, previousHighScore);
    const newPlayCount = previousPlayCount + 1;
    const completionRate = Math.round((stats.correctAnswers / 15) * 100);
    const currentDate = new Date().toLocaleDateString('tr-TR');

    // Yeni değerleri local storage'a kaydet
    localStorage.setItem(`highScore_${storageKey}`, newHighScore);
    localStorage.setItem(`playCount_${storageKey}`, newPlayCount);
    localStorage.setItem(`lastPlayed_${storageKey}`, currentDate);
    localStorage.setItem(`completionRate_${storageKey}`, completionRate);

    // İlerleme bilgilerini göster
    highScoreElement.textContent = newHighScore;
    completionRateElement.textContent = `%${completionRate}`;
    playCountElement.textContent = newPlayCount;
    lastPlayedElement.textContent = currentDate;

    // Modalı göster
    resultModal.classList.remove('hidden');
}

export function updateCategoryTitle(category, level) {
    categoryTitle.textContent = `${category.toUpperCase()} - Seviye ${level}`;
}

// Yardımcı fonksiyonlar
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
