import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import { FcGoogle } from "react-icons/fc";

import axiosSecure from "../../api/axios";

import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const Register = () => {

  useTitle("Register");

  const {
    createUser,
    googleLogin,
    updateUserProfile,
  } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state || "/";

  // Register
  const handleRegister = async (e) => {

    e.preventDefault();

    const form = e.target;

    const name =
      form.name.value;

    const photo =
      form.photo.value;

    const email =
      form.email.value;

    const password =
      form.password.value;

    // Password Validation
    if (password.length < 6) {

      return toast.error(
        "Password must be at least 6 characters"
      );
    }

    try {

      // Create User
      const result =
        await createUser(
          email,
          password
        );

      // Update Profile
      await updateUserProfile(
        name,
        photo
      );

      // JWT Token
      const userInfo = {
        email:
          result.user.email,
      };

      const jwtRes =
        await axiosSecure.post(
          "/jwt",
          userInfo
        );

      localStorage.setItem(
        "access-token",
        jwtRes.data.token
      );

      toast.success(
        "Registration successful"
      );

      navigate(from);

    } catch (error) {

      toast.error(error.message);
    }
  };

  // Google Register/Login
  const handleGoogleLogin =
    async () => {

      try {

        const result =
          await googleLogin();

        // JWT Token
        const userInfo = {
          email:
            result.user.email,
        };

        const jwtRes =
          await axiosSecure.post(
            "/jwt",
            userInfo
          );

        localStorage.setItem(
          "access-token",
          jwtRes.data.token
        );

        toast.success(
          "Google login successful"
        );

        navigate(from);

      } catch (error) {

        toast.error(error.message);
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 px-4 transition">

      <div className="w-full max-w-md bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">

        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-6">
          Register
        </h2>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          {/* Name */}
          <div>

            <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Photo URL */}
          <div>

            <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
              Photo URL
            </label>

            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              required
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Email */}
          <div>

            <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Password */}
          <div>

            <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">

          <div className="flex-1 h-[1px] bg-slate-300 dark:bg-slate-700"></div>

          <span className="text-slate-500 dark:text-slate-400 text-sm">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-slate-300 dark:bg-slate-700"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 rounded-xl border border-slate-300 dark:border-slate-700 dark:text-white flex items-center justify-center gap-3 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition"
        >

          <FcGoogle size={24} />

          Continue with Google
        </button>

        {/* Login Redirect */}
        <p className="text-center text-slate-600 dark:text-slate-400 mt-6">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-cyan-600 dark:text-cyan-400 font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;