import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle("Register");

  const {
    createUser,
    updateUserProfile,
  } = useAuth();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;

    const email = form.email.value;

    const photo = form.photo.value;

    const password = form.password.value;

    // Password Validation
    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password must contain an uppercase letter"
      );
    }

    if (!/[a-z]/.test(password)) {
      return toast.error(
        "Password must contain a lowercase letter"
      );
    }

    if (password.length < 6) {
      return toast.error(
        "Password must be at least 6 characters"
      );
    }

    try {
      // Create User
      await createUser(email, password);

      // Update User Profile
      await updateUserProfile({
        displayName: name,
        photoURL: photo,
      });

      toast.success("Registration successful");

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-slate-200">

        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Register
        </h2>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Photo URL
            </label>

            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
          >
            Register
          </button>

          <p className="text-center text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-cyan-600 font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;