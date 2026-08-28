export type Verse = {
  number: number;
  arabic: string;
  transliteration: string;
  translation: {
    uz: string;
    ru: string;
    en: string;
  };
};

export const surah1Verses: Verse[] = [
  {
    number: 1,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Бисмилля́хи-р-Рахма́ни-р-Рахи́м",
    translation: {
      uz: "Mehribon va rahmli Alloh nomi bilan.",
      ru: "Во имя Аллаха, Милостивого, Милосердного.",
      en: "In the name of Allah, the Most Gracious, the Most Merciful.",
    },
  },
  {
    number: 2,
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    transliteration: "Аль-хамду лилля́хи Раббиль-‘а́лями́н",
    translation: {
      uz: "Hamd olamlarning Robbi Allohgadir.",
      ru: "Хвала Аллаху, Господу миров.",
      en: "All praise is due to Allah, Lord of the worlds.",
    },
  },
  {
    number: 3,
    arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Ар-Рахма́ни-р-Рахи́м",
    translation: {
      uz: "U Mehribon va Rahmlidir.",
      ru: "Милостивому, Милосердному.",
      en: "The Most Gracious, the Most Merciful.",
    },
  },
  {
    number: 4,
    arabic: "مَالِكِ يَوْمِ الدِّينِ",
    transliteration: "Ма́лики Я́умид-Ди́н",
    translation: {
      uz: "Jazo kunining Podshohidir.",
      ru: "Властелину Дня воздаяния.",
      en: "Master of the Day of Judgment.",
    },
  },
  {
    number: 5,
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    transliteration: "Ийя́ка на‘буду ва ийя́ка наста‘и́н",
    translation: {
      uz: "Faqat Sengagina ibodat qilamiz va faqat Sendangina yordam so‘raymiz.",
      ru: "Тебе одному мы поклоняемся и Тебя одного просим о помощи.",
      en: "You alone we worship, and You alone we ask for help.",
    },
  },
  {
    number: 6,
    arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    transliteration: "Ихдина-ссыра́таль-мустаки́м",
    translation: {
      uz: "Bizni to‘g‘ri yo‘lga hidoyat qil.",
      ru: "Веди нас прямым путем.",
      en: "Guide us to the straight path.",
    },
  },
  {
    number: 7,
    arabic:
      "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    transliteration:
      "Сыра́таль-лязи́на ан‘амта ‘алайхим, гайриль-магду́би ‘алайхим ва ляд-до́лли́н",
    translation: {
      uz: "Ne'mat bergan zotlaring yo‘liga, g‘azabga uchraganlar va adashganlar yo‘liga emas.",
      ru: "Путем тех, кого Ты облагодетельствовал, не тех, на кого пал гнев, и не заблудших.",
      en: "The path of those You have blessed, not of those who have earned Your anger, nor of those who have gone astray.",
    },
  },
];

export const versesBySurah: Record<number, Verse[]> = {
  1: surah1Verses,
};