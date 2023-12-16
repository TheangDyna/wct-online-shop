import React from "react";
import { MdAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";
import { useState } from "react";

function Quantity() {
  const [amount, setamount] = useState(0);
  return (
    <div>
      <div className="join join-vertical lg:join-horizontal">
        <button
          onClick={() => setamount((value) => value - 1)}
          disabled={amount <= 0}
          className="border-gray-400 border-1 btn join-item btn-sm w-14 hover:border-gray-400"
        >
          <RiSubtractFill />
        </button>
        <input
          className="w-12 h-8 text-center border-gray-400 border-1 input join-item"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
        />
        <button
          onClick={() => setamount((value) => value + 1)}
          className="border-gray-400 border-1 btn join-item btn-sm w-14 hover:border-gray-400"
        >
          <MdAdd />
        </button>
      </div>
    </div>
  );
}

export default Quantity;
