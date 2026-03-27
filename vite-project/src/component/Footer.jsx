import React from "react";

const Footer = () => {
  return (
    <footer className="px-[8%] py-14 bg-slate-900 text-white">


      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">


        <div>
          <div className="text-2xl font-bold mb-3">
           Sembark<span className="text-sky-400">Shop</span>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Your one-stop destination for premium lifestyle products. Quality, style & affordability — all in one place.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {["Home", "Shop", "Collections", "Sale"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-sky-400 transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Help</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {["My Orders", "Returns", "Track Order", "FAQs"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-sky-400 transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>support@sembarkshop.in</li>
            <li>+91 98765 43210</li>
            <li>Indore, MP, India</li>
          </ul>
        </div>

      </div>


      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-center items-center gap-4">

        <span className="text-sm text-gray-400">
          © 2026 SembarkShop. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;