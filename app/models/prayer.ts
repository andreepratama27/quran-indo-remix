import { API_DOA_ENDPOINT } from "~/constants";

export interface PrayerProps {
  id: string;
  doa: string;
  ayat: string;
  artinya: string;
  latin: string;
}

async function getAllPrayer(): Promise<PrayerProps[]> {
  try {
    const response = await fetch(`${API_DOA_ENDPOINT}/api`);
    const prayers = await response.json();

    return prayers;
  } catch (error) {
    throw error;
  }
}

export { getAllPrayer };
