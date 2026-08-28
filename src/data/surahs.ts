export type Language = "uz" | "ru" | "en";

export type Surah = {
  number: number;
  nameArabic: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  verses: number;
};

export const surahs: Surah[] = [
  {
    number: 1,
    nameArabic: "الفاتحة",
    name: {
      uz: "Fotiha",
      ru: "Аль-Фатиха",
      en: "Al-Fatihah",
    },
    verses: 7,
  },
  {
    number: 2,
    nameArabic: "البقرة",
    name: {
      uz: "Baqara",
      ru: "Аль-Бакара",
      en: "Al-Baqarah",
    },
    verses: 286,
  },
  {
    number: 3,
    nameArabic: "آل عمران",
    name: {
      uz: "Oli Imron",
      ru: "Али Имран",
      en: "Aal-E-Imran",
    },
    verses: 200,
  },
  {
    number: 4,
    nameArabic: "النساء",
    name: {
      uz: "Niso",
      ru: "Ан-Ниса",
      en: "An-Nisa",
    },
    verses: 176,
  },
  {
    number: 5,
    nameArabic: "المائدة",
    name: {
      uz: "Moida",
      ru: "Аль-Маида",
      en: "Al-Ma'idah",
    },
    verses: 120,
  },
];