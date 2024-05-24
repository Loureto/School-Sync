'use client';

import { useChangeLocale, useI18n } from "@/locales/client";

export default async function Home() {
  const t = useI18n()
  const changeLocale = useChangeLocale()

  return (
    <div>      
      <p className="text-2xl font-bold m-4 p-4">
        {t('common.reset')}
      </p>      

      <button onClick={() => changeLocale('en')}>Inglês</button>
      <button onClick={() => changeLocale('es')}>Espanhol</button>
      <button onClick={() => changeLocale('pt')}>Português</button>
    </div>
  );
}