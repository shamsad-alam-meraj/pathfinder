"use client";

import { Briefcase, Target, Compass } from "lucide-react";

const features = [
  {
    title: "Plan Trips",
    description: "Create and organize your travel itineraries with ease.",
    icon: Briefcase,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Track Goals",
    description: "Stay motivated by setting and tracking your travel goals.",
    icon: Target,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Explore Destinations",
    description: "Discover new places to visit based on your preferences.",
    icon: Compass,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function FeaturesSection() {
  return (
    <section className="max-w-6xl w-full mb-20 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-700">
        Key Features
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
