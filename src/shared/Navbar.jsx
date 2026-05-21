import {
  Link,
  NavLink,
} from "react-router-dom";

import {
  useState,
} from "react";

import toast from "react-hot-toast";

import {
  FaMoon,
  FaSun,
  FaBars,
  FaBookOpen,
  FaUser,
} from "react-icons/fa";

import useAuth from "../hooks/useAuth";

import useTheme from "../hooks/useTheme";

import MobileMenu from "../components/Navbar/MobileMenu";

const Navbar = () => {

  const {
    user,
    logoutUser,
  } = useAuth();

  const {
    theme,
    toggleTheme,
  } = useTheme();

  const [menuOpen, setMenuOpen] =
    useState(false);

  // Logout
  const handleLogout = async () => {

    try {

      await logoutUser();

      localStorage.removeItem(
        "access-token"
      );

      toast.success(
        "Logout successful"
      );

      setMenuOpen(false);

    } catch (error) {

      toast.error(error.message);
    }
  };

  // NavLink Style
  const navLinkClass = ({
    isActive,
  }) =>
    `relative font-medium transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-cyan-500 after:transition-all after:duration-300 ${
      isActive
        ? "text-cyan-500 after:w-full"
        : "text-slate-700 dark:text-slate-200 after:w-0 hover:text-cyan-500 hover:after:w-full"
    }`;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 shadow-sm">

        <div className="max-w-7xl mx-auto px-4 lg:px-6 h-[80px] flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-cyan-500"
          >
            <FaBookOpen />

            <span className="hidden sm:block">
              Tutor Booking
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">

            <NavLink
              to="/"
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/all-tutors"
              className={navLinkClass}
            >
              Tutors
            </NavLink>

            {
              user && (
                <>
                  <NavLink
                    to="/add-tutor"
                    className={navLinkClass}
                  >
                    Add Tutor
                  </NavLink>

                  <NavLink
                    to="/my-tutors"
                    className={navLinkClass}
                  >
                    My Tutors
                  </NavLink>

                  <NavLink
                    to="/my-booked-sessions"
                    className={navLinkClass}
                  >
                    My Sessions
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
              className="w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-800 dark:text-white flex items-center justify-center text-lg hover:scale-105 transition"
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
                  {/* User Image / Icon */}
                  {
                    user.photoURL ? (
                      <img
                        src={
                          user.photoURL
                        }
                        alt="user"
                        title={
                          user.displayName
                        }
                        className="hidden md:block w-11 h-11 rounded-full object-cover border-2 border-cyan-500"
                      />
                    ) : (
                      <div
                        title={
                          user.displayName
                        }
                        className="hidden md:flex w-11 h-11 rounded-full border-2 border-cyan-500 bg-cyan-100 dark:bg-slate-800 items-center justify-center text-cyan-600 dark:text-cyan-400 text-lg"
                      >
                        <FaUser />
                      </div>
                    )
                  }

                  {/* Logout */}
                  <button
                    onClick={
                      handleLogout
                    }
                    className="hidden md:block px-5 py-2.5 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {/* Login */}
                  <Link
                    to="/login"
                    className="hidden md:block px-5 py-2.5 rounded-xl bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition"
                  >
                    Login
                  </Link>

                  {/* Register */}
                  <Link
                    to="/register"
                    className="hidden md:block px-5 py-2.5 rounded-xl border border-cyan-500 text-cyan-600 dark:text-cyan-400 font-medium hover:bg-cyan-50 dark:hover:bg-slate-800 transition"
                  >
                    Register
                  </Link>
                </>
              )
            }

            {/* Mobile Menu Button */}
            <button
              onClick={() =>
                setMenuOpen(
                  !menuOpen
                )
              }
              className="flex lg:hidden w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-800 dark:text-white items-center justify-center text-xl"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        user={user}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default Navbar;