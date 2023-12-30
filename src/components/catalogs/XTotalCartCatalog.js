import React from "react";

const XTotalCartCatalog = () => {
  return (
    <div className="p-10 border">
      <p className="text-xl font-bold">CART TOTALS</p>
      <table className="min-w-full [&_td]:py-5 [&_td:last-child]:pt-5">
        <tbody>
          <tr className="w-full border-b border-dashed">
            <td className="w-[125px] font-bold">Subtotal:</td>
            <td> $79.65</td>
          </tr>
          <tr className="align-top">
            <td className="font-bold">Shipping:</td>
            <td className="flex flex-col gap-3">
              <p className="text-sm text-gray-500">
                There are no shipping methods available. Please double check
                your address, or contact us if you need any help.
              </p>
              <p>CALCULATE SHIPPING</p>
              <select className="flex-1 max-w-xs rounded-md select select-bordered select-sm">
                <option disabled>Choose an option</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <input
                type="text"
                placeholder="State / Country"
                className="w-full rounded-md input input-bordered input-sm"
              />
              <input
                type="text"
                placeholder="Postcode / Zip"
                className="w-full rounded-md input input-bordered input-sm"
              />
            </td>
          </tr>
          <tr className="w-full border-t border-dashed">
            <td className="text-lg font-bold">Total:</td>
            <td> $79.65</td>
          </tr>
          <tr>
            <td colSpan="2">
              <button className="px-8 h-[50px] border-none rounded-full w-full btn bg-[#222] hover:bg-[#717fe0] text-white">
                PROCEED TO CHECKOUT
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default XTotalCartCatalog;
