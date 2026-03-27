import React from "react";
import { FaTruck } from "react-icons/fa6";
import { MdAutorenew } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

const Features = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: "Free Delivery",
      desc: "Free shipping on all orders above ₹999. Fast & reliable delivery.",
    },
    {
      icon: <MdAutorenew />,
      title: "Easy Returns",
      desc: "7-day hassle-free return policy. No questions asked.",
    },
    {
      icon: <GrSecure />,
      title: "Secure Payments",
      desc: "100% encrypted & secure checkout. UPI, Cards, COD accepted.",
    },
    {
      icon: <BiSupport />,
      title: "24/7 Support",
      desc: "Our support team is always here to help you, round the clock.",
    },
  ];

  return (
    <section className="px-[8%] py-16 bg-sky-50">
      

      <div className="text-center mb-12">
        <span className="text-xs font-bold tracking-[3px] text-sky-500 uppercase block mb-3">
        Features
        </span>

        <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-semibold text-slate-800">
          Why Choose Sembark?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md border border-sky-200 rounded-2xl p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="text-3xl mb-4 text-sky-600 ">{item.icon}</div>


            <h4 className="font-bold text-slate-800 mb-2">
              {item.title}
            </h4>

            <p className="text-sm text-gray-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;