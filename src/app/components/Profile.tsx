"use client";

import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Profile = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  // 🔐 Protect profile page
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <p className="text-center mt-10">Loading profile...</p>;
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-4">
      <div className="max-w-md mx-auto mt-16 bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 text-center">
      
      {/* Profile Image */}
      <div className="flex justify-center">
        <div className="w-28 h-28 rounded-full border-4 border-green-500 overflow-hidden">
          <Image
            src={user.photoURL || "/default-avatar.png"}
            alt="Profile Image"
            width={112}
            height={112}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h1 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
        {user.displayName || "No Name Set"}
      </h1>

      {/* Email */}
      <p className="text-gray-600 dark:text-gray-400 mt-1">
        {user.email}
      </p>

      {/* Extra Info */}
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        Account created via{" "}
        <span className="font-semibold text-green-600">
          {user.providerData[0]?.providerId === "password"
            ? "Email & Password"
            : "Google"}
        </span>
      </div>
    </div>
    </div>
  );
};

export default Profile;
