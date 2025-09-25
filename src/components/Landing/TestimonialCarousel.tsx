"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export default function TestimonialCarousel() {
  const { t } = useTranslation();

  const testimonials = [
    { name: t("testimonial1Name"), text: t("testimonial1Text") },
    { name: t("testimonial2Name"), text: t("testimonial2Text") },
    { name: t("testimonial3Name"), text: t("testimonial3Text") },
    { name: t("testimonial4Name"), text: t("testimonial4Text") },
    { name: t("testimonial5Name"), text: t("testimonial5Text") },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <section className="max-w-5xl w-full mb-20">
      <h2 className="text-4xl font-bold mb-8 text-blue-700 font-mw">
        {t("testimonialTitle")}
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
                <p className="mb-3">{testimonials[current].text}</p>
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
      </div>
    </section>
  );
}
