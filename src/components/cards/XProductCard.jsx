import { HeartOutlineIcon } from "../icons/HeartOutlineIcon";
import XQuickViewModal from "../modals/XQuickViewModal";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const XProductCard = ({ title, price, cover, id, preview }) => {
  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden group">
        <div className="relative pb-[120%]">
          <img
            src={cover}
            alt={title}
            className="absolute object-cover w-full h-full duration-700 ease-in-out group-hover:scale-110"
          />
        </div>

        <div className="absolute flex justify-center w-full duration-300 -bottom-20 group-hover:bottom-5">
          <button
            className="h-10 px-8 font-normal bg-white border-none rounded-full w-max btn btn-sm hover:bg-[#222] hover:text-white"
            onClick={() =>
              document.getElementById("quickViewModal").showModal()
            }
          >
            Quick View
          </button>
        </div>
      </div>
      <div className="flex items-start pt-3">
        <div className="flex-1 ">
          <Link
            to={`/shop/${id}`}
            className="mb-1 text-sm text-gray-400 hover:text-[#717fe0]"
          >
            {title}
          </Link>
          <p className="text-sm text-gray-500 ">${price}</p>
        </div>
        <button>
          <HeartOutlineIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <XQuickViewModal
        id="quickViewModal"
        cover={cover}
        preview={preview}
        title={title}
        price={price}
      />
    </div>
  );
};

XProductCard.propTypes = {
  cover: PropTypes.array,
  preview: PropTypes.array,
  title: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
};

export default XProductCard;
