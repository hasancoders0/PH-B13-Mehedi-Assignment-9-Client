import {
  NavLink,
  Link,
} from "react-router-dom";

import {
  FaTimes,
  FaBookOpen,
  FaPlusCircle,
  FaClipboardList,
  FaChalkboardTeacher,
} from "react-icons/fa";

const MobileMenu = ({
  menuOpen,
  setMenuOpen,
  user,
  handleLogout,
}) => {

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() =>
          setMenuOpen(false)
        }
        className={`fixed inset-0 bg-black/50 z-40 transition duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[300px] bg-white dark:bg-slate-900 z-50 shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-slate-200 dark:border-slate-700">

          <div className="flex items-center gap-2 text-cyan-500 text-xl font-bold">

            <FaBookOpen />

            Tutor Booking
          </div>

          <button
            onClick={() =>
              setMenuOpen(false)
            }
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 dark:text-white flex items-center justify-center"
          >
            <FaTimes />
          </button>
        </div>

        {/* User */}
        {
          user && (
            <div className="px-5 py-6 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">

              <img
                src={
                  user.photoURL ||
                  "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                alt="user"
                className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500"
              />

              <div>
                <h3 className="font-semibold text-slate-800 dark:text-white">
                  {
                    user.displayName
                  }
                </h3>

                <p className="text-sm text-slate-500 break-all">
                  {user.email}
                </p>
              </div>
            </div>
          )
        }

        {/* Nav Links */}
        <div className="flex flex-col px-5 py-6 gap-4">

          <NavLink
            to="/"
            onClick={() =>
              setMenuOpen(false)
            }
            className="flex items-center gap-3 text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-500 transition"
          >
            <FaBookOpen />

            Home
          </NavLink>

          <NavLink
            to="/all-tutors"
            onClick={() =>
              setMenuOpen(false)
            }
            className="flex items-center gap-3 text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-500 transition"
          >
            <FaChalkboardTeacher />

            Tutors
          </NavLink>

          {
            user && (
              <>
                <NavLink
                  to="/add-tutor"
                  onClick={() =>
                    setMenuOpen(
                      false
                    )
                  }
                  className="flex items-center gap-3 text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-500 transition"
                >
                  <FaPlusCircle />

                  Add Tutor
                </NavLink>

                <NavLink
                  to="/my-tutors"
                  onClick={() =>
                    setMenuOpen(
                      false
                    )
                  }
                  className="flex items-center gap-3 text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-500 transition"
                >
                  <FaClipboardList />

                  My Tutors
                </NavLink>

                <NavLink
                  to="/my-booked-sessions"
                  onClick={() =>
                    setMenuOpen(
                      false
                    )
                  }
                  className="flex items-center gap-3 text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-500 transition"
                >
                  <FaClipboardList />

                  My Sessions
                </NavLink>
              </>
            )
          }
        </div>

        {/* Bottom Auth */}
        <div className="absolute bottom-0 left-0 w-full p-5 border-t border-slate-200 dark:border-slate-700">

          {
            user ? (
              <button
                onClick={
                  handleLogout
                }
                className="w-full py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <div className="flex flex-col gap-3">

                <Link
                  to="/login"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="w-full py-3 rounded-xl bg-cyan-500 text-center text-white font-medium hover:bg-cyan-600 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="w-full py-3 rounded-xl border border-cyan-500 text-center text-cyan-600 dark:text-cyan-400 font-medium hover:bg-cyan-50 dark:hover:bg-slate-800 transition"
                >
                  Register
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default MobileMenu;