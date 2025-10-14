"use client";
import Link from "next/link";
import { UseReduxFunctions } from "@/app/utils/hooks/useReduxFunctions";
import { FaUser, FaSearch, FaCartArrowDown } from "react-icons/fa";
import React from "react";

const HeaderIcons = ({
  mobile = false,
  setMenuOpen,
}: {
  mobile?: boolean;
  setMenuOpen?: (value: boolean) => void;
}) => {
  const { data } = UseReduxFunctions();
  const cartLength = data.length;

  const iconStyles =
    "relative cursor-pointer hover:text-amber-700 transition-colors text-xl";

  return (
    <div
      className={`flex ${mobile ? "gap-6" : "gap-4"} text-amber-900`}
      onClick={() => setMenuOpen?.(false)}
    >
      <Link href="/auth/signin" aria-label="Account" className={iconStyles}>
        <FaUser />
      </Link>

      <button aria-label="Search" className={iconStyles}>
        <FaSearch />
      </button>

      <Link href="/cart" aria-label="Cart" className="relative">
        <FaCartArrowDown className={iconStyles} />
        {cartLength > 0 && (
          <span className="absolute animate-bounce -top-4 -right-5 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-amber-700 rounded-full shadow-md">
            {cartLength}
          </span>
        )}
      </Link>
    </div>
  );
};

const HeaderIconsMemo = React.memo(HeaderIcons);

export default HeaderIconsMemo;
