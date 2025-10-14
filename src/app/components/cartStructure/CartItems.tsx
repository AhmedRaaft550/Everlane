"use client";

import Image from "next/image";
import { IoIosRemoveCircle } from "react-icons/io";
import { removeFromCart } from "@/app/redux/Slice";
import { UseReduxFunctions } from "@/app/utils/hooks/useReduxFunctions";
import { CartItemProps } from "@/app/types/app";

const CartItem = ({ product, quantity, onQuantityChange }: CartItemProps) => {
  const { dispatch } = UseReduxFunctions();
  const totalProductPrice = (product.price * quantity).toFixed(2);

  return (
    <section className="flex flex-col sm:flex-row items-center gap-6 bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow duration-200">
      <div className="relative w-40 h-40 flex-shrink-0">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain rounded-md"
        />
      </div>

      <div className="flex-1 font-sans space-y-1">
        <h1 className="font-semibold text-lg line-clamp-1">{product.title}</h1>
        <p className="text-sm text-gray-600">Brand: {product.brand}</p>
        <p className="text-sm text-gray-600">Return: {product.returnPolicy}</p>
        <p className="text-sm text-gray-600">{product.shippingInformation}</p>
        <p className="font-bold text-amber-900 mt-1">${totalProductPrice}</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <label htmlFor={`qty-${product.id}`} className="text-sm font-medium">
          Qty
        </label>
        <input
          type="number"
          min={1}
          max={5}
          id={`qty-${product.id}`}
          className="w-16 text-center border border-gray-400 rounded-md outline-none focus:ring-2 focus:ring-amber-500"
          value={quantity}
          onChange={(e) => onQuantityChange(product.id, Number(e.target.value))}
        />
        <IoIosRemoveCircle
          className="text-3xl text-amber-800 cursor-pointer hover:scale-110 transition-transform"
          title="Remove from cart"
          onClick={() => dispatch(removeFromCart(product.id))}
        />
      </div>
    </section>
  );
};

export default CartItem;
