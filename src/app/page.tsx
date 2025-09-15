"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Compass, Target, Briefcase } from "lucide-react";

const features = [
  {
    title: "Plan Trips",
    description: "Create and organize your travel itineraries with ease.",
    icon: Briefcase,
  },
  {
    title: "Track Goals",
    description: "Stay motivated by setting and tracking your travel goals.",
    icon: Target,
  },
  {
    title: "Explore Destinations",
    description: "Discover new places to visit based on your preferences.",
    icon: Compass,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center py-20 px-6">
      {/* Hero Section */}
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
        Plan Smarter. Travel Better.
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        PathFinder helps you organize trips, track goals, and explore new
        destinations — all in one place.
      </p>
      <div className="flex gap-4 mb-16">
        <Button size="lg" className="px-8">
          Get Started
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          Learn More
        </Button>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="shadow-md hover:shadow-lg transition rounded-2xl"
          >
            <CardContent className="flex flex-col items-center text-center p-8">
              <feature.icon size={36} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
