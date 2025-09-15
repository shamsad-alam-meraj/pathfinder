"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Trips", link: "/trips" },
    { title: "Goals", link: "/goals" },
    { title: "Explore", link: "/explore" },
  ];

  return (
    <div className="lg:hidden flex items-center justify-between py-4 px-6 border-b bg-white dark:bg-gray-900">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/images/logo/logo.png" alt="logo" width={40} height={40} />
        <h6 className="pl-2 font-bold text-xl text-purple-800">Path Finder</h6>
      </Link>

      {/* Hamburger Menu */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className="flex flex-col justify-between w-6 h-5"
            aria-label="Open menu"
          >
            <span className="block w-full h-0.5 bg-purple-800 dark:bg-white"></span>
            <span className="block w-full h-0.5 bg-purple-800 dark:bg-white"></span>
            <span className="block w-full h-0.5 bg-purple-800 dark:bg-white"></span>
          </button>
        </DialogTrigger>

        <DialogContent className="w-64 p-6">
          <nav className="flex flex-col gap-4">
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
          </nav>
          <div className="mt-6">
            <Button className="w-full">Profile / Settings</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
