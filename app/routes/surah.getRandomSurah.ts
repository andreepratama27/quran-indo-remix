import { json } from "@remix-run/node";
import { getRandomSurah } from "~/models/surah";

export type LoaderData = {
  random: Awaited<ReturnType<typeof getRandomSurah>>;
};

export async function loader() {
  const random = await getRandomSurah();
  return json<LoaderData>({
    random,
  });
}
