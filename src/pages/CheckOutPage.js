import React from "react";
import XViewCartCatalog from "../components/catalogs/XViewCartCatalog";
import CartTotal from "../components/catalogs/XTotalCartCatalog";

const CheckOutPage = () => {
  return (
    <div className="grid grid-cols-1 gap-5 px-0 lg:grid-cols-3">
      <div className="w-full col-span-1 lg:col-span-2">
        <XViewCartCatalog />
      </div>
      <div className="w-ful">
        <CartTotal />
      </div>
    </div>
  );
};

export default CheckOutPage;
