import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useCart } from "../../context/CartContext";
import { FaStar } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";




export default function ProductsSection() {
  const [view, setView] = useState("grid");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const filteredProducts = products.filter((product) => {
  const matchCategory =
    category === "all" || product.category === category;

  const matchSearch = product.title
    .toLowerCase()
    .includes(search.toLowerCase());

  return matchCategory && matchSearch;
});

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((res) => res.json())
      .then((data) =>{
        console.log(data),
         setProducts(data)});
  }, []); 

  return (
    <>
    <Navbar setCategory={setCategory} setSearch={setSearch} />
    <div className="px-[5%] pb-16 pt-6">

      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div className="text-sm text-gray-500">
          <strong className="text-slate-800">{products.length}</strong> products found
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`w-9 h-9 flex items-center justify-center rounded-md border transition
            ${
              view === "grid"
                ? "bg-sky-500 text-white border-sky-500"
                : "bg-white border-sky-200"
            }`}
          >
            ⊞
          </button>

          <button
            onClick={() => setView("list")}
            className={`w-9 h-9 flex items-center justify-center rounded-md border transition
            ${
              view === "list"
                ? "bg-sky-500 text-white border-sky-500"
                : "bg-white border-sky-200"
            }`}
          >
            ☰
          </button>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div
        className={`grid gap-5 transition-all
        ${view === "grid" ? "grid-cols-[repeat(auto-fill,minmax(240px,1fr))]" : "grid-cols-1"}`}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} view={view} addToCart={addToCart}  onViewDetail={setSelectedProduct}/>
        ))}
      </div>
    </div>

      {selectedProduct && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    
    <div className="bg-white w-[90%] max-w-md rounded-xl p-5 relative shadow-lg">


      <button
        onClick={() => setSelectedProduct(null)}
        className="absolute top-2 right-3 text-2xl font-bold text-gray-500"
      >
        <RxCross2/>
      </button>


      <img
        src={selectedProduct.image}
        className="h-40 mx-auto object-contain"
      />

      <h2 className="text-lg font-bold mt-3">
        {selectedProduct.title}
      </h2>

      <p className="text-sm text-gray-500 mt-2">
        {selectedProduct.description}
      </p>

      <p className="mt-2 text-sky-500 font-semibold uppercase">
        {selectedProduct.category}
      </p>

      <p className="mt-2 text-yellow-500 flex items-center gap-1">
        <span className="text-yellow-500"><FaStar/></span> {selectedProduct.rating?.rate} ({selectedProduct.rating?.count})
      </p>

      <p className="mt-3 text-lg font-bold">
        ₹{selectedProduct.price}
      </p>

      <button
        onClick={() => addToCart(selectedProduct)}
        className=" flex justify-center items-center w-full mt-4 py-2 rounded-md bg-sky-500 text-white font-semibold"
      >
        Add to Cart <span className="ml-2 mt-0.5 text-lg text-gray-100"><TiShoppingCart/></span>
      </button>

    </div>
  </div>
)}

    </>
  );
}
function ProductCard({ product, view, addToCart , onViewDetail}) {
   return (
    <div
      className={`bg-white border border-sky-200 rounded-xl shadow-sm overflow-hidden flex transition hover:shadow-lg hover:-translate-y-1
      ${view === "list" ? "flex-row h-[160px]" : "flex-col"}`}
    >
     
      <div
        className={`flex items-center justify-center bg-white
        ${view === "list" ? "w-[160px]" : "h-[200px]"}`}
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain p-2"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs font-bold tracking-widest text-sky-500 mb-1 uppercase">
          {product.category}
        </span>

        <h3 className="text-sm font-semibold text-slate-800 mb-2">
          {product.title}
        </h3>


        <div className="flex items-center justify-between mb-3">
  

  <div className="mt-2 flex items-center text-xs text-gray-500 gap-1">
    <span className="text-yellow-500">
      <FaStar />
    </span>
    {product.rating?.rate}
  </div>


  <button
    onClick={() => onViewDetail(product)}
    className="px-3 py-1 rounded-md border border-sky-400 text-sky-500 text-xs font-semibold 
    hover:bg-sky-500 hover:text-white transition"
  >
    View Details
  </button>

</div>

        <div className="mt-auto">
          <div className="text-lg font-bold text-slate-800">
            ₹{product.price}
          </div>

          <button onClick={()=> addToCart(product)} className=" flex justify-center w-full py-2 mt-2 rounded-md bg-gradient-to-r from-sky-500 to-sky-400 text-white text-sm font-semibold">
            Add to Cart <span className="ml-2 mt-0.5 text-lg text-gray-500"><TiShoppingCart/></span> 
          </button>
        </div>
      </div>
      
    </div>
  );
}