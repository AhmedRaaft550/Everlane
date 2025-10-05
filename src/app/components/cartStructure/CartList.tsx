import React from "react";
import { ProductDetails } from "@/app/types/app";
import CartItem from "./CartItems";

interface CartListProps {
  products: ProductDetails[];
  itemQuantities: Record<number, number>;
  onQuantityChange: (id: number, value: number) => void;
}

const CartList = ({
  products,
  itemQuantities,
  onQuantityChange,
}: CartListProps) => (
  <div className="lg:col-span-2 space-y-6">
    {products.map((product) => (
      <CartItem
        key={product.id}
        product={product}
        quantity={itemQuantities[product.id] || 1}
        onQuantityChange={onQuantityChange}
      />
    ))}
  </div>
);

export default CartList;
