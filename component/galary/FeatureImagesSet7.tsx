"use client";
import Image from "next/image";

export default function FeatureImagesSet7() {
  const images = [
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f19.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f20.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f21.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f23.png",
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-[160px] sm:w-[200px] md:w-[260px] lg:w-[300px]"
            >
              <Image
                src={src}
                alt={`feature-${index}`}
                width={600}
                height={300}
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
