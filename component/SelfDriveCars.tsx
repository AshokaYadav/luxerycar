"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SelfDriveCars() {
  const cars = [
    {
      name: "Scorpio N",
      img: "https://luxurycardrive.in/wp-content/uploads/elementor/thumbs/Scorpion-N-1-r9uvk0osshxv50l04sjo0s1o0h3ksashmqeq1iee8w.png",
      desc: "A bold and powerful SUV by Mahindra, the Scorpio N offers a rugged design, premium interiors, and advanced technology. Perfect for off-road adventures and city drives alike.",
      link: "https://luxurycardrive.in/contact-us/",
      badge: "Adventure Ready"
    },
    {
      name: "Scorpio Classic",
      img: "https://luxurycardrive.in/wp-content/uploads/elementor/thumbs/Scorpion-Classic-r9uvk0osshxv50l04sjo0s1o0h3ksashmqeq1iee8w.png",
      desc: "Retaining its legendary tough build, the Scorpio Classic delivers a reliable and muscular performance with improved comfort and efficiency, making it a great choice for SUV lovers.",
      link: "https://luxurycardrive.in/contact-us/",
      badge: "Classic Power"
    },
    {
      name: "Fronx",
      img: "https://luxurycardrive.in/wp-content/uploads/elementor/thumbs/Fronx-r9uvk0osshxv50l04sjo0s1o0h3ksashmqeq1iee8w.png",
      desc: "A stylish and compact SUV from Maruti Suzuki, the Fronx combines a futuristic design with powerful engine options and modern features for an exciting urban driving experience.",
      link: "https://luxurycardrive.in/contact-us/",
      badge: "Urban Style"
    },
    {
      name: "Swift Dzire",
      img: "https://luxurycardrive.in/wp-content/uploads/elementor/thumbs/DZIRE-r9uvk0osshxv50l04sjo0s1o0h3ksashmqeq1iee8w.png",
      desc: "A compact and efficient sedan perfect for comfortable city rides with great mileage and smooth driving experience.",
      link: "https://luxurycardrive.in/contact-us/",
      badge: "Fuel Efficient"
    },
    {
      name: "Mahindra Thar",
      img: "https://luxurycardrive.in/wp-content/uploads/elementor/thumbs/Thar-r9uvk0osshxv50l04sjo0s1o0h3ksashmqeq1iee8w.png",
      desc: "The ultimate off-road beast, the Mahindra Thar is built for adventure with its rugged design and 4×4 capability.",
      link: "https://luxurycardrive.in/contact-us/",
      badge: "Off-Road Beast"
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold px-4 py-2 rounded-full">
              SELF DRIVE FREEDOM
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Our Self Drive Cars
          </h2>
          <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Fox Rental Car offers self-drive car rentals across India, giving you the freedom to travel at your own pace.
            Enjoy flexible rental plans, affordable pricing, and 24/7 support for a smooth and hassle-free journey.
          </p>
        </motion.div>

        {/* Cars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cars.map((car, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {car.badge}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full flex items-center justify-center p-6"
                >
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {car.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {car.desc}
                </p>

                {/* Features Icons */}
                <div className="flex gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span>4-5 Seats</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Pan India</span>
                  </div>
                </div>

                {/* Book Now Button */}
                <Link href={car.link} target="_blank">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Book Now</span>
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.button>
                </Link>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}