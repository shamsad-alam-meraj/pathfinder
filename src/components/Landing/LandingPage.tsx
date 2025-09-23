"use client";

import TestimonialCarousel from "./TestimonialCarousel";
import HowItWorksSection from "./HowItWorksSection";
import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import NewsletterCTA from "./NewsletterCTA";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center text-center py-20 px-6">
      {/* Hero Section */}
      <HeroSection />

      {/* Feature Cards */}
      <FeaturesSection />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/*  How It Works */}
      <HowItWorksSection />

      {/* Newsletter / CTA */}
      <NewsletterCTA />
    </div>
  );
}
