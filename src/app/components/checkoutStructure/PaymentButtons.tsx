import { LiaApplePay } from "react-icons/lia";
import Link from "next/link";

const PaymentButtons = () => {
  return (
    <>
      <button className="mt-6 w-full flex items-center justify-center gap-2 bg-amber-900 hover:bg-amber-800 text-white py-3 rounded-xl font-semibold transition duration-200 shadow-md active:scale-95">
        Pay Now
      </button>

      {/* Apple Pay Button */}
      <button
        className=" w-full flex items-center justify-center gap-1 bg-black hover:bg-[#262424]  text-white py-3 rounded-xl font-semibold transition duration-200 shadow-md active:scale-95"
        aria-label="Pay with Apple Pay"
      >
        <LiaApplePay className="text-3xl" />
      </button>
      <p className="text-sm">
        Having trouble with your payment?{" "}
        <Link
          href="/support"
          className="border-b text-amber-900 hover:text-amber-800 font-medium"
        >
          Contact support
        </Link>
        .
      </p>
    </>
  );
};

export default PaymentButtons;
