"use client";

import { Briefcase, Target, Compass } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/lib/i18n"; 

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("planTripsTitle"),
      description: t("planTripsDesc"),
      icon: Briefcase,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: t("trackGoalsTitle"),
      description: t("trackGoalsDesc"),
      icon: Target,
      color: "bg-green-100 text-green-600",
    },
    {
      title: t("exploreDestinationsTitle"),
      description: t("exploreDestinationsDesc"),
      icon: Compass,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="max-w-6xl w-full mb-20 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-700 font-mw">
        {t("featuresTitle")}
      </h2>

      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800"
            >
              {/* Icon Circle */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${feature.color}`}
              >
                <Icon size={28} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
