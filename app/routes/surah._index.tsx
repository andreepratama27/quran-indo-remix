import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Wrapper from "~/components/Wrapper";
import { getAllSurah } from "~/models/surah";
import SurahList from "~/components/SurahList";

type LoaderData = {
  surah: Awaited<ReturnType<typeof getAllSurah>>;
};

export const loader: LoaderFunction = async () => {
  const surah = await getAllSurah();
  return json<LoaderData>({ surah });
};

export default function Surah() {
  const { surah: surahList } = useLoaderData() as LoaderData;

  return (
    <Wrapper>
      <div id="menu" className="h-full">
        <div className="pb-6 title-wrapper">
          <h1 className="font-bold ">Kumpulan Surah</h1>

          <div className="h-1 my-2 bg-black w-28 " />
        </div>
      </div>

      {surahList?.map((item, index) => (
        <SurahList key={index} data={item} />
      ))}
    </Wrapper>
  );
}
