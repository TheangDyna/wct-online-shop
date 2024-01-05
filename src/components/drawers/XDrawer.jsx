import XDrawerSide from "./XDrawerSide";
import PropTypes from "prop-types";

const XDrawer = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="drawerModal" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="z-30 overflow-hidden drawer-side">
        <label
          htmlFor="drawerModal"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <XDrawerSide />
      </div>
    </div>
  );
};

XDrawer.propTypes = {
  children: PropTypes.element,
};

export default XDrawer;
