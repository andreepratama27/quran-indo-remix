import type { V2_MetaFunction } from "@remix-run/node";
import TodayVerse from "~/components/TodayVerse";
import Wrapper from "~/components/Wrapper";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <Wrapper>
      <TodayVerse />

      <div id="menu" className="h-full">
        <div className="pb-4">
          <h1 className="">Menu</h1>

          <div className="h-1 my-2 bg-black w-28" />
        </div>

        <div className="mb-4">
          <div
            className="w-full p-4 mb-6 bg-white border border-black shadow-skew"
            role="button"
          >
            <a href="/surah">
              <p className="">Kumpulan Surah</p>
            </a>
          </div>
          <div
            className="w-full p-4 bg-white border border-black shadow-skew"
            role="button"
          >
            <a href="/doa">
              <p className="">Doa - Doa Harian</p>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
