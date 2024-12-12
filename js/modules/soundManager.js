// Ses yönetimi için singleton sınıf
class SoundManager {
    constructor() {
        this.sounds = {
            correct: document.getElementById('correctSound'),
            wrong: document.getElementById('wrongSound')
        };
        this.enabled = true;
        this.loadPromises = {};
        
        // Sesleri önceden yükle
        this.preloadSounds();
    }

    // Sesleri önceden yükle
    preloadSounds() {
        for (const [key, sound] of Object.entries(this.sounds)) {
            if (sound) {
                this.loadPromises[key] = new Promise((resolve, reject) => {
                    sound.addEventListener('canplaythrough', () => resolve(), { once: true });
                    sound.addEventListener('error', (e) => reject(e), { once: true });
                    // Ses dosyasını yüklemeye başla
                    sound.load();
                }).catch(error => {
                    console.warn(`Ses yüklenemedi (${key}):`, error);
                });
            }
        }
    }

    // Ses çal
    async play(soundName) {
        if (!this.enabled || !this.sounds[soundName]) return;

        try {
            // Ses yüklenene kadar bekle
            await this.loadPromises[soundName];
            
            const sound = this.sounds[soundName];
            sound.currentTime = 0;
            await sound.play();
        } catch (error) {
            console.warn(`Ses çalınamadı (${soundName}):`, error);
        }
    }

    // Doğru cevap sesi
    async playCorrect() {
        await this.play('correct');
    }

    // Yanlış cevap sesi
    async playWrong() {
        await this.play('wrong');
    }

    // Ses durumunu değiştir
    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }

    // Ses durumunu al
    isEnabled() {
        return this.enabled;
    }
}

// Singleton instance
const soundManager = new SoundManager();
export default soundManager;
