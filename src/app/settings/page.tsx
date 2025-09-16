"use client";

import { useSettingsStore } from "@/store/useSettingsStore";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FiMoon, FiBell, FiMapPin, FiShield } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";

export default function SettingsPage() {
  const darkMode = useSettingsStore((state) => state.darkMode);
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);
  const [notifications, setNotifications] = useState(true);
  const [locationAccess, setLocationAccess] = useState(false);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <div className="p-4 md:p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">
        Settings
      </h1>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center sm:items-start p-4 md:p-6 rounded-lg shadow-md gap-4 sm:gap-6"
      >
        <div className="w-24 h-24 relative rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop"
            alt="Avatar"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base">
            john.doe@example.com
          </p>
        </div>
      </motion.div>

      {/* Toggles Section */}
      <div className="space-y-4">
        {/* Dark Mode */}
        <motion.div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <FiMoon className="text-gray-700 dark:text-gray-200 text-xl" />
            <span className="font-semibold">Dark Mode</span>
          </div>
          <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
        </motion.div>

        {/* Notifications */}
        <motion.div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <FiBell className="text-gray-700 dark:text-gray-200 text-xl" />
            <span className="font-semibold">Notifications</span>
          </div>
          <Switch checked={notifications} onCheckedChange={setNotifications} />
        </motion.div>

        {/* Location Access */}
        <motion.div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <FiMapPin className="text-gray-700 dark:text-gray-200 text-xl" />
            <span className="font-semibold">Location Access</span>
          </div>
          <Switch
            checked={locationAccess}
            onCheckedChange={setLocationAccess}
          />
        </motion.div>

        {/* Privacy Mode */}
        <motion.div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <FiShield className="text-gray-700 dark:text-gray-200 text-xl" />
            <span className="font-semibold">Privacy Mode</span>
          </div>
          <Switch checked={privacyMode} onCheckedChange={setPrivacyMode} />
        </motion.div>

        {/* Language Selection */}
        <motion.div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm gap-2 md:gap-4">
          <div className="flex items-center gap-3">
            <MdLanguage className="text-gray-700 dark:text-gray-200 text-xl" />
            <span className="font-semibold">Language</span>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded-md px-3 py-2 bg-white dark:bg-gray-700 dark:text-white text-gray-800"
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Chinese</option>
          </select>
        </motion.div>
      </div>
    </div>
  );
}
