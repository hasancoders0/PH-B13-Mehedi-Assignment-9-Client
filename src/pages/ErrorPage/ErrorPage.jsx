import { Link } from "react-router-dom";

const ErrorPage = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

      <div className="text-center">

        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-black text-cyan-500 mb-6">
          404
        </h1>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-slate-600 text-lg max-w-xl mx-auto mb-10">
          Sorry, the page you are looking for
          does not exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-8 py-4 rounded-2xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;