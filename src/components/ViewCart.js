import React from "react";
import Product from "./Product";
import Quantity from "./Quantity";
import InputCoupon from "./InputCoupon";
import ButtonCoupon from "./ButtonCoupon";

function ViewCart() {
  return (
    <div>
      <div className="w-3/4 overflow-auto m-auto mt-10 p-1">
        <table className="table border border-gray-300 box-border ">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th className=" text-center p-7">PRODUCT</th>
              <th></th>
              <th>PRICE</th>
              <th className="text-center">QUANTITY</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="flex justify-center p-10">
                  <Product/>
              </td>
              <td className=" ">Fresh Strawberries</td>
              <td>$ 36.00</td>
              <td><Quantity/></td>
              <td>$ 36.00</td>
            </tr>
            <tr>
              <td  className="flex justify-center  p-10">
                  <Product/>
              </td>
              <td>Fresh Strawberries</td>
              <td>$ 36.00</td>
              <td><Quantity/></td>
              <td>$ 36.00</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td></td>
              <td  className="row-span-2  flex justify-end p-8"><InputCoupon/></td>
              <td><ButtonCoupon/></td>
              <td></td>
              <td className="row-span-2"><ButtonCoupon/></td>
            </tr>
          </tbody>
        </table>
    </div>
    </div>
  );
}

export default ViewCart;
