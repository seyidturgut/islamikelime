const ahlakQuestions = [
    {
        arabic: "صِدْق",
        turkish: "Doğruluk",
        question: "İslam'da en önemli ahlaki değerlerden biri olan, her zaman doğruyu söylemeye ne denir?",
        options: ["Sıdk", "Emanet", "Adalet", "Sabır"],
        explanation: "Sıdk (doğruluk), İslam ahlakının temel değerlerinden biridir."
    },
    {
        arabic: "أَمَانَة",
        turkish: "Emanet",
        question: "Başkasına ait olup korunmak üzere bırakılan şeye ne denir?",
        options: ["Emanet", "Sadaka", "Zekat", "Fitre"],
        explanation: "Emanet, korunmak üzere bırakılan ve sahibine geri verilmesi gereken şeydir."
    },
    {
        arabic: "صَبْر",
        turkish: "Sabır",
        question: "Zorluklar karşısında dayanma gücüne ne denir?",
        options: ["Sabır", "Şükür", "Tevekkül", "Rıza"],
        explanation: "Sabır, zorluklar karşısında dayanma gücü ve tahammül göstermektir."
    },
    {
        arabic: "تَوَاضُع",
        turkish: "Tevazu",
        question: "Alçak gönüllü olmaya ne denir?",
        options: ["Tevazu", "Kibir", "Gurur", "Riya"],
        explanation: "Tevazu, alçak gönüllü olmak ve kibirden uzak durmaktır."
    },
    {
        arabic: "عَدْل",
        turkish: "Adalet",
        question: "Herkese hakkını vermeye ne denir?",
        options: ["Adalet", "Zulüm", "Haksızlık", "Tarafgirlik"],
        explanation: "Adalet, herkese hakkını vermek ve hakkaniyetli davranmaktır."
    },
    {
        arabic: "رَحْمَة",
        turkish: "Merhamet",
        question: "Başkalarının acılarını paylaşıp yardım etme duygusuna ne denir?",
        options: ["Merhamet", "Şefkat", "Sevgi", "Muhabbet"],
        explanation: "Merhamet, başkalarının acılarını paylaşıp yardım etme duygusudur."
    },
    {
        arabic: "شُكْر",
        turkish: "Şükür",
        question: "Allah'ın verdiği nimetlere karşı gösterilen minnettarlığa ne denir?",
        options: ["Şükür", "Hamd", "Zikir", "Dua"],
        explanation: "Şükür, Allah'ın verdiği nimetlere karşı gösterilen minnettarlıktır."
    },
    {
        arabic: "إِخْلَاص",
        turkish: "İhlas",
        question: "Yapılan ibadetin sadece Allah rızası için yapılmasına ne denir?",
        options: ["İhlas", "Riya", "Gösteriş", "Taklit"],
        explanation: "İhlas, ibadetlerin sadece Allah rızası için yapılmasıdır."
    },
    {
        arabic: "حِلْم",
        turkish: "Hilm",
        question: "Öfkeyi kontrol edip yumuşak huylu olmaya ne denir?",
        options: ["Hilm", "Gazap", "Hiddet", "Şiddet"],
        explanation: "Hilm, öfkeyi kontrol edip yumuşak huylu olmaktır."
    },
    {
        arabic: "وَفَاء",
        turkish: "Vefa",
        question: "Dostluğa ve verilen söze bağlı kalmaya ne denir?",
        options: ["Vefa", "İhanet", "Unutkanlık", "Nankörlük"],
        explanation: "Vefa, dostluğa ve verilen söze bağlı kalmaktır."
    },
    {
        arabic: "تَقْوَى",
        turkish: "Takva",
        question: "Allah'a karşı sorumluluk bilinci ve günahlardan sakınmaya ne denir?",
        options: ["Takva", "Riya", "Gaflet", "Fısk"],
        explanation: "Takva, Allah'a karşı sorumluluk bilinci ve günahlardan sakınmaktır."
    },
    {
        arabic: "عِفَّة",
        turkish: "İffet",
        question: "Namus, hayâ ve ahlak temizliğine ne denir?",
        options: ["İffet", "Fücur", "İsraf", "Sefahet"],
        explanation: "İffet, namus, hayâ ve ahlak temizliğini ifade eder."
    },
    {
        arabic: "أَمَانَة",
        turkish: "Güvenilirlik",
        question: "Peygamberimizin 'el-Emin' (güvenilir) sıfatıyla ilişkili olan ahlaki değer nedir?",
        options: ["Güvenilirlik", "Yalancılık", "Hainlik", "Aldatma"],
        explanation: "Güvenilirlik (emanet), Peygamberimizin en önemli vasıflarından biriydi."
    },
    {
        arabic: "زُهْد",
        turkish: "Zühd",
        question: "Dünya malına gereğinden fazla değer vermeme ve kanaat etmeye ne denir?",
        options: ["Zühd", "Tamah", "Hırs", "İsraf"],
        explanation: "Zühd, dünya malına gereğinden fazla değer vermeme ve kanaat etmedir."
    },
    {
        arabic: "مُرُوءَة",
        turkish: "Mürüvvet",
        question: "İnsanlık, yiğitlik ve mertlik erdemlerine ne denir?",
        options: ["Mürüvvet", "Zillet", "Miskinlik", "Korkaklık"],
        explanation: "Mürüvvet, insanlık, yiğitlik ve mertlik erdemlerini ifade eder."
    },
    {
        arabic: "حَيَاء",
        turkish: "Hayâ",
        question: "Utanma duygusu ve edebe aykırı davranışlardan kaçınmaya ne denir?",
        options: ["Hayâ", "Arsızlık", "Küstahlık", "Saygısızlık"],
        explanation: "Hayâ, utanma duygusu ve edebe aykırı davranışlardan kaçınmaktır."
    },
    {
        arabic: "قَنَاعَة",
        turkish: "Kanaat",
        question: "Eldeki ile yetinme ve aç gözlü olmamaya ne denir?",
        options: ["Kanaat", "Tamah", "Hırs", "Açgözlülük"],
        explanation: "Kanaat, eldeki ile yetinme ve aç gözlü olmama erdemidir."
    },
    {
        arabic: "تَسَامُح",
        turkish: "Müsamaha",
        question: "Hoşgörülü olmaya ve affedici davranmaya ne denir?",
        options: ["Müsamaha", "Taassup", "Katılık", "İntikam"],
        explanation: "Müsamaha, hoşgörülü olmayı ve affedici davranmayı ifade eder."
    },
    {
        arabic: "فُتُوَّة",
        turkish: "Fütüvvet",
        question: "Gençlik, cömertlik ve yiğitlik erdemlerinin bütününe ne denir?",
        options: ["Fütüvvet", "Cimrilik", "Korkaklık", "Bencillik"],
        explanation: "Fütüvvet, gençlik, cömertlik ve yiğitlik erdemlerinin bütününü ifade eder."
    },
    {
        arabic: "إِيثَار",
        turkish: "İsar",
        question: "Başkalarını kendine tercih etme ve fedakarlığa ne denir?",
        options: ["İsar", "Bencillik", "Cimrilik", "Haset"],
        explanation: "İsar, başkalarını kendine tercih etme ve fedakarlık erdemidir."
    }
];

window.ahlakQuestions = ahlakQuestions;
