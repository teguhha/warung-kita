import { createContext, useContext, useState, ReactNode } from 'react';
import { Food } from '../data/foods';

type CartItem = Food & { qty: number };
type CartCtx = {
  items: CartItem[];
  add: (f: Food) => void;
  clear: () => void;
  total: number;
};

const CartContext = createContext<CartCtx>({} as CartCtx);
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (f: Food) =>
    setItems((prev) => {
      const ada = prev.find((i) => i.id === f.id);
      return ada
        ? prev.map((i) => (i.id === f.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { ...f, qty: 1 }];
    });

  const clear = () => setItems([]);
  const total = items.reduce((s, i) => s + i.harga * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, add, clear, total }}>
      {children}
    </CartContext.Provider>
  );
}
