import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Children } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bar">
          <Link href="/">Home</Link>
        </div>
        {children}
      </body>
    </html>
  );
} 