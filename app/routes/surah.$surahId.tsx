import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import SurahHeader from "~/components/SurahHeader";
import SurahVerse from "~/components/SurahVerse";
import Wrapper from "~/components/Wrapper";
import { getSurah } from "~/models/surah";

type LoaderData = {
  surah: Awaited<ReturnType<typeof getSurah>>;
};

export async function loader({ params }: LoaderArgs) {
  const surah = await getSurah({ id: params.surahId as string });
  return json<LoaderData>({
    surah,
  });
}

export default function SurahDetailPage() {
  const { surah } = useLoaderData() as LoaderData;

  return (
    <Wrapper>
      <SurahHeader data={surah} />
      {surah.ayahs.map((item, index) => (
        <SurahVerse key={index} verse={item} />
      ))}
    </Wrapper>
  );
}
