"use client";

import { useSettingsStore } from "@/store/useSettingsStore";
import { ReactNode, useEffect } from "react";

export default function DarkModeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const darkMode = useSettingsStore((state) => state.darkMode);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  return <>{children}</>;
}
