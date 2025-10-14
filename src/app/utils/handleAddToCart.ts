"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { addToCart } from "../redux/Slice";
import myToaster from "./toaster";
import { ProductDetails } from "../types/app";

export const useAddToCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.state.cart);

  const handleAddToCart = (product: ProductDetails) => {
    const exists = cart.find((p) => p.id === product.id);
    const toastId = "cart-toast";
    if (exists) {
      myToaster.error(`${product.title} already in cart!`, { id: toastId });
    } else {
      dispatch(addToCart(product));
      myToaster.success(`${product.title} added to cart!`, { id: toastId });
    }
  };

  return { handleAddToCart };
};
