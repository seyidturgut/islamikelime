// Oyun durumu
let gameState = {
    currentQuestion: 0,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    questions: [],
    selectedLevel: null,
    selectedCategory: null,
    timeLeft: 45,
    timer: null,
    soundEnabled: true
};

// DOM elementleri
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const scoreElement = document.getElementById('score');
const correctElement = document.getElementById('correct');
const wrongElement = document.getElementById('wrong');
const resultModal = document.getElementById('resultModal');
const wrongAnswerModal = document.getElementById('wrongAnswerModal');
const correctAnswer = document.getElementById('correctAnswer');
const answerExplanation = document.getElementById('answerExplanation');
const continueButton = document.getElementById('continueButton');
const finalScoreElement = document.getElementById('finalScore');
const finalCorrectElement = document.getElementById('finalCorrect');
const finalWrongElement = document.getElementById('finalWrong');
const categoryTitle = document.getElementById('categoryTitle');
const timeLeftElement = document.getElementById('timeLeft');
const soundToggle = document.getElementById('sound-toggle');
const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');
const backButton = document.getElementById('backButton');
const exitConfirmModal = document.getElementById('exitConfirmModal');
const exitConfirm = document.getElementById('exitConfirm');
const exitCancel = document.getElementById('exitCancel');
const currentQuestionElement = document.getElementById('currentQuestion');
const totalQuestionsElement = document.getElementById('totalQuestions');

// Ses kontrolü
function initSoundControl() {
    // Ses durumunu localStorage'dan al
    gameState.soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
    updateSoundButton();
    
    soundToggle.onclick = () => {
        gameState.soundEnabled = !gameState.soundEnabled;
        localStorage.setItem('soundEnabled', gameState.soundEnabled);
        updateSoundButton();
    };
}

function updateSoundButton() {
    const icon = soundToggle.querySelector('i');
    if (gameState.soundEnabled) {
        icon.className = 'fas fa-volume-up text-xl';
        soundToggle.className = 'text-emerald-600 hover:text-emerald-700 transition-colors p-2 rounded-lg bg-emerald-100';
    } else {
        icon.className = 'fas fa-volume-mute text-xl';
        soundToggle.className = 'text-red-600 hover:text-red-700 transition-colors p-2 rounded-lg bg-red-100';
    }
}

function playSound(isCorrect) {
    if (!gameState.soundEnabled) return;
    
    if (isCorrect) {
        correctSound.currentTime = 0;
        correctSound.play();
    } else {
        wrongSound.currentTime = 0;
        wrongSound.play();
    }
}

// Çıkış kontrolü
function initExitControl() {
    backButton.onclick = (e) => {
        e.preventDefault();
        if (gameState.currentQuestion > 0) {
            exitConfirmModal.classList.remove('hidden');
        } else {
            window.location.href = 'categories.html';
        }
    };
    
    exitConfirm.onclick = () => {
        window.location.href = 'categories.html';
    };
    
    exitCancel.onclick = () => {
        exitConfirmModal.classList.add('hidden');
    };
}

// URL'den kategori ve seviye bilgisini al
function getGameParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    gameState.selectedCategory = urlParams.get('category');
    gameState.selectedLevel = urlParams.get('level');
    return { category: gameState.selectedCategory, level: gameState.selectedLevel };
}

// Soruları yükle
function loadQuestions() {
    const { category, level } = getGameParameters();
    
    // Global değişken adını oluştur (örn: namaz1Questions)
    const questionsVarName = `${category}${level}Questions`;
    console.log('Yüklenecek soru seti:', questionsVarName);
    
    // Global değişkenden soruları al
    if (window[questionsVarName]) {
        console.log('Sorular bulundu:', window[questionsVarName]);
        gameState.questions = window[questionsVarName];
        
        // Kategori başlığını güncelle
        const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
        categoryTitle.textContent = `${categoryName} - Seviye ${level}`;
        
        startGame();
    } else {
        console.error('Sorular yüklenemedi:', questionsVarName);
        console.log('Mevcut global değişkenler:', Object.keys(window).filter(key => key.includes('Questions')));
        alert('Sorular yüklenirken bir hata oluştu');
    }
}

// Oyunu başlat
function startGame() {
    gameState.currentQuestion = 0;
    gameState.score = 0;
    gameState.correctAnswers = 0;
    gameState.wrongAnswers = 0;
    gameState.timeLeft = 45;
    
    // Süre sayacını başlat
    startTimer();
    
    // Soruları karıştır ve ilk soruyu göster
    shuffleArray(gameState.questions);
    showQuestion();
}

// Süre sayacını başlat
function startTimer() {
    // Önceki sayacı temizle
    if (gameState.timer) {
        clearInterval(gameState.timer);
    }
    
    // Yeni sayacı başlat
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        timeLeftElement.textContent = gameState.timeLeft;
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            endGame();
        }
    }, 1000);
}

// Süre sayacını durdur
function pauseTimer() {
    if (gameState.timer) {
        clearInterval(gameState.timer);
    }
}

// Süre sayacını devam ettir
function resumeTimer() {
    startTimer();
}

// Soruyu göster
function showQuestion() {
    if (gameState.currentQuestion >= Math.min(15, gameState.questions.length)) {
        endGame();
        return;
    }

    const question = gameState.questions[gameState.currentQuestion];
    questionText.textContent = question.question;
    
    // Seçenekleri karıştır ve göster
    const shuffledOptions = [...question.options];
    shuffleArray(shuffledOptions);
    
    optionsContainer.innerHTML = '';
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.className = 'w-full p-4 rounded-lg bg-white border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-colors text-emerald-800';
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

// Cevabı kontrol et
function checkAnswer(selectedOption) {
    const question = gameState.questions[gameState.currentQuestion];
    
    if (selectedOption === question.correctAnswer) {
        // Doğru cevap
        gameState.score += 10;
        gameState.correctAnswers++;
        playSound(true);
        gameState.currentQuestion++;
        updateUI();
        
        if (gameState.currentQuestion >= Math.min(15, gameState.questions.length)) {
            endGame();
        } else {
            showQuestion();
        }
    } else {
        // Yanlış cevap
        gameState.wrongAnswers++;
        playSound(false);
        gameState.currentQuestion++;
        updateUI();
        pauseTimer();
        showWrongAnswerModal(question);
    }
}

// Yanlış cevap modalını göster
function showWrongAnswerModal(question) {
    correctAnswer.textContent = question.correctAnswer;
    answerExplanation.textContent = question.explanation;
    wrongAnswerModal.classList.remove('hidden');
    
    // Devam et butonuna tıklanınca
    continueButton.onclick = () => {
        wrongAnswerModal.classList.add('hidden');
        // Süreyi devam ettir ve sonraki soruya geç
        resumeTimer();
        showQuestion();
    };
}

// UI'ı güncelle
function updateUI() {
    scoreElement.textContent = gameState.score;
    correctElement.textContent = gameState.correctAnswers;
    wrongElement.textContent = gameState.wrongAnswers;
    currentQuestionElement.textContent = gameState.currentQuestion;
    totalQuestionsElement.textContent = '15';
}

// Oyunu bitir
function endGame() {
    // Süre sayacını durdur
    if (gameState.timer) {
        clearInterval(gameState.timer);
    }
    
    finalScoreElement.textContent = gameState.score;
    finalCorrectElement.textContent = gameState.correctAnswers;
    finalWrongElement.textContent = gameState.wrongAnswers;
    resultModal.classList.remove('hidden');
}

// Array'i karıştır
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Sayfa yüklendiğinde oyunu başlat
document.addEventListener('DOMContentLoaded', () => {
    initSoundControl();
    initExitControl();
    loadQuestions();
});
