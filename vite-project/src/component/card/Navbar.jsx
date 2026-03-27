import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";

const categories = [
  { id: "all", name: "All" },
  { id: "men's clothing", name: "Men" },
  { id: "women's clothing", name: "Women" },
  { id: "electronics", name: "Electronics" },
  { id: "jewelery", name: "Jewelery" },
];

export default function Navbar({ setCategory, setSearch }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(categories[0]);
  const dropdownRef = useRef();
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-sky-50/80 backdrop-blur-lg border-b border-sky-200 shadow-sm px-4 md:px-[5%] py-3 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">

        <div className="flex items-center justify-between w-full md:w-auto">

          <div className="text-lg sm:text-2xl font-bold text-slate-800">
            <Link to={"/"}>
              Sembark<span className="text-sky-500">Shop</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Link to={"/cart"}>
              <button className="relative w-9 h-9 rounded-full border border-sky-200 bg-white flex items-center justify-center">
                <TiShoppingCart />
                <span className="absolute -top-1 -right-1 bg-sky-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-3 md:items-center">

          <div className="relative w-full md:w-auto" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className={`w-full md:w-auto flex justify-between md:justify-start items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition
              ${
                open
                  ? "bg-sky-500 text-white border-sky-500"
                  : "bg-white border-sky-200 text-slate-700"
              }`}
            >
              {selected.name}
              <span className={`${open ? "rotate-180" : ""}`}>▼</span>
            </button>

            <div
              className={`absolute top-[110%] left-0 w-full md:w-56 bg-white border border-sky-200 rounded-xl shadow-lg p-2 transition-all
              ${
                open
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => {
                    setSelected(cat);
                    setCategory(cat.id);
                    setOpen(false);
                  }}
                  className={`px-3 py-2 rounded-lg cursor-pointer text-sm transition
                  ${
                    selected.id === cat.id
                      ? "bg-sky-500 text-white"
                      : "hover:bg-sky-100 text-slate-700"
                  }`}
                >
                  {cat.name}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:max-w-md relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-500">
              <FaMagnifyingGlass />
            </span>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-sky-200 bg-white focus:ring-2 focus:ring-sky-300 outline-none"
            />
          </div>

          <div className="hidden md:flex items-center gap-3 ml-auto">
            <Link to={"/"}>
              <button className="flex items-center gap-2 bg-white border border-sky-200 rounded-full px-4 py-2 text-sm font-semibold hover:bg-sky-500 hover:text-white transition">
                <ArrowLeft size={16} /> Home
              </button>
            </Link>

            <Link to={"/cart"}>
              <button className="relative w-10 h-10 rounded-full border border-sky-200 bg-white hover:bg-sky-500 hover:text-white transition flex items-center justify-center">
                <TiShoppingCart />
                <span className="absolute -top-1 -right-1 bg-sky-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="px-4 md:px-[5%] pt-4 md:pt-6">
        <h1 className="text-xl md:text-3xl font-bold text-slate-800">
          {selected.id === "all" ? "All" : selected.name}{" "}
          <em className="text-sky-500">Products</em>
        </h1>
      </div>
    </>
  );
}