"use client";

import { SessionProvider } from "next-auth/react";
import NavbarMobile from "@/components/Shared/NavbarMobile";
import DarkModeProvider from "@/components/Shared/DarkModeProvider";
import Navbar from "./ Navbar";
import { Sidebar } from "./Sidebar";
import { useAuthStore } from "@/store/useAuthStore";
import { useSettingsStore } from "@/store/useSettingsStore";
import { useEffect } from "react";
import i18n from "@/lib/i18n";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuthStore();
   const language = useSettingsStore((state) => state.language);
  useEffect(() => {
    i18n.changeLanguage(language === "বাংলা" ? "bn" : language === "हिंदी" ? "hi" : "en");
  }, [language]);
 
  return (
    <SessionProvider>
      <Navbar />
      <NavbarMobile />
      <div className="flex flex-1 overflow-hidden">
        {user && <Sidebar />}
        <main className="flex-1 overflow-y-auto p-6">
          <DarkModeProvider>{children}</DarkModeProvider>
        </main>
      </div>
    </SessionProvider>
  );
}
