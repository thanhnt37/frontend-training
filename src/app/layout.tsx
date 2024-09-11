"use client";
import { Inter } from "next/font/google";
import Header from "../components/Header/header";
import Sidebar from "../components/Sidebar/sidebar";
import React, { useState} from "react";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en" >
      <body className={inter.className}>
        <Header setIsOpen={setIsOpen} isOpen={isOpen} />
        <div className="flex">
          <Sidebar isOpen={isOpen} />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
