const namaz8Questions = [
  {
    turkish: "Namaz",
    question: "'Sübük-i müfrit' durumu namazı nasıl etkiler?",
    options: ["Namazı batıl eder", "Tahrimen mekruhtur", "Tenzihen mekruhtur", "Namazı etkilemez"],
    correctAnswer: "Namazı batıl eder",
    explanation: "Sübük-i müfrit (aşırı süratli kılmak), namazın rükünlerini tam yapmaya engel olacak şekilde acele etmektir ve namazı batıl eder.",
    difficulty: 8
},
{
    turkish: "Namaz",
    question: "'Müsafat-ı fahişe' ne demektir ve hükmü nedir?",
    options: ["İmamla cemaat arasında aşırı mesafe - Namazı bozar", "Saflar arası boşluk - Mekruhtur", "Kıbleden sapma - Namazı etkilemez", "Camiden uzaklık - Kerahet vardır"],
    correctAnswer: "İmamla cemaat arasında aşırı mesafe - Namazı bozar",
    explanation: "Müsafat-ı fahişe, imam ile cemaat arasında veya saflar arasında uygun olmayan fazla mesafe bulunmasıdır ve bu durum namazı bozar.",
    difficulty: 8
},
{
    turkish: "Namaz",
    question: "'İktida-i mescud' nedir?",
    options: ["Secde halindeki imama uymak", "Rükuda imama uymak", "Kıyamda imama uymak", "Tehiyyatta imama uymak"],
    correctAnswer: "Secde halindeki imama uymak",
    explanation: "İktida-i mescud, secde halindeki imama uymaktır. Bu durumda namaza başlayan kişi o rekatı kaçırmış sayılır.",
    difficulty: 8
},
{
    turkish: "Namaz",
    question: "'Teverrük' ve 'terebbü' oturuşları arasındaki fark nedir?",
    options: ["Sol kalça üzerine oturma/Bağdaş kurma", "Diz çökme/Ayak dikme", "Topuk üzerine oturma/Çömelme", "Ayakları yana çıkarma/Önde tutma"],
    correctAnswer: "Sol kalça üzerine oturma/Bağdaş kurma",
    explanation: "Teverrük, sol kalça üzerine oturup ayakları sağ taraftan çıkarmak; terebbü ise bağdaş kurarak oturmaktır.",
    difficulty: 8
},
{
    turkish: "Namaz",
    question: "'İstihale-i hükm' namazda ne anlama gelir?",
    options: ["Hükmün değişmesi", "Namazın bozulması", "Vaktin çıkması", "İmamın değişmesi"],
    correctAnswer: "Hükmün değişmesi",
    explanation: "İstihale-i hükm, namaz esnasında ortaya çıkan yeni bir durumdan dolayı namazın hükmünün değişmesidir.",
    difficulty: 8
},
{
    turkish: "Namaz",
    question: "'Tahrîme-i müştereke' ne demektir?",
    options: ["Ortak başlangıç tekbiri", "Farklı tekbirler", "İmama özel tekbir", "Cemaate özel tekbir"],
    correctAnswer: "Ortak başlangıç tekbiri",
    explanation: "Tahrîme-i müştereke, imam ve cemaatin aynı anda aldıkları başlangıç (iftitah) tekbiridir.",
    difficulty: 8
},
{
    turkish: "Namaz",
    question: "'Rükn-ü mürekkeb' namazda neyi ifade eder?",
    options: ["Birleşik rükünler", "Tek rükün", "Sünnet rükünler", "Vacip rükünler"],
    correctAnswer: "Birleşik rükünler",
    explanation: "Rükn-ü mürekkeb, namazda birbirine bağlı olarak yapılan rükünlerdir (kıyam ile kıraat gibi).",
    difficulty: 8
},
{
    turkish: "Namaz",
    question: "'Müşareket-i amel' namazı nasıl etkiler?",
    options: ["Namazı bozar", "Sehiv secdesi gerektirir", "Mekruh olur", "Etkilemez"],
    correctAnswer: "Namazı bozar",
    explanation: "Müşareket-i amel (başkasının namaz fiillerine katılmak), kendi namazını bozar.",
    difficulty: 8
},
{
    turkish: "Namaz",
    question: "'Tekbir-i teşrik'in rükniyeti nedir?",
    options: ["Vaciptir", "Farzdır", "Sünnettir", "Müstehaptır"],
    correctAnswer: "Vaciptir",
    explanation: "Tekbir-i teşrik (kurban bayramı günlerinde farz namazlardan sonra getirilen tekbirler) vaciptir.",
    difficulty: 8
},
{
    turkish: "Namaz",
    question: "'İnfirad-ı hükmi' ne demektir?",
    options: ["Hükmen tek başına sayılma", "Cemaatten ayrılma", "İmama uyma", "Saftan ayrılma"],
    correctAnswer: "Hükmen tek başına sayılma",
    explanation: "İnfirad-ı hükmi, cemaatle namaz kılan kişinin çeşitli sebeplerle hükmen tek başına namaz kılıyor sayılması durumudur.",
    difficulty: 8
},
{
    turkish: "Namaz",
    question: "'Teaddüd-i cemaat' hangi durumlarda caizdir?",
    options: ["Mescit dolduğunda", "Her zaman", "Sadece cuma namazında", "Sadece bayram namazında"],
    correctAnswer: "Mescit dolduğunda",
    explanation: "Teaddüd-i cemaat (aynı mescitte birden fazla cemaatle namaz kılınması), mescit dolup başka çare kalmadığında caiz olur.",
    difficulty: 8
},
{
    turkish: "Namaz",
    question: "'Tahrime-i mevkufe' ne demektir?",
    options: ["Askıda olan başlangıç tekbiri", "Geçersiz tekbir", "Şartlı tekbir", "Ertelenmiş tekbir"],
    correctAnswer: "Askıda olan başlangıç tekbiri",
    explanation: "Tahrime-i mevkufe, geçerliliği şüpheli olan veya bir şarta bağlı bulunan başlangıç tekbiridir.",
    difficulty: 8
},
{
    turkish: "Namaz",
    question: "'İstihlaf-ı makbul' için gereken şartlar nelerdir?",
    options: ["Abdestli ve ehliyetli olması", "Sadece abdestli olması", "Sadece cemaatten olması", "Herhangi biri olması"],
    correctAnswer: "Abdestli ve ehliyetli olması",
    explanation: "İstihlaf-ı makbul (geçerli imam değişimi) için yerine geçecek kişinin abdestli ve namazı yönetme ehliyetine sahip olması gerekir.",
    difficulty: 8
},
{
    turkish: "Namaz",
    question: "'Sehv-i müstevî' ne demektir?",
    options: ["Eşit seviyede yanılma", "Büyük yanılma", "Küçük yanılma", "Tekrarlanan yanılma"],
    correctAnswer: "Eşit seviyede yanılma",
    explanation: "Sehv-i müstevî, namazda yapılan yanılmanın zıt iki durum arasında eşit seviyede olmasıdır.",
    difficulty: 8
},
{
    turkish: "Namaz",
    question: "'Tesviye-i erkân' ne demektir ve hükmü nedir?",
    options: ["Rükünleri eşit yapma - Vacip", "Rükünleri kısa yapma - Sünnet", "Rükünleri uzatma - Müstehap", "Rükünleri birleştirme - Mekruh"],
    correctAnswer: "Rükünleri eşit yapma - Vacip",
    explanation: "Tesviye-i erkân, namazın rükünlerini uygun ve dengeli bir şekilde yerine getirmektir ve bu vaciptir.",
    difficulty: 8
}
];

window.namaz8Questions = namaz8Questions;
