"use client";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardClient = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Welcome to Dashboard 🎉</h1>
      <p className="mt-2 text-gray-600">
        You are successfully logged in.
      </p>
    </div>
  );
};

export default DashboardClient;