"use client";

import { motion } from "framer-motion";

export default function LoginPageLoading() {
  return (
    <div className="h-[calc(100%-103px)] flex items-center justify-center px-4">
      <motion.div
        className="w-full max-w-md shadow-lg rounded-2xl p-6"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 1 }}
      >
        {/* Header */}
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-md mb-6 animate-pulse" />

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <div className="flex-1 h-8 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
          <div className="flex-1 h-8 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
        </div>

        {/* Submit button */}
        <div className="h-12 bg-purple-600 rounded-md mt-4 animate-pulse" />

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700 animate-pulse" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700 animate-pulse" />
        </div>

        {/* Google Button */}
        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center animate-pulse" />
      </motion.div>
    </div>
  );
}
