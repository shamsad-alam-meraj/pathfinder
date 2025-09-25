"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export default function NewsletterCTA() {
  const { t } = useTranslation();

  return (
    <section className="max-w-2xl w-full py-20 px-4 mx-auto text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4 text-blue-700 font-mw">
        {t("newsletterTitle")}
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 mb-6">{t("newsletterSubtext")}</p>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="email"
          placeholder={t("newsletterPlaceholder")}
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <Button className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-6 py-2 rounded-lg">
          {t("newsletterButton")}
        </Button>
      </div>
    </section>
  );
}
