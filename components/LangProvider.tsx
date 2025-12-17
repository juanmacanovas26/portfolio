"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'es' | 'en';

interface LangContextType {
  lang: Lang;
  changeLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang;
    if (stored && (stored === 'es' || stored === 'en')) {
      setLang(stored);
    }
  }, []);

  const changeLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within LangProvider');
  }
  return context;
}