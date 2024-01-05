import PropTypes from "prop-types";

const XDescriptionCatalog = ({ description }) => {
  return <p className="text-sm text-gray-500">{description}</p>;
};

XDescriptionCatalog.propTypes = {
  description: PropTypes.string,
};

export default XDescriptionCatalog;
