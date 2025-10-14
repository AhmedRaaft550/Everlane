import { CartListProps } from "@/app/types/app";
import CartItem from "./CartItems";

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
