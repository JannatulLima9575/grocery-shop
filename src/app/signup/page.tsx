"use client";

import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

type RegisterFormData = {
  name: string;
  email: string;
  photo?: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  // design-only submit
  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 px-4 py-16">
      <div className="w-full max-w-6xl flex bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-800/30 overflow-hidden">
        {/* Left side - Kacha Bazar image */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            fill
            src="/s1.jpg"
            alt="Kacha Bazar - Fresh Vegetables"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Kacha Bazar
              </h1>
              <p className="text-emerald-100 dark:text-emerald-200">
                Fresh from the local market to your table
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Signup Form */}
        <div className="w-full md:w-1/2 p-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-emerald-700 dark:text-emerald-400">
            Create an account
          </h2>

          {/* Login link */}
          <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-2 mb-8">
            Already have an account?{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-medium cursor-pointer hover:underline">
              Log in
            </span>
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-2"></div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Full Name
                </label>
              </div>
              <input
                type="text"
                placeholder="Fletcher"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-xs text-red-500 dark:text-red-400 mt-1">
                  Name is required
                </p>
              )}
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Last name
              </p>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-2"></div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-xs text-red-500 dark:text-red-400 mt-1">
                  Email is required
                </p>
              )}
            </div>

            {/* Photo URL */}
            <div>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-2"></div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Profile Photo (Optional)
                </label>
              </div>
              <input
                type="text"
                placeholder="Paste your photo URL"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                {...register("photo")}
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-2"></div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Password
                </label>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-xs text-red-500 dark:text-red-400 mt-1">
                  Password is required
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-2"></div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-500 dark:text-red-400 mt-1">
                  Confirm your password
                </p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                id="agreeTerms"
                className="h-5 w-5 text-emerald-600 dark:text-emerald-400 focus:ring-emerald-500 dark:focus:ring-emerald-600 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
                {...register("agreeTerms", { required: true })}
              />
              <label
                htmlFor="agreeTerms"
                className="ml-3 block text-sm text-gray-700 dark:text-gray-300"
              >
                I agree to the{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  Terms & Conditions
                </span>
              </label>
            </div>
            {errors.agreeTerms && (
              <p className="text-xs text-red-500 dark:text-red-400 mt-1">
                You must agree to the terms
              </p>
            )}

            {/* Horizontal Divider */}
            <div className="my-6">
              <div className="h-px bg-gray-300 dark:bg-gray-700"></div>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full py-3 bg-emerald-500 dark:bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-700 transition"
            >
              Create account
            </button>
          </form>

          {/* Or register with */}
          <div className="mt-8">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              Or register with
            </p>

            <div className="grid grid-cols-2 gap-4">
              {/* Google Button */}
              <button
                type="button"
                className="py-3 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition bg-white dark:bg-gray-900"
              >
                <Image
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />

                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Google
                </span>
              </button>

              {/* Apple Button */}
              <button
                type="button"
                className="py-3 border relative border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition bg-white dark:bg-gray-900"
              >
                <Image
                  src="https://www.svgrepo.com/show/475654/apple-color.svg"
                  alt="Apple"
                  width={20}
                  height={20}
                />

                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Apple
                </span>
              </button>
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-center text-gray-400 dark:text-gray-500 text-sm mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
            Capturing Moments, Creating Memories
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
