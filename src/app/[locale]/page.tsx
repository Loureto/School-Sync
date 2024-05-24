"use client";

import { Button } from "@/components";
import { useChangeLocale, useI18n } from "@/locales/client";

export default async function Home() {
  const t = useI18n();
  const changeLocale = useChangeLocale();

  return (
    <div>
      <p className="text-2xl font-bold m-4 p-4">{t("common.reset")}</p>
      
      <div className="flex gap-3">
        <Button onClick={() => changeLocale("en")}>Inglês</Button>
        <Button onClick={() => changeLocale("es")}>Espanhol</Button>
        <Button onClick={() => changeLocale("pt")}>Português</Button>
      </div>
    </div>
  );
}
