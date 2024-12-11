document.addEventListener('DOMContentLoaded', () => {
    const categoryCards = document.querySelectorAll('.category-card');
    const levelSelectModal = document.getElementById('levelSelectModal');
    const modalTitle = document.getElementById('modalTitle');
    const levelsGrid = levelSelectModal.querySelector('.grid');
    const closeModalBtn = document.querySelector('.close-modal');

    // Kategori kartlarına tıklama olayı ekle
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            showLevelSelectModal(category);
        });
    });

    // Modal kapatma
    closeModalBtn.addEventListener('click', () => {
        levelSelectModal.classList.add('hidden');
    });

    // Modal dışına tıklayınca kapatma
    levelSelectModal.addEventListener('click', (e) => {
        if (e.target === levelSelectModal) {
            levelSelectModal.classList.add('hidden');
        }
    });

    // Seviye seçim modalını göster
    function showLevelSelectModal(category) {
        const categoryName = {
            'namaz': 'Namaz',
            'ahlak': 'Ahlak',
            'ibadet': 'İbadet',
            'genel': 'Genel'
        }[category];

        modalTitle.textContent = `${categoryName} - Seviye Seçin`;
        levelsGrid.innerHTML = '';

        // Her seviye için bir kart oluştur
        for (let level = 1; level <= 10; level++) {
            const levelCard = document.createElement('div');
            levelCard.className = 'bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow';
            levelCard.innerHTML = `
                <div class="flex flex-col items-center text-center">
                    <h3 class="text-lg font-bold text-emerald-700 mb-2">Seviye ${level}</h3>
                    <a href="game.html?category=${category}&level=${level}" 
                       class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg transition-colors w-full text-sm">
                        Oyna
                    </a>
                </div>
            `;
            
            levelsGrid.appendChild(levelCard);
        }

        levelSelectModal.classList.remove('hidden');
    }
});
