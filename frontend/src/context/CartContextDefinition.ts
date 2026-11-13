import { createContext } from "react";
import type { Product } from "../types/Product";
import type { CartItem } from "../types/CartItem";

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
