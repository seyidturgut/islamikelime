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
        this.isSoundOn = localStorage.getItem('isSoundOn') !== 'false'; // Varsayılan olarak açık

        // Ses kontrolü
        this.soundToggle = document.getElementById('sound-toggle');
        this.soundIcon = this.soundToggle.querySelector('i');
        this.updateSoundUI(); // İlk durumu ayarla
        
        this.soundToggle.addEventListener('click', () => {
            this.isSoundOn = !this.isSoundOn;
            localStorage.setItem('isSoundOn', this.isSoundOn);
            this.updateSoundUI();
        });

        // URL'den kategoriyi ve seviyeyi al
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        const level = urlParams.get('level');
        
        if (!category) {
            window.location.href = 'categories.html';
            return;
        }

        // Kategori verilerini al
        let questions;
        if ((category === 'namaz' || category === 'ibadet') && level) {
            const questionVariable = `${category}${level}Questions`;
            questions = window[questionVariable];
            console.log('Loading level questions:', questionVariable, questions);
        } else {
            const categoryMap = {
                'namaz': window.namazQuestions,
                'ahlak': window.ahlakQuestions,
                'ibadet': window.ibadetQuestions,
                'genel': window.genelQuestions
            };
            questions = categoryMap[category];
            console.log('Loading category questions:', category, questions);
        }

        if (!questions || !Array.isArray(questions)) {
            console.error('Questions not found or invalid:', category, level);
            window.location.href = 'categories.html';
            return;
        }

        this.currentQuestions = [...questions]; // Soruları kopyala

        // DOM Elements
        this.gameContainer = document.getElementById('game-container');
        this.wordContainer = document.getElementById('word-container');
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
            this.displayCurrentQuestion();
        });

        // Oyunu başlat
        this.startGameWithCategory();
    }

    startGameWithCategory() {
        // Soruları karıştır
        this.currentQuestions = this.shuffleArray(this.currentQuestions);
        
        // İlk soruyu göster
        this.displayCurrentQuestion();
        
        // Zamanlayıcıyı başlat
        this.startTimer();
    }

    displayCurrentQuestion() {
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            this.endGame();
            return;
        }

        // Soru sayısını güncelle
        this.totalQuestions = this.currentQuestions.length;
        this.updateUI();

        const currentQuestion = this.currentQuestions[this.currentQuestionIndex];
        
        // Soruyu göster
        this.wordMeaningElement.textContent = currentQuestion.question;
        
        // Seçenekleri oluştur
        this.optionsContainer.innerHTML = '';
        this.createOptions(currentQuestion.options, currentQuestion.turkish);
    }

    createOptions(options, correctAnswer) {
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
        document.getElementById('correct-answer').textContent = currentQuestion.options[0]; 
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

    updateSoundUI() {
        this.soundIcon.className = this.isSoundOn ? 'fas fa-volume-up' : 'fas fa-volume-mute';
        this.soundToggle.style.color = this.isSoundOn ? '#4CAF50' : '#dc3545';
    }

    playSound(type) {
        if (!this.isSoundOn) return;
        
        const sound = type === 'correct' ? this.correctSound : this.wrongSound;
        sound.currentTime = 0;
        sound.play().catch(e => console.log('Ses çalma hatası:', e));
    }

    checkAnswer(button) {
        if (this.isChecking) return; // Cevap kontrolü devam ediyorsa çık
        this.isChecking = true;

        const buttons = document.querySelectorAll('.option-button');
        const currentQuestion = this.currentQuestions[this.currentQuestionIndex];
        const correctAnswer = currentQuestion.options[0]; // İlk seçenek her zaman doğru cevap

        if (button.textContent === correctAnswer) {
            // Doğru cevap animasyonu
            button.classList.add('correct', 'animate__animated', 'animate__pulse');
            this.score += 10;
            this.correctAnswers++;
            this.playSound('correct');
            this.updateUI();
            
            // Doğru cevapta direkt diğer soruya geç
            setTimeout(() => {
                this.currentQuestionIndex++;
                this.displayCurrentQuestion();
                this.isChecking = false;
            }, 1000);
        } else {
            // Yanlış cevap animasyonu
            button.classList.add('wrong', 'animate__animated', 'animate__shakeX');
            this.wrongAnswers++;
            this.playSound('wrong');

            // Doğru cevabı göster
            setTimeout(() => {
                buttons.forEach(btn => {
                    if (btn.textContent === correctAnswer) {
                        btn.classList.add('correct', 'animate__animated', 'animate__bounceIn');
                    }
                });
            }, 500);

            // Bilgi kartını sadece yanlış cevapta göster
            setTimeout(() => {
                const infoCard = document.getElementById('info-card');
                const correctAnswerSpan = document.getElementById('correct-answer');
                const infoText = document.getElementById('info-text');
                
                correctAnswerSpan.textContent = correctAnswer;
                infoText.textContent = currentQuestion.explanation;
                
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

function toggleSound() {
    const soundToggleBtn = document.getElementById('sound-toggle');
    const soundIcon = soundToggleBtn.querySelector('i');
    
    if (localStorage.getItem('soundEnabled') === 'true') {
        localStorage.setItem('soundEnabled', 'false');
        soundIcon.className = 'fas fa-volume-mute';
        soundToggleBtn.style.color = '#dc3545';
    } else {
        localStorage.setItem('soundEnabled', 'true');
        soundIcon.className = 'fas fa-volume-up';
        soundToggleBtn.style.color = '#4CAF50';
    }
}
