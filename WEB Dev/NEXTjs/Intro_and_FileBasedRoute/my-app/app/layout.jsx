import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import "./globals.css";
import Hello from "./components/hello.jsx";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nextjs Intro",
  description: "My first Next.js app",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      data-cursorstyle="true"
      data-effect-ective="true" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "black", color: "white" }}
        data-theme="dark"
      >
        <Hello />
        {children}


      </body>
    </html >
  );
}
