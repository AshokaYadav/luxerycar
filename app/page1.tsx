"use client";
import Navbar from "@/component/Navbar";
import Image from "next/image";
import React from "react";

export default function Home() {
  const cars = [
  {
    name: "Mercedes",
    year: "2024",
    type: "Automatic",
    price: "5600",
    img: "/merce.jpeg",
  },
  {
    name: "BMW",
    year: "2023",
    type: "Automatic",
    price: "6200",
    img: "/merce.jpeg",
  },
  {
    name: "Audi",
    year: "2024",
    type: "Automatic",
    price: "5800",
     img: "/merce.jpeg",
  },
  {
    name: "Toyota",
    year: "2022",
    type: "Manual",
    price: "3500",
     img: "/merce.jpeg",
  },
  {
    name: "Hyundai",
    year: "2023",
    type: "Automatic",
    price: "3000",
     img: "/merce.jpeg",
  },
  {
    name: "Kia",
    year: "2023",
    type: "Automatic",
    price: "3200",
     img: "/merce.jpeg",
  },
];

  return (
    <main className="w-full">
      <Navbar/>
      {/* HERO SECTION */}
      <section className="w-full bg-[#5C2DE3] rounded-3xl px-6 md:px-16 py-12 mt-6 text-white">
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Experience the road <br /> like never before
            </h1>
            <p className="text-sm text-gray-200 mb-6 max-w-md">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida.
            </p>
            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg w-fit hover:bg-yellow-500 transition">
              View all cars
            </button>
          </div>

          {/* BOOK FORM */}
          <div className="bg-white text-black rounded-2xl p-8 shadow-lg">
            <h2 className="text-lg font-semibold text-center mb-6">
              Book your car
            </h2>

            <div className="flex flex-col gap-4">
              <select className="w-full border rounded-lg p-3 text-sm">
                <option>Car type</option>
              </select>

              <select className="w-full border rounded-lg p-3 text-sm">
                <option>Place of rental</option>
              </select>

              <select className="w-full border rounded-lg p-3 text-sm">
                <option>Place of return</option>
              </select>

              <input
                type="date"
                className="w-full border rounded-lg p-3 text-sm"
              />

              <input
                type="date"
                className="w-full border rounded-lg p-3 text-sm"
              />

              <button className="bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-500">
                Book now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 FEATURES */}
      <section className="grid md:grid-cols-3 gap-10 text-center py-16 px-6">
        <div>
          <div className="text-4xl mb-3">📍</div>
          <h3 className="font-semibold text-lg">Availability</h3>
          <p className="text-gray-500 text-sm mt-2">
            Diam tincidunt tincidunt erat at semper fermentum.
          </p>
        </div>

        <div>
          <div className="text-4xl mb-3">🚗</div>
          <h3 className="font-semibold text-lg">Comfort</h3>
          <p className="text-gray-500 text-sm mt-2">
            Gravida auctor fermentum morbi vulputate ac egestas.
          </p>
        </div>

        <div>
          <div className="text-4xl mb-3">💼</div>
          <h3 className="font-semibold text-lg">Savings</h3>
          <p className="text-gray-500 text-sm mt-2">
            Pretium convallis id diam sed commodo.
          </p>
        </div>
      </section>

      {/* ABOUT BLOCK */}
      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-16 py-10">
        <div className="bg-gray-200 rounded-xl h-72" />

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">About our service</h2>
          <ul className="text-gray-700 space-y-3">
            <li>✔ Professional drivers</li>
            <li>✔ Comfortable cars</li>
            <li>✔ GPS tracking included</li>
            <li>✔ 24/7 Support</li>
          </ul>
        </div>
      </section>

      {/* CARS LIST */}
     <section className="px-6 md:px-16 py-10">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold">Choose the car that suits you</h2>
    <button className="text-sm text-gray-500 underline">View all</button>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {cars.map((car, i) => (
      <div
        key={i}
        className="border p-4 rounded-xl shadow-sm hover:shadow-md transition"
      >
        <div className="h-32 rounded-md mb-4 relative">
          <Image
            src={car.img}
            alt={car.name}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="font-semibold">{car.name}</h3>
        <p className="text-sm text-gray-500 mb-3">
          {car.year} • {car.type}
        </p>

        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">₹{car.price}</span>
          <button className="bg-[#5C2DE3] text-white text-sm px-4 py-2 rounded-lg">
            Rent now
          </button>
        </div>
      </div>
    ))}
  </div>
</section>;

      {/* FACTS SECTION */}
      <section className="bg-[#5C2DE3] text-white rounded-3xl px-6 md:px-16 py-16 mt-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Facts in Numbers
        </h2>

        <div className="grid md:grid-cols-3 text-center gap-10">
          <div>
            <h3 className="text-4xl font-bold">250+</h3>
            <p className="text-gray-200 mt-1">Cars Available</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">1200+</h3>
            <p className="text-gray-200 mt-1">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="text-gray-200 mt-1">Cities Served</p>
          </div>
        </div>
      </section>

      {/* DOWNLOAD APP */}
      <section className="px-6 md:px-16 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Download mobile app</h2>
        <div className="flex justify-center gap-6">
          <img src="/playstore.png" className="h-12" />
          <img src="/appstore.png" className="h-12" />
        </div>

        <div className="flex justify-center mt-10">
          <div className="w-48 h-80 border rounded-3xl" />
          <div className="w-48 h-80 border rounded-3xl -ml-16 bg-white" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 px-6 md:px-16 mt-12">
        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h3 className="font-semibold mb-3">Car Rental</h3>
            <p className="text-sm text-gray-400">
              Fast, reliable & premium car rental service.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>About us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Help center</li>
              <li>Terms & Conditions</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Follow us</h3>
            <p className="text-gray-400">Instagram</p>
            <p className="text-gray-400">Facebook</p>
            <p className="text-gray-400">Twitter</p>
          </div>

        </div>
      </footer>
    </main>
  );
}

















































































































// import React from 'react';
// import { Mail, Shield, TrendingUp, Check, Star, Download, Apple, User, CreditCard, Globe } from 'lucide-react';

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center space-x-8">
//               <div className="flex items-center space-x-2">
//                 <Mail className="w-6 h-6 text-indigo-600" />
//                 <span className="text-xl font-bold text-gray-900">Mail</span>
//               </div>
//               <nav className="hidden md:flex space-x-6">
//                 <a href="#" className="text-gray-600 hover:text-gray-900">Product</a>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
//               </nav>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="text-gray-600 hover:text-gray-900">Sign In</button>
//               <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h1 className="text-5xl font-bold mb-6">
//                 Experience the real life never before
//               </h1>
//               <p className="text-xl mb-8 text-indigo-100">
//                 Connect with people around the world and share your experiences with our innovative platform
//               </p>
//               <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300">
//                 Get Started
//               </button>
//             </div>
//             <div className="bg-white rounded-lg p-6 shadow-2xl">
//               <h3 className="text-gray-900 font-semibold mb-4">Create your account</h3>
//               <form className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900"
//                 />
//                 <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
//                   Sign Up
//                 </button>
//               </form>
//               <p className="text-gray-600 text-sm mt-4 text-center">
//                 Already have an account? <a href="#" className="text-indigo-600 font-semibold">Sign In</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <User className="w-8 h-8 text-indigo-600" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
//               <p className="text-gray-600">
//                 Simple and intuitive interface designed for everyone
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Shield className="w-8 h-8 text-indigo-600" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Secure & Safe</h3>
//               <p className="text-gray-600">
//                 Your data is protected with enterprise-grade security
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <TrendingUp className="w-8 h-8 text-indigo-600" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
//               <p className="text-gray-600">
//                 Lightning-fast experience with optimized performance
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl h-80"></div>
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Why choose our platform?</h2>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="bg-green-100 rounded-full p-1 mt-1">
//                     <Check className="w-4 h-4 text-green-600" />
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-gray-700">Connect with millions of users worldwide instantly</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-green-100 rounded-full p-1 mt-1">
//                     <Check className="w-4 h-4 text-green-600" />
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-gray-700">Advanced features for better productivity and communication</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-green-100 rounded-full p-1 mt-1">
//                     <Check className="w-4 h-4 text-green-600" />
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-gray-700">24/7 customer support to help you anytime</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Choose the car that suits you</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { name: 'Starter', price: '29', period: 'month' },
//               { name: 'Professional', price: '59', period: 'month' },
//               { name: 'Enterprise', price: '99', period: 'month' }
//             ].map((plan, idx) => (
//               <div key={idx} className="bg-white rounded-xl p-8 shadow-lg">
//                 <div className="bg-gray-100 rounded-lg p-6 mb-6 h-32"></div>
//                 <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
//                 <div className="mb-6">
//                   <span className="text-4xl font-bold">${plan.price}</span>
//                   <span className="text-gray-600">/{plan.period}</span>
//                 </div>
//                 <ul className="space-y-3 mb-6">
//                   <li className="flex items-center">
//                     <Check className="w-5 h-5 text-green-600 mr-2" />
//                     <span>All basic features</span>
//                   </li>
//                   <li className="flex items-center">
//                     <Check className="w-5 h-5 text-green-600 mr-2" />
//                     <span>24/7 support</span>
//                   </li>
//                   <li className="flex items-center">
//                     <Check className="w-5 h-5 text-green-600 mr-2" />
//                     <span>Premium updates</span>
//                   </li>
//                 </ul>
//                 <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
//                   Get Started
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-indigo-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Facts in Numbers</h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { number: '50M+', label: 'Active Users', icon: User },
//               { number: '99.9%', label: 'Uptime', icon: Shield },
//               { number: '150+', label: 'Countries', icon: Globe },
//               { number: '5/5', label: 'Rating', icon: Star }
//             ].map((stat, idx) => (
//               <div key={idx} className="bg-white rounded-lg p-6 text-center">
//                 <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
//                 <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mobile App Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Download mobile app</h2>
//               <p className="text-gray-600 mb-6">
//                 Get the best experience on mobile with our intuitive app available on iOS and Android
//               </p>
//               <div className="flex space-x-4">
//                 <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2">
//                   <Apple className="w-6 h-6" />
//                   <div className="text-left">
//                     <div className="text-xs">Download on the</div>
//                     <div className="font-semibold">App Store</div>
//                   </div>
//                 </button>
//                 <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2">
//                   <Download className="w-6 h-6" />
//                   <div className="text-left">
//                     <div className="text-xs">GET IT ON</div>
//                     <div className="font-semibold">Google Play</div>
//                   </div>
//                 </button>
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <div className="bg-gray-900 rounded-3xl w-64 h-96 relative shadow-2xl">
//                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-indigo-600 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Enjoy every mile with adorable companions
//           </h2>
//           <p className="text-xl mb-8 text-indigo-100">
//             Join thousands of satisfied users and start your journey today
//           </p>
//           <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300">
//             Get Started Now
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-50 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <Mail className="w-6 h-6 text-indigo-600" />
//                 <span className="text-xl font-bold">Mail</span>
//               </div>
//               <p className="text-gray-600">
//                 Making communication better for everyone
//               </p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Product</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-gray-900">Security</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Resources</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-gray-900">Community</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
//             <p>&copy; 2024 Mail. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }