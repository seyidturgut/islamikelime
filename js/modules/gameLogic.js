import { gameState, resetGameState, saveGameHistory } from './gameState.js';
import * as gameUI from './gameUI.js';
import soundManager from './soundManager.js';

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
        showQuestion();
        startTimer();

    } catch (error) {
        console.error('Oyun başlatılamadı:', error);
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
        console.error('Soru gösterilemedi:', error);
        window.location.href = 'categories.html';
    }
}

export function checkAnswer(selectedAnswer, correctAnswer, explanation) {
    try {
        if (selectedAnswer === correctAnswer) {
            // Doğru cevap
            if (gameState.soundEnabled) {
                soundManager.playCorrect();
            }
            gameState.score += Math.ceil(gameState.timeLeft / 2);
            gameState.correctAnswers++;
            nextQuestion();
        } else {
            // Yanlış cevap
            if (gameState.soundEnabled) {
                soundManager.playWrong();
            }
            gameState.wrongAnswers++;
            gameUI.showWrongAnswerModal(correctAnswer, explanation);
        }
        
        gameUI.updateScore();
        
    } catch (error) {
        console.error('Cevap kontrolünde hata:', error);
    }
}

export function nextQuestion() {
    try {
        if (gameState.currentQuestionIndex < gameState.questions.length - 1) {
            gameState.currentQuestionIndex++;
            showQuestion();
        } else {
            endGame();
        }
    } catch (error) {
        console.error('Sonraki soruya geçilemedi:', error);
    }
}

let timer;
let timerPaused = false;

function startTimer() {
    if (timer) clearInterval(timer);
    
    timer = setInterval(() => {
        if (!timerPaused && gameState.timeLeft > 0) {
            gameState.timeLeft--;
            gameUI.updateTimer();
            
            if (gameState.timeLeft === 0) {
                endGame();
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
        // Zamanlayıcıyı durdur
        if (timer) {
            clearInterval(timer);
            timer = null;
        }

        // Oyun durumunu güncelle
        gameState.gameEnded = true;

        // Sonuç modalını göster
        gameUI.showResultModal();

        // Oyun geçmişini kaydet
        saveGameHistory();

    } catch (error) {
        console.error('Oyun sonlandırılırken hata:', error);
    }
}

// Çıkış kontrolü
export function initExitControl() {
    const backButton = document.getElementById('backButton');
    const exitConfirmModal = document.getElementById('exitConfirmModal');
    const exitConfirmButton = document.getElementById('exitConfirmButton');
    const exitCancelButton = document.getElementById('exitCancelButton');

    if (backButton) {
        backButton.onclick = (e) => {
            e.preventDefault();
            pauseTimer();
            exitConfirmModal?.classList.remove('hidden');
        };
    }

    if (exitConfirmButton) {
        exitConfirmButton.onclick = () => {
            window.location.href = 'categories.html';
        };
    }

    if (exitCancelButton) {
        exitCancelButton.onclick = () => {
            exitConfirmModal?.classList.add('hidden');
            resumeTimer();
        };
    }
}

// Oyunu yeniden başlat
export function restartGame() {
    try {
        resetGameState();
        window.location.reload();
    } catch (error) {
        console.error('Oyun yeniden başlatılamadı:', error);
    }
}
