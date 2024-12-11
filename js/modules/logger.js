// Log seviyeleri
const LogLevel = {
    DEBUG: 'DEBUG',
    INFO: 'INFO',
    WARNING: 'WARNING',
    ERROR: 'ERROR'
};

class Logger {
    constructor() {
        this.logs = [];
        this.maxLogs = 1000; // Maksimum log sayısı
    }

    _formatMessage(level, message, data = null) {
        const timestamp = new Date().toISOString();
        const logEntry = {
            timestamp,
            level,
            message,
            data
        };

        // Log'u diziye ekle
        this.logs.push(logEntry);

        // Console'a yazdır
        const formattedMessage = `[${timestamp}] [${level}] ${message}${data ? ' ' + JSON.stringify(data) : ''}`;
        console[level.toLowerCase()](formattedMessage);

        // Dosyaya kaydet
        this._saveToFile(formattedMessage);

        return formattedMessage;
    }

    _saveToFile(message) {
        try {
            // Blob oluştur
            const blob = new Blob([message + '\n'], { type: 'text/plain' });
            
            // Dosyayı indir
            const a = document.createElement('a');
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = `game-log-${new Date().toISOString().split('T')[0]}.txt`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Log dosyası kaydedilemedi:', error);
        }
    }

    downloadLogs() {
        const fullLog = this.logs.map(log => 
            `[${log.timestamp}] [${log.level}] ${log.message}${log.data ? ' ' + JSON.stringify(log.data) : ''}`
        ).join('\n');

        const blob = new Blob([fullLog], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `full-game-log-${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }

    debug(message, data = null) {
        this._formatMessage(LogLevel.DEBUG, message, data);

        // Maksimum log sayısını aşmamak için eski logları sil
        if (this.logs.length > this.maxLogs) {
            this.logs.shift();
        }

        // Hata durumunda localStorage'a kaydet
        if (LogLevel.DEBUG === LogLevel.ERROR) {
            this.saveToStorage();
        }
    }

    info(message, data = null) {
        this._formatMessage(LogLevel.INFO, message, data);

        // Maksimum log sayısını aşmamak için eski logları sil
        if (this.logs.length > this.maxLogs) {
            this.logs.shift();
        }

        // Hata durumunda localStorage'a kaydet
        if (LogLevel.INFO === LogLevel.ERROR) {
            this.saveToStorage();
        }
    }

    warning(message, data = null) {
        this._formatMessage(LogLevel.WARNING, message, data);

        // Maksimum log sayısını aşmamak için eski logları sil
        if (this.logs.length > this.maxLogs) {
            this.logs.shift();
        }

        // Hata durumunda localStorage'a kaydet
        if (LogLevel.WARNING === LogLevel.ERROR) {
            this.saveToStorage();
        }
    }

    error(message, data = null) {
        this._formatMessage(LogLevel.ERROR, message, data);

        // Maksimum log sayısını aşmamak için eski logları sil
        if (this.logs.length > this.maxLogs) {
            this.logs.shift();
        }

        // Hata durumunda localStorage'a kaydet
        if (LogLevel.ERROR === LogLevel.ERROR) {
            this.saveToStorage();
        }
    }

    saveToStorage() {
        try {
            localStorage.setItem('gameLogs', JSON.stringify(this.logs));
        } catch (e) {
            console.error('Loglar localStorage\'a kaydedilemedi:', e);
        }
    }

    getLogs() {
        return this.logs;
    }

    clearLogs() {
        this.logs = [];
        try {
            localStorage.removeItem('gameLogs');
        } catch (e) {
            console.error('Loglar localStorage\'dan silinemedi:', e);
        }
    }
}

export const logger = new Logger();
export { LogLevel };
