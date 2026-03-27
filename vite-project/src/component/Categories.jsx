import React from "react";
import { IoShirt } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { GiLipstick } from "react-icons/gi";



const CategorySection = () => {
  const categories = [
    { icon: <IoShirt />, title: "Fashion", count: "1,240 Products" },
    { icon: <CiMobile3 />, title: "Electronics", count: "820 Products" },
    { icon: <IoHome />, title: "Home & Living", count: "640 Products" },
    { icon: <GiLipstick />, title: "Beauty", count: "530 Products" },
  ];

  return (
     <section className="px-4 sm:px-[6%] md:px-[8%] py-12 sm:py-16 md:py-20">
      
      
      <div className="text-center mb-8 sm:mb-12">
        <span className="text-[10px] sm:text-xs font-bold tracking-[2px] sm:tracking-[3px] text-sky-500 uppercase block mb-2 sm:mb-3">
          Browse By
        </span>

        <h2 className="text-[1.4rem] sm:text-[clamp(1.8rem,3vw,2.8rem)] font-semibold text-slate-800">
          Shop by Category
        </h2>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-lg border border-sky-200 rounded-xl sm:rounded-2xl px-3 py-5 sm:px-5 sm:py-8 text-center cursor-pointer transition-all duration-300 shadow-sm hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-lg sm:hover:shadow-2xl hover:border-sky-300"
          >
            
            <div className="flex justify-center mb-2 sm:mb-4">
              <span className="text-2xl sm:text-4xl text-blue-600">
                {cat.icon}
              </span>
            </div>

            
            <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-1">
              {cat.title}
            </h3>

            
            <span className="text-[10px] sm:text-xs text-gray-500">
              {cat.count}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;