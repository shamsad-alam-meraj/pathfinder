"use client";

import Image from "next/image";
import LinkButton from "./LinkButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-5 px-10 flex  items-center border-b">
      {/* image/ logo  */}
      <div className="flex-1">
        <Link href="/">
          <Image
            src="/images/logo/logo_name.png"
            alt="logo"
            width={100}
            height={50}
          ></Image>
        </Link>
      </div>
      {/* navigation buttons  */}
      <div className="flex justify-between flex-2">
        <LinkButton title="Dashboard" link="/dashboard" />
        <LinkButton title="Trips" link="/trips" />
        <LinkButton title="Goals" link="/goals" />
        <LinkButton title="Explore" link="/explore" />
      </div>
      {/* setting/profile-dark mode-log in/out  */}
      <div className="flex-3"></div>
    </div>
  );
}
