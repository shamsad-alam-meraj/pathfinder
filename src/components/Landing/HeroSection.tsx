"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center text-center py-20 px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-700 mb-6 font-mw">
        {t("heroHeading")}
      </h1>
      <p className="text-lg md:text-xl text-blue-950 max-w-2xl mb-8">
        {t("heroSubtext")}
      </p>
      <div className="flex gap-4 mb-16 flex-wrap justify-center">
        <Button
          size="lg"
          className="px-8 bg-blue-600 hover:bg-blue-800 font-bold"
        >
          {t("getStarted")}
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          {t("learnMore")}
        </Button>
      </div>
    </section>
  );
}
