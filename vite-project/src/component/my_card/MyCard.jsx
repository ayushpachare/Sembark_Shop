import React, { useState, useEffect } from 'react';
import { ShoppingCart, Trash2, ArrowLeft, ShieldCheck, Tag, X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { useCart } from '../../context/CartContext';


const CartPage = () => {

  const { cart, addToCart, removeFromCart, setCart } = useCart();

  const [coupon, setCoupon] = useState('');
  const [toast, setToast] = useState({ show: false, msg: '' });

  const showToast = (msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: '' }), 2400);
  };

  const removeItem = (id) => {
    removeFromCart(id);
  };

  const clearAll = () => {
    if (cart.length === 0) return;
    setCart([]);
    showToast('Cart cleared');
  };

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (code === 'AQUA10') showToast('Coupon AQUA10 applied! 10% extra off');
    else if (code === '') showToast('Please enter a coupon code');
    else showToast(` "${code}" is not a valid coupon`);
  };


  const totalItems = cart.reduce((s, x) => s + (x.qty || 1), 0);
  const subtotalFull = cart.reduce(
    (s, x) => s + (x.oldPrice || x.price) * (x.qty || 1),
    0
  );

  const subtotal = cart.reduce(
    (s, x) => s + x.price * (x.qty || 1),
    0
  );
  const savings = subtotalFull - subtotal;
  const delivery = cart.length === 0 ? 0 : subtotal >= 999 ? 0 : 49;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + tax;

  return (
    <div className="min-h-screen bg-[#f0f9ff] text-[#1a3d52] font-['Outfit']">

      <nav className="sticky top-0 z-[100] h-[66px] bg-[#f0f9ff]/90 backdrop-blur-xl border-b border-[#b9e5f8]/70 px-[6%] flex items-center justify-between shadow-sm">
       <Link to={"/"}><div className="text-2xl font-bold font-['Playfair_Display'] text-[#0b3d5c]">
          Sembark<span className="text-[#1597cc]">Shop</span>
        </div></Link>
        <Link to={"/product"}> <button className="flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#b9e5f8] rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#0b3d5c] hover:bg-[#1597cc] hover:text-white transition-all duration-200 shadow-sm hover:shadow-lg active:scale-95">
          <ArrowLeft size={16} /> Continue Shopping
        </button></Link>
      </nav>


      <header className="px-[6%] pt-9 flex items-end justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#0b3d5c]">
            My <em className="italic text-[#1597cc] not-traditional">Cart</em>
          </h1>
          <p className="text-[#6b96b0] text-sm mt-1">{totalItems} items in your cart</p>
        </div>
        <button
          onClick={clearAll}
          className="bg-transparent border-1.5 border-rose-500/25 rounded-full px-4 py-2 text-xs font-bold text-rose-500 hover:bg-rose-50 transition-all flex items-center gap-2"
        >
          <Trash2 size={14} /> Clear All
        </button>
      </header>

 
      <main className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-7 px-[6%] py-7 pb-15 items-start">

   
        <div className="flex flex-col gap-4">
          {cart.length === 0 ? (
            <div className="text-center py-20 px-10 bg-white/70 border-1.5 border-dashed border-[#b9e5f8] rounded-[20px]">
              <div className="text-7xl mb-4 opacity-60">🛒</div>
              <h3 className="text-2xl font-['Playfair_Display'] text-[#0b3d5c] mb-2">Your cart is empty</h3>
              <p className="text-[#6b96b0] mb-6">Looks like you haven't added anything yet.</p>
              <Link to={"/product"} className="bg-[#1597cc] text-white px-7 py-3 rounded-full font-bold shadow-lg shadow-[#1597cc]/30 hover:-translate-y-0.5 transition-all flex items-center gap-2 mx-auto">
                <ShoppingBag size={18} /> Browse Products
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="relative overflow-hidden bg-white/88 backdrop-blur-md border-1.5 border-[#b9e5f8]/55 rounded-[20px] p-5 flex items-center gap-5 shadow-md hover:shadow-lg transition-all group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#38b6e8] to-[#1597cc]" />

                <div className="w-22 h-22 flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#e0f3fd] to-[#b9e5f8] flex items-center justify-center text-4xl shadow-sm">
                  <img src={item.image} className="h-full object-contain" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold tracking-[2px] uppercase text-[#1597cc] mb-1">{item.category}</div>
                  <div className="text-lg font-bold text-[#0b3d5c] mb-1.5 leading-tight">{item.title}</div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${item.badge === 'sale' ? 'bg-rose-50 text-rose-500 border-rose-500/20' :
                        item.badge === 'new' ? 'bg-blue-50 text-[#1597cc] border-[#1597cc]/20' :
                          item.badge === 'hot' ? 'bg-orange-50 text-orange-500 border-orange-500/20' :
                            'bg-purple-50 text-purple-600 border-purple-500/20'
                      }`}>
                      {(item.badge || "new").toUpperCase()}
                    </span>
                    <span className="text-xs text-[#6b96b0] ">₹{(item.oldPrice || item.price).toLocaleString()}</span>
                    <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">{item.discount ? `${item.discount}% OFF` : "0% OFF"}</span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3 flex-shrink-0">
                  <div className="text-right">
                    <div className="text-xl font-extrabold text-[#0b3d5c]">₹{(item.price * item.qty).toLocaleString()}</div>
                    <div className="text-[10px] text-[#6b96b0]">₹{item.price.toLocaleString()} / unit</div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="flex items-center gap-1 px-3 py-1.5 rounded-full 
                      text-xs font-semibold 
                      text-rose-500 bg-rose-50 border border-rose-200
                      hover:bg-rose-500 hover:text-white 
                      hover:shadow-md hover:shadow-rose-200
                      transition-all duration-200">
                    <X size={14} /> Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        
        <div className="lg:sticky lg:top-[90px]">
          <div className="bg-white/92 border-1.5 border-[#b9e5f8]/60 rounded-[20px] overflow-hidden shadow-lg">
            <div className="bg-gradient-to-br from-[#0b3d5c] to-[#1a5f8a] p-5 flex items-center gap-3">
              <h2 className="text-lg font-['Playfair_Display'] font-bold text-white">Order Summary</h2>
              <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{totalItems} items</span>
            </div>

            <div className="p-6">
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-[#6b96b0] border-b border-dashed border-[#b9e5f8]/70 pb-2">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1a3d52]">₹{subtotalFull.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-[#6b96b0] border-b border-dashed border-[#b9e5f8]/70 pb-2">
                  <span>Discount</span>
                  <span className="font-semibold text-green-600">−₹{savings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-[#6b96b0] border-b border-dashed border-[#b9e5f8]/70 pb-2">
                  <span>Delivery</span>
                  <span>
                    {delivery === 0 && cart.length > 0 ? (
                      <><span className="line-through text-[10px] mr-1">₹49</span><span className="text-green-600 font-bold uppercase">Free 🎉</span></>
                    ) : `₹${delivery}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-[#6b96b0] border-b border-dashed border-[#b9e5f8]/70 pb-2">
                  <span>Tax (5%)</span>
                  <span className="font-semibold text-[#1a3d52]">₹{tax.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-[#0b3d5c]">Total Payable</span>
                <span className="text-2xl font-extrabold text-[#0b3d5c]">₹{total.toLocaleString()}</span>
              </div>

              {savings > 0 && (
                <div className="mt-4 bg-gradient-to-r from-green-100 to-green-200 border border-green-300 rounded-xl p-3 flex items-center gap-2 text-xs font-bold text-green-600">
                  <span>You're saving ₹{savings.toLocaleString()} on this order!</span>
                </div>
              )}

              <div className="mt-5">
                <label className="text-xs font-semibold text-[#6b96b0] mb-2 block">Have a coupon code?</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="flex-1 bg-[#f0f9ff] border-1.5 border-[#b9e5f8] rounded-xl px-3.5 py-2 text-sm outline-none focus:border-[#38b6e8] uppercase tracking-wider placeholder:normal-case placeholder:tracking-normal"
                  />
                  <button onClick={applyCoupon} className="bg-[#e0f3fd] border-1.5 border-[#b9e5f8] rounded-xl px-4 text-xs font-bold text-[#1597cc] hover:bg-[#1597cc] hover:text-white transition-all">
                    Apply
                  </button>
                </div>
              </div>

              <button
                disabled={cart.length === 0}
                className="w-full mt-5 bg-gradient-to-r from-[#0b3d5c] to-[#1a5f8a] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-[#0b3d5c]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShieldCheck size={20} /> Proceed to Checkout
              </button>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-[#6b96b0]">
                <ShieldCheck size={12} /> Secure & encrypted payment
              </div>

              <div className="flex gap-1.5 justify-center mt-4 flex-wrap">
                {['UPI', 'VISA', 'MC', 'COD', 'EMI'].map(pay => (
                  <span key={pay} className="bg-[#f0f9ff] border border-[#b9e5f8] rounded-lg px-2 py-1 text-[10px] font-bold text-[#6b96b0]">{pay}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className={`fixed bottom-7 left-1/2 -translate-x-1/2 bg-[#0b3d5c] text-white px-6 py-3 rounded-full text-sm font-medium shadow-2xl transition-all duration-300 z-[999] whitespace-nowrap ${toast.show ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
        {toast.msg}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;