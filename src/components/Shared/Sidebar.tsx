"use client";
import { Home, Briefcase, Goal, Compass, Settings } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export function Sidebar() {
  const { t } = useTranslation();

  const navItems = [
    { name: t("dashboard"), href: "/dashboard", icon: Home },
    { name: t("trips"), href: "/trips", icon: Briefcase },
    { name: t("goals"), href: "/goals", icon: Goal },
    { name: t("explore"), href: "/explore", icon: Compass },
    { name: t("settings"), href: "/settings", icon: Settings },
  ];

  return (
    <aside className="w-52 border-r lg:flex flex-col py-6 hidden bg-white dark:bg-gray-950">
      <nav className="flex flex-col gap-2 px-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <item.icon size={18} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
