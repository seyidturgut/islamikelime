const namaz7Questions = [
  {
    turkish: "Namaz",
    question: "Namazda 'telfik-i iktida' ne demektir ve hükmü nedir?",
    options: ["Aynı namazda birden fazla imama uymak - Mekruh", "İki namazı birleştirmek - Haram", "Farklı mezhepleri birleştirmek - Caiz", "İmamı taklit etmek - Sünnet"],
    correctAnswer: "Aynı namazda birden fazla imama uymak - Mekruh",
    explanation: "Telfik-i iktida, aynı namazda birden fazla imama uymaktır ve bu durum mekruhtur. Ancak zaruret halinde caiz görülmüştür.",
    difficulty: 7
},
{
    turkish: "Namaz",
    question: "'İmam-ı ratık' kimdir ve hangi durumda gereklidir?",
    options: ["Bozulan namazı tamamlayan imam - Cemaat dağıldığında", "Yeni gelen imam - Vakit çıkınca", "Geç gelen imam - Namaz bitince", "Yedek imam - İmam yorulunca"],
    correctAnswer: "Bozulan namazı tamamlayan imam - Cemaat dağıldığında",
    explanation: "İmam-ı ratık, namazı bozulan imamın yerine geçip cemaatin namazını tamamlatan imamdır. Cemaat dağılmadan önce devreye girer.",
    difficulty: 7
},
{
    turkish: "Namaz",
    question: "Namazda 'hadr', 'tedvir' ve 'tertil' nedir?",
    options: ["Kıraat hızları - Tedvir orta olanıdır", "Oturuş şekilleri - Hadr en iyisidir", "Kıyam pozisyonları - Tertil zorunludur", "Rükû çeşitleri - Hepsi caizdir"],
    correctAnswer: "Kıraat hızları - Tedvir orta olanıdır",
    explanation: "Hadr hızlı, tedvir orta, tertil yavaş okuyuştur. Namazda en faziletlisi tedvirdir. Kıraat hızının bu üç derecesi vardır.",
    difficulty: 7
},
{
    turkish: "Namaz",
    question: "'Sehv-i mükerrer' durumunda ne yapılır?",
    options: ["Tek sehiv secdesi yeterlidir", "Her sehiv için ayrı secde", "Namaz iade edilir", "İmama uyulur"],
    correctAnswer: "Tek sehiv secdesi yeterlidir",
    explanation: "Sehv-i mükerrer (aynı namazda birden fazla yanılma) durumunda tek sehiv secdesi yeterlidir, her yanılma için ayrı secde gerekmez.",
    difficulty: 7
},
{
    turkish: "Namaz",
    question: "İntikal tekbirlerinde 'meddi muttasıl' yapmak ne anlama gelir?",
    options: ["Tekbiri harekete bağlamak - Caizdir", "Tekbiri uzatmak - Mekruhtur", "Tekbirleri birleştirmek - Sünnettir", "Tekbiri kısa kesmek - Vaciptir"],
    correctAnswer: "Tekbiri harekete bağlamak - Caizdir",
    explanation: "Meddi muttasıl, intikal tekbirlerinde 'Allahu' kelimesindeki son harfi harekete bağlayarak uzatmaktır ve caizdir.",
    difficulty: 7
},
{
    turkish: "Namaz",
    question: "'Tesmi' ve 'tahmid'in cemaatle namazda tertibi nasıldır?",
    options: ["İmam tesmi, cemaat tahmid yapar", "Herkes ikisini de yapar", "Sadece imam yapar", "Sadece cemaat yapar"],
    correctAnswer: "İmam tesmi, cemaat tahmid yapar",
    explanation: "Tesmi (Semiallahü limen hamideh) imama, tahmid (Rabbena lekel hamd) ise cemaate mahsustur.",
    difficulty: 7
},
{
    turkish: "Namaz",
    question: "'Müşevveş cemaat' durumunda namaz nasıl tamamlanır?",
    options: ["Her grup kendi imamına uyar", "Herkes münferid olur", "Yeni imam seçilir", "Namaz bozulur"],
    correctAnswer: "Her grup kendi imamına uyar",
    explanation: "Müşevveş cemaat (karışık saflar) durumunda, her grup kendi imamına tabi olarak namazı tamamlar.",
    difficulty: 7
},
{
    turkish: "Namaz",
    question: "Namazda 'istisna ayeti' okunduğunda ne yapılır?",
    options: ["Durulur ve istisna vurgulanır", "Normal devam edilir", "Secdeye gidilir", "Rükûya eğilinir"],
    correctAnswer: "Durulur ve istisna vurgulanır",
    explanation: "İstisna ayeti (içinde 'illa/hariç' geçen ayet) okunduğunda kısa bir duraksama ile istisna vurgulanır.",
    difficulty: 7
},
{
    turkish: "Namaz",
    question: "'Mürur-ı maraz' ne demektir ve namazı nasıl etkiler?",
    options: ["Hastalığın devamı - Ruhsatlar artar", "Hastalığın geçmesi - Ruhsatlar kalkar", "Hastalığın başlaması - Namaz ertelenir", "Hastalığın tekrarı - Namaz değişmez"],
    correctAnswer: "Hastalığın devamı - Ruhsatlar artar",
    explanation: "Mürur-ı maraz, hastalığın devam etmesi durumudur ve bu durumda namazdaki ruhsatlar (kolaylıklar) artar.",
    difficulty: 7
},
{
    turkish: "Namaz",
    question: "'Sünnet-i heyet' ne demektir?",
    options: ["Namazın dış görünüşüyle ilgili sünnetler", "İç huzur ile ilgili sünnetler", "Vakitle ilgili sünnetler", "Mekânla ilgili sünnetler"],
    correctAnswer: "Namazın dış görünüşüyle ilgili sünnetler",
    explanation: "Sünnet-i heyet, namazın dış görünüşü ve şekliyle ilgili olan sünnetlerdir (ellerin kaldırılması, safların düzeltilmesi gibi).",
    difficulty: 7
},
{
    turkish: "Namaz",
    question: "'İstihfaf-ı salat' ne demektir ve hükmü nedir?",
    options: ["Namazı hafife almak - Küfür", "Namazı acele kılmak - Mekruh", "Namazı ertelemek - Günah", "Namazı kısaltmak - Caiz"],
    correctAnswer: "Namazı hafife almak - Küfür",
    explanation: "İstihfaf-ı salat, namazı hafife almak ve önemsememek demektir. Bu davranış küfre sebep olur.",
    difficulty: 7
},
{
    turkish: "Namaz",
    question: "'Salat-ı vüsta' hangi namazdır ve özelliği nedir?",
    options: ["İkindi namazı - Özellikle korunması emredilmiştir", "Sabah namazı - En faziletlidir", "Öğle namazı - İlk farzdır", "Yatsı namazı - En son farzdır"],
    correctAnswer: "İkindi namazı - Özellikle korunması emredilmiştir",
    explanation: "Salat-ı vüsta (orta namaz) ikindi namazıdır ve Kur'an'da özellikle korunması emredilmiştir.",
    difficulty: 7
},
{
    turkish: "Namaz",
    question: "'İstihlaf-ı batıl' ne demektir?",
    options: ["Ehliyetsiz birini imam yapmak", "İmamı değiştirmek", "Cemaati dağıtmak", "Namazı bozmak"],
    correctAnswer: "Ehliyetsiz birini imam yapmak",
    explanation: "İstihlaf-ı batıl, namazı yönetme ehliyeti olmayan birini imam olarak öne geçirmektir ve bu durum namazı bozar.",
    difficulty: 7
},
{
    turkish: "Namaz",
    question: "'Tehallül-ü şer'i' ne demektir?",
    options: ["Namazdan usulüne uygun çıkış", "Namaza başlama", "Namazı bozma", "Namazı kısaltma"],
    correctAnswer: "Namazdan usulüne uygun çıkış",
    explanation: "Tehallül-ü şer'i, namazdan selam vererek usulüne uygun bir şekilde çıkmak demektir.",
    difficulty: 7
},
{
    turkish: "Namaz",
    question: "'Rükn-ü münferid' ne demektir?",
    options: ["Tek başına yapılan rükün", "İmamla yapılan rükün", "Cemaatle yapılan rükün", "Namazın herhangi bir rüknü"],
    correctAnswer: "Tek başına yapılan rükün",
    explanation: "Rükn-ü münferid, namazda tek başına yapılan ve başka bir rükünle birleştirilemeyen rükürdür (secde gibi).",
    difficulty: 7
}
];

window.namaz7Questions = namaz7Questions;
