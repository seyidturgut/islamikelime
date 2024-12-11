const namaz10Questions = [
  {
    turkish: "Namaz",
    question: "'İsticlâb-ı hurûf' nedir ve namazı nasıl etkiler?",
    options: ["Harfleri zorlama - Namazı bozar", "Harfleri uzatma - Mekruhtur", "Harfleri kısaltma - Caizdir", "Harfleri değiştirme - Sehiv gerektirir"],
    correctAnswer: "Harfleri zorlama - Namazı bozar",
    explanation: "İsticlâb-ı hurûf, namazda Kur'an okunurken harfleri aslından farklı ve zorlama şekilde çıkarmaktır ve namazı bozar.",
    difficulty: 10
},
{
    turkish: "Namaz",
    question: "'Muvâzabet-i müstemirriye' kavramı neyi ifade eder?",
    options: ["Devamlı dikkat", "Geçici dikkat", "Aralıklı dikkat", "Kısa dikkat"],
    correctAnswer: "Devamlı dikkat",
    explanation: "Muvâzabet-i müstemirriye, namazın başından sonuna kadar huşu ve dikkat halinin sürekli olması durumudur.",
    difficulty: 10
},
{
    turkish: "Namaz",
    question: "'Teşrîk-i menhî' ne demektir?",
    options: ["Yasaklanan ortaklık", "İzin verilen ortaklık", "Zorunlu ortaklık", "Geçici ortaklık"],
    correctAnswer: "Yasaklanan ortaklık",
    explanation: "Teşrîk-i menhî, namazda yasak olan ve namazı bozan türden ortaklık veya karışmayı ifade eder.",
    difficulty: 10
},
{
    turkish: "Namaz",
    question: "'İstidrâc-ı sehvî' durumunda ne yapılır?",
    options: ["Namazı yeniden kılar", "Sehiv secdesi yapar", "Nafile namaz kılar", "Sadece kaza eder"],
    correctAnswer: "Namazı yeniden kılar",
    explanation: "İstidrâc-ı sehvî (yanılarak yapılan yanlış sıralama), namazın esasını bozacak seviyede ise namazın yeniden kılınması gerekir.",
    difficulty: 10
},
{
    turkish: "Namaz",
    question: "'Tebdîl-i niyyet-i gayr-i meşrû' ne demektir?",
    options: ["Meşru olmayan niyet değişikliği", "Meşru niyet değişikliği", "Niyet etmeme", "Niyeti erteleme"],
    correctAnswer: "Meşru olmayan niyet değişikliği",
    explanation: "Tebdîl-i niyyet-i gayr-i meşrû, namaz esnasında yapılan ve caiz olmayan niyet değişikliğidir.",
    difficulty: 10
},
{
    turkish: "Namaz",
    question: "'Tekâbül-i ef'âl-i müteaddide' ne anlama gelir?",
    options: ["Çok sayıda fiilin karşılıklı olması", "Tek fiilin tekrarı", "Fiillerin eksikliği", "Fiillerin fazlalığı"],
    correctAnswer: "Çok sayıda fiilin karşılıklı olması",
    explanation: "Tekâbül-i ef'âl-i müteaddide, namazda birden fazla fiilin birbiriyle karşılıklı ve dengeli olması durumudur.",
    difficulty: 10
},
{
    turkish: "Namaz",
    question: "'İstihâle-i maksûde' namazı nasıl etkiler?",
    options: ["Namazı bozar", "Sehiv gerektirir", "Mekruh olur", "Namazı etkilemez"],
    correctAnswer: "Namazı bozar",
    explanation: "İstihâle-i maksûde, namazın asıl maksadından sapma durumudur ve namazı bozar.",
    difficulty: 10
},
{
    turkish: "Namaz",
    question: "'Müşâreket-i menhiyye' nedir?",
    options: ["Yasaklanan katılım", "İzin verilen katılım", "Zorunlu katılım", "Geçici katılım"],
    correctAnswer: "Yasaklanan katılım",
    explanation: "Müşâreket-i menhiyye, namazda yasak olan ve namazı bozan türden bir katılım veya müdahaleyi ifade eder.",
    difficulty: 10
},
{
    turkish: "Namaz",
    question: "'Tesviye-i erkân-ı münferide' ne demektir?",
    options: ["Tek rükünlerin dengelenmesi", "Rükünlerin karışması", "Rükünlerin tekrarı", "Rükünlerin eksikliği"],
    correctAnswer: "Tek rükünlerin dengelenmesi",
    explanation: "Tesviye-i erkân-ı münferide, namazda tek başına yapılan rükünlerin kendi içinde dengelenmesi durumudur.",
    difficulty: 10
},
{
    turkish: "Namaz",
    question: "'İnkılâb-ı müteyakkan' ne demektir?",
    options: ["Kesin değişim", "Şüpheli değişim", "Geçici değişim", "Kısmi değişim"],
    correctAnswer: "Kesin değişim",
    explanation: "İnkılâb-ı müteyakkan, namazın durumunda meydana gelen kesin ve şüpheye yer bırakmayan değişimi ifade eder.",
    difficulty: 10
},
{
    turkish: "Namaz",
    question: "'Tahallül-i ikrâhî' ne demektir?",
    options: ["Zorlama ile namazdan çıkma", "İsteyerek namazdan çıkma", "Unutarak namazdan çıkma", "Yanılarak namazdan çıkma"],
    correctAnswer: "Zorlama ile namazdan çıkma",
    explanation: "Tahallül-i ikrâhî, kişinin zorla namazdan çıkarılması veya çıkmak zorunda bırakılması durumudur.",
    difficulty: 10
},
{
    turkish: "Namaz",
    question: "'İstidâme-i hükmiyye' ne anlama gelir?",
    options: ["Hükmen devam etme", "Fiilen devam etme", "Geçici devam", "Kısmi devam"],
    correctAnswer: "Hükmen devam etme",
    explanation: "İstidâme-i hükmiyye, namazın şartlarından birinin fiilen değil hükmen devam etmesi durumudur.",
    difficulty: 10
},
{
    turkish: "Namaz",
    question: "'Teâruz-i müteaddid' durumunda ne yapılır?",
    options: ["En kuvvetli görüş tercih edilir", "Hepsi reddedilir", "En kolay olan seçilir", "Hepsi birleştirilir"],
    correctAnswer: "En kuvvetli görüş tercih edilir",
    explanation: "Teâruz-i müteaddid (birden fazla görüşün çatışması) durumunda, delili en kuvvetli olan görüş tercih edilir.",
    difficulty: 10
},
{
    turkish: "Namaz",
    question: "'İstishâb-ı hâl-i münâfî' ne demektir?",
    options: ["Aykırı durumun devamı", "Uygun durumun devamı", "Geçici durum", "Karışık durum"],
    correctAnswer: "Aykırı durumun devamı",
    explanation: "İstishâb-ı hâl-i münâfî, namaza aykırı bir durumun devam ettiğinin kabul edilmesi halidir.",
    difficulty: 10
},
{
    turkish: "Namaz",
    question: "'Tekâbül-i mütenâkız' namazı nasıl etkiler?",
    options: ["Namazı bozar", "Sehiv gerektirir", "Mekruh olur", "Etkilemez"],
    correctAnswer: "Namazı bozar",
    explanation: "Tekâbül-i mütenâkız (birbirine zıt durumların bir arada bulunması), namazın mahiyetini bozduğu için namazı iptal eder.",
    difficulty: 10
}
];

window.namaz10Questions = namaz10Questions;
