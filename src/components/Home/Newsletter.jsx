import toast from "react-hot-toast";

import {
  FaPaperPlane,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const Newsletter = () => {

  const handleSubscribe = (e) => {

    e.preventDefault();

    toast.success(
      "Subscribed successfully"
    );

    e.target.reset();
  };

  return (
    <section className="py-20 px-4 bg-slate-100 dark:bg-slate-950 transition duration-300 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-2xl">

          {/* Glow Effects */}
          <div className="absolute -top-20 -left-20 w-[250px] h-[250px] bg-white/10 blur-[80px] rounded-full"></div>

          <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-blue-500/20 blur-[90px] rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-10 lg:px-16 py-14 lg:py-16">

            {/* Left Side */}
            <div className="text-white">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm font-semibold mb-6">

                <span className="w-2 h-2 rounded-full bg-white"></span>

                Weekly Learning Updates
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">

                Subscribe To Our Newsletter
              </h2>

              {/* Description */}
              <p className="text-cyan-50 text-lg leading-8 max-w-xl">

                Get the latest tutor updates,
                educational tips, and learning
                resources directly to your inbox.
              </p>

              {/* Small Features */}
              <div className="flex flex-wrap gap-4 mt-8">

                <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md text-sm font-medium">

                  Tutor Updates
                </div>

                <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md text-sm font-medium">

                  Learning Tips
                </div>

                <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md text-sm font-medium">

                  Study Resources
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative">

              {/* Card */}
              <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 md:p-10 shadow-2xl border border-white/10">

                {/* Icon */}
                <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-3xl mb-7">

                  <FaEnvelopeOpenText />
                </div>

                {/* Heading */}
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">

                  Stay Connected
                </h3>

                <p className="text-slate-600 dark:text-slate-300 leading-7 mb-8">

                  Join our newsletter and receive
                  helpful educational content and
                  tutor recommendations every week.
                </p>

                {/* Form */}
                <form
                  onSubmit={handleSubscribe}
                  className="space-y-5"
                >

                  {/* Input */}
                  <div className="relative">

                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 outline-none text-slate-700 dark:text-white transition"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-300 flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/20"
                  >

                    Subscribe Now

                    <FaPaperPlane />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;