const namazQuestions = [
    {
        arabic: "صَلَاة",
        turkish: "Namaz",
        question: "Beş vakit farz namazın dışında, Cuma günü kılınan ve hükmü farz olan namaz hangisidir?",
        options: ["Cuma Namazı", "Teravih Namazı", "Bayram Namazı", "Teheccüd Namazı"],
        explanation: "Cuma namazı, Cuma günü öğle namazı yerine kılınan ve erkeklere farz olan bir namazdır. Kur'an-ı Kerim'de 'Cuma Suresi'nde emredilmiştir."
    },
    {
        arabic: "رَكْعَة",
        turkish: "Rekat",
        question: "Akşam namazının farzı kaç rekattır ve vitir namazı kaç rekattır?",
        options: ["3 ve 3", "3 ve 2", "4 ve 3", "3 ve 1"],
        explanation: "Akşam namazının farzı 3 rekat, vitir namazı da 3 rekattır. Vitir namazı Hanefi mezhebinde vacip hükmündedir."
    },
    {
        arabic: "وُضُوء",
        turkish: "Abdest",
        question: "Aşağıdakilerden hangisi abdesti bozan durumlardan biri değildir?",
        options: ["Hapşırmak", "Yellenmek", "Uyumak", "Kan Akması"],
        explanation: "Hapşırmak abdesti bozmaz. Ancak vücuttan kan, irin gibi necaset çıkması, yellenmek, uyumak, bayılmak gibi durumlar abdesti bozar."
    },
    {
        arabic: "قِبْلَة",
        turkish: "Kıble",
        question: "Kâbe'nin bulunduğu şehir olan Mekke'nin diğer ismi nedir ve hangi ülkededir?",
        options: ["Ümmü'l-Kurâ / Suudi Arabistan", "Medine / Suudi Arabistan", "Kudüs / Filistin", "Şam / Suriye"],
        explanation: "Kâbe'nin bulunduğu Mekke şehri 'Ümmü'l-Kurâ' (Şehirlerin Anası) olarak da bilinir ve Suudi Arabistan'dadır."
    },
    {
        arabic: "سُجُود",
        turkish: "Secde",
        question: "Secdede vücudun hangi yedi azası yere değmelidir?",
        options: ["Alın, Burun, İki El, İki Diz, İki Ayak", "Alın, El, Diz, Ayak", "Baş, El, Diz, Ayak", "Yüz, El, Diz, Ayak"],
        explanation: "Secdede yedi aza yere değmelidir: Alın (burunla beraber), iki el, iki diz ve iki ayak. Bu, Hz. Peygamber'in hadisinde belirtilmiştir."
    },
    {
        arabic: "رُكُوع",
        turkish: "Rükû",
        question: "Rükûda en az kaç tesbih çekilmelidir ve rükû tesbihi nedir?",
        options: ["3 kez / Sübhâne Rabbiye'l-Azîm", "1 kez / Sübhânallah", "5 kez / Allahu Ekber", "7 kez / Elhamdülillah"],
        explanation: "Rükûda en az 3 kez 'Sübhâne Rabbiye'l-Azîm' (Yüce Rabbimi tesbih ederim) denilmelidir."
    },
    {
        arabic: "قِيَام",
        turkish: "Kıyam",
        question: "Namazda kıyamda okumamız farz olan sure hangisidir?",
        options: ["Fatiha Suresi", "İhlas Suresi", "Nas Suresi", "Felak Suresi"],
        explanation: "Her rekatta Fatiha suresini okumak farzdır. Peygamber Efendimiz 'Fatihasız namaz olmaz' buyurmuştur."
    },
    {
        arabic: "تَكْبِير",
        turkish: "Tekbir",
        question: "Namaza başlarken alınan tekbire ne ad verilir ve nasıl alınır?",
        options: ["İftitah Tekbiri / Eller Kulaklara", "Rükû Tekbiri / Eller Belde", "İntikal Tekbiri / Eller Yanda", "Secde Tekbiri / Eller Dizlerde"],
        explanation: "Namaza başlarken alınan tekbire 'İftitah (Başlama) Tekbiri' denir ve eller kulaklara kaldırılarak 'Allahu Ekber' denilir."
    },
    {
        arabic: "تَشَهُّد",
        turkish: "Tahiyyat",
        question: "Son oturuşta hangi duaları okumak vaciptir?",
        options: ["Tahiyyat, Salli-Barik, Rabbena", "Sadece Tahiyyat", "Sadece Salli-Barik", "Sadece Rabbena"],
        explanation: "Son oturuşta Tahiyyat duası, Salli-Barik duaları ve Rabbena dualarını okumak vaciptir."
    },
    {
        arabic: "مُؤَذِّن",
        turkish: "Müezzin",
        question: "Ezanda geçen 'Hayye ale'l-felah' ifadesinin anlamı nedir?",
        options: ["Haydi kurtuluşa", "Haydi namaza", "Allah en büyüktür", "Namaz uykudan hayırlıdır"],
        explanation: "Hayye ale'l-felah, 'Haydi kurtuluşa' anlamına gelir ve ezanın önemli bölümlerindendir."
    }
];

window.namazQuestions = namazQuestions;
