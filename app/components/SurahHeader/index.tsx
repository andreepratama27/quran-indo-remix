import { useEffect, useState } from "react";
import type { SurahDetailProps } from "~/models/surah";

export default function SurahHeader({ data }: { data: SurahDetailProps }) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const playAudio = () => {
    audio?.play();
    setPlaying(true);
  };

  const pauseAudio = () => {
    audio?.pause();
    setPlaying(false);
  };

  useEffect(() => {
    setAudio(new Audio(data.audio));
    return () => {
      audio?.pause();
    };
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center h-56 mb-10 overflow-hidden text-center bg-violet-600 shadow-skew"
      id="surah-intro"
    >
      {playing ? (
        <button
          className="absolute flex items-center justify-center w-8 h-8 border-2 border-black rounded-full shadow-lg right-2 top-2 bg-violet-200 "
          id="play-surah"
          onClick={pauseAudio}
        >
          <img src="/pause.png" alt="stop-button" className="w-4 h-4" />
        </button>
      ) : (
        <button
          className="absolute flex items-center justify-center w-8 h-8 border-2 border-black rounded-full shadow-lg dark:border-slate-300 right-2 top-2 bg-violet-200 dark:bg-slate-300"
          id="play-surah"
          onClick={playAudio}
        >
          <img src="/play.png" alt="play-button" className="w-4 h-4" />
        </button>
      )}

      <div className="relative surah-title -top-4">
        <p className="text-xl text-white pb">{data?.name}</p>
        <p className="italic text-white text-md">"{data?.translation}"</p>

        <div className="w-full h-1 mt-4 bg-white" />

        <div className="flex items-center justify-center gap-2 pt-2">
          <p className="text-white">{data?.revelation}</p>
          <div className="w-1 h-1 bg-white rounded-full bullet" />
          <p className="text-white">{data?.numberOfAyahs} Ayat</p>
        </div>

        <p className="relative text-3xl text-white bismillah top-6">
          {data?.bismillah?.arab}
        </p>
      </div>

      <div className="absolute opacity-25 bottom-2 w-36 h-36 image-overlay right-4">
        <img src="/quran.png" alt="quran" className="w-full h-full" />
      </div>
    </div>
  );
}
