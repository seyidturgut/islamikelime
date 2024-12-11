import { getGameHistory, clearGameHistory } from './modules/gameState.js';

// Tarihi formatlı göster
function formatDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
        return `${diffMins} dakika önce`;
    } else if (diffHours < 24) {
        return `${diffHours} saat önce`;
    } else if (diffDays < 7) {
        return `${diffDays} gün önce`;
    } else {
        return date.toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

// Geçmiş kartlarını göster
function displayHistory() {
    const historyContainer = document.getElementById('history-container');
    const history = getGameHistory();

    if (history.length === 0) {
        historyContainer.innerHTML = `
            <div class="text-center py-8">
                <i class="fas fa-history text-emerald-300 text-5xl mb-4"></i>
                <p class="text-lg text-emerald-800 mb-2">Henüz oyun geçmişi bulunmuyor</p>
                <p class="text-emerald-600 mb-4">Oyun oynayarak geçmişinizi oluşturmaya başlayın!</p>
                <a href="index.html" class="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700">
                    Hemen Oyna
                </a>
            </div>
        `;
        return;
    }

    historyContainer.innerHTML = history.map(game => `
        <div class="bg-white rounded-xl p-4 shadow-sm">
            <div class="flex justify-between items-start mb-3">
                <div>
                    <h3 class="text-lg font-semibold text-emerald-800">${game.category}</h3>
                    <p class="text-sm text-gray-500">Seviye ${game.level}</p>
                </div>
                <span class="text-2xl font-bold text-emerald-600">${game.score}</span>
            </div>
            <div class="grid grid-cols-3 gap-4 mb-3">
                <div class="text-center">
                    <p class="text-lg font-semibold text-emerald-600">${game.correctCount}</p>
                    <p class="text-sm text-gray-500">Doğru</p>
                </div>
                <div class="text-center">
                    <p class="text-lg font-semibold text-red-500">${game.wrongCount}</p>
                    <p class="text-sm text-gray-500">Yanlış</p>
                </div>
                <div class="text-center">
                    <p class="text-lg font-semibold text-emerald-600">%${game.successRate}</p>
                    <p class="text-sm text-gray-500">Başarı</p>
                </div>
            </div>
            <p class="text-sm text-gray-500">${formatDate(game.timestamp)}</p>
        </div>
    `).join('');
}

// Geçmişi temizleme fonksiyonu
function setupClearHistory() {
    const clearButton = document.getElementById('clearHistory');
    const confirmModal = document.getElementById('confirmModal');
    const cancelButton = document.getElementById('cancelClear');
    const confirmButton = document.getElementById('confirmClear');

    clearButton.addEventListener('click', () => {
        confirmModal.classList.remove('hidden');
        confirmModal.classList.add('flex');
    });

    cancelButton.addEventListener('click', () => {
        confirmModal.classList.add('hidden');
        confirmModal.classList.remove('flex');
    });

    confirmButton.addEventListener('click', () => {
        clearGameHistory();
        confirmModal.classList.add('hidden');
        confirmModal.classList.remove('flex');
        displayHistory();
    });

    confirmModal.addEventListener('click', (e) => {
        if (e.target === confirmModal) {
            confirmModal.classList.add('hidden');
            confirmModal.classList.remove('flex');
        }
    });
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    setupClearHistory();
    displayHistory();
});
