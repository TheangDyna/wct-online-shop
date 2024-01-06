import { XMarkIcon } from "../icons/XMarkIcon";
import XViewProductsCatalog from "../catalogs/XViewProductsCatalog";
import AddToCartCatalog from "../catalogs/XAddToCartCatalog";
import PropTypes from "prop-types";

const XQuickViewModal = ({ title, price, cover, id, preview }) => {
  console.log(title, price, cover, id, preview);
  return (
    <dialog id={id} className="px-6 modal">
      <div className="max-w-[1380px] w-full h-full bg-white rounded-none modal-box px-5 py-10">
        <form method="dialog">
          <button className="absolute btn btn-circle btn-ghost right-2 top-2">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </form>
        <div className="grid grid-cols-1 gap-10 mt-10 md:gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <XViewProductsCatalog images={[...cover, ...preview]} />
          </div>
          <div className="order-1 md:order-2">
            <AddToCartCatalog title={title} price={price} />
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

XQuickViewModal.propTypes = {
  id: PropTypes.string,
  cover: PropTypes.array,
  preview: PropTypes.array,
  title: PropTypes.string,
  price: PropTypes.string,
};

export default XQuickViewModal;
