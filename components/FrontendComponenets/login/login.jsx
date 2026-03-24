"use client";

import Link from "next/link";
import { useState } from "react";

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
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 lg:w-2/3 w-full mx-auto px-4 sm:px-0 items-end">

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

          {/* Login Button */}
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 rounded hover:bg-indigo-600 text-lg transition-colors duration-200">
            Login
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