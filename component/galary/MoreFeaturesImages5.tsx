"use client";

import Image from "next/image";

export default function MoreFeaturesImages5() {
  const images = [
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f6.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f7.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f8.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f9.png",
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="w-[160px] sm:w-[200px] md:w-[260px] lg:w-[300px]"
            >
              <Image
                src={src}
                width={600}
                height={300}
                alt={`feature-${idx}`}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
