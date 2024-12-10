const genelQuestions = [
    {
        arabic: "قُرْآن",
        turkish: "Kur'an",
        question: "Allah'ın son peygambere indirdiği kutsal kitabın adı nedir?",
        options: ["Kur'an", "İncil", "Tevrat", "Zebur"],
        explanation: "Kur'an, Allah'ın son peygamber Hz. Muhammed'e indirdiği kutsal kitaptır."
    },
    {
        arabic: "سُنَّة",
        turkish: "Sünnet",
        question: "Peygamberimizin söz, fiil ve takrirlerine ne denir?",
        options: ["Sünnet", "Farz", "Vacip", "Müstehap"],
        explanation: "Sünnet, Peygamberimizin söz, fiil ve takrirleridir."
    },
    {
        arabic: "حَلَال",
        turkish: "Helal",
        question: "İslam'da yapılmasına izin verilen şeylere ne denir?",
        options: ["Helal", "Haram", "Mekruh", "Mübah"],
        explanation: "Helal, İslam'da yapılmasına izin verilen şeylerdir."
    },
    {
        arabic: "حَرَام",
        turkish: "Haram",
        question: "İslam'da kesin olarak yasaklanan şeylere ne denir?",
        options: ["Haram", "Helal", "Mekruh", "Mübah"],
        explanation: "Haram, İslam'da kesin olarak yasaklanan şeylerdir."
    },
    {
        arabic: "فَرْض",
        turkish: "Farz",
        question: "İslam'da yapılması zorunlu olan ibadetlere ne denir?",
        options: ["Farz", "Sünnet", "Vacip", "Müstehap"],
        explanation: "Farz, İslam'da yapılması zorunlu olan ibadetlerdir."
    },
    {
        arabic: "وَاجِب",
        turkish: "Vacip",
        question: "Farz kadar kesin olmayan ancak yapılması gereken ibadetlere ne denir?",
        options: ["Vacip", "Sünnet", "Müstehap", "Mübah"],
        explanation: "Vacip, farz kadar kesin olmayan ancak yapılması gereken ibadetlerdir."
    },
    {
        arabic: "مَكْرُوه",
        turkish: "Mekruh",
        question: "İslam'da yapılması hoş görülmeyen şeylere ne denir?",
        options: ["Mekruh", "Haram", "Helal", "Mübah"],
        explanation: "Mekruh, İslam'da yapılması hoş görülmeyen şeylerdir."
    },
    {
        arabic: "مُبَاح",
        turkish: "Mübah",
        question: "İslam'da yapılması veya yapılmaması serbest olan şeylere ne denir?",
        options: ["Mübah", "Helal", "Haram", "Mekruh"],
        explanation: "Mübah, İslam'da yapılması veya yapılmaması serbest olan şeylerdir."
    },
    {
        arabic: "تَقْوَى",
        turkish: "Takva",
        question: "Allah'a karşı derin sorumluluk bilinci ve saygıya ne denir?",
        options: ["Takva", "İhlas", "Huşu", "Havf"],
        explanation: "Takva, Allah'a karşı derin sorumluluk bilinci ve saygıdır."
    },
    {
        arabic: "إِيمَان",
        turkish: "İman",
        question: "Allah'a ve dinin esaslarına inanmaya ne denir?",
        options: ["İman", "İslam", "İhsan", "Amel"],
        explanation: "İman, Allah'a ve dinin esaslarına inanmaktır."
    },
    {
        arabic: "حَدِيث",
        turkish: "Hadis",
        question: "Peygamberimizin sözlerinin yazılı kayıtlarına ne denir?",
        options: ["Hadis", "Ayet", "Sure", "Tefsir"],
        explanation: "Hadis, Peygamberimizin sözlerinin yazılı kayıtlarıdır."
    },
    {
        arabic: "مَسْجِد",
        turkish: "Mescid",
        question: "Müslümanların ibadet ettiği yere ne denir?",
        options: ["Mescid", "Medrese", "Tekke", "Zaviye"],
        explanation: "Mescid, Müslümanların ibadet ettiği yerdir."
    },
    {
        arabic: "شَهَادَة",
        turkish: "Şehadet",
        question: "İslam'a girişte söylenen ve Allah'ın birliğini ifade eden sözlere ne denir?",
        options: ["Şehadet", "Tekbir", "Tehlil", "Tesbih"],
        explanation: "Şehadet, İslam'a girişte söylenen ve Allah'ın birliğini ifade eden sözlerdir."
    },
    {
        arabic: "عِبَادَة",
        turkish: "İbadet",
        question: "Allah'a kulluk amacıyla yapılan her türlü davranışa ne denir?",
        options: ["İbadet", "Amel", "Taat", "Zikir"],
        explanation: "İbadet, Allah'a kulluk amacıyla yapılan her türlü davranıştır."
    },
    {
        arabic: "عَقِيدَة",
        turkish: "Akide",
        question: "İslam dininin temel inanç esaslarına ne denir?",
        options: ["Akide", "Fıkıh", "Kelam", "Tasavvuf"],
        explanation: "Akide, İslam dininin temel inanç esaslarıdır."
    },
    {
        arabic: "فِقْه",
        turkish: "Fıkıh",
        question: "İslam'ın ibadet ve muamelat ile ilgili hükümlerini inceleyen ilme ne denir?",
        options: ["Fıkıh", "Akaid", "Siyer", "Tefsir"],
        explanation: "Fıkıh, İslam'ın ibadet ve muamelat ile ilgili hükümlerini inceleyen ilimdir."
    },
    {
        arabic: "تَفْسِير",
        turkish: "Tefsir",
        question: "Kur'an-ı Kerim'i açıklama ve yorumlama ilmine ne denir?",
        options: ["Tefsir", "Hadis", "Fıkıh", "Kelam"],
        explanation: "Tefsir, Kur'an-ı Kerim'i açıklama ve yorumlama ilmidir."
    },
    {
        arabic: "سِيرَة",
        turkish: "Siyer",
        question: "Peygamberimizin hayatını anlatan ilim dalına ne denir?",
        options: ["Siyer", "Hadis", "Fıkıh", "Tefsir"],
        explanation: "Siyer, Peygamberimizin hayatını anlatan ilim dalıdır."
    },
    {
        arabic: "كَلَام",
        turkish: "Kelam",
        question: "İslam inanç esaslarını akli ve nakli delillerle inceleyen ilme ne denir?",
        options: ["Kelam", "Fıkıh", "Tasavvuf", "Tefsir"],
        explanation: "Kelam, İslam inanç esaslarını akli ve nakli delillerle inceleyen ilimdir."
    },
    {
        arabic: "تَصَوُّف",
        turkish: "Tasavvuf",
        question: "İslam'ın manevi ve ahlaki boyutunu ele alan ilme ne denir?",
        options: ["Tasavvuf", "Fıkıh", "Kelam", "Tefsir"],
        explanation: "Tasavvuf, İslam'ın manevi ve ahlaki boyutunu ele alan ilimdir."
    }
    // Diğer sorular eklenecek
];

window.genelQuestions = genelQuestions;
