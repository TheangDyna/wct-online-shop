import React from "react";
import { XMarkIcon } from "../icons/XMarkIcon";
import XViewProductsCatalog from "../catalog/XViewProductsCatalog";
import AddToCartCatalog from "../catalog/XAddToCartCatalog";

const XQuickViewModal = ({ id }) => {
  const images = [
    "https://preview.colorlib.com/theme/cozastore/images/product-detail-01.jpg.webp",
    "https://preview.colorlib.com/theme/cozastore/images/product-detail-02.jpg.webp",
    "https://preview.colorlib.com/theme/cozastore/images/product-detail-03.jpg.webp",
  ];

  return (
    <dialog id={id} className="px-6 modal">
      <div className="max-w-[1380px] w-full h-full bg-white rounded-none modal-box p-5">
        <form method="dialog">
          <button className="absolute btn btn-circle btn-ghost right-2 top-2">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </form>
        <div className="grid grid-cols-1 gap-10 mt-10 md:gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <XViewProductsCatalog images={images} />
          </div>
          <div className="order-1 md:order-2">
            <AddToCartCatalog />
          </div>
        </div>
      </div>
      <form method="dialog" className="gap-0 p-0 m-0 modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default XQuickViewModal;
