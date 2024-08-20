"use client";

import SigninLayout from "./signin-layout";
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
    <SigninLayout>
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
                <h2 className="text-2xl font-bold text-center mb-5">Đăng Nhập</h2>
                
                <form>
                    <div className="mb-6">
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <div className="relative">
                            <input 
                                type="password" 
                                placeholder="Password" 
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            
                        </div>
                    </div>
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="remember-me" className="mr-2" />
                        <label htmlFor="remember-me" className="text-gray-700">Keep me signed in</label>
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                        Sign In
                    </button>
                    <p className="text-center text-gray-600 mt-4">
                        <a href="/forgotpassword" className="text-blue-500 hover:underline">Forgot Your Password?</a>
                    </p>
                </form>
            </div>
        </div>
    </SigninLayout>
  );
}
