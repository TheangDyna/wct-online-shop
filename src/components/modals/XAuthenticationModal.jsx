import { useState } from "react";
import XLoginForm from "../forms/XLoginForm";
import { XMarkIcon } from "../icons/XMarkIcon";
import PropTypes from "prop-types";
import XRegisterForm from "../forms/XRegisterForm";

const XAuthenticationModal = ({ id }) => {
  const [authStatus, setAuthStatus] = useState("login");
  return (
    <dialog id={id} className="px-6 modal">
      <div className="w-full max-w-xl px-5 py-10 bg-white rounded-none modal-box">
        <form method="dialog">
          <button className="absolute btn btn-circle btn-ghost right-2 top-2">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </form>
        <div>
          {authStatus == "register" ? (
            <XRegisterForm onLogin={(v) => setAuthStatus(v)} />
          ) : (
            <XLoginForm onRegister={(v) => setAuthStatus(v)} />
          )}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

XAuthenticationModal.propTypes = {
  id: PropTypes.string,
};

export default XAuthenticationModal;
