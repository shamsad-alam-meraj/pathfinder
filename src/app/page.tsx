"use client";

import LandingPage from "@/components/Landing/LandingPage";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <LandingPage />
    </Suspense>
  );
}
