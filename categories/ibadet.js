const ibadetQuestions = [
    {
        turkish: "Oruç",
        question: "Ramazan ayında tutulması farz olan ibadete ne denir?",
        options: ["Oruç", "İtikaf", "Sadaka", "Fitre"],
        explanation: "Oruç, Ramazan ayında tutulması farz olan bir ibadettir."
    },
    {
        turkish: "Zekat",
        question: "Zengin Müslümanların yılda bir kez mallarının kırkta birini vermesi gereken ibadete ne denir?",
        options: ["Zekat", "Sadaka", "Fitre", "İnfak"],
        explanation: "Zekat, zengin Müslümanların yılda bir kez mallarının kırkta birini vermeleri gereken mali ibadettir."
    },
    {
        turkish: "Hac",
        question: "Mekke'de yapılan ve ömürde bir kez farz olan ibadete ne denir?",
        options: ["Hac", "Umre", "Tavaf", "Ziyaret"],
        explanation: "Hac, Mekke'de yapılan ve şartlarını taşıyan Müslümanlara ömürde bir kez farz olan ibadettir."
    },
    {
        turkish: "Umre",
        question: "Hac mevsimi dışında yapılan Kabe ziyaretine ne denir?",
        options: ["Umre", "Hac", "Tavaf", "Ziyaret"],
        explanation: "Umre, hac mevsimi dışında yapılan Kabe ziyaretidir."
    },
    {
        turkish: "Dua",
        question: "Allah'a yapılan yakarış ve isteklere ne denir?",
        options: ["Dua", "Zikir", "Tesbih", "Şükür"],
        explanation: "Dua, Allah'a yapılan yakarış ve isteklerdir."
    },
    {
        turkish: "Zikir",
        question: "Allah'ı anmak için yapılan ibadete ne denir?",
        options: ["Zikir", "Dua", "Tesbih", "Salavat"],
        explanation: "Zikir, Allah'ı anma ve O'nu hatırlama ibadetidir."
    },
    {
        turkish: "Tesbih",
        question: "'Sübhanallah' diyerek Allah'ı yüceltmeye ne denir?",
        options: ["Tesbih", "Tekbir", "Tahmid", "Tehlil"],
        explanation: "Tesbih, 'Sübhanallah' diyerek Allah'ı yüceltmektir."
    },
    {
        turkish: "Sadaka",
        question: "Allah rızası için fakirlere yapılan yardıma ne denir?",
        options: ["Sadaka", "Zekat", "Fitre", "İnfak"],
        explanation: "Sadaka, Allah rızası için fakirlere yapılan gönüllü yardımdır."
    },
    {
        turkish: "İtikaf",
        question: "Ramazan'ın son on gününde camide ibadetle meşgul olmaya ne denir?",
        options: ["İtikaf", "Teravih", "Teheccüd", "Kuşluk"],
        explanation: "İtikaf, Ramazan'ın son on gününde camide ibadetle meşgul olmaktır."
    },
    {
        turkish: "Kurban",
        question: "Kurban bayramında Allah rızası için kesilen hayvana ne denir?",
        options: ["Kurban", "Adak", "Akika", "Sadaka"],
        explanation: "Kurban, Kurban bayramında Allah rızası için kesilen hayvandır."
    },
    {
        turkish: "Teheccüd",
        question: "Gece yarısından sonra kılınan nafile namaza ne denir?",
        options: ["Teheccüd", "Teravih", "Kuşluk", "Evvabin"],
        explanation: "Teheccüd, gece yarısından sonra kılınan nafile namazdır."
    },
    {
        turkish: "Teravih",
        question: "Ramazan ayına özel yatsı namazından sonra kılınan namaza ne denir?",
        options: ["Teravih", "Teheccüd", "Vitir", "Evvabin"],
        explanation: "Teravih, Ramazan ayında yatsı namazından sonra kılınan namazdır."
    },
    {
        turkish: "Fitre",
        question: "Ramazan bayramı öncesi fakirlere verilen sadakaya ne denir?",
        options: ["Fitre", "Zekat", "Sadaka", "İnfak"],
        explanation: "Fitre, Ramazan bayramı öncesi fakirlere verilen sadakadır."
    },
    {
        turkish: "Tavaf",
        question: "Kabe'nin etrafında yedi kez dönmeye ne denir?",
        options: ["Tavaf", "Say", "Vakfe", "Remy"],
        explanation: "Tavaf, Kabe'nin etrafında yedi kez dönme ibadetidir."
    },
    {
        turkish: "Say",
        question: "Safa ve Merve tepeleri arasında gidip gelmeye ne denir?",
        options: ["Say", "Tavaf", "Vakfe", "Remy"],
        explanation: "Say, Safa ve Merve tepeleri arasında gidip gelme ibadetidir."
    },
    {
        turkish: "Nezir",
        question: "Allah için yapılması vaat edilen ibadete ne denir?",
        options: ["Nezir", "Kurban", "Sadaka", "İnfak"],
        explanation: "Nezir, Allah için yapılması vaat edilen ibadettir."
    },
    {
        turkish: "Akika",
        question: "Yeni doğan çocuk için kesilen kurbana ne denir?",
        options: ["Akika", "Kurban", "Adak", "Nezir"],
        explanation: "Akika, yeni doğan çocuk için kesilen kurbandır."
    },
    {
        turkish: "Vakfe",
        question: "Hac sırasında Arafat'ta bekleme ibadeti ne denir?",
        options: ["Vakfe", "Tavaf", "Say", "Remy"],
        explanation: "Vakfe, hac sırasında Arafat'ta yapılan bekleme ibadetidir."
    },
    {
        turkish: "Remy",
        question: "Hac ve umrede şeytan taşlama ibadeti ne denir?",
        options: ["Remy", "Vakfe", "Say", "Tavaf"],
        explanation: "Remy, hac ve umrede şeytan taşlama ibadetidir."
    },
    {
        turkish: "Tilavet",
        question: "Kur'an-ı Kerim'i usulüne uygun okumaya ne denir?",
        options: ["Tilavet", "Kıraat", "Hafızlık", "Tecvid"],
        explanation: "Tilavet, Kur'an-ı Kerim'i usulüne uygun okuma ibadetidir."
    }
    // Diğer sorular eklenecek
];

window.ibadetQuestions = ibadetQuestions;
