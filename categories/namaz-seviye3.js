const namaz3Questions = [
  {
    turkish: "Namaz",
    question: "Sehiv secdesi hangi durumlarda yapılır?",
    options: ["Namazın vaciplerinden birini unutunca", "Her namazdan sonra", "Sadece farz namazlarda", "Sadece sünnetlerde"],
    explanation: "Sehiv secdesi, namazın vaciplerinden birini unutarak terk etme veya geciktirme durumunda yapılır.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Vitir namazının hükmü nedir?",
    options: ["Vacip", "Farz", "Sünnet", "Müstehap"],
    explanation: "Vitir namazı Hanefi mezhebine göre vaciptir.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Namaza 'müdrik' olarak yetişmek ne demektir?",
    options: ["İmamla birlikte rükûya yetişmek", "Sadece son oturuşa yetişmek", "Namazın yarısına yetişmek", "Sadece selamı beklemek"],
    explanation: "Müdrik, imamla birlikte en az bir rekatın rükûsuna yetişen kişiye denir.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Aşağıdakilerden hangisi namazı bozmaz?",
    options: ["Az bir hareket", "Konuşmak", "Gülmek", "Yemek yemek"],
    explanation: "Namazda az bir hareket (örneğin bir adım atmak, kaşınmak) namazı bozmaz.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Cuma namazının sıhhat şartlarından biri nedir?",
    options: ["Hutbe okunması", "Öğle vaktinde kılınması", "Cemaatle kılınması", "Hepsi"],
    explanation: "Hutbe okunması, öğle vaktinde ve cemaatle kılınması Cuma namazının sıhhat şartlarındandır.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Namazda 'setri avret' ne demektir?",
    options: ["Avret yerlerinin örtülmesi", "Kıbleye dönmek", "Abdest almak", "Niyet etmek"],
    explanation: "Setri avret, namazda avret yerlerinin örtülmesi demektir ve namazın şartlarındandır.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Hangisi cemaatin faziletini artıran durumlardan değildir?",
    options: ["Camiden uzak oturmak", "İlk safta olmak", "İmama yakın olmak", "Erken gelmek"],
    explanation: "Camiden uzak oturmak fazileti artırmaz, aksine camiye yakın olmak ve erken gelmek fazileti artırır.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Hangi durumda namazı bozan bir gülme söz konusudur?",
    options: ["Kahkaha ile gülmek", "Gülümsemek", "İçinden gülmek", "Tebessüm etmek"],
    explanation: "Kahkaha ile (yanındakinin duyacağı şekilde) gülmek namazı bozar ve abdesti de bozar.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "İmama uyan kişi hangi durumda 'mesbuk' sayılır?",
    options: ["Namazın başına yetişemeyen", "Namazın sonuna yetişen", "Namaza erken gelen", "İmamdan önce gelen"],
    explanation: "Mesbuk, namazın başına yetişemeyip sonradan imama uyan kişidir.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Namaza sonradan yetişen (mesbuk) kişi, imam selam verdikten sonra ne yapar?",
    options: ["Kaçırdığı rekatları tamamlar", "Namazı baştan kılar", "Hemen selam verir", "Sehiv secdesi yapar"],
    explanation: "Mesbuk, imam selam verdikten sonra kalkıp kaçırdığı rekatları tamamlar.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Aşağıdakilerden hangisi namazın mekruhlarından değildir?",
    options: ["Sübhanallah demek", "Elbiseyle oynamak", "Esnemek", "Parmakları çıtlatmak"],
    explanation: "Namazda zikir olan 'Sübhanallah' demek mekruh değildir.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Namazın son oturuşunda neler farzdır?",
    options: ["Tahiyyat duasını okumak", "Salavat okumak", "Rabbena dualarını okumak", "Kunut dualarını okumak"],
    explanation: "Son oturuşta sadece Tahiyyat duasını okumak farzdır, diğerleri vacip veya sünnettir.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Cemaatle namaz kılarken imama hangi durumda uyulmaz?",
    options: ["İmam abdestsiz olduğu bilinirse", "İmam hızlı kıldırıyorsa", "İmam yaşlıysa", "İmam hafız değilse"],
    explanation: "İmamın abdestsiz olduğu kesin olarak biliniyorsa ona uyulmaz.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Namazda 'tadil-i erkanı' terk eden kişi ne yapmalıdır?",
    options: ["Sehiv secdesi yapar", "Namazı iade eder", "Kaza eder", "Bir şey gerekmez"],
    explanation: "Tadil-i erkanı terk eden kişi sehiv secdesi yapmalıdır.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Sehiv secdesini unutarak yapmayan kişi ne yapmalıdır?",
    options: ["Hatırladığında yapar", "Namazı iade eder", "Kaza eder", "Sadaka verir"],
    explanation: "Sehiv secdesini unutarak yapmayan kişi, hatırladığında yapması gerekmez.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Aşağıdakilerden hangisi 'namazın adabından' değildir?",
    options: ["Rukûda elleri dizlere koymak", "Secde yerini gözetlemek", "Ayakları kıbleye doğru uzatmak", "Ezanı dinlemek"],
    explanation: "Namazda ayakları kıbleye doğru uzatmak namazın adabından değil, mekruhlarındandır.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Namazda kıraat ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: ["Sabah ve akşamda açıktan okunur", "Her namazda gizli okunur", "Her namazda açık okunur", "Sadece öğle ve ikindide gizli okunur"],
    explanation: "Sabah ve akşam namazlarında kıraat açıktan (cehri) yapılır.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Namaza başlarken unutulan niyeti namazın neresine kadar yapmak geçerlidir?",
    options: ["Kıraate kadar", "Rükûya kadar", "İlk oturuşa kadar", "Son oturuşa kadar"],
    explanation: "Namaza başlarken unutulan niyet kıraate kadar yapılabilir.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Seferilik (yolculuk) hali için mesafe şartı nedir?",
    options: ["90 km ve üzeri", "50 km ve üzeri", "100 km ve üzeri", "80 km ve üzeri"],
    explanation: "Seferilik için gidilecek mesafenin 90 km veya daha fazla olması gerekir.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Teşrik tekbirleri ne zamana kadar getirilir?",
    options: ["Kurban bayramı 4. gün ikindiye kadar", "Bayramın 1. günü", "Bayramın 2. günü", "Bayramın 3. günü"],
    explanation: "Teşrik tekbirleri Kurban bayramının 4. günü ikindi namazına kadar getirilir.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Farz namazlarda Fatiha'dan sonra sure veya ayet okumanın hükmü nedir?",
    options: ["Vacip", "Farz", "Sünnet", "Müstehap"],
    explanation: "Farz namazlarda Fatiha'dan sonra sure veya ayet okumak vaciptir.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Bayram tekbirlerinin hükmü nedir?",
    options: ["Vacip", "Farz", "Sünnet", "Müstehap"],
    explanation: "Bayram namazlarındaki fazladan getirilen tekbirler vaciptir.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Namazda yapılan hareketlerin dereceleri hangi sıraya göre dizilir?",
    options: ["Rükün-Vacip-Sünnet-Müstehap", "Vacip-Rükün-Sünnet-Müstehap", "Sünnet-Vacip-Rükün-Müstehap", "Müstehap-Sünnet-Vacip-Rükün"],
    explanation: "Namazda yapılan hareketlerin önem sırası: Rükün, Vacip, Sünnet, Müstehap şeklindedir.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Namazda 'hades' ne demektir?",
    options: ["Abdesti bozan şey", "Namazı bozan şey", "Mekruh olan şey", "Sünnet olan şey"],
    explanation: "Hades, abdesti bozan durum demektir.",
    difficulty: 3
  },
  {
    turkish: "Namaz",
    question: "Aşağıdakilerden hangisi namazı bozan bir konuşma sayılmaz?",
    options: ["Hapşırana yerhamükellah demek", "Selam almak", "Dünyevi konuşma", "İmama cevap vermek"],
    explanation: "Hapşırana yerhamükellah demek namazı bozan bir konuşma sayılmaz.",
    difficulty: 3
  }
];

window.namaz3Questions = namaz3Questions;
