"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import { useAuthStore } from "@/store/useAuthStore";

export default function DashboardBanner() {
  const { t } = useTranslation();
  const user = useAuthStore((state) => state.user);

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-2">{t("welcome", { name: user?.name ? user.name : "Guest User" })}</h2>
      <p className="text-lg">{t("heroHeading2")}</p>
    </div>
  );
}
