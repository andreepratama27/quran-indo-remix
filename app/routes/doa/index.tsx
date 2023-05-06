import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Wrapper from "~/components/Wrapper";
import { getAllPrayer } from "~/models/prayer";

type LoaderData = {
  prayers: Awaited<ReturnType<typeof getAllPrayer>>;
};

export const loader: LoaderFunction = async () => {
  const prayers = await getAllPrayer();
  return json<LoaderData>({ prayers });
};

export default function Doa() {
  const { prayers } = useLoaderData() as LoaderData;

  return (
    <Wrapper>
      <div id="menu" className="h-full">
        <div className="pb-6 title-wrapper">
          <h1 className="font-bold ">Doa - Doa Harian</h1>

          <div className="h-1 my-2 bg-black w-28" />
        </div>
      </div>

      {prayers?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col p-4 mb-6 bg-white border border-black shadow-skew "
          role="button"
        >
          <p className="text-lg font-bold title ">{item.doa}</p>

          <div className="w-20 h-1 mt-1 mb-2 bg-black " />

          <p className="py-4 text-2xl ">{item.ayat}</p>
          <p className="pb-4 text-sm italic font-bold">{item.latin}</p>

          <p className="text-sm italic">"{item.artinya}"</p>
        </div>
      ))}
    </Wrapper>
  );
}
