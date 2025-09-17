"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useAuthStore } from "@/store/useAuthStore";

export default function Navbar() {
  const { data: session, status } = useSession();
  const user = useAuthStore((state) => state.user);
  return (
    <div className="py-5 px-6 lg:px-10 lg:flex items-center border-b hidden bg-white dark:bg-gray-950">
      {/* Logo */}
      <div className="flex-1">
        <Link className="flex items-center" href="/">
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            width={50}
            height={50}
            style={{ width: "auto", height: "auto" }}
          />
          <h6 className="pl-3 font-bold text-2xl text-purple-800">
            Path Finder
          </h6>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex gap-6"></div>

      {/* Right Section → Login/Logout */}
      <div className="flex-1 flex justify-end">
        {status === "loading" ? null : session || user ? (
          <Button
            className="bg-red-500 hover:bg-red-600 text-white px-6"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Log Out
          </Button>
        ) : (
          <Link href="/login">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">
              Log In
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
