import React from "react";

const XInformationCatalog = ({ information }) => {
  const formattedInformation = Object.entries(information).map(
    ([key, value]) => {
      let formattedValue;

      switch (key) {
        case "Weight":
          formattedValue = `${value} kg`;
          break;
        case "dimensions":
          formattedValue = value.join(" x ") + " cm";
          break;
        case "color":
        case "size":
          formattedValue = value.join(", ");
          break;
        default:
          formattedValue = value;
      }

      return [key, formattedValue];
    }
  );
  return (
    <table className="w-[520px] mx-auto">
      {formattedInformation.map(([key, value]) => (
        <tr key={key}>
          <td className="w-[145px] text-sm text-gray-600">{key}</td>
          <td className="text-sm text-gray-500">{value}</td>
        </tr>
      ))}
    </table>
  );
};

export default XInformationCatalog;
