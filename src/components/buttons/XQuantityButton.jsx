import { useEffect, useState } from "react";
import { MinusIcon } from "../icons/MinusIcon";
import { PlusIcon } from "../icons/PlusIcon";

const XQuantityButton = () => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    return () => {
      setAmount(0);
    };
  }, []);

  return (
    <div className="rounded-sm join">
      <button
        onClick={() => (amount > 0 ? setAmount((value) => value - 1) : null)}
        className="border-gray-300 border-1 btn join-item w-14 hover:bg-[#717fe0] bg-white hover:text-white"
      >
        <MinusIcon className="w-4 h-4" />
      </button>
      <input
        name="quantity"
        type="number"
        className="px-0 text-sm font-bold text-center text-gray-500 border-gray-300 bg-gray-100/80 w-14 border-1 input join-item"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button
        onClick={() => setAmount((value) => value + 1)}
        className="border-gray-300 border-1 btn join-item w-14 hover:bg-[#717fe0] bg-white hover:text-white"
      >
        <PlusIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default XQuantityButton;
