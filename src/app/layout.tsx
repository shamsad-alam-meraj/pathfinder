import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import Navbar from "@/components/ Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Path Finder",
  description: "A personalized travel & productivity planner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen flex flex-col bg-gray-50 text-gray-900">
        {/* Navbar at top */}
        <Navbar />

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar fixed on left */}
          <Sidebar />

          {/* Main content scrollable */}
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </body>
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}
    </html>
  );
}
