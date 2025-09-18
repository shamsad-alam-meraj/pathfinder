"use client";

import { motion } from "framer-motion";

export default function DashboardLoading() {
  return (
    <div className="px-5 md:px-10 space-y-6">
      <motion.h1
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        className="text-3xl md:text-5xl font-bold"
      >
        Loading your dashboard...
      </motion.h1>

      {/* Skeleton UI */}
      <div className="space-y-4">
        <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-64 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    </div>
  );
}
