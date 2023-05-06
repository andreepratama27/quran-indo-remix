import { API_QURAN_ENDPOINT } from "~/constants";

export interface SurahProps {
  number: string;
  name: string;
  numberOfAyahs: string;
  revelation: string;
}

export interface SurahDetailProps {
  audio: string;
  ayahs: VerseProps[];
  bismillah: Record<string, string>;
  description: string;
  name: string;
  number: number;
  numberOfAyahs: number;
  revelation: string;
  translation: string;
}

enum VersePrayer {
  ahmedajamy = "ahmedajamy",
  alafasy = "alafasy",
  husarymujawad = "husarymujawad",
  minshawi = "minshawi",
  muhammadayyoub = "muhammadayyoub",
  muhammadjibreel = "muhammadjibreel",
}

export interface VerseProps {
  arab: string;
  audio: Record<VersePrayer, string>;
  image: Record<string, string>;
  meta: Record<string, string>;
  number: Record<string, string>;
  tafsir: Record<string, string>;
  translation: string;
}

async function getAllSurah(): Promise<SurahProps[]> {
  try {
    const response = await fetch(`${API_QURAN_ENDPOINT}/surahs`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

async function getSurah({ id }: { id: string }): Promise<SurahDetailProps> {
  try {
    const response = await fetch(`${API_QURAN_ENDPOINT}/surahs/${id}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

async function getRandomSurah(): Promise<VerseProps> {
  try {
    const response = await fetch(`${API_QURAN_ENDPOINT}/random`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export { getAllSurah, getSurah, getRandomSurah };
