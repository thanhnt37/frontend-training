"use client";
import React from 'react';
export default function SigninLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div >
          {children}
        </div>
      </body>
    </html>
  );
}