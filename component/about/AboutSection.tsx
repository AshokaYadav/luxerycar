"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full h-[20vh] md:h-[30vh] flex items-center justify-center overflow-hidden">
   {/* Background Image */}
      <Image
        src="https://luxurycardrive.in/wp-content/uploads/2024/12/Section.jpg"
        alt="About Us Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay (for better text visibility) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold">About Us</h2>
      </div>

    </section>
  );
}
