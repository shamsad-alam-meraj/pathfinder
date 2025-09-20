"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/store/useAuthStore";
import { useSession, signOut } from "next-auth/react";
import { useTranslation } from "react-i18next";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  const { data: session } = useSession();
  const { t } = useTranslation();

  const isLoggedIn = !!user || !!session;

  // Menu links for logged-in users
  const navLinks = [
    { title: t("dashboard"), link: "/dashboard" },
    { title: t("trips"), link: "/trips" },
    { title: t("goals"), link: "/goals" },
    { title: t("explore"), link: "/explore" },
    { title: t("settings"), link: "/settings" },
  ];

  const handleLogout = () => {
    if (user) useAuthStore.getState().logout();
    if (session) signOut({ callbackUrl: "/" });
    setOpen(false);
  };

  return (
    <div className="lg:hidden border-b bg-white dark:bg-gray-950">
      {/* Navbar Top */}
      <div className="flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo/logo.png" alt="logo" width={40} height={40} />
          <h6 className="pl-2 font-bold text-xl text-purple-800">Path Finder</h6>
        </Link>

        {isLoggedIn ? (
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-between w-6 h-6 relative"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute left-0 w-6 h-0.5 bg-purple-800 dark:bg-white transform transition duration-300 ease-in-out ${
                open ? "rotate-45 top-2.5" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 w-6 h-0.5 bg-purple-800 dark:bg-white transform transition duration-300 ease-in-out ${
                open ? "opacity-0" : "top-2.5"
              }`}
            />
            <span
              className={`absolute left-0 w-6 h-0.5 bg-purple-800 dark:bg-white transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 top-2.5" : "bottom-0"
              }`}
            />
          </button>
        ) : (
          <Link href="/login">
            <button className="bg-purple-600 text-white px-4 py-2 rounded">{t("login")}</button>
          </Link>
        )}
      </div>

      {/* Animated Menu for logged-in users */}
      {isLoggedIn && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <nav className="flex flex-col px-6 py-4 gap-4 bg-white dark:bg-gray-950">
                {navLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    className="font-semibold text-lg text-gray-900 dark:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white py-2 rounded"
                >
                  {t("logout")}
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
