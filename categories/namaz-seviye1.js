const namaz1Questions = [
  {
    turkish: "Namaz",
    question: "Günde kaç vakit namaz farz kılınır?",
    options: ["3 vakit", "4 vakit", "5 vakit", "6 vakit"],
    explanation: "İslam'da günde 5 vakit namaz farzdır: Sabah, Öğle, İkindi, Akşam ve Yatsı namazları.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Sabah namazının farzı kaç rekattır?",
    options: ["2 rekat", "3 rekat", "4 rekat", "5 rekat"],
    explanation: "Sabah namazının farzı 2 rekattır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Namaza başlarken hangi tekbir getirilir?",
    options: ["Allahu Ekber", "Sübhanallah", "Elhamdülillah", "La ilahe illallah"],
    explanation: "Namaza başlarken 'Allahu Ekber' diyerek iftitah (başlama) tekbiri alınır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Akşam namazının farzı kaç rekattır?",
    options: ["3 rekat", "2 rekat", "4 rekat", "5 rekat"],
    explanation: "Akşam namazının farzı 3 rekattır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Öğle namazının farzı kaç rekattır?",
    options: ["4 rekat", "2 rekat", "3 rekat", "5 rekat"],
    explanation: "Öğle namazının farzı 4 rekattır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "İkindi namazının farzı kaç rekattır?",
    options: ["4 rekat", "2 rekat", "3 rekat", "5 rekat"],
    explanation: "İkindi namazının farzı 4 rekattır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Yatsı namazının farzı kaç rekattır?",
    options: ["4 rekat", "2 rekat", "3 rekat", "5 rekat"],
    explanation: "Yatsı namazının farzı 4 rekattır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Namazda kıbleye dönülmesinin hükmü nedir?",
    options: ["Farzdır", "Vaciptir", "Sünnettir", "Müstehaptır"],
    explanation: "Namazda kıbleye dönmek farzdır. Kıble yönü Kabe'nin bulunduğu yöndür.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Namaza başlamadan önce hangi ibadet yapılmalıdır?",
    options: ["Abdest almak", "Dua okumak", "Ezan okumak", "Kamet getirmek"],
    explanation: "Namaz kılmadan önce abdestli değilsek abdest almalıyız.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Sabah namazının sünneti kaç rekattır?",
    options: ["2 rekat", "4 rekat", "3 rekat", "6 rekat"],
    explanation: "Sabah namazının sünneti 2 rekattır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Namazda Fatiha suresini okumak hangi hükümdedir?",
    options: ["Farzdır", "Vaciptir", "Sünnettir", "Müstehaptır"],
    explanation: "Her rekatta Fatiha suresini okumak farzdır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Namazda rükûya giderken ne söylenir?",
    options: ["Allahu Ekber", "Semiallahu limen hamideh", "Sübhanallah", "Estagfirullah"],
    explanation: "Rükûya giderken 'Allahu Ekber' denilir.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Namazın sonunda hangi yöne doğru ilk selam verilir?",
    options: ["Sağ tarafa", "Sol tarafa", "Öne doğru", "Arkaya doğru"],
    explanation: "Namazın sonunda önce sağ tarafa selam verilir.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Namaz kılarken secdeye giderken ne söylenir?",
    options: ["Allahu Ekber", "Sübhanallah", "Elhamdülillah", "Semiallahu limen hamideh"],
    explanation: "Secdeye giderken 'Allahu Ekber' denilir.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Akşam namazının sünneti kaç rekattır?",
    options: ["2 rekat", "3 rekat", "4 rekat", "5 rekat"],
    explanation: "Akşam namazının sünneti 2 rekattır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Namazda her rekatta hangi sure mutlaka okunmalıdır?",
    options: ["Fatiha Suresi", "İhlas Suresi", "Nas Suresi", "Felak Suresi"],
    explanation: "Her rekatta Fatiha suresi mutlaka okunmalıdır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Öğle namazının ilk sünneti kaç rekattır?",
    options: ["4 rekat", "2 rekat", "3 rekat", "5 rekat"],
    explanation: "Öğle namazının ilk sünneti 4 rekattır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Rükûdan doğrulurken ne söylenir?",
    options: ["Semiallahu limen hamideh", "Allahu Ekber", "Sübhanallah", "Estagfirullah"],
    explanation: "Rükûdan doğrulurken 'Semiallahu limen hamideh' denilir.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Namazın farzları kaç tanedir?",
    options: ["12", "10", "14", "8"],
    explanation: "Namazın farzları 12 tanedir. 6'sı içinde, 6'sı dışındadır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Secdede en az kaç defa 'Sübhane Rabbiyel A'la' denilmelidir?",
    options: ["3 defa", "1 defa", "2 defa", "4 defa"],
    explanation: "Secdede en az 3 defa 'Sübhane Rabbiyel A'la' denilmelidir.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Namazda Fatiha'dan sonra en az kaç ayet okunmalıdır?",
    options: ["3 kısa ayet", "1 uzun ayet", "5 ayet", "7 ayet"],
    explanation: "Fatiha'dan sonra en az 3 kısa ayet veya buna denk 1 uzun ayet okunmalıdır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "İkindi namazının sünneti kaç rekattır?",
    options: ["4 rekat", "2 rekat", "3 rekat", "5 rekat"],
    explanation: "İkindi namazının sünneti 4 rekattır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Yatsı namazının son sünneti kaç rekattır?",
    options: ["2 rekat", "3 rekat", "4 rekat", "5 rekat"],
    explanation: "Yatsı namazının son sünneti 2 rekattır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Namaza başlarken yapılan niyet hangi hükümdedir?",
    options: ["Farzdır", "Vaciptir", "Sünnettir", "Müstehaptır"],
    explanation: "Namaza başlarken niyet etmek farzdır.",
    difficulty: 1
  },
  {
    turkish: "Namaz",
    question: "Namazda ayakta durmanın (kıyam) hükmü nedir?",
    options: ["Farzdır", "Vaciptir", "Sünnettir", "Müstehaptır"],
    explanation: "Namazda ayakta durmak (kıyam) gücü yeten için farzdır.",
    difficulty: 1
  }
];

window.namaz1Questions = namaz1Questions;
