import { FaApplePay } from "react-icons/fa6";
import { SiSamsung } from "react-icons/si";

const PaymentButtons = ({ priceToNumber }: { priceToNumber: number }) => {
  return (
    <div className="mt-8 space-y-4">
      <button className="flex items-center justify-center gap-3 w-full py-3 px-5 bg-amber-900 text-white rounded-lg shadow hover:bg-amber-800 transition duration-200">
        <FaApplePay className="text-2xl" />
        <span className="text-lg font-semibold">
          Pay ${priceToNumber.toFixed(2)} with Apple Pay
        </span>
      </button>

      <button className="flex items-center justify-center gap-3 w-full py-3 px-5 bg-amber-800 text-white rounded-lg shadow hover:bg-amber-900 transition duration-200">
        <SiSamsung className="text-2xl" />
        <span className="text-lg font-semibold">
          Pay ${priceToNumber.toFixed(2)} with Samsung Pay
        </span>
      </button>
    </div>
  );
};

export default PaymentButtons;
