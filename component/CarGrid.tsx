"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type PriceList = { label: string; value: string };

type Car = {
  id: string | number;
  name: string;
  img: string;
  alt?: string;
  prices: PriceList[];
  bookLink?: string;
};

interface CarGridProps {
  cars: Car[];
}

export default function CarGrid({ cars }: CarGridProps) {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <>
      <section className="px-4 md:px-8 lg:px-16 py-12 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {cars.map((car, index) => (
            <motion.article
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Premium Badge */}
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                LUXURY
              </div>

              {/* Image Container */}
              <div className="relative w-full h-56 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src={car.img}
                    alt={car.alt ?? car.name}
                    fill
                    className="object-contain p-4 group-hover:drop-shadow-2xl transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </motion.div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {car.name}
                </h3>

                {/* Pricing Preview - Show first 2 items */}
                <div className="space-y-2 mb-4">
                  {car.prices.slice(0, 2).map((p, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 font-medium">{p.label}</span>
                      <span className="text-blue-600 font-bold">₹{p.value}</span>
                    </div>
                  ))}
                  
                  {car.prices.length > 2 && (
                    <button
                      onClick={() => setSelectedCar(car)}
                      className="text-blue-500 text-sm font-semibold hover:text-blue-700 transition-colors flex items-center gap-1"
                    >
                      <span>View all rates</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Book Now Button */}
                <Link
                  href={car.bookLink ?? "/contact-us"}
                  className="block w-full mt-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Book Now</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Modal for Full Pricing */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCar(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                <button
                  onClick={() => setSelectedCar(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-32 h-20">
                    <Image
                      src={selectedCar.img}
                      alt={selectedCar.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedCar.name}</h2>
                    <p className="text-gray-300 text-sm">Complete Pricing Details</p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(85vh-140px)]">
                <div className="space-y-3">
                  {selectedCar.prices.map((p, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-gray-700 font-medium">{p.label}</span>
                      <span className="text-blue-600 font-bold text-lg">₹{p.value}</span>
                    </motion.div>
                  ))}
                </div>

                <Link href={selectedCar.bookLink ?? "/contact-us"}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book {selectedCar.name}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}