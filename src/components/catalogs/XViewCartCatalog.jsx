import XQuantityButton from "../buttons/XQuantityButton";
import XCartProductCard from "../cards/XCartProductCard";

const XViewCartCatalog = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table min-w-full text-right border [&_tr>*:first-child]:pl-10 [&_tr>*:last-child]:pr-10">
        <thead className="text-sm text-gray-700">
          <tr>
            <th className="text-left ">PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th className="">TOTAL</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-600">
          <tr className="h-[160px]">
            <td>
              <div className="flex items-center gap-5 ">
                <XCartProductCard />
                <p>Fresh Strawberries</p>
              </div>
            </td>
            <td>$ 36.00</td>
            <td>
              <XQuantityButton />
            </td>
            <td>$ 36.00</td>
          </tr>
          <tr className="h-[160px]">
            <td>
              <div className="flex items-center gap-5 ">
                <XCartProductCard />
                <p>Fresh Strawberries</p>
              </div>
            </td>
            <td>$ 36.00</td>
            <td>
              <XQuantityButton />
            </td>
            <td>$ 36.00</td>
          </tr>
          <tr>
            <td colSpan={4}>
              <div className="flex items-center justify-end gap-5">
                <input
                  name="code"
                  type="text"
                  placeholder="Coupon Code"
                  className="text-sm border-gray-200 rounded-full w-60 input input-bordered"
                />
                <button className="px-8 border-gray-200 rounded-full w-max btn bg-gray-100 text-gray-700 hover:bg-[#717fe0] hover:text-white">
                  APPLY COUPON
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default XViewCartCatalog;
