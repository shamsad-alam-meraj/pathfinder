"use client";

import { useSettingsStore } from "@/store/useSettingsStore";
import { Switch } from "@/components/ui/switch"; // shadcn/ui switch
import Image from "next/image";

export default function SettingsPage() {
  const darkMode = useSettingsStore((state) => state.darkMode);
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Profile Card */}
      <div className="flex items-center p-6 rounded-lg shadow-md mb-6">
        <div className="w-24 h-24 relative rounded-full overflow-hidden mr-6">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Avatar"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-gray-500 dark:text-gray-300">
            john.doe@example.com
          </p>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center gap-4">
        <span className="font-semibold">Dark Mode</span>
        <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
      </div>
    </div>
  );
}
