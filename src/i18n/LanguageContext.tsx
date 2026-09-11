import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Lang, type TranslationSet } from "@/translation";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: TranslationSet;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "portfolio-lang";

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "en";

  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored === "es" || stored === "en" || stored === "fr") {
    return stored;
  }

  const nav = navigator.language.slice(0, 2);

  if (nav === "es") return "es";
  if (nav === "fr") return "fr";

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  };

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    throw new Error("useLang must be used within LanguageProvider");
  }

  return ctx;
}
