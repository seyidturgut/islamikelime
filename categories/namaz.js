const namazQuestions = [
    {
        turkish: "Namaz",
        question: "Günde beş vakit kılınması farz olan ibadet hangisidir?",
        options: ["Namaz", "Oruç", "Zekat", "Hac"],
        explanation: "Namaz, günde beş vakit kılınması farz olan temel bir ibadettir."
    },
    {
        turkish: "Rekat",
        question: "Sabah namazının farzı kaç rekattır?",
        options: ["2", "3", "4", "5"],
        explanation: "Sabah namazının farzı 2 rekattır."
    },
    {
        turkish: "Abdest",
        question: "Namaz kılmak için yapılması gereken temizlik hangisidir?",
        options: ["Abdest", "Gusül", "Teyemmüm", "Mesh"],
        explanation: "Namaz kılmak için abdest almak gerekir."
    },
    {
        turkish: "Kıble",
        question: "Namaz kılarken hangi yöne dönülür?",
        options: ["Kıble", "Doğu", "Batı", "Kuzey"],
        explanation: "Namaz kılarken Kabe'nin bulunduğu yön olan kıbleye dönülür."
    },
    {
        turkish: "Secde",
        question: "Namazda alnı yere koyarak yapılan harekete ne denir?",
        options: ["Secde", "Rükû", "Kıyam", "Kuud"],
        explanation: "Secde, namazda alnı, burnu, elleri, dizleri ve ayakları yere koyarak yapılan harekettir."
    },
    {
        turkish: "Rükû",
        question: "Namazda belimizi 90 derece eğerek yaptığımız harekete ne denir?",
        options: ["Rükû", "Secde", "Kıyam", "Tahiyyat"],
        explanation: "Rükû, namazda beli 90 derece eğerek yapılan harekettir."
    },
    {
        turkish: "Kıyam",
        question: "Namazda Fatiha suresini okurken hangi pozisyonda olmalıyız?",
        options: ["Kıyam", "Rükû", "Secde", "Kuud"],
        explanation: "Kıyam, namazda ayakta durma pozisyonudur ve Fatiha suresi bu pozisyonda okunur."
    },
    {
        turkish: "Tahiyyat",
        question: "Namazda otururken okunan duaya ne denir?",
        options: ["Tahiyyat", "Fatiha", "Sübhaneke", "Kunut"],
        explanation: "Tahiyyat, namazda oturma pozisyonunda okunan duadır."
    },
    {
        turkish: "Cemaat",
        question: "İmamla birlikte kılınan namaza ne denir?",
        options: ["Cemaatle Namaz", "Münferit Namaz", "Kaza Namazı", "Nafile Namaz"],
        explanation: "Cemaatle namaz, bir imamın önderliğinde topluca kılınan namazdır."
    },
    {
        turkish: "Ezan",
        question: "Namaz vaktinin girdiğini bildiren çağrıya ne denir?",
        options: ["Ezan", "Kamet", "Sela", "Tekbir"],
        explanation: "Ezan, namaz vaktinin girdiğini bildiren çağrıdır."
    },
    {
        turkish: "Kamet",
        question: "Farz namazlardan önce camide okunan ve ezana benzeyen çağrıya ne denir?",
        options: ["Kamet", "Sela", "Hutbe", "Tesbih"],
        explanation: "Kamet, farz namazlardan önce camide okunan ve ezana benzeyen çağrıdır."
    },
    {
        turkish: "Teyemmüm",
        question: "Su bulunmadığında veya kullanılamadığında abdest yerine yapılan temizlik şekli nedir?",
        options: ["Teyemmüm", "Mesh", "Gusül", "İstinca"],
        explanation: "Teyemmüm, su bulunmadığında veya kullanılamadığında toprakla yapılan temizliktir."
    },
    {
        turkish: "Mesh",
        question: "Abdest alırken mest üzerine ıslak elle sürme işlemine ne denir?",
        options: ["Mesh", "Teyemmüm", "İstinca", "Taharet"],
        explanation: "Mesh, abdest alırken mest üzerine ıslak elle sürme işlemidir."
    },
    {
        turkish: "Sütre",
        question: "Namaz kılarken önünden geçilmemesi için konulan engele ne denir?",
        options: ["Sütre", "Rahle", "Mihrap", "Minber"],
        explanation: "Sütre, namaz kılarken önünden geçilmemesi için konulan engeldir."
    },
    {
        turkish: "Sehiv",
        question: "Namazda yapılan yanılmaları telafi etmek için yapılan secdeye ne denir?",
        options: ["Sehiv Secdesi", "Tilavet Secdesi", "Şükür Secdesi", "Normal Secde"],
        explanation: "Sehiv secdesi, namazda yapılan yanılmaları telafi etmek için yapılan secdedir."
    },
    {
        turkish: "Huşu",
        question: "Namazda kalbin Allah'a yönelmesi ve derin saygı duyma haline ne denir?",
        options: ["Huşu", "Vecd", "Zikir", "Tefekkür"],
        explanation: "Huşu, namazda kalbin Allah'a yönelmesi ve derin saygı duyma halidir."
    },
    {
        turkish: "Müezzin",
        question: "Ezan okuyan ve kamet getiren görevliye ne denir?",
        options: ["Müezzin", "İmam", "Hatip", "Kayyım"],
        explanation: "Müezzin, ezan okuyan ve kamet getiren din görevlisidir."
    },
    {
        turkish: "Tesbih",
        question: "Namazdan sonra 33'er defa çekilen 'Sübhanallah, Elhamdülillah, Allahu Ekber' zikirlerine ne denir?",
        options: ["Tesbih", "Vird", "Dua", "Salavat"],
        explanation: "Tesbih, namazdan sonra 33'er defa çekilen özel zikirlerdir."
    },
    {
        turkish: "Mihrap",
        question: "Camilerde imamın namaz kıldırdığı, kıbleyi gösteren girintili bölüme ne denir?",
        options: ["Mihrap", "Minber", "Kürsü", "Maksure"],
        explanation: "Mihrap, camilerde imamın namaz kıldırdığı, kıbleyi gösteren girintili bölümdür."
    },
    {
        turkish: "Musalla",
        question: "Cenaze namazı kılınan özel alana ne denir?",
        options: ["Musalla", "Minber", "Mihrap", "Maksure"],
        explanation: "Musalla, cenaze namazı kılınan özel alandır."
    }
];

window.namazQuestions = namazQuestions;
