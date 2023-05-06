import type { SurahProps } from "~/models/surah";

interface SurahListInterface {
  data: SurahProps;
  onAddToFavorite?: () => void;
}

export default function SurahList({
  data,
  onAddToFavorite,
}: SurahListInterface) {
  return (
    <div
      className="flex items-center justify-between p-4 mb-6 bg-white border border-black shadow-skew "
      role="button"
    >
      <a
        href={`/surah/${data.number}`}
        className="flex items-center gap-2 font-bold"
      >
        <div className="relative flex items-center justify-center w-14 h-14 number-wrapper">
          <p className="absolute text-sm number">{data.number}</p>
        </div>

        <div className="surah-wrap">
          <p className="">{data.name}</p>

          <div className="flex items-center gap-2 surah-type">
            <p className="text-sm font-normal text-gray-500 ">
              {data.revelation}
            </p>
            <div className="w-1 h-1 bg-black rounded-full bullet" />
            <p className="text-sm font-normal text-gray-500 ">
              {data.numberOfAyahs} Ayat
            </p>
          </div>
        </div>
      </a>

      <button className="hover:cursor-pointer" onClick={onAddToFavorite}>
        {/* <img src="/bookmark.png" alt="bookmark" className="w-6 h-6" /> */}
      </button>
    </div>
  );
}
