"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Alice",
    text: "PathFinder made my trips organized and stress-free. Highly recommended!",
  },
  {
    name: "Bob",
    text: "I love tracking my travel goals and seeing my progress visually.",
  },
  {
    name: "Clara",
    text: "Discovering new destinations has never been this easy and fun.",
  },
  { name: "David", text: "Planning trips has never been easier. Great app!" },
  { name: "Eva", text: "I love PathFinder! Keeps me motivated." },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="max-w-5xl w-full mb-20">
      <h2 className="text-4xl font-bold mb-8 text-blue-700">
        What Our Users Say
      </h2>
      <div className="relative w-full max-w-4xl mx-auto mb-20">
        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            key={current}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 shadow-md hover:shadow-lg rounded-2xl">
              <CardContent className="flex flex-col items-center text-center">
                <Users size={36} className="text-blue-600 mb-4" />
                <p className="mb-3">
                  {testimonials[current].text}
                </p>
                <h4 className="font-semibold text-blue-900">
                  {testimonials[current].name}
                </h4>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4 px-4">
          <Button
            size="sm"
            variant="outline"
            className="px-3 flex items-center justify-center"
            onClick={prevSlide}
          >
            <ArrowLeft size={36} className="text-blue-600" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="px-3 flex items-center justify-center"
            onClick={nextSlide}
          >
            <ArrowRight size={36} className="text-blue-600" />
          </Button>
        </div>
      </div>{" "}
    </section>
  );
}
