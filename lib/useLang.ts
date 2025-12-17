"use client";

import { useState, useEffect } from 'react';

export function useLang() {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as 'es' | 'en';
    if (stored && (stored === 'es' || stored === 'en')) {
      setLang(stored);
    }
  }, []);

  const changeLang = (newLang: 'es' | 'en') => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return { lang, changeLang };
}