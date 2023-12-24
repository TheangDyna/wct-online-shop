import React from "react";
import ButtonCoupon from "./ButtonCoupon";

function CartTotal() {
  return (
    <div className="m-auto w-96 ">
      <div className="p-10 border border-gray-300 ">
        <h1 className="font-bold">CART TOTALS</h1>
        <div className="flex gap-3 mt-5 text-base">
          <p className="font-medium"> Subtotal: </p>
          <span>$79.65</span>
        </div>
        <hr className="mt-3" />
        <div className="flex w-full gap-5 py-3">
          <div className="w-1/5 font-medium  h-60">
            <p> Shipping: </p>
          </div>
          <div className="w-4/5 ">
            <p className="text-sm text-gray-500">
              There are no shipping methods available. Please double check your
              address, or contact us if you need any help.
            </p>
            <p className="mt-3 text-sm font-medium text-gray-500">
              CALCULATE SHIPPING
            </p>
            <div className="relative h-10 mt-2 border border-gray-300 rounded-md ">
              <div className="absolute left-0 flex items-center w-11/12 h-full ">
                <select
                  id="currency"
                  name="currency"
                  className="z-10 w-full h-full py-0 pl-2 text-gray-900 bg-transparent border border-gray-400 rounded-md pr-7 sm:text-sm"
                >
                  <option>Select a country</option>
                  <option>USA</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
            <div className="mt-2 ">
              <input
                type="text"
                name="price"
                className="block w-full rounded-md border outline-none bg-white bg-none border-gray-300 py-1.5 pl-7 pr-20 text-gray-900  foc"
                placeholder="State / Country"
              />
              <input
                type="text"
                name="price"
                className="block mt-2 w-full rounded-md border outline-none bg-white bg-none border-gray-300 py-1.5 pl-7 pr-20 text-gray-900  foc"
                placeholder="Postcode / Zip"
              />
            </div>
            <div className="flex justify-center mt-3">
              <ButtonCoupon chidren={"UPDATE TOTALS"} />
            </div>
          </div>
        </div>
        <hr className="mt-3"></hr>
        <div className="flex gap-10 mt-5 text-base">
          <p className="font-semibold "> Total: </p>
          <span>$79.65</span>
        </div>
        <div className="flex justify-center mt-6">
          <ButtonCoupon chidren={"PROCEED TO CHECKOUT"} />
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
