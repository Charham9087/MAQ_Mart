"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";



export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="text-gray-400 bg-gray-900 body-font min-h-screen flex items-center">
      <div className="container px-5 py-16 mx-auto">

        {/* Heading */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Join MAQ MART
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Stay updated with the latest products, offers, and exclusive deals from MAQ MART. Sign up to get the best shopping experience.
          </p>
        </div>

        {/* Form */}
        {/* Form */}
        <div className="flex flex-col lg:w-2/3 w-full mx-auto px-4 sm:px-0">

          {/* Row 1: Email + Password */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">

            {/* Email Field */}
            <div className="relative flex-grow w-full">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Password Field */}
            <div className="relative flex-grow w-full">
              <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.96 9.96 0 012.175-5.825m9.7 0A10.05 10.05 0 0112 5c5.523 0 10 4.477 10 10a9.96 9.96 0 01-2.175 5.825M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.96 9.96 0 012.175-5.825m9.7 0A10.05 10.05 0 0112 5c5.523 0 10 4.477 10 10a9.96 9.96 0 01-2.175 5.825M3 3l18 18" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Row 2: Login Button */}
          <button className="mt-6 text-white bg-indigo-500 border-0 py-2 px-8 rounded hover:bg-indigo-600 text-lg transition-colors duration-200">
            Login
          </button>

          {/* Row 3: OR Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="mx-3 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>

          {/* Row 4: Google Button */}
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-200 transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.85-6.85C35.65 2.3 30.2 0 24 0 14.82 0 6.78 5.48 2.69 13.44l7.98 6.2C12.7 13.3 17.9 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.5 24.5c0-1.7-.15-3.34-.44-4.91H24v9.3h12.7c-.55 2.96-2.22 5.48-4.73 7.18l7.3 5.67C43.9 37.4 46.5 31.5 46.5 24.5z" />
              <path fill="#FBBC05" d="M10.67 28.64A14.5 14.5 0 019.5 24c0-1.6.27-3.14.75-4.56l-7.98-6.2A23.9 23.9 0 000 24c0 3.87.92 7.53 2.56 10.76l8.11-6.12z" />
              <path fill="#34A853" d="M24 48c6.2 0 11.4-2.05 15.2-5.6l-7.3-5.67c-2.03 1.36-4.64 2.17-7.9 2.17-6.1 0-11.3-3.8-13.33-9.14l-8.11 6.12C6.78 42.52 14.82 48 24 48z" />
            </svg>

            Continue with Google
          </button>

        </div>

        {/* Signup link */}
        <p className="text-center mt-7">
          Don't have an account?{" "}
          <Link href="/routes/login/signup" className="text-indigo-500 hover:text-indigo-600">
            Sign up
          </Link>
        </p>

      </div>
    </section>
  );
}