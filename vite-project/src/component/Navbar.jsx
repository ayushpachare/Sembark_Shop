import React from "react";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";


function Navbar() {
    
    return (
        <>
        <nav className="sticky top-0 z-50 bg-[rgba(200,232,245,0.7)] backdrop-blur-xl border-b border-[rgba(163,212,239,0.4)] px-[5%] h-[70px] flex items-center justify-between">

      {/* Logo */}
      <div className="text-2xl font-bold tracking-tight text-slate-800">
        
Sembark<span className="text-sky-500">Shop</span>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-800">
        {["Collections", "Sale"].map((item) => (
          <li key={item} className="relative group cursor-pointer">
            <Link to="/product" className="hover:text-sky-500 transition">
              {item}
            </Link>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
        <DropDown/>
      </ul>
      

      <div className="flex items-center gap-4">
        <Link to="/cart">
        <button className="text-gray-500 relative w-10 h-10 flex items-center justify-center rounded-full bg-white/80 border border-sky-200 cursor-pointer hover:bg-sky-500 hover:text-white transition">
          <TiShoppingCart />
          <span className="absolute -top-1 -right-1 bg-sky-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
            1
          </span>
        </button>
        </Link>

      </div>
    </nav>
        </>
    )

}

export default Navbar;