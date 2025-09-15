"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center py-20 px-6 ">
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-700 mb-6">
        Plan Smarter. Travel Better.
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-blue-950 max-w-2xl mb-8">
        PathFinder helps you organize trips, track goals, and explore new
        destinations — all in one place.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mb-16 flex-wrap justify-center">
        <Button
          size="lg"
          className="px-8 bg-blue-600 hover:bg-blue-800 font-bold"
        >
          Get Started
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          Learn More
        </Button>
      </div>
    </section>
  );
}
