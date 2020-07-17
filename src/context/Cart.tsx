/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from 'react';

interface IPokemon {
  name: string;
  url: string;
  price: number;
}
interface ICartContext {
  cart: Array<IPokemon>;
  setCart(pokemon: IPokemon): void;
}

const CartContext = createContext<ICartContext>({} as ICartContext);

// export const CartProvider: React.FC = ({ children }) => {
//   const [cart, setCart] = useState<IPokemon[]>([]);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         setCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export function useCart() {
//   const context = useContext(CartContext);
//   const { cart, setCart } = context;
//   return { cart, setCart };
// }
