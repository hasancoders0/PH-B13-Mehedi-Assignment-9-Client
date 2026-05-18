import { FaFacebookF, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">
            Tutor Booking
          </h2>

          <p className="text-sm leading-7">
            Smart online tutor booking platform for students and educators.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Services
          </h3>

          <ul className="space-y-2">
            <li>Online Tutoring</li>
            <li>Private Sessions</li>
            <li>Exam Preparation</li>
            <li>Career Guidance</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact
          </h3>

          <ul className="space-y-2">
            <li>Email: support@tutorbooking.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex items-center gap-4 text-xl">
            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 py-5 text-center text-sm">
        © 2026 Tutor Booking System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;