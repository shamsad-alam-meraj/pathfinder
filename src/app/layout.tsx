import type { Metadata } from "next";
import "./globals.css";
import ClientLayoutWrapper from "@/components/Shared/ClientLayoutWrapper";
import "@/lib/i18n";

export const metadata: Metadata = {
  title: "Path Finder",
  description: "A personalized travel & productivity planner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen flex flex-col font-lato">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
