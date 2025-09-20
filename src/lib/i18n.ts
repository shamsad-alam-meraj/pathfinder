"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Hindi from "../translations/Hindi";
import English from "../translations/English";
import Bengali from "../translations/Bengali";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: English },
      bn: { translation: Bengali },
      hi: { translation: Hindi },
    },
    lng:
      typeof window !== "undefined"
        ? localStorage.getItem("lang") || "en"
        : "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: { useSuspense: false },
  });

export default i18n;
