import PropTypes from "prop-types";

const XButton = ({ children, ...props }) => {
  return (
    <button
      className="px-8 border-none rounded-full w-max btn bg-[#222] hover:bg-[#717fe0] text-white"
      {...props}
    >
      {children}
    </button>
  );
};

XButton.propTypes = {
  children: PropTypes.string,
};

export default XButton;
