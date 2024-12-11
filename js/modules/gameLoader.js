import { gameState } from './gameState.js';
import * as gameUI from './gameUI.js';
import { startGame } from './gameLogic.js';

// URL'den kategori ve seviye bilgisini al
export function getGameParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const level = urlParams.get('level');
    
    if (!category || !level) {
        return null;
    }
    
    return { category, level };
}

// Soruları karıştır
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Minimum soru sayısı
const MIN_QUESTIONS = 15;

// Soruları çoğalt
function duplicateQuestions(questions, targetCount) {
    const result = [];
    while (result.length < targetCount) {
        result.push(...shuffleArray([...questions]));
    }
    return result.slice(0, targetCount);
}

// Soruları yükle
export async function loadGame() {
    try {
        // URL parametrelerini al
        const params = getGameParameters();
        if (!params) {
            console.error('Geçersiz oyun parametreleri');
            window.location.href = 'categories.html';
            return false;
        }

        const { category, level } = params;
        
        // Soru dosyasını yükle
        const scriptPath = `categories/${category}-seviye${level}.js`;
        console.log('Soru dosyası yükleniyor:', scriptPath);
        
        // Önce varsa eski script'i temizle
        const existingScript = document.querySelector(`script[src="${scriptPath}"]`);
        if (existingScript) {
            existingScript.remove();
        }

        // Yeni script'i oluştur
        const script = document.createElement('script');
        script.src = scriptPath;
        
        // Script yükleme promise'i
        const loadScript = new Promise((resolve, reject) => {
            script.onload = () => {
                // Script yüklendi, şimdi soruları kontrol et
                const questionsVarName = `${category}${level}Questions`;
                console.log('Aranan soru değişkeni:', questionsVarName);
                
                const questions = window[questionsVarName];
                if (questions && Array.isArray(questions)) {
                    console.log('Sorular bulundu:', questions.length);
                    
                    // Eğer soru sayısı MIN_QUESTIONS'dan azsa, soruları çoğalt
                    const finalQuestions = questions.length < MIN_QUESTIONS 
                        ? duplicateQuestions(questions, MIN_QUESTIONS)
                        : questions;
                        
                    resolve(finalQuestions);
                } else {
                    reject(new Error('Sorular bulunamadı'));
                }
            };
            
            script.onerror = () => {
                reject(new Error('Soru dosyası yüklenemedi'));
            };
        });

        // Script'i sayfaya ekle
        document.body.appendChild(script);
        
        try {
            // Soruları yükle
            const questions = await loadScript;
            
            // Soruları karıştır
            const shuffledQuestions = shuffleArray([...questions]);
            
            // İlk 15 soruyu al
            const selectedQuestions = shuffledQuestions.slice(0, MIN_QUESTIONS);
            
            // Oyunu başlat
            try {
                // Kategori ve seviye bilgilerini gameState'e ekle
                gameState.category = category;
                gameState.level = level;
                
                // Soruları yükle ve oyunu başlat
                startGame(selectedQuestions, category, level);
                return true;
                
            } catch (error) {
                throw new Error('Oyun başlatılırken hata: ' + error.message);
            }
            
        } catch (error) {
            throw new Error('Sorular yüklenemedi: ' + error.message);
        }
        
    } catch (error) {
        console.error('Oyun yüklenirken hata:', error.message);
        alert('Oyun yüklenemedi: ' + error.message);
        window.location.href = 'categories.html';
        return false;
    }
}
