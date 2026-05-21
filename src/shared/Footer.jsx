import {
  FaFacebookF,
  FaGithub,
  FaYoutube,
  FaGraduationCap,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import {
  FaXTwitter,
  FaLocationDot,
} from "react-icons/fa6";

import {
  Link,
} from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition duration-300">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>

          <div className="flex items-center gap-3 mb-5">

            <div className="w-14 h-14 rounded-2xl bg-cyan-500 text-white flex items-center justify-center text-2xl shadow-lg">

              <FaGraduationCap />
            </div>

            <div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                Tutor Booking
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Smart Learning Platform
              </p>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-7 text-sm">
            A modern tutor booking platform helping students connect with expert tutors for better learning experiences.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition duration-300"
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition duration-300"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-slate-600 dark:text-slate-400">

            <li>
              <Link
                to="/"
                className="hover:text-cyan-500 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/all-tutors"
                className="hover:text-cyan-500 transition"
              >
                All Tutors
              </Link>
            </li>

            <li>
              <Link
                to="/add-tutor"
                className="hover:text-cyan-500 transition"
              >
                Add Tutor
              </Link>
            </li>

            <li>
              <Link
                to="/my-tutors"
                className="hover:text-cyan-500 transition"
              >
                My Tutors
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
            Services
          </h3>

          <ul className="space-y-4 text-slate-600 dark:text-slate-400">

            <li>
              Online Tutoring
            </li>

            <li>
              Private Sessions
            </li>

            <li>
              Exam Preparation
            </li>

            <li>
              Career Guidance
            </li>

            <li>
              Skill Development
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
            Contact Info
          </h3>

          <div className="space-y-5">

            <div className="flex items-start gap-4">

              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-lg">

                <FaEnvelope />
              </div>

              <div>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Email
                </p>

                <h4 className="font-medium text-slate-700 dark:text-slate-200">
                  support@tutorbooking.com
                </h4>
              </div>
            </div>

            <div className="flex items-start gap-4">

              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-lg">

                <FaPhoneAlt />
              </div>

              <div>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Phone
                </p>

                <h4 className="font-medium text-slate-700 dark:text-slate-200">
                  +880 1234-567890
                </h4>
              </div>
            </div>

            <div className="flex items-start gap-4">

              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-lg">

                <FaLocationDot />
              </div>

              <div>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Location
                </p>

                <h4 className="font-medium text-slate-700 dark:text-slate-200">
                  Dhaka, Bangladesh
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-200 dark:border-slate-800">

        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-left">
            © 2026 Tutor Booking System. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">

            <a
              href="#"
              className="hover:text-cyan-500 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-cyan-500 transition"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;