import type { VerseProps } from "~/models/surah";
import VerseOption from "../VerseOption";
import { useEffect, useState } from "react";

export default function SurahVerse({ verse }: { verse: VerseProps }) {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>();

  const playAudio = () => {
    audio?.play();
    setPlaying(true);
  };

  const pauseAudio = () => {
    audio?.pause();
    setPlaying(false);
  };

  useEffect(() => {
    setAudio(new Audio(verse.audio.alafasy));

    return () => {
      audio?.pause();
    };
  }, []);

  return (
    <section className="w-full mb-8 surah-detail">
      <div
        className="flex justify-between w-full p-2 px-4 bg-violet-200 "
        id="surah-number"
      >
        <div className="flex items-center justify-center w-6 h-6 text-white rounded-full number-tag bg-violet-500 ">
          {verse?.number?.inSurah}
        </div>

        <VerseOption
          onPause={pauseAudio}
          onPlay={playAudio}
          playing={playing}
        />
      </div>

      <div id="surah-verse" className="py-8">
        <p className="text-2xl text-right ">{verse?.arab}</p>
      </div>

      <div className="surah-meaning">
        <p className="text-justify">{verse?.translation}</p>
      </div>
    </section>
  );
}
