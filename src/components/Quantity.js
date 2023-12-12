import React from "react";
import { MdAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";
import { useState } from "react";

function Quantity() {
  const [amount,setamount] = useState(0);
  return (
    <div>
      <div className="join join-vertical lg:join-horizontal">
        <button 
          onClick={() => setamount((value) => value-1) }
          disabled={amount <= 0}
          className="btn w-14 btn-sm join-item border-1 hover:border-gray-400 border-gray-400">
            <RiSubtractFill />
          </button>
        <input className="input w-12 h-8 text-center border-1 border-gray-400 join-item" value={amount}  />
        <button 
          onClick={() => setamount((value) => value+1) }
          className="btn w-14 btn-sm join-item border-1 border-gray-400 hover:border-gray-400">
            <MdAdd />
        </button>
      </div>
    </div>
  );
}

export default Quantity;
