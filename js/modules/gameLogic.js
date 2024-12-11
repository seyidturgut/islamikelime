import { gameState, resetGameState, saveGameHistory } from './gameState.js';
import * as gameUI from './gameUI.js';
import { initQuestionLogic } from './questionLogic.js';

// Ses efektleri
const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');

// Oyun mantığı fonksiyonları
export function startGame(questions, category, level) {
    try {
        gameState.questions = questions;
        gameState.timeLeft = 45;
        gameState.currentQuestionIndex = 0;
        gameState.score = 0;
        gameState.correctAnswers = 0;
        gameState.wrongAnswers = 0;
        gameState.soundEnabled = true;

        gameUI.updateCategoryTitle(category, level);
        gameUI.updateScore();
        initQuestionLogic();
        startTimer();

    } catch (error) {
        window.location.href = 'categories.html';
    }
}

export function showQuestion() {
    try {
        if (gameState.currentQuestionIndex < gameState.questions.length) {
            const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
            gameUI.updateQuestionUI(currentQuestion);
        } else {
            endGame();
        }
    } catch (error) {
        window.location.href = 'categories.html';
    }
}

export function checkAnswer(selectedAnswer, correctAnswer, explanation) {
    try {
        if (selectedAnswer === correctAnswer) {
            if (gameState.soundEnabled) {
                correctSound.currentTime = 0;
                correctSound.play().catch(e => console.error('Ses çalınamadı:', e));
            }
            gameState.score += Math.ceil(gameState.timeLeft / 2);
            gameState.correctAnswers++;
            
            // Kısa bir gecikme ile sonraki soruya geç
            setTimeout(() => {
                nextQuestion();
                // Timer devam ediyor, durmadı
            }, 500);
        } else {
            if (gameState.soundEnabled) {
                wrongSound.currentTime = 0;
                wrongSound.play().catch(e => console.error('Ses çalınamadı:', e));
            }
            gameState.wrongAnswers++;
            
            // Timer'ı durdur
            pauseTimer();
            
            // Yanlış cevap modalını göster
            gameUI.showWrongAnswerModal(correctAnswer, explanation);
        }

        gameUI.updateScore();

    } catch (error) {
        console.error('Cevap kontrolünde hata:', error);
        window.location.href = 'categories.html';
    }
}

export function nextQuestion() {
    try {
        // Timer'ı kaldığı yerden devam ettir
        timerPaused = false;
        
        gameState.currentQuestionIndex++;
        
        // Son soruya gelindiyse oyunu bitir
        if (gameState.currentQuestionIndex >= gameState.questions.length) {
            endGame();
            return;
        }
        
        // Yeni soruyu göster
        showQuestion();

    } catch (error) {
        console.error('Sonraki soruya geçerken hata:', error);
        window.location.href = 'categories.html';
    }
}

let timer;
let timerPaused = false;

export function startTimer() {
    if (timer) clearInterval(timer);
    
    gameState.timeLeft = 45;
    timerPaused = false;
    gameUI.updateTimer();
    
    timer = setInterval(() => {
        if (!timerPaused && gameState.timeLeft > 0) {
            gameState.timeLeft--;
            gameUI.updateTimer();
            
            if (gameState.timeLeft === 0) {
                clearInterval(timer);
                nextQuestion();
            }
        }
    }, 1000);
}

export function pauseTimer() {
    timerPaused = true;
}

export function resumeTimer() {
    timerPaused = false;
}

export function endGame() {
    try {
        clearInterval(timer);
        
        const stats = {
            score: gameState.score,
            correctAnswers: gameState.correctAnswers,
            wrongAnswers: gameState.wrongAnswers
        };

        // Oyun geçmişini kaydet
        saveGameHistory(
            gameState.category,
            gameState.level,
            gameState.correctAnswers,
            gameState.wrongAnswers,
            gameState.score
        );

        gameUI.showResultModal(stats);

    } catch (error) {
        console.error('Oyun sonlandırılırken hata:', error);
        window.location.href = 'categories.html';
    }
}

// Ses kontrolü
export function initSoundControl() {
    try {
        const soundToggle = document.getElementById('sound-toggle');
        const soundIcon = soundToggle.querySelector('i');
        
        // Ses durumunu güncelle
        const updateSoundIcon = () => {
            if (gameState.soundEnabled) {
                soundIcon.className = 'fas fa-volume-up';
            } else {
                soundIcon.className = 'fas fa-volume-mute';
            }
        };
        
        // İlk durumu ayarla
        updateSoundIcon();
        
        // Tıklama olayını ekle
        soundToggle.onclick = () => {
            gameState.soundEnabled = !gameState.soundEnabled;
            updateSoundIcon();
        };

    } catch (error) {
        window.location.href = 'categories.html';
    }
}

// Çıkış kontrolü
export function initExitControl() {
    try {
        const backButton = document.getElementById('backButton');
        const exitConfirmModal = document.getElementById('exitConfirmModal');
        const exitConfirmButton = document.getElementById('exitConfirmButton');
        const exitCancelButton = document.getElementById('exitCancelButton');
        
        backButton.onclick = () => exitConfirmModal.classList.remove('hidden');
        exitCancelButton.onclick = () => exitConfirmModal.classList.add('hidden');
        
        exitConfirmButton.onclick = () => {
            window.location.href = 'categories.html';
        };

    } catch (error) {
        window.location.href = 'categories.html';
    }
}

// Oyunu yeniden başlat
export function restartGame() {
    try {
        window.location.href = 'categories.html';

    } catch (error) {
        window.location.href = 'categories.html';
    }
}
