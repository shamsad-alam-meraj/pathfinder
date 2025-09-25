"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import LoginPageLoading from "./loading";

export default function LoginPage() {
  const [tab, setTab] = useState("login");
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();
  const { data: session, status } = useSession();

  // 🚀 Auto-redirect if session exists
  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      setUser({
        name: session.user.name || "User",
        email: session.user.email || "",
        image: session.user.image || "",
      });
      router.push("/dashboard");
    }
  }, [status, session, setUser, router]);

  const handleGoogleLogin = async () => {
    const res = await signIn("google", { redirect: false });
    if (res?.ok) {
      // For demo, store fake user data if needed
      setUser({
        name: "Md. Shamsad Alam Meraj",
        email: "shamsad.alam.meraj@gmail.com",
        image: "",
      });
      router.push("/dashboard");
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    // Replace with real API auth
    if (email && password) {
      setUser({ name: "Md. Shamsad Alam Meraj", email });
      console.log("Logged in:", email);
      router.push("/dashboard");
    }
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    // Replace with real signup API
    if (name && email && password) {
      setUser({ name, email });
      console.log("Signed up:", name, email);
      router.push("/dashboard");
    }
  };

  return (
    <Suspense fallback={<LoginPageLoading />}>
      <div className="h-[calc(100%-103px)] flex items-center justify-center  px-4">
        <Card className="w-full max-w-md shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-blue-700 font-mw">
              {tab === "login" ? "Welcome Back" : "Create an Account"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Tabs */}
            <Tabs value={tab} onValueChange={setTab} className="w-full">
              <TabsList className="grid grid-cols-2 w-full mb-6">
                <TabsTrigger value="login">Log In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              {/* Login Form */}
              <TabsContent value="login">
                <motion.form
                  name="loginForm"
                  onSubmit={handleLogin}
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold"
                  >
                    Log In
                  </Button>
                </motion.form>
              </TabsContent>

              {/* Sign Up Form */}
              <TabsContent value="signup">
                <motion.form
                  name="signupForm"
                  onSubmit={handleSignup}
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold"
                  >
                    Sign Up
                  </Button>
                </motion.form>
              </TabsContent>
            </Tabs>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700" />
              <span className="px-2 text-gray-500 text-sm">OR</span>
              <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700" />
            </div>

            {/* Google OAuth */}
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
              onClick={handleGoogleLogin}
            >
              <FcGoogle size={20} />
              Continue with Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </Suspense>
  );
}
