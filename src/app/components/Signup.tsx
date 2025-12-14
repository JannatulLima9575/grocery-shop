'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

type RegisterFormData = {
  name: string;
  email: string;
  photo?: string;
  password: string;
  confirmPassword: string;
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-emerald-600">
          Create an Account
        </h2>
        <p className="text-center text-gray-500 text-sm mt-2">
          Join our daily local market price tracker
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              {...register('name', { required: true })}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">Email is required</p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Paste your photo URL"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              {...register('photo')}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">Password is required</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              {...register('confirmPassword', { required: true })}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500 mt-1">Confirm your password</p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Google Button (Design only) */}
        <button
          type="button"
          className="w-full py-2 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <span className="text-emerald-600 font-medium cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
