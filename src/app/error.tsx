"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  code?: number;
  message?: string;
}

export default function ErrorPage({ code = 404, message }: ErrorPageProps) {
  const router = useRouter();

  const getMessage = () => {
    if (message) return message;
    switch (code) {
      case 403:
        return "You don’t have permission to access this page.";
      case 500:
        return "Oops! Something went wrong on our server.";
      case 404:
      default:
        return "Page not found. The page you are looking for might have been removed or never existed.";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen  px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <h1 className="text-6xl font-bold text-purple-700 mb-4">{code}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{getMessage()}</p>
        <Button
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
          onClick={() => router.push("/")}
        >
          Go Home
        </Button>
      </motion.div>
    </div>
  );
}
