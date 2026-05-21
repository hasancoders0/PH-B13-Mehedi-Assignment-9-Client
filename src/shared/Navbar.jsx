import {
  Link,
  NavLink,
} from "react-router-dom";

import toast from "react-hot-toast";

import {
  FaMoon,
  FaSun,
} from "react-icons/fa";

import useAuth from "../hooks/useAuth";

import useTheme from "../hooks/useTheme";

const Navbar = () => {

  const {
    user,
    logoutUser,
  } = useAuth();

  const {
    theme,
    toggleTheme,
  } = useTheme();

  // Logout
  const handleLogout = async () => {

    try {

      await logoutUser();

      // Remove JWT Token
      localStorage.removeItem(
        "access-token"
      );

      toast.success(
        "Logout successful"
      );

    } catch (error) {

      toast.error(error.message);
    }
  };

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-sm transition">

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-600"
        >
          Tutor Booking
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 font-medium text-slate-700 dark:text-slate-200">

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/all-tutors">
            Tutors
          </NavLink>

          {
            user && (
              <>
                <NavLink to="/add-tutor">
                  Add Tutor
                </NavLink>

                <NavLink to="/my-tutors">
                  My Tutors
                </NavLink>

                <NavLink to="/my-booked-sessions">
                  My Booked Sessions
                </NavLink>
              </>
            )
          }
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-full bg-slate-200 dark:bg-slate-700 dark:text-white flex items-center justify-center text-lg transition"
          >
            {
              theme === "light"
                ? <FaMoon />
                : <FaSun />
            }
          </button>

          {
            user ? (
              <>
                {/* User Image */}
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  alt="user"
                  title={
                    user.displayName
                  }
                  className="w-11 h-11 rounded-full object-cover border-2 border-cyan-500"
                />

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Login */}
                <Link
                  to="/login"
                  className="px-5 py-2 rounded-xl bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition"
                >
                  Login
                </Link>

                {/* Register */}
                <Link
                  to="/register"
                  className="px-5 py-2 rounded-xl border border-cyan-500 text-cyan-600 dark:text-cyan-400 font-medium hover:bg-cyan-50 dark:hover:bg-slate-800 transition"
                >
                  Register
                </Link>
              </>
            )
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;