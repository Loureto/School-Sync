import { getDictionary } from "@/lib";
import { Locale } from "../../../i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>      
      <p className="text-2xl font-bold m-4 p-4">
        {dictionary.common.reset}: {lang}
      </p>      
    </div>
  );
}