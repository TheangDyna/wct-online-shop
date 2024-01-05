import PropTypes from "prop-types";
import authService from "../../services/authService";
import { useState } from "react";

const XRegisterForm = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target.elements;
    const email = form.registerEmail.value;
    const password = form.registerPassword.value;
    try {
      await authService.handleRegister(email, password);
      e.target.reset();
      document.getElementById("authModal").close();
      setError(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      className="flex flex-col items-center gap-5"
      onSubmit={handleRegister}
    >
      <img src="./shop.png" className="w-12 h-12" />
      <p className="px-5 text-2xl">
        Register With The <span className="font-bold">WCT</span> Shop
      </p>
      <p className="px-5 text-sm text-center text-gray-600">
        Create an account to keep track of your school and stay in touch.
      </p>
      <input
        required
        name="registerEmail"
        type="email"
        placeholder="Your Email Address"
        className="w-full rounded-md input input-bordered"
      />
      <input
        required
        name="registerPassword"
        type="password"
        placeholder="Your Password"
        className="w-full rounded-md input input-bordered"
      />
      {error && <p className="px-5 text-red-500">{error}</p>}
      <button
        className="px-8 border-none rounded-full w-full btn bg-[#717fe0] hover:bg-[#222] text-white"
        type="submit"
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
      </button>

      <p>
        Ready have an account?{" "}
        <a className="text-blue-600 link" onClick={() => onLogin("login")}>
          Login now.
        </a>
      </p>
    </form>
  );
};

XRegisterForm.propTypes = {
  onLogin: PropTypes.func,
};

export default XRegisterForm;
