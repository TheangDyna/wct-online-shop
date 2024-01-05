import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const XNavLink = ({ path, children }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "font-normal btn btn-ghost text-[#717fe0] w-full"
          : "font-normal btn btn-ghost w-full"
      }
    >
      {children}
    </NavLink>
  );
};

XNavLink.propTypes = {
  path: PropTypes.string,
  children: PropTypes.string,
};

export default XNavLink;
