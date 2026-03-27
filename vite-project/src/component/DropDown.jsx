import React from "react";

function DropDown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("Categories");

  const items = ["Home", "Shop", "Collections", "Sale", "About"];

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-sky-500 transition"
      >
        {selected}

        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-3 w-44 bg-white/90 backdrop-blur-xl border border-sky-200 rounded-xl shadow-lg py-2 z-50">
          {items.map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              className="px-4 py-2 text-sm text-slate-700 hover:bg-sky-500 hover:text-white cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDown;