"use client";
import { Inter } from "next/font/google";
import Header from "../Component/Header/header";
import Sidebar from "../Component/Sidebar/sidebar";
import React, { useState, useEffect } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebar, setIsSidebar] = useState(true);

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setIsSidebar(false);
      } else {
        setIsSidebar(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header toggleSidebar={toggleSidebar} />
        <div className="appContainer">
          {isSidebar && <Sidebar />}
          {children}
        </div>
      </body>
    </html>
  );
}
