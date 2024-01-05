import { useState } from "react";
import PropTypes from "prop-types";

const XTab = ({ headers, initialActive, onTabChange }) => {
  const [active, setactive] = useState(initialActive);
  const handleTabChange = (itemValue) => {
    setactive(itemValue);
    if (onTabChange) {
      onTabChange(itemValue);
    }
  };

  return (
    <div className="flex flex-wrap gap-8">
      {headers.map((item, index) => {
        return (
          <button
            key={index}
            className={`text-sm text-gray-500 hover:underline underline-offset-4 hover:text-gray-800 ${
              active === item.value ? "underline text-gray-800" : ""
            }`}
            onClick={() => handleTabChange(item.value)}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};

XTab.propTypes = {
  headers: PropTypes.array,
  initialActive: PropTypes.string,
  onTabChange: PropTypes.func,
};

export default XTab;
