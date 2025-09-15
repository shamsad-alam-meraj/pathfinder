"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
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

export default function Dashboard() {
  const trip = {
    id: 1,
    name: "Japan Adventure",
    date: "Oct 1–10, 2025",
    image:
      "https://lh3.googleusercontent.com/gpms-cs-s/AB8u6HaOdlGfDvI9kDzm7zVYz9eQKT1Lnt1vaGHK3J16VF900T9SWcikvCskB_a1SJ5o2BPi-f7V0su-AUzKAEjLvKNX4bnqG-V18JYETG73PDiFhdEVnOLt_gq0yJlGWbRvhRB1MyWz=s680-w680-h510-rw",
  };

  const chartData = [
    { name: "Completed", value: 3 },
    { name: "Pending", value: 2 },
  ];
  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };

  return (
    <div>
      <div className="px-10">
        {" "}
        <motion.h1 className="text-8xl font-bold">
          Plan you journeys, track your goals, explore smarter
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold pt-8 pb-5"
        >
          Welcome back, John
        </motion.h3>
        {/* Welcome Header */}
        <div className="flex w-full gap-5">
          <div className="flex-1 pr-10">
            {/* Start New Trip Button + Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className=" text-blue-800 hover:bg-blue-100 bg-blue-200 font-semibold py-10 w-full text-2xl rounded-lg">
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
            <section className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">Upcoming Trips</h2>
              <div className="flex items-center rounded p-3">
                <div className="flex-2 flex-col">
                  <h1 className="text-4xl font-bold pb-3">{trip.name}</h1>
                  <h6 className="font-semibold text-xl">{trip.date}</h6>
                </div>
                <div className="flex-1">
                  <Image
                    className="rounded-lg"
                    src={trip.image}
                    alt="japan"
                    width={200}
                    height={200}
                  ></Image>
                </div>
              </div>
            </section>
          </div>
          {/* Goal Progress */}
          <section className="flex-1 pl-10">
            <h2 className="text-4xl font-semibold mb-4 pl-4">Goal Progress</h2>
            <div className=" p-4 rounded">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="10%"
                  outerRadius="80%"
                  barSize={10}
                  data={chartData}
                >
                  <RadialBar
                    minAngle={15}
                    label={{ position: "insideStart", fill: "#fff" }}
                    background
                    clockWise
                    dataKey="uv"
                  />
                  <Legend
                    iconSize={10}
                    layout="vertical"
                    verticalAlign="middle"
                    wrapperStyle={style}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
