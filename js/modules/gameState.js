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

// Seviye kilidini kontrol et
export function checkLevelUnlock(category, level) {
    const key = `${category}_level_${level}`;
    return localStorage.getItem(key) === 'unlocked';
}

// Seviye kilidini aç
export function unlockLevel(category, level) {
    const key = `${category}_level_${level}`;
    localStorage.setItem(key, 'unlocked');
}

// Tüm seviyelerin kilit durumunu al
export function getLevelUnlockStatus(category) {
    const levels = {};
    for (let i = 1; i <= 10; i++) {
        const key = `${category}_level_${i}`;
        levels[i] = i === 1 || localStorage.getItem(key) === 'unlocked';
    }
    return levels;
}

// Oyun geçmişini kaydet
export function saveGameHistory() {
    const timestamp = Date.now();
    const history = getGameHistory();
    
    // Başarı oranını hesapla
    const totalQuestions = gameState.questions.length;
    const successRate = Math.round((gameState.correctAnswers / totalQuestions) * 100);
    
    const gameData = {
        category: gameState.category,
        level: gameState.level,
        correctCount: gameState.correctAnswers,
        wrongCount: gameState.wrongAnswers,
        score: gameState.score,
        timestamp,
        successRate
    };

    // Eğer başarı oranı %70'in üzerindeyse bir sonraki seviyeyi aç
    if (successRate >= 70) {
        const nextLevel = parseInt(gameState.level) + 1;
        unlockLevel(gameState.category, nextLevel);
    }

    history.unshift(gameData);
    localStorage.setItem('game_history', JSON.stringify(history));
}

// Son oyun geçmişini al
function getLastGameHistory() {
    const history = getGameHistory();
    return history.length > 0 ? history[0] : null;
}

// Oyun geçmişini getir
function getGameHistory() {
    try {
        const history = localStorage.getItem('game_history');
        return history ? JSON.parse(history) : [];
    } catch (error) {
        console.error('Oyun geçmişi alınırken hata:', error);
        return [];
    }
}

// Oyun geçmişini temizle
export function clearGameHistory() {
    localStorage.removeItem('game_history');
}
