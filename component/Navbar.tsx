"use client";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="w-full bg-white py-4 px-6 md:px-16 flex items-center justify-between shadow-sm">
      
      {/* LEFT LOGO */}
      <div className="flex items-center gap-2">
        <span className="text-3xl">🚗</span>
        <h1 className="font-bold text-lg">Car Rental</h1>
      </div>

      {/* CENTER MENU */}
      <nav className="hidden md:flex gap-10 font-medium text-black">
        <Link href="/">Home</Link>
        <Link href="/vehicles">Vehicles</Link>
        <Link href="/details">Details</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>

      {/* RIGHT HELP */}
      <div className="flex items-center gap-2">
        <div className="bg-[#5C2DE3] text-white p-2 rounded-full text-xl">
          <FiPhoneCall />
        </div>
        <div className="text-sm">
          <p className="text-gray-500">Need help?</p>
          <p className="font-semibold">+996 247-1680</p>
        </div>
      </div>
    </header>
  );
}
