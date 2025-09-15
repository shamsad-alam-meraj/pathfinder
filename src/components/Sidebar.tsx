"use client";
import { Home, Briefcase, Goal, Compass, Settings } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Trips", href: "/trips", icon: Briefcase },
  { name: "Goals", href: "/goals", icon: Goal },
  { name: "Explore", href: "/explore", icon: Compass },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col py-6">
      <nav className="flex flex-col gap-2 px-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition"
          >
            <item.icon size={18} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
