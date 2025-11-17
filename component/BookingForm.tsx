"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupAddress: '',
    dropAddress: '',
    date: '',
    time: '',
    passengers: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    const allFieldsFilled = Object.values(formData).every(value => value !== '');
    
    if (!allFieldsFilled) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Booking request submitted successfully!');
      
      setFormData({
        name: '',
        phone: '',
        pickupAddress: '',
        dropAddress: '',
        date: '',
        time: '',
        passengers: ''
      });
    } catch (error) {
      alert('Error submitting booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Header */}
      <div className="text-center mb-6 relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-block mb-3"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-6">
            <svg className="w-7 h-7 text-white -rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
        </motion.div>
        
        <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Book Your Ride
        </h2>
        <p className="text-gray-600 text-sm">Fast, reliable, and luxurious travel experience</p>
      </div>

      {/* FORM */}
      <div className="space-y-4 relative z-10">

        {/* Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl"
          />
        </div>

        {/* Pickup + Drop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            name="pickupAddress"
            value={formData.pickupAddress}
            onChange={handleChange}
            placeholder="Pick-up Address"
            className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl"
          />

          <input
            type="text"
            name="dropAddress"
            value={formData.dropAddress}
            onChange={handleChange}
            placeholder="Drop-off Address"
            className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl"
          />
        </div>

        {/* Date + Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl"
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl"
          />
        </div>

        {/* Passengers */}
        <select
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
          className="w-full pl-4 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50"
        >
          <option value="">Select Passengers</option>
          {[1,2,3,4,5,6,7,8,9,10].map(num => (
            <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
          ))}
          <option value="10+">10+ Passengers</option>
        </select>

        {/* Submit */}
        <motion.button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-xl font-bold text-white mt-4 shadow-lg
            ${isSubmitting ? 'bg-gray-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}
          `}
        >
          {isSubmitting ? "Processing..." : "Confirm Booking"}
        </motion.button>

      </div>

      {/* Badges */}
      <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-center gap-6 text-xs text-gray-500">
        <span>Secure Booking</span>
        <span>24/7 Support</span>
      </div>
    </motion.div>
  );
}

export default BookingForm
