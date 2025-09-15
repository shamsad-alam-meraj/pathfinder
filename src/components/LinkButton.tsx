"use client";

import Link from "next/link";

interface LinkButtonProps {
  link: string;
  title: string;
}

export default function LinkButton({ link, title }: LinkButtonProps) {
  return <Link className="font-light tracking-wide text-2xl pr-10" href={link}>{title}</Link>;
}
