"use client";

import { Briefcase, Target, Map } from "lucide-react";

const steps = [
  {
    title: "Plan Trips",
    description: "Organize your itineraries with simple steps.",
    icon: Briefcase,
  },
  {
    title: "Track Goals",
    description: "Monitor your travel achievements and progress.",
    icon: Target,
  },
  {
    title: "Explore",
    description: "Discover new destinations that fit your style.",
    icon: Map,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="max-w-5xl w-full mb-20 px-4">
      <h2 className="text-4xl font-bold mb-12 text-blue-700 text-center">
        How It Works
      </h2>

      <div className="relative flex flex-col md:flex-row md:justify-between gap-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="flex-1 flex flex-col items-center text-center relative">
              {/* Connector line for desktop */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-40 w-full h-0.5 bg-blue-200 z-0"></div>
              )}

              {/* Step Number Circle */}
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4 z-10 relative">
                {index + 1}
              </div>

              {/* Icon */}
              <Icon size={36} className="text-blue-600 mb-4" />

              {/* Title */}
              <h4 className="font-semibold text-xl mb-2">{step.title}</h4>

              {/* Description */}
              <p className="text-gray-600">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
