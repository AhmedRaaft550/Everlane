"use client";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
import { UseReduxFunctions } from "@/app/utils/hooks/useReduxFunctions";
import React from "react";

const FloatingCart = () => {
  const { data } = UseReduxFunctions();
  const cartLength = data.length;

  return (
    <Link
      href="/cart"
      aria-label="Cart"
      className="fixed bottom-4 right-4 md:hidden z-50 bg-amber-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-amber-800 transition-colors"
    >
      <FaCartArrowDown className="text-xl" />
      {cartLength > 0 && (
        <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-black rounded-full shadow-md animate-pulse">
          {cartLength}
        </span>
      )}
    </Link>
  );
};

export default React.memo(FloatingCart);
