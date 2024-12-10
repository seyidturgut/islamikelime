const namaz2Questions = [
  {
    turkish: "Namaz",
    question: "Cemaatle kılınan namazın tek başına kılınan namaza göre sevabı kaç kat fazladır?",
    options: ["27 kat", "25 kat", "20 kat", "30 kat"],
    explanation: "Cemaatle kılınan namazın sevabı, tek başına kılınan namazdan 27 kat daha fazladır.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Namazın rükünleri kaç tanedir?",
    options: ["6", "5", "7", "8"],
    explanation: "Namazın rükünleri 6 tanedir: İftitah tekbiri, kıyam, kıraat, rükû, secde ve ka'de-i ahire.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Vitir namazı kaç rekattır?",
    options: ["3 rekat", "2 rekat", "4 rekat", "5 rekat"],
    explanation: "Vitir namazı 3 rekattır ve son rekatında kunut duaları okunur.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Yolculukta (seferilik halinde) dört rekatlı farz namazlar kaç rekat olarak kılınır?",
    options: ["2 rekat", "3 rekat", "4 rekat", "1 rekat"],
    explanation: "Seferi olan kişi, dört rekatlı farz namazları 2 rekat olarak kılar.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Cuma namazı kimlere farzdır?",
    options: ["Akıllı, ergen, hür, sağlıklı erkeklere", "Tüm Müslümanlara", "Sadece yaşlılara", "Kadın ve erkeklere"],
    explanation: "Cuma namazı; akıllı, ergen, hür, sağlıklı ve mukim (yolcu olmayan) erkeklere farzdır.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Namazda 'ta'dil-i erkan' ne demektir?",
    options: ["Rükünleri düzgün yapmak", "Kıbleye dönmek", "Niyet etmek", "Tekbir almak"],
    explanation: "Ta'dil-i erkan, namazın rükünlerini acele etmeden, düzgün ve yerli yerince yapmak demektir.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Teravih namazı ne zaman kılınır?",
    options: ["Ramazan ayında", "Her cuma", "Bayramlarda", "Her gece"],
    explanation: "Teravih namazı Ramazan ayında, yatsı namazından sonra kılınır.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Teravih namazı kaç rekattır?",
    options: ["20 rekat", "8 rekat", "12 rekat", "16 rekat"],
    explanation: "Teravih namazı Hanefi mezhebine göre 20 rekattır.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Namaz kılarken giyilecek elbisenin özellikleri nelerdir?",
    options: ["Temiz ve örtülmesi gereken yerleri örten", "Sadece yeni olması", "Sadece beyaz olması", "Sadece uzun olması"],
    explanation: "Namaz kılarken giyilen elbisenin temiz olması ve örtülmesi gereken yerleri örtmesi gerekir.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Beş vakit namaz dışında kılınması tavsiye edilen namaz hangisidir?",
    options: ["Kuşluk namazı", "Teheccüd namazı", "İşrak namazı", "Hepsi"],
    explanation: "Kuşluk, Teheccüd ve İşrak namazları hepsi nafile namaz olarak kılınması tavsiye edilenlerdendir.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Bayram namazları kaç rekattır?",
    options: ["2 rekat", "3 rekat", "4 rekat", "6 rekat"],
    explanation: "Bayram namazları 2 rekattır ve her rekatında fazladan tekbirler alınır.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Ka'de-i ahirede hangi dualar okunur?",
    options: ["Tahiyyat, salli-barik ve rabbena duaları", "Sadece Fatiha", "Sadece Tahiyyat", "Sadece Ayetel Kürsi"],
    explanation: "Ka'de-i ahirede Tahiyyat, Allahümme salli, Allahümme barik ve Rabbena duaları okunur.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Namaza başlarken yapılan niyette nelerin belirtilmesi gerekir?",
    options: ["Hangi namaz olduğu ve kaç rekat olduğu", "Sadece vakit", "Sadece rekat sayısı", "Sadece namaz türü"],
    explanation: "Niyette hangi namaz olduğu (sabah, öğle vb.) ve kaç rekat olduğu belirtilmelidir.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Namazda 'huşu' ne demektir?",
    options: ["Kalbin Allah'a yönelmesi", "Sadece kıbleye dönmek", "Sadece sessiz durmak", "Sadece gözleri kapamak"],
    explanation: "Huşu, namazda kalbin Allah'a yönelmesi ve tam bir konsantrasyon halidir.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Cuma namazının kaç rekât sünneti vardır?",
    options: ["10 rekat", "8 rekat", "12 rekat", "4 rekat"],
    explanation: "Cuma namazının toplam 10 rekat sünneti vardır (ilk 4, son 4 ve ayrıca son 2 rekat).",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Farz namazların vakitleri nasıl belirlenir?",
    options: ["Güneşin konumuna göre", "Saate göre", "İmama göre", "Ezana göre"],
    explanation: "Namaz vakitleri güneşin konumuna göre belirlenir (doğuş, zeval, batış vb.).",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Teşrik tekbirleri ne zaman getirilir?",
    options: ["Kurban bayramında", "Ramazanda", "Her namazdan sonra", "Her cumada"],
    explanation: "Teşrik tekbirleri Kurban Bayramı'nda, arefe günü sabah namazından bayramın 4. günü ikindi namazına kadar getirilir.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Rükûda en az kaç kere 'Sübhane Rabbiyel Azim' denilmelidir?",
    options: ["3 kere", "1 kere", "5 kere", "7 kere"],
    explanation: "Rükûda en az 3 kere 'Sübhane Rabbiyel Azim' denilmelidir.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "İki secde arasında oturuşta ne söylenir?",
    options: ["Rabbigfirli", "Sübhanallah", "Allahu Ekber", "La ilahe illallah"],
    explanation: "İki secde arasında 'Rabbigfirli' (Allah'ım beni bağışla) denir.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Namazda tesbihat ne zaman yapılır?",
    options: ["Namazdan sonra", "Namazdan önce", "Rükûda", "Secdede"],
    explanation: "Tesbihat (33'er defa Sübhanallah, Elhamdülillah, Allahu Ekber) farz namazlardan sonra yapılır.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Kunut duaları hangi namazda okunur?",
    options: ["Vitir namazında", "Sabah namazında", "Yatsı namazında", "Her namazda"],
    explanation: "Kunut duaları vitir namazının son rekatında, rükûdan sonra okunur.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Namazda 'kıraat' ne demektir?",
    options: ["Kur'an okumak", "Tekbir getirmek", "Secde etmek", "Selam vermek"],
    explanation: "Kıraat, namazda Kur'an-ı Kerim'den ayetler okumak demektir.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Sabah namazının son sünneti ne zaman kılınır?",
    options: ["Farzdan sonra", "Farzdan önce", "İkindi namazından sonra", "Öğle namazından önce"],
    explanation: "Sabah namazının son sünneti yoktur, sadece farzdan önce kılınan 2 rekat sünneti vardır.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Nafile namaz ne demektir?",
    options: ["Farz ve vacip dışında kılınan namaz", "Sadece farz namaz", "Sadece vacip namaz", "Sadece sünnet namaz"],
    explanation: "Nafile namaz, farz ve vacip olmayan, kişinin kendi isteğiyle kıldığı namazdır.",
    difficulty: 2
  },
  {
    turkish: "Namaz",
    question: "Namaza başlarken alınan tekbire ne ad verilir?",
    options: ["İftitah tekbiri", "İntikal tekbiri", "Rükû tekbiri", "Vitir tekbiri"],
    explanation: "Namaza başlarken alınan tekbire 'İftitah tekbiri' (başlama tekbiri) denir.",
    difficulty: 2
  }
];

window.namaz2Questions = namaz2Questions;
