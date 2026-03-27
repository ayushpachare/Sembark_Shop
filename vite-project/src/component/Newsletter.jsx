import React from "react";
import { TiHeartFullOutline } from "react-icons/ti";


const Newsletter = () => {
  return (
    <div className="px-[8%] py-16 bg-gradient-to-br from-sky-100 to-sky-200 text-center">

      <h2 className="flex justify-center text-3xl md:text-4xl font-bold text-slate-800 mb-4">
        Stay in the Loop<TiHeartFullOutline className="text-red-600 mt-1" />
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Subscribe for exclusive deals, new arrivals & style tips. Join 50,000+ happy shoppers!
      </p>

      {/* Form */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
        
        <input
          type="email"
          placeholder="Enter your email address..."
          className="w-full px-5 py-3 rounded-full border border-sky-400 outline-none focus:ring-2 focus:ring-sky-300"
        />

        <button className="bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;