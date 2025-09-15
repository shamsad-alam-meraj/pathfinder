"use client";

import Image from "next/image";
import LinkButton from "./LinkButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-5 px-10 lg:flex  items-center border-b  hidden">
      {/* image/ logo  */}
      <div className="flex-1 ">
        <Link className="flex items-center" href="/">
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            width={50}
            height={50}
          ></Image>
          <h6 className="pl-3 font-bold text-2xl text-purple-800">
            Path Finder
          </h6>
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
