"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { useSession } from "next-auth/react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user } = useAuthStore();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;
    if (!user && !session?.user) {
      router.replace("/login");
    }
  }, [user, session, status, router]);

  if (!user && !session?.user) {
    return null;
  }

  return <>{children}</>;
}
