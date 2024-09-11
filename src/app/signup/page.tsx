"use client";
import React, { useEffect, useState } from "react";
export default function Signin() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full mb-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Đăng Ký
          </h2>
          <form>
            <div className="mb-6">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password:</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Sign Up
            </button>
          </form>
        </div>
      </div>
  );
}
