import {
  Link,
} from "react-router-dom";

import {
  FaArrowLeft,
  FaExclamationTriangle,
} from "react-icons/fa";

import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {

  useTitle("404 Not Found");

  return (
    <section className="min-h-screen bg-slate-100 dark:bg-slate-950 flex items-center justify-center px-4 py-10 overflow-hidden transition duration-300">

      <div className="max-w-5xl w-full">

        <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[40px] overflow-hidden shadow-2xl">

          {/* Glow Effects */}
          <div className="absolute -top-20 -left-20 w-[250px] h-[250px] bg-cyan-500/10 blur-[80px] rounded-full"></div>

          <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-blue-500/10 blur-[90px] rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 px-6 md:px-10 lg:px-16 py-16 md:py-20 text-center">

            {/* Icon */}
            <div className="w-24 h-24 mx-auto rounded-[28px] bg-red-500/10 text-red-500 flex items-center justify-center text-5xl mb-8 shadow-lg">

              <FaExclamationTriangle />
            </div>

            {/* Error Code */}
            <h1 className="text-7xl md:text-9xl font-black text-cyan-500 leading-none mb-6">

              404
            </h1>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-5">

              Page Not Found
            </h2>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-8 max-w-2xl mx-auto mb-10">

              Sorry, the page you are looking for
              does not exist, has been moved,
              or the URL may be incorrect.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

              {/* Home */}
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-300 shadow-xl shadow-cyan-500/20"
              >

                <FaArrowLeft />

                Back To Home
              </Link>

              {/* Tutors */}
              <Link
                to="/all-tutors"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-300"
              >

                Explore Tutors
              </Link>
            </div>

            {/* Bottom Text */}
            <div className="mt-12">

              <p className="text-sm text-slate-500 dark:text-slate-400">

                Tutor Booking System © 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;