import { Link, NavLink } from "react-router-dom";

import toast from "react-hot-toast";

import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const {
    user,
    logoutUser,
  } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();

      toast.success("Logout successful");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-600"
        >
          Tutor Booking
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 font-medium text-slate-700">

          <NavLink to="/">Home</NavLink>

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

          {
            user ? (
              <>
                {/* User Photo */}
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  alt="user"
                  title={user.displayName}
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
                <Link
                  to="/login"
                  className="px-5 py-2 rounded-xl bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-5 py-2 rounded-xl border border-cyan-500 text-cyan-600 font-medium hover:bg-cyan-50 transition"
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