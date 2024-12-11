import { loadGame } from './modules/gameLoader.js';
import { gameState } from './modules/gameState.js';
import { initExitControl } from './modules/gameLogic.js';

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Ses kontrolünü başlat
        initSoundControl();
        
        // Çıkış kontrollerini başlat
        initExitControl();

        // Oyunu yükle
        await loadGame();
    } catch (error) {
        console.error('Oyun başlatılırken hata:', error);
        alert('Oyun başlatılırken bir hata oluştu: ' + error.message);
        window.location.href = 'categories.html';
    }
});

// Ses kontrolü
function initSoundControl() {
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
}
