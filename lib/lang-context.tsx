"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "es" | "en";

type LangContextValue = {
  lang: Lang;
  changeLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    if (stored === "es" || stored === "en") setLang(stored);
  }, []);

  const changeLang = (next: Lang) => {
    setLang(next);
    window.localStorage.setItem("lang", next);
  };

  const value = useMemo(() => ({ lang, changeLang }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within <LangProvider />");
  return ctx;
}
