import { getLevelUnlockStatus } from './modules/gameState.js';

document.addEventListener('DOMContentLoaded', () => {
    const categoryCards = document.querySelectorAll('.category-card');
    const levelSelectModal = document.getElementById('levelSelectModal');
    const modalTitle = document.getElementById('modalTitle');
    const levelsGrid = levelSelectModal.querySelector('.grid');
    const closeModalBtn = document.querySelector('.close-modal');

    // Event delegation for category cards
    document.addEventListener('click', (e) => {
        const categoryCard = e.target.closest('.category-card');
        if (categoryCard) {
            const category = categoryCard.dataset.category;
            showLevelSelectModal(category);
        }

        // Close modal when clicking outside or on close button
        if (e.target.matches('.close-modal') || 
            (e.target === levelSelectModal && !e.target.closest('.modal-content'))) {
            hideLevelModal();
        }
    });

    // Handle touch events for mobile
    if ('ontouchstart' in window) {
        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchmove', handleTouchMove);
    }

    function showLevelSelectModal(category) {
        const categoryName = {
            'namaz': 'Namaz',
            'ahlak': 'Ahlak',
            'ibadet': 'İbadet',
            'genel': 'Genel'
        }[category];

        modalTitle.textContent = `${categoryName} - Seviye Seçin`;
        levelsGrid.innerHTML = '';

        // Seviyelerin kilit durumunu al
        const levelStatus = getLevelUnlockStatus(category);

        // Her seviye için bir kart oluştur
        for (let level = 1; level <= 10; level++) {
            const isUnlocked = levelStatus[level];
            const levelCard = document.createElement('div');
            levelCard.className = `bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow ${
                isUnlocked ? '' : 'opacity-50'
            } md:w-1/2 xl:w-1/3`;

            if (isUnlocked) {
                levelCard.innerHTML = `
                    <div class="flex flex-col items-center text-center">
                        <h3 class="text-base font-bold text-emerald-700 mb-1">Seviye ${level}</h3>
                        <a href="game.html?category=${category}&level=${level}" 
                           class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1.5 px-3 rounded-lg transition-colors w-full text-sm">
                            Oyna
                        </a>
                    </div>
                `;
            } else {
                levelCard.innerHTML = `
                    <div class="flex flex-col items-center text-center">
                        <h3 class="text-base font-bold text-emerald-700 mb-1">Seviye ${level}</h3>
                        <div class="bg-gray-400 text-white font-bold py-1.5 px-3 rounded-lg w-full text-sm flex items-center justify-center">
                            <i class="fas fa-lock mr-2"></i>
                            Kilitli
                        </div>
                        <p class="text-xs text-emerald-600 mt-1">Önceki seviyeyi tamamlayın</p>
                    </div>
                `;
            }

            levelsGrid.appendChild(levelCard);
        }

        levelSelectModal.classList.remove('hidden');
        requestAnimationFrame(() => {
            levelSelectModal.style.opacity = '1';
        });
    }

    function hideLevelModal() {
        levelSelectModal.style.opacity = '0';
        setTimeout(() => {
            levelSelectModal.classList.add('hidden');
        }, 300);
    }

    // Touch event handling for mobile
    let touchStartX = 0;
    let touchStartY = 0;

    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }

    function handleTouchMove(e) {
        if (!touchStartX || !touchStartY) return;

        const touchEndX = e.touches[0].clientX;
        const touchEndY = e.touches[0].clientY;

        const deltaX = touchStartX - touchEndX;
        const deltaY = touchStartY - touchEndY;

        // If horizontal swipe is greater than vertical swipe
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Prevent default only for horizontal swipes
            e.preventDefault();
        }

        touchStartX = 0;
        touchStartY = 0;
    }
});
