"use client";

import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  // 🔐 Firebase Signup Logic
  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    const { name, email, password, confirmPassword, photo } = data;

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    try {
      // Create user
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update name & photo
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photo || "",
      });

      alert("Account created successfully 🎉");
      router.push("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 px-4 py-16">
      <div className="w-full max-w-6xl flex bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-800/30 overflow-hidden">
        {/* Left side image */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            fill
            src="/s1.jpg"
            alt="Kacha Bazar"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Kacha Bazar
              </h1>
              <p className="text-emerald-100">
                Fresh from the local market to your table
              </p>
            </div>
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-emerald-700">
            Create an account
          </h2>

          <p className="text-center text-gray-600 text-sm mt-2 mb-8">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-emerald-600 font-medium cursor-pointer hover:underline"
            >
              Log in
            </span>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg"
              {...register("name", { required: true })}
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg"
              {...register("email", { required: true })}
            />

            {/* Photo */}
            <input
              type="text"
              placeholder="Photo URL (optional)"
              className="w-full px-4 py-3 border rounded-lg"
              {...register("photo")}
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg"
              {...register("password", { required: true })}
            />

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border rounded-lg"
              {...register("confirmPassword", { required: true })}
            />

            {/* Terms */}
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register("agreeTerms", { required: true })}
              />
              <span className="ml-2 text-sm">I agree to terms</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;