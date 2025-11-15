"use client";

import Image from "next/image";

export default function MoreFeaturesImages3() {
  const images = [
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f41.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f42.png",
    "https://luxurycardrive.in/wp-content/uploads/2024/12/f45.png",
    "https://luxurycardrive.in/wp-content/uploads/elementor/thumbs/f33-r9uvk0oqcsdkdlltn1hsbq6ybn4iqoc8gmq7rnyx88.png",
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]">
              <Image
                src={src}
                width={400}
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
