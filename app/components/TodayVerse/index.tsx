import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import type { LoaderData } from "~/routes/surah.getRandomSurah";

export default function TodayVerse() {
  const fetcher = useFetcher<LoaderData>();

  useEffect(() => {
    fetcher.load("/surah/getRandomSurah");
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center px-2 py-4 mb-8 overflow-hidden text-center min-h-56 bg-violet-600 shadow-skew"
      id="surah-intro"
    >
      <div className="relative surah-title -top-1">
        <p className="text-xl font-bold text-white pb">Ayat Hari Ini</p>

        <div className="w-10 h-1 mx-auto my-4 bg-white" />

        <p className="text-2xl text-white">{fetcher.data?.random?.arab}</p>

        <div id="verse-translation" className="px-4 pt-5 pb-4">
          <p className="text-sm italic text-white">
            {fetcher.data?.random.translation}
          </p>
        </div>
      </div>

      <div className="absolute opacity-25 bottom-2 w-36 h-36 image-overlay right-4">
        <img src="/quran.png" alt="quran" className="w-full h-full" />
      </div>
    </div>
  );
}
