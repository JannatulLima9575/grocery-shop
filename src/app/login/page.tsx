"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

type LoginFormData = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  // 🔐 Email/Password Login
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert("Login successful 🎉");
      router.push("/dashboard"); // চাইলে change করো
    } catch (error: any) {
      alert(error.message);
    }
  };

  // 🔐 Google Login
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Google login successful 🎉");
      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 px-4 py-16">
      <div className="w-full max-w-6xl flex bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-800/30 overflow-hidden">
        {/* Left Image Section */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            fill
            src="/s1.jpg"
            alt="Local Market"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Local Market Tracker
              </h1>
              <p className="text-emerald-100">
                Track daily prices with confidence
              </p>
            </div>
          </div>
        </div>

        {/* Right Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-emerald-700 dark:text-emerald-400">
            Welcome Back
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-2 mb-8">
            Don’t have an account?{" "}
            <span
              onClick={() => router.push("/register")}
              className="text-emerald-600 dark:text-emerald-400 font-medium cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">Email is required</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  Password is required
                </p>
              )}
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 dark:border-gray-600"
                  {...register("rememberMe")}
                />
                Remember me
              </label>

              <span className="text-emerald-600 dark:text-emerald-400 cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-emerald-500 dark:bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-700 transition"
            >
              Log in
            </button>
          </form>

          {/* Divider */}
          <div className="my-8">
            <div className="h-px bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Image
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                width={20}
                height={20}
              />
              <span className="text-sm">Google</span>
            </button>

            <button
              type="button"
              className="py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 opacity-50 cursor-not-allowed"
            >
              <Image
                src="https://www.svgrepo.com/show/475654/apple-color.svg"
                alt="Apple"
                width={20}
                height={20}
              />
              <span className="text-sm">Apple</span>
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-400 text-sm mt-10 border-t pt-6">
            Track prices. Make smart decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;