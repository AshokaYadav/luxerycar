"use client";
import Image from "next/image";

export default function FeatureImagesSet9() {
  const images = [
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f46.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f47.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f22.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f48.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f.png",
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((src, index) => (
            <div key={index} className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]">
              <Image
                src={src}
                alt={`feature-${index}`}
                width={300}
                height={400}
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
