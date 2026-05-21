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

const Login = () => {

  useTitle("Login");

  const {
    loginUser,
    googleLogin,
  } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state || "/";

  // Email Login
  const handleLogin = async (e) => {

    e.preventDefault();

    const form = e.target;

    const email =
      form.email.value;

    const password =
      form.password.value;

    try {

      const result =
        await loginUser(
          email,
          password
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
        "Login successful"
      );

      navigate(from);

    } catch (error) {

      toast.error(error.message);
    }
  };

  // Google Login
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
          Login
        </h2>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

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

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
          >
            Login
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

        <p className="text-center text-slate-600 dark:text-slate-400 mt-6">

          Don&apos;t have an account?{" "}

          <Link
            to="/register"
            className="text-cyan-600 dark:text-cyan-400 font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
;

export default Login;