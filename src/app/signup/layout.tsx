"use client";
import React from 'react';
export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
          {children}
      </body>
    </html>
  );
}