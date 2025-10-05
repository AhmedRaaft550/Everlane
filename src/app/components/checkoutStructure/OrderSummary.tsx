interface SummaryTypes {
  items: number;
  priceToNumber: number;
  originalTotal: number;
  discount: number;
}

const OrderSummary = ({ itemsProps }: { itemsProps: SummaryTypes }) => {
  const { items, priceToNumber, originalTotal, discount } = itemsProps;
  return (
    <div className="space-y-4 text-lg text-gray-800 ">
      <div className="flex justify-between border-b pb-2">
        <span className="font-medium text-amber-800">Total Items:</span>
        <span>{items}</span>
      </div>

      <div className="flex justify-between border-b pb-2">
        <span className="font-medium text-amber-800">Items Price:</span>
        <span>${priceToNumber.toFixed(2)}</span>
      </div>

      <div className="flex justify-between border-b pb-2">
        <span className="font-medium text-amber-800">Shipping Charge:</span>
        <span className="line-through text-gray-400">$100.00</span>
      </div>

      <hr className="my-4 border-amber-200" />

      <div className="flex justify-between">
        <span className="text-gray-600">Original Total:</span>
        <span className="line-through text-gray-400">
          ${originalTotal.toFixed(2)}
        </span>
      </div>

      <div className="flex justify-between text-green-600 font-semibold">
        <span>Discount Applied:</span>
        <span>- ${discount.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-xl font-bold text-amber-900 mt-2">
        <span>Final Total:</span>
        <span>${priceToNumber.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
