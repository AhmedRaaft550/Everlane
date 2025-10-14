import Link from "next/link";
import { CartSummaryProps } from "@/app/types/app";
const CartSummary = ({ totalItems, totalPrice }: CartSummaryProps) => (
  <aside className="bg-white rounded-xl shadow-md p-6 sticky top-24 self-start">
    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
    <div className="flex justify-between text-gray-700 mb-2">
      <span>Items:</span>
      <span>{totalItems}</span>
    </div>
    <div className="flex justify-between text-gray-700 mb-2">
      <span>Subtotal:</span>
      <span>${totalPrice}</span>
    </div>
    <div className="flex justify-between text-gray-700 mb-4">
      <span>Shipping:</span>
      <span className="text-green-600">Free</span>
    </div>
    <div className="border-t pt-4 flex justify-between font-bold text-lg">
      <span>Total:</span>
      <span>${totalPrice}</span>
    </div>
    <Link href="/checkout">
      <button className="mt-6 w-full bg-amber-900 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
        Proceed to Checkout
      </button>
    </Link>
  </aside>
);

export default CartSummary;
