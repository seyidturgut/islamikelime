// Oyun durumu
export const gameState = {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    timeLeft: 45,
    timer: null,
    category: '',
    level: '',
    soundEnabled: true
};

// Oyun durumunu sıfırla
export function resetGameState() {
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.correctAnswers = 0;
    gameState.wrongAnswers = 0;
    gameState.timeLeft = 45;
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
}

// Oyun geçmişini kaydet
export function saveGameHistory(category, level, correctCount, wrongCount, score) {
    const timestamp = Date.now();
    const history = getGameHistory();
    
    const gameData = {
        category,
        level,
        correctCount,
        wrongCount,
        score,
        timestamp,
        successRate: Math.round((correctCount / (correctCount + wrongCount)) * 100) || 0
    };

    history.unshift(gameData);
    localStorage.setItem('game_history', JSON.stringify(history));
}

// Son oyun geçmişini al
function getLastGameHistory() {
    const history = getGameHistory();
    return history.length > 0 ? history[0] : null;
}

// Oyun geçmişini getir
export function getGameHistory() {
    try {
        const historyData = localStorage.getItem('game_history');
        return historyData ? JSON.parse(historyData) : [];
    } catch (error) {
        console.error('Geçmiş verisi okunamadı:', error);
        return [];
    }
}

// Oyun geçmişini temizle
export function clearGameHistory() {
    localStorage.removeItem('game_history');
}
