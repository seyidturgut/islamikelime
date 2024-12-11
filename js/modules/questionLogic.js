import { gameState } from './gameState.js';
import * as gameUI from './gameUI.js';
import { endGame } from './gameLogic.js';

export function initQuestionLogic() {
    showQuestion();
}

export function showQuestion() {
    if (gameState.currentQuestionIndex < gameState.questions.length) {
        const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
        gameUI.updateQuestionUI(currentQuestion);
    } else {
        endGame();
    }
}
