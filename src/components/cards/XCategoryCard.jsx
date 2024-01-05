import PropTypes from "prop-types";

const XCategoryCard = ({ cover, title, description }) => {
  return (
    <div className="w-full">
      <div className="relative w-full border group">
        <div className="relative pb-[66.66%]">
          <img
            className="absolute object-cover object-right w-full h-full "
            src={cover}
            alt={title}
          />
        </div>
        <div className="absolute top-0 w-full h-full transition duration-300 opacity-90 group-hover:bg-[#717fe0]" />

        <div className="absolute top-0 w-full h-full p-10 group-hover:text-white">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-500 group-hover:text-white">{description}</p>
        </div>

        <div className="absolute bottom-10 left-10">
          <p className="font-bold text-white transition duration-300 ease-in-out scale-50 translate-y-4 opacity-0 group-hover:-translate-y-1 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-200">
            SHOP NOW
          </p>
          <hr className="transition h-[3px] duration-500 ease-in-out scale-x-0 bg-white group-hover:scale-x-100" />
        </div>
      </div>
    </div>
  );
};

XCategoryCard.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default XCategoryCard;
