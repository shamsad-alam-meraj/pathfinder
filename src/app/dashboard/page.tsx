"use client";

import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoalProgressChart from "@/components/Dashboard/GoalProgressChart";

export default function Dashboard() {
  const trip = {
    id: 1,
    name: "Japan Adventure",
    date: "Oct 1–10, 2025",
    image:
      "https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HaOdlGfDvI9kDzm7zVYz9eQKT1Lnt1vaGHK3J16VF900T9SWcikvCskB_a1SJ5o2BPi-f7V0su-AUzKAEjLvKNX4bnqG-V18JYETG73PDiFhdEVnOLt_gq0yJlGWbRvhRB1MyWz=s680-w680-h510-rw",
  };

  const chartData = [
    { name: "Completed", value: 3, fill: "#4ade80" },
    { name: "Pending", value: 2, fill: "#facc15" },
  ];

  return (
    <div className="px-5 md:px-10">
      {/* Hero / Header */}
      <motion.h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
        Plan your journeys, track your goals, explore smarter
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-3xl lg:text-4xl font-bold pt-6 pb-5"
      >
        Welcome back, John
      </motion.h3>

      {/* Content Sections */}
      <div className="flex flex-col lg:flex-row gap-10 w-full">
        {/* Left Column */}
        <div className="flex-1">
          {/* Start New Trip Button + Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full text-lg md:text-xl text-blue-800 bg-blue-200 hover:bg-blue-100 font-semibold py-6 md:py-10 rounded-lg">
                Choose Destination
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>New Trip</DialogTitle>
                <DialogDescription>
                  This is a dummy dialog for starting a new trip.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 flex justify-end">
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>

          {/* Upcoming Trips */}
          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Upcoming Trips
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-4 rounded-lg border p-4 shadow-sm">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold pb-2">
                  {trip.name}
                </h1>
                <h6 className="font-semibold text-lg md:text-xl">{trip.date}</h6>
              </div>
              <div className="flex-1">
                <Image
                  className="rounded-lg mx-auto md:mx-0"
                  src={trip.image}
                  alt="japan"
                  width={250}
                  height={200}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <section className="flex-1">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Goal Progress
          </h2>
          <GoalProgressChart data={chartData} />
        </section>
      </div>
    </div>
  );
}
