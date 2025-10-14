"use client";

import { useState, useMemo } from "react";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import { UseReduxFunctions } from "@/app/utils/hooks/useReduxFunctions";

const CartDetails = () => {
  const { data } = UseReduxFunctions();
  const [itemQuantities, setItemQuantities] = useState<Record<number, number>>(
    {}
  );

  const handleQuantityChange = (id: number, value: number) => {
    const qty = Math.max(1, Math.min(5, value));
    setItemQuantities((prev) => ({ ...prev, [id]: qty }));
  };

  const { totalItems, totalPrice } = useMemo(() => {
    let items = 0;
    let price = 0;
    data.forEach((product) => {
      const qty = itemQuantities[product.id] || 1;
      items += qty;
      price += product.price * qty;
    });
    return { totalItems: items, totalPrice: price.toFixed(2) };
  }, [data, itemQuantities]);

  if (data.length === 0) return <EmptyCart />;

  return (
    <article className="bg-gray-100 min-h-full py-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <CartList
          products={data}
          itemQuantities={itemQuantities}
          onQuantityChange={handleQuantityChange}
        />
        <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
      </div>
    </article>
  );
};

export default CartDetails;
