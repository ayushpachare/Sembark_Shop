import { createContext , useContext , useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({children}){
    const [cart , setcart] = useState([]);

    const  addToCart = (product)=>{
        console.log("ADDING:", product);
        setcart((prev)=>{
            const exists = prev.find((item)=> item.id === product.id);
            if(exists){
                return prev.map((item)=> 
                    item.id === product.id 
                ? {...item , qty : item.qty + 1} : item);
            }
            else{
                return [...prev , {...product , qty : 1}]; 
            }
        })
    }

    const removeFromCart = (id)=>{
        setcart((prev)=> prev.filter((item)=> item.id !== id));
    };

    return(
        <CartContext.Provider value ={{cart , addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}