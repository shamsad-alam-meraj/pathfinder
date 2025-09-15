import type { Metadata } from "next";
import "./globals.css";
import DarkModeProvider from "@/components/DarkModeProvider";
import Navbar from "@/components/ Navbar";
import { Sidebar } from "@/components/Sidebar";
import NavbarMobile from "@/components/NavbarMobile";

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
      <body className="h-screen w-screen flex flex-col">
        <Navbar />
        <div>
          <NavbarMobile />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-6">
            <DarkModeProvider>{children}</DarkModeProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
