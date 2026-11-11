
import metadata from "./surah-metadata.json";
import { surahNamesRu, surahNamesUz } from "quran-meta/i18n";

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

// Uzbek Cyrillic -> Uzbek Latin
const uzAlphabet: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "g",
  д: "d", е: "e", ё: "yo", ж: "j",
  з: "z", и: "i", й: "y", к: "k",
  л: "l", м: "m", н: "n", о: "o",
  п: "p", р: "r", с: "s", т: "t",
  у: "u", ф: "f", х: "x", ц: "ts",
  ч: "ch", ш: "sh", щ: "shch",
  ъ: "'", ь: "", ы: "i", э: "e",
  ю: "yu", я: "ya",
  ў: "oʻ", қ: "q", ғ: "gʻ", ҳ: "h",
};

function toUzbekLatin(text: string): string {
  return Array.from(text, (char) => {
    const lower = char.toLowerCase();
    const converted = uzAlphabet[lower];

    if (converted === undefined) return char;

    return char === lower
      ? converted
      : converted.charAt(0).toUpperCase() + converted.slice(1);
  }).join("");
}

// Preserve the names we already selected
const localNames: Record<number, { uz: string; ru: string; en: string }> = {
  1: { uz: "Fotiha", ru: "Аль-Фатиха", en: "Al-Fatiha" },
  2: { uz: "Baqara", ru: "Аль-Бакара", en: "Al-Baqara" },
  3: { uz: "Oli Imron", ru: "Али Имран", en: "Aal-i-Imraan" },
  4: { uz: "Niso", ru: "Ан-Ниса", en: "An-Nisaa" },
  5: { uz: "Moida", ru: "Аль-Маида", en: "Al-Maaida" },
  6: { uz: "An'am", ru: "Аль-Анам", en: "Al-An'aam" },
  7: { uz: "A'rof", ru: "Аль-Араф", en: "Al-A'raaf" },
  8: { uz: "Anfal", ru: "Аль-Анфаль", en: "Al-Anfaal" },
  9: { uz: "Tavba", ru: "Ат-Тавба", en: "At-Tawba" },
  10: { uz: "Yunus", ru: "Юнус", en: "Yunus" },
  11: { uz: "Hud", ru: "Худ", en: "Hud" },
  12: { uz: "Yusuf", ru: "Юсуф", en: "Yusuf" },
  13: { uz: "Rohmon", ru: "Ар-Рахмон", en: "Ar-Rahmaan" },
  14: { uz: "Ibrohim", ru: "Ибрахим", en: "Ibrahim" },
  15: { uz: "Hoj", ru: "Аль-Хиджр", en: "Al-Hijr" },
  16: { uz: "Nahl", ru: "Ан-Нахль", en: "An-Nahl" },
  17: { uz: "Isra", ru: "Аль-Исра", en: "Al-Israa" },
  18: { uz: "Kahf", ru: "Аль-Кахф", en: "Al-Kahf" },
  19: { uz: "Maryam", ru: "Марьям", en: "Maryam" },
  20: { uz: "Taha", ru: "Таха", en: "Taha" },
  21: { uz: "Anbiyo", ru: "Аль-Анбия", en: "Al-Anbiya" },
  22: { uz: "Haj", ru: "Аль-Хадж", en: "Al-Hajj" },
  23: { uz: "Mu'minun", ru: "Аль-Муъминун", en: "Al-Mu'minoon" },
  24: { uz: "Nur", ru: "Ан-Нур", en: "An-Noor" },
  25: { uz: "Furqon", ru: "Аль-Фуркан", en: "Al-Furqan" },
  26: { uz: "Shu'aro", ru: "Аш-Шуара", en: "Ash-Shu'ara" },
  27: { uz: "Naml", ru: "Ан-Намль", en: "An-Naml" },
  28: { uz: "Qasos", ru: "Аль-Касас", en: "Al-Qasas" },
  29: { uz: "Ankabut", ru: "Аль-Анкабут", en: "Al-Ankaboot" },
  30: { uz: "Rum", ru: "Ар-Рум", en: "Ar-Room" },
  31: { uz: "Luqmon", ru: "Лукман", en: "Luqman" },
  32: { uz: "Sajda", ru: "Ас-Саджда", en: "As-Sajda" },
  33: { uz: "Ahzob", ru: "Аль-Ахзаб", en: "Al-Ahzab" },
  34: { uz: "Saba", ru: "Саба", en: "Saba" },
  35: { uz: "Fatir", ru: "Фатир", en: "Fatir" },
  36: { uz: "Yasin", ru: "Ясин", en: "Yasin" },
  37: { uz: "Soffat", ru: "Ас-Саффат", en: "As-Saffat" },
  38: { uz: "Sad", ru: "Сад", en: "Sad" },
  39: { uz: "Zumar", ru: "Аз-Зумар", en: "Az-Zumar" },
  40: { uz: "Gofir", ru: "Гафир", en: "Ghafir" },
  41: { uz: "Fussilat", ru: "Фуссилат", en: "Fussilat" },
  42: { uz: "Shuro", ru: "Аш-Шура", en: "Ash-Shura" },
  43: { uz: "Zuxruf", ru: "Аз-Зухруф", en: "Az-Zukhruf" },
  44: { uz: "Duxon", ru: "Ад-Духан", en: "Ad-Dukhan" },
  45: { uz: "Jasiya", ru: "Аль-Джасия", en: "Al-Jaathiya" },
  46: { uz: "Ahqof", ru: "Аль-Ахкаф", en: "Al-Ahqaf" },
  47: { uz: "Muhammad", ru: "Мухаммад", en: "Muhammad" },
  48: { uz: "Fath", ru: "Аль-Фатх", en: "Al-Fath" },
  49: { uz: "Hujurot", ru: "Аль-Худжурат", en: "Al-Hujurat" },
  50: { uz: "Qof", ru: "Каф", en: "Qaf" },
  51: { uz: "Zoriyot", ru: "Аз-Зарият", en: "Adh-Dhariyat" },
  52: { uz: "Tur", ru: "Ат-Тур", en: "At-Tur" },
  53: { uz: "Najm", ru: "Ан-Наджм", en: "An-Najm" },
  54: { uz: "Qamar", ru: "Аль-Камар", en: "Al-Qamar" },
  55: { uz: "Rahmon", ru: "Ар-Рахман", en: "Ar-Rahman" },
  56: { uz: "Lahab", ru: "Аль-Лахаб", en: "Al-Lahab" },
  57: { uz: "Mu'minun", ru: "Аль-Муминун", en: "Al-Mu'minoon" },
  58: { uz: "Hadid", ru: "Аль-Хадид", en: "Al-Hadid" },
  59: { uz: "Mujadila", ru: "Аль-Муджадила", en: "Al-Mujadila" },
  60: { uz: "Hashr", ru: "Аль-Хашр", en: "Al-Hashr" },
  61: { uz: "Mumtahina", ru: "Аль-Мумтахана", en: "Al-Mumtahina" },
  62: { uz: "Saff", ru: "Ас-Саф", en: "As-Saff" },
  63: { uz: "Jumua", ru: "Аль-Джумуа", en: "Al-Jumua" },
  64: { uz: "Munafiqun", ru: "Аль-Мунафикун", en: "Al-Munafiqoon" },
  65: { uz: "Taloq", ru: "Ат-Талак", en: "At-Talaq" },
  66: { uz: "Tahrim", ru: "Ат-Тахрим", en: "At-Tahrim" },
  67: { uz: "Mulk", ru: "Аль-Мульк", en: "Al-Mulk" },
  68: { uz: "Qalam", ru: "Аль-Калам", en: "Al-Qalam" },
  69: { uz: "Haqqa", ru: "Аль-Хакка", en: "Al-Haqqa" },
  70: { uz: "Ma'arij", ru: "Аль-Мааридж", en: "Al-Ma'arij" },
  71: { uz: "Nuh", ru: "Нух", en: "Nuh" },
  72: { uz: "Jinn", ru: "Аль-Джинн", en: "Al-Jinn" },
  73: { uz: "Muzzammil", ru: "Аль-Муззаммиль", en: "Al-Muzzammil" },
  74: { uz: "Muddassir", ru: "Аль-Муддассир", en: "Al-Muddaththir" },
  75: { uz: "Qiyomat", ru: "Аль-Кийамaт", en: "Al-Qiyamah" },
  76: { uz: "Insan", ru: "Аль-Инсан", en: "Al-Insan" },
  77: { uz: "Mursalat", ru: "Аль-Мурсалят", en: "Al-Mursalat" },
  78: { uz: "Naba", ru: "Ан-Наба", en: "An-Naba" },
  79: { uz: "Nazi'at", ru: "Ан-Назиат", en: "An-Nazi'at" },
  80: { uz: "Abasa", ru: "Абаса", en: "Abasa" },
  81: { uz: "Takvir", ru: "Ат-Таквир", en: "At-Takwir" },
  82: { uz: "Infitor", ru: "Аль-Инфитар", en: "Al-Infitar" },
  83: { uz: "Mutaffifin", ru: "Аль-Мутаффифин", en: "Al-Mutaffifin" },
  84: { uz: "Inshiqoq", ru: "Аль-Иншикок", en: "Al-Inshiqaq" },
  85: { uz: "Buruj", ru: "Аль-Бурудж", en: "Al-Burooj" },
  86: { uz: "Tariq", ru: "Ат-Тариқ", en: "At-Tariq" },
  87: { uz: "A'la", ru: "Аль-Аля", en: "Al-A'la" },
  88: { uz: "G'ashiya", ru: "Аль-Гашия", en: "Al-Ghashiya" },
  89: { uz: "Fajr", ru: "Аль-Фаджр", en: "Al-Fajr" },
  90: { uz: "Balad", ru: "Аль-Балад", en: "Al-Balad" },
  91: { uz: "Shams", ru: "Аш-Шамс", en: "Ash-Shams" },
  92: { uz: "Layl", ru: "Аль-Лайл", en: "Al-Lail" },
  93: { uz: "Zul-Hijja", ru: "Зуль-Хиджжа", en: "Zul-Hijja" },
  94: { uz: "Inshiroh", ru: "Аль-Инширох", en: "Al-Inshirah" },
  95: { uz: "Tin", ru: "Ат-Тин", en: "At-Tin" },
  96: { uz: "Alaq", ru: "Аль-Алак", en: "Al-Alaq" },
  97: { uz: "Qadr", ru: "Аль-Кадр", en: "Al-Qadr" },
  98: { uz: "Bayyina", ru: "Аль-Баййина", en: "Al-Bayyina" },
  99: { uz: "Zalzala", ru: "Аз-Залзала", en: "Az-Zalzalah" },
  100: { uz: "Adiyat", ru: "Аль-Адийат", en: "Al-Adiyat" },
  101: { uz: "Qoriya", ru: "Аль-Кория", en: "Al-Qari'a" },
  102: { uz: "Takasur", ru: "Ат-Такатхур", en: "At-Takathur" },
  103: { uz: "Asr", ru: "Аль-Аср", en: "Al-Asr" },
  104: { uz: "Humaza", ru: "Аль-Хумаза", en: "Al-Humazah" },
  105: { uz: "Fil", ru: "Аль-Филь", en: "Al-Fil" },
  106: { uz: "Quraysh", ru: "Курайш", en: "Quraish" },
  107: { uz: "Ma'un", ru: "Аль-Маун", en: "Al-Ma'un" },
  108: { uz: "Kavsar", ru: "Аль-Каусар", en: "Al-Kawthar" },
  109: { uz: "Kafirun", ru: "Аль-Кафирун", en: "Al-Kafiroon" },
  110: { uz: "Nasr", ru: "Ан-Наср", en: "An-Nasr" },
  111: { uz: "Masad", ru: "Аль-Масад", en: "Al-Masad" },
  112: { uz: "Ixlos", ru: "Аль-Ихлас", en: "Al-Ikhlas" },
  113: { uz: "Falaq", ru: "Аль-Фалак", en: "Al-Falaq" },
  114: { uz: "Nas", ru: "Ан-Нас", en: "An-Nas" },
};

export const surahs: Surah[] = metadata.map((chapter) => {
  const uzName = surahNamesUz[chapter.number]?.[0];
  const ruName = surahNamesRu[chapter.number]?.[0];

  if (!uzName || !ruName) {
    throw new Error(
      `Missing translation for surah ${chapter.number}`
    );
  }

  return {
    number: chapter.number,
    nameArabic: chapter.name,
    name: {
      uz: localNames[chapter.number]?.uz ?? toUzbekLatin(uzName),
      ru: localNames[chapter.number]?.ru ?? ruName,
      en: chapter.englishName,
    },
    verses: chapter.numberOfAyahs,
  };
});
