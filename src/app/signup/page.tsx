"use client";

import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";

type RegisterFormData = {
  name: string;
  email: string;
  photo?: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
};

const Signup = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  // 🔐 Email/Password Signup
  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    const { name, email, password, confirmPassword, photo } = data;

    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }

    try {
      setError("");
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(result.user, {
        displayName: name,
        photoURL: photo || "",
      });

      router.push("/profile");
    } catch (err: any) {
      setError(err.message);
    }
  };

  // 🔐 Google Sign In (FIXED)
  const handleGoogleLogin = async () => {
    try {
      setError("");
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/profile");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="w-full max-w-5xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex">

        {/* LEFT IMAGE */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src="/s1.jpg"
            alt="Kacha Bazar"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-end p-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Kacha Bazar</h2>
              <p className="text-sm text-gray-200">
                Fresh from the local market to your table
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-8 text-gray-900 dark:text-gray-100">
          <h2 className="text-2xl text-center font-bold text-emerald-700 dark:text-emerald-400">
            Create an account
          </h2>

          <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-1 mb-6">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-emerald-600 dark:text-emerald-400 font-medium cursor-pointer hover:underline"
            >
              Log in
            </span>
          </p>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <input
              className="w-full px-4 py-2 border rounded-lg bg-transparent border-gray-300 dark:border-gray-700"
              placeholder="Full name"
              {...register("name", { required: true })}
            />

            {/* Email */}
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg bg-transparent border-gray-300 dark:border-gray-700"
              placeholder="Email"
              {...register("email", { required: true })}
            />

            {/* Photo URL */}
            <input
              className="w-full px-4 py-2 border rounded-lg bg-transparent border-gray-300 dark:border-gray-700"
              placeholder="Profile photo URL (optional)"
              {...register("photo")}
            />

            {/* Password */}
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg bg-transparent border-gray-300 dark:border-gray-700"
              placeholder="Password"
              {...register("password", { required: true })}
            />

            {/* Confirm Password */}
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg bg-transparent border-gray-300 dark:border-gray-700"
              placeholder="Confirm password"
              {...register("confirmPassword", { required: true })}
            />

            {/* Terms */}
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" {...register("agreeTerms", { required: true })} />
              I agree to the{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                Terms & Conditions
              </span>
            </label>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg"
            >
              Create account
            </button>
          </form>

          {/* Social */}
          <div className="mt-6 text-center text-sm text-gray-400">
            Or register with
          </div>

          <button
            onClick={handleGoogleLogin}
            className="mt-4 w-full border border-gray-300 dark:border-gray-700 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Image
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              width={18}
              height={18}
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;