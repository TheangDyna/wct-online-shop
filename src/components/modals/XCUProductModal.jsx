import XAddProductForm from "../forms/XAddProductForm";
import XUpdateProductForm from "../forms/XUpdateProductForm";
import { XMarkIcon } from "../icons/XMarkIcon";
import PropTypes from "prop-types";

const XCUProductModal = ({ id, updateProduct }) => {
  return (
    <dialog id={id} className="px-6 modal">
      <div className="w-full h-full max-w-2xl px-5 py-10 bg-white rounded-none modal-box">
        <form method="dialog">
          <button className="absolute btn btn-circle btn-ghost right-2 top-2">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </form>
        <div>
          {updateProduct ? (
            <XUpdateProductForm updateProduct={updateProduct} />
          ) : (
            <XAddProductForm />
          )}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

XCUProductModal.propTypes = {
  id: PropTypes.string,
  updateProduct: PropTypes.object,
};

export default XCUProductModal;
