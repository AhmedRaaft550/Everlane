import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import Link from "next/link";

const OrderSummary = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold mb-2 font-mono">checkout</h1>
        <Link
          href="/cart"
          className="bg-amber-900 hover:bg-amber-800 text-sm text-white py-2 px-4 rounded-lg transition duration-200"
        >
          View Order Details
        </Link>
      </div>

      <div className="flex items-center justify-center gap-3 border-t pt-4">
        <p className="text-gray-700 font-medium">Pay with</p>
        <div className="flex text-3xl text-amber-900 gap-2">
          <FaCcVisa />
          <FaCcMastercard />
        </div>
      </div>

      <form action="">
        <div className="flex flex-col gap-3 text-left mt-4">
          <label className="text-sm font-medium text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-amber-900"
          />

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">
                Expiry
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="border border-gray-300 rounded-lg p-2 w-full outline-none focus:ring-2 focus:ring-amber-900"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">CVV</label>
              <input
                type="password"
                placeholder="***"
                className="border border-gray-300 rounded-lg p-2 w-full outline-none focus:ring-2 focus:ring-amber-900"
                autoComplete="on"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default OrderSummary;
