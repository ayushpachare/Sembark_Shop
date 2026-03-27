import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] grid md:grid-cols-2 items-center px-4 sm:px-[6%] md:px-[8%] py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#d6effa] via-[#c3e4f5] to-[#b0d8f0] overflow-hidden">

      {/* Background blobs (smaller for mobile) */}
      <div className="absolute w-[250px] sm:w-[600px] h-[250px] sm:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.5)_0%,transparent_70%)] top-[-100px] right-[-80px] animate-[float_6s_ease-in-out_infinite]" />
      
      <div className="absolute w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] rounded-full bg-[radial-gradient(circle,rgba(91,179,217,0.2)_0%,transparent_70%)] bottom-0 left-[10%] animate-[float_8s_ease-in-out_infinite_reverse]" />

      {/* LEFT CONTENT */}
      <div className="relative z-10 animate-[fadeUp_0.8s_ease_0.2s_both] text-center md:text-left">

        <div className="inline-flex items-center gap-2 bg-white/70 border border-sky-200 rounded-full px-3 py-1 text-[10px] sm:text-xs font-semibold text-sky-500 mb-4 sm:mb-6">
          ✦ New Summer Collection 2026
        </div>

        <h1 className="text-[1.9rem] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-bold leading-tight text-slate-800 mb-4 sm:mb-5">
          Discover <em className="text-sky-500 italic">Style</em> That Speaks to You
        </h1>

        <p className="text-sm sm:text-lg text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0 mb-6 sm:mb-9">
          Explore thousands of premium products curated just for you.
        </p>

        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center md:justify-start">
          <Link to="/product">
            <button className="bg-sky-500 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-md hover:-translate-y-1 hover:shadow-xl transition flex items-center gap-2">
              Shop Now →
            </button>
          </Link>

          <Link to="/cart">
            <button className="bg-white/70 border border-sky-200 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold text-slate-800 hover:bg-white hover:border-sky-500 hover:text-sky-500 transition">
              View Collections
            </button>
          </Link>
        </div>

        <div className="flex justify-center md:justify-start gap-5 sm:gap-8 mt-8 sm:mt-12 text-center md:text-left">
          <div>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-800">50K+</h3>
            <p className="text-[10px] sm:text-xs text-gray-500">Customers</p>
          </div>

          <div>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-800">5K+</h3>
            <p className="text-[10px] sm:text-xs text-gray-500">Products</p>
          </div>

          <div>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-800">4.9★</h3>
            <p className="text-[10px] sm:text-xs text-gray-500">Rating</p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center z-10 mt-10 md:mt-0 animate-[fadeUp_0.8s_ease_0.4s_both]">

        <div className="hidden sm:block absolute top-5 left-[-30px] bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-sky-200 text-xs font-semibold text-slate-800 animate-[float_6s_ease-in-out_1s_infinite]">
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          In Stock: 2,840 Items
        </div>

        <div className="bg-white/80 backdrop-blur-xl p-4 sm:p-5 rounded-2xl sm:rounded-3xl w-[260px] sm:w-[320px] shadow-xl sm:shadow-2xl border border-white/90 animate-[float_5s_ease-in-out_infinite]">

          <div className="bg-gradient-to-br from-[#c8e8f5] to-[#a3d4ef] h-[180px] sm:h-[240px] rounded-xl flex items-center justify-center text-5xl sm:text-6xl mb-3 sm:mb-4">
            👟
          </div>

          <h4 className="font-semibold text-base sm:text-lg text-slate-800">Air Comfort Pro</h4>
          <div className="text-lg sm:text-xl font-bold text-sky-500 my-1">₹2,499</div>

          <div className="flex justify-between items-center">
            <div className="text-yellow-400 text-xs sm:text-sm">★★★★★</div>

            <button className="bg-sky-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold active:scale-95 hover:scale-105 transition">
              + Add
            </button>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-10 right-[-20px] bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-sky-200 text-xs font-semibold text-slate-800 animate-[float_7s_ease-in-out_0.5s_infinite_reverse]">
          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
          Trending Today
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;