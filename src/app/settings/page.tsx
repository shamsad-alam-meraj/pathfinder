"use client";

import { useSettingsStore } from "@/store/useSettingsStore";
import { useAuthStore } from "@/store/useAuthStore";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMoon, FiBell, FiMapPin, FiShield } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import ProtectedRoute from "@/components/Shared/ProtectedRoute";
import { useTranslation } from "react-i18next";

export default function SettingsPage() {
  const { t } = useTranslation();
  const darkMode = useSettingsStore((state) => state.darkMode);
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);
  const notifications = useSettingsStore((state) => state.notifications);
  const setNotifications = useSettingsStore((state) => state.setNotifications);
  const locationAccess = useSettingsStore((state) => state.locationAccess);
  const setLocationAccess = useSettingsStore(
    (state) => state.setLocationAccess
  );
  const privacyMode = useSettingsStore((state) => state.privacyMode);
  const togglePrivacyMode = useSettingsStore(
    (state) => state.togglePrivacyMode
  );
  const language = useSettingsStore((state) => state.language);
  const setLanguage = useSettingsStore((state) => state.setLanguage);

  // Get user from Auth Store
  const user = useAuthStore((state) => state.user);

  const handleNotifications = () => {
    if (!notifications && "Notification" in window) {
      Notification.requestPermission().then((permission) => {
        setNotifications(permission === "granted");
        if (permission === "granted") alert("Notifications enabled!");
      });
    } else {
      setNotifications(false);
    }
  };

  const handleLocationAccess = () => {
    if (!locationAccess && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location allowed:", position.coords);
          setLocationAccess(true);
        },
        () => setLocationAccess(false)
      );
    } else {
      setLocationAccess(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="p-4 md:p-6 max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left">
          {t("settings")}
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
              src={
                user?.image ||
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop"
              }
              alt={user?.name || "Avatar"}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold">{user?.name || "Guest User"}</h2>
            <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base">
              {user?.email || "user@example.com"}
            </p>
          </div>
        </motion.div>

        {/* Toggles Section */}
        <div className="space-y-4">
          {/* Dark Mode */}
          <motion.div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <FiMoon className="text-gray-700 dark:text-gray-200 text-xl" />
              <span className="font-semibold">{t("darkMode")}</span>
            </div>
            <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
          </motion.div>

          {/* Notifications */}
          <motion.div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <FiBell className="text-gray-700 dark:text-gray-200 text-xl" />
              <span className="font-semibold">{t("notifications")}</span>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={handleNotifications}
            />
          </motion.div>

          {/* Location Access */}
          <motion.div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <FiMapPin className="text-gray-700 dark:text-gray-200 text-xl" />
              <span className="font-semibold">{t("location")}</span>
            </div>
            <Switch
              checked={locationAccess}
              onCheckedChange={handleLocationAccess}
            />
          </motion.div>

          {/* Privacy Mode */}
          <motion.div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <FiShield className="text-gray-700 dark:text-gray-200 text-xl" />
              <span className="font-semibold">{t("privacy")}</span>
            </div>
            <Switch checked={privacyMode} onCheckedChange={togglePrivacyMode} />
          </motion.div>

          {/* Language Selection */}
          <motion.div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm gap-2 md:gap-4">
            <div className="flex items-center gap-3">
              <MdLanguage className="text-gray-700 dark:text-gray-200 text-xl" />
              <span className="font-semibold">{t("language")}</span>
            </div>
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
                localStorage.setItem("lang", e.target.value);
              }}
              className="border rounded-md px-3 py-2 bg-white dark:bg-gray-700 dark:text-white text-gray-800 w-full md:w-auto"
            >
              <option>English</option>
              <option>বাংলা</option>
              <option>हिंदी</option>
            </select>
          </motion.div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
