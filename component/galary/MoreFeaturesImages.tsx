"use client";

import Image from "next/image";

export default function MoreFeaturesImages() {
  const images = [
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f40.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f35.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f36.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f37.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f29.png",
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]"
            >
              <Image
                src={src}
                width={300}
                height={400}
                alt={`feature-${idx}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
