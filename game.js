class Game {
    constructor() {
        this.score = 0;
        this.timeLeft = 30;
        this.isGameOver = false;
        this.isPaused = false;
        this.currentWord = null;
        this.timer = null;
        this.currentQuestionIndex = 0;
        this.totalQuestions = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.isChecking = false;

        // Ses efektlerini yükle
        this.correctSound = new Audio('sounds/correct.mp3');
        this.wrongSound = new Audio('sounds/wrong.mp3');
        this.isSoundOn = true;

        // Ses kontrolü
        this.soundToggle = document.getElementById('sound-toggle');
        this.soundIcon = this.soundToggle.querySelector('i');
        this.soundToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Varsayılan davranışı engelle
            this.isSoundOn = !this.isSoundOn;
            this.soundIcon.className = this.isSoundOn ? 'fas fa-volume-up' : 'fas fa-volume-mute';
        });

        // URL'den kategoriyi al
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        if (!category) {
            window.location.href = 'categories.html';
            return;
        }

        // Kategori verilerini al
        this.categories = {
            namaz: window.namazQuestions,
            ahlak: window.ahlakQuestions,
            ibadet: window.ibadetQuestions,
            genel: window.genelQuestions
        };

        // DOM Elements
        this.gameContainer = document.getElementById('game-container');
        this.wordContainer = document.getElementById('word-container');
        this.arabicWordElement = document.getElementById('arabic-word');
        this.wordMeaningElement = document.getElementById('word-meaning');
        this.optionsContainer = document.getElementById('options-container');
        this.timerElement = document.getElementById('timer');
        this.scoreElement = document.getElementById('score');
        this.questionNumberElement = document.getElementById('question-number');
        this.resultContainer = document.getElementById('result-container');
        this.finalScoreElement = document.getElementById('final-score');

        // Info card elements
        this.infoCard = document.getElementById('info-card');
        this.infoCardNext = document.getElementById('info-card-next');
        
        // Event Listeners
        this.infoCardNext.addEventListener('click', () => {
            this.hideInfoCard();
            this.currentQuestionIndex++;
            this.showQuestion();
        });

        // Oyunu başlat
        this.startGameWithCategory(category);
    }

    startGameWithCategory(category) {
        // Seçilen kategorideki soruları al
        this.currentQuestions = [...this.categories[category]];
        this.shuffleArray(this.currentQuestions);
        this.currentQuestionIndex = 0;
        this.totalQuestions = this.currentQuestions.length;
        this.score = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.updateUI();
        this.startGame();
    }

    startGame() {
        this.isGameOver = false;
        this.timeLeft = 30;
        this.showQuestion();
        this.startTimer();
    }

    showQuestion() {
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            this.endGame();
            return;
        }

        const currentQuestion = this.currentQuestions[this.currentQuestionIndex];
        
        // Soruyu göster
        this.arabicWordElement.textContent = currentQuestion.arabic;
        this.wordMeaningElement.textContent = currentQuestion.question;
        
        // Seçenekleri oluştur
        this.createOptions(currentQuestion.options, currentQuestion.turkish);

        // UI'ı güncelle
        this.updateUI();
    }

    createOptions(options, correctAnswer) {
        this.optionsContainer.innerHTML = '';
        const shuffledOptions = [...options];
        this.shuffleArray(shuffledOptions);

        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-button');
            button.addEventListener('click', () => this.checkAnswer(button));
            this.optionsContainer.appendChild(button);
        });
    }

    hideInfoCard() {
        this.infoCard.classList.add('hidden');
        this.resumeTimer();
    }

    showInfoCard() {
        const currentQuestion = this.currentQuestions[this.currentQuestionIndex];
        
        this.pauseTimer();
        
        // Doğru cevabı ve açıklamayı göster
        document.getElementById('correct-answer').textContent = currentQuestion.turkish;
        document.getElementById('info-text').textContent = currentQuestion.explanation;
        
        // Info card'ı göster
        this.infoCard.classList.remove('hidden');
        this.infoCard.classList.add('animate__fadeIn');
    }

    endGame() {
        this.isGameOver = true;
        if (this.timer) {
            clearInterval(this.timer);
        }

        // Oyun alanını gizle
        this.wordContainer.style.display = 'none';
        this.optionsContainer.style.display = 'none';

        // Sonuç ekranını göster
        this.showGameOver();
    }

    showGameOver() {
        const gameOverScreen = document.getElementById('gameOverScreen');
        const finalScoreElement = document.getElementById('finalScore');
        const finalQuestionElement = document.getElementById('finalQuestionNumber');
        const correctAnswersElement = document.getElementById('correctAnswers');
        const wrongAnswersElement = document.getElementById('wrongAnswers');

        // Değerleri güncelle
        finalScoreElement.textContent = this.score;
        finalQuestionElement.textContent = `${this.currentQuestionIndex + 1}/${this.totalQuestions}`;
        correctAnswersElement.textContent = this.correctAnswers;
        wrongAnswersElement.textContent = this.wrongAnswers;

        // Ekranı göster
        gameOverScreen.style.display = 'block';
        
        // Oyun alanını gizle
        document.querySelector('.game-container').style.display = 'none';
    }

    startTimer() {
        this.timeLeft = 30;
        this.updateTimer();

        if (this.timer) {
            clearInterval(this.timer);
        }

        this.timer = setInterval(() => {
            if (!this.isPaused) {
                this.timeLeft--;
                this.updateTimer();
                if (this.timeLeft <= 0) {
                    clearInterval(this.timer);
                    this.endGame();
                }
            }
        }, 1000);
    }

    pauseTimer() {
        this.isPaused = true;
    }

    resumeTimer() {
        this.isPaused = false;
    }

    updateTimer() {
        this.timerElement.textContent = this.timeLeft;
    }

    updateUI() {
        this.scoreElement.textContent = this.score;
        this.timerElement.textContent = this.timeLeft;
        // Soru sayısını basit formatta göster
        const currentQuestion = this.currentQuestionIndex + 1;
        this.questionNumberElement.textContent = `${currentQuestion}/${this.totalQuestions}`;
    }

    checkAnswer(button) {
        if (this.isChecking) return; // Cevap kontrolü devam ediyorsa çık
        this.isChecking = true;

        const buttons = document.querySelectorAll('.option-button');
        const currentQuestion = this.currentQuestions[this.currentQuestionIndex];

        if (button.textContent === currentQuestion.turkish) {
            // Doğru cevap animasyonu
            button.classList.add('correct', 'animate__animated', 'animate__pulse');
            this.score += 10;
            this.correctAnswers++;
            if (this.isSoundOn) {
                this.correctSound.currentTime = 0;
                this.correctSound.play().catch(error => console.log('Ses çalma hatası:', error));
            }
            this.updateUI();
            
            // Doğru cevapta direkt diğer soruya geç
            setTimeout(() => {
                this.currentQuestionIndex++;
                this.showQuestion();
                this.isChecking = false;
            }, 1000);
        } else {
            // Yanlış cevap animasyonu
            button.classList.add('wrong', 'animate__animated', 'animate__shakeX');
            this.wrongAnswers++;
            if (this.isSoundOn) {
                this.wrongSound.currentTime = 0;
                this.wrongSound.play().catch(error => console.log('Ses çalma hatası:', error));
            }

            // Doğru cevabı göster
            setTimeout(() => {
                buttons.forEach(btn => {
                    if (btn.textContent === currentQuestion.turkish) {
                        btn.classList.add('correct', 'animate__animated', 'animate__bounceIn');
                    }
                });
            }, 500);

            // Bilgi kartını sadece yanlış cevapta göster
            setTimeout(() => {
                this.showInfoCard();
                this.isChecking = false;
            }, 700);
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

// Initialize the game
window.addEventListener('load', () => {
    new Game();
    
    // Çıkış ve geri düğmeleri için onay
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!confirm('Oyundan çıkmak istediğinize emin misiniz? İlerlemeniz kaybolacak.')) {
                e.preventDefault();
            }
        });
    });
});
