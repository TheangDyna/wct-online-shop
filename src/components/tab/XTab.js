import React, { useState } from "react";

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

export default XTab;
