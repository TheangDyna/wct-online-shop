import PropTypes from "prop-types";
import authService from "../../services/authService";
import { useState } from "react";

const XLoginForm = ({ onRegister }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const email = form.loginEmail.value;
    const password = form.loginPassword.value;
    setLoading(true);
    try {
      await authService.handleLogin(email, password);
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
    <form className="flex flex-col items-center gap-5" onSubmit={handleLogin}>
      <img src="./shop.png" className="w-12 h-12" />
      <p className="px-5 text-2xl">
        Login With The <span className="font-bold">WCT</span> Shop
      </p>
      <p className="px-5 text-sm text-center text-gray-600">
        Welcome! log in to get in the moments updates on the thing that
        interests you.
      </p>

      <input
        required
        name="loginEmail"
        type="email"
        placeholder="Your Email Address"
        className="w-full rounded-md input input-bordered"
      />
      <input
        required
        name="loginPassword"
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
        {loading ? "Logging in..." : "Login"}
      </button>
      <p>
        Don&apos;t have an account?{" "}
        <a
          className="text-blue-600 link"
          onClick={() => onRegister("register")}
        >
          Register now.
        </a>
      </p>
    </form>
  );
};

XLoginForm.propTypes = {
  onRegister: PropTypes.func,
};

export default XLoginForm;
