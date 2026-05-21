import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import {
  FaArrowRight,
  FaGraduationCap,
  FaBookOpen,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Banner = () => {
  const slides = [
    {
      id: 1,

      title: "Find The Best Tutor For Your Learning Journey",

      description:
        "Book personalized learning sessions with expert tutors anytime, anywhere.",

      button: "Explore Tutors",

      icon: <FaGraduationCap />,
    },

    {
      id: 2,

      title: "Smart Online Tutoring Platform For Students",

      description:
        "Schedule sessions easily and learn from experienced educators.",

      button: "Start Learning",

      icon: <FaBookOpen />,
    },

    {
      id: 3,

      title: "Interactive Sessions With Skilled Tutors",

      description:
        "Improve your skills with flexible schedules and expert guidance.",

      button: "Book A Session",

      icon: <FaChalkboardTeacher />,
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative min-h-[88vh] lg:min-h-screen overflow-hidden flex items-center bg-white dark:bg-slate-950 transition duration-300">
              {/* Background */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Light Mode */}
                <div className="absolute inset-0 dark:hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50"></div>

                {/* Dark Mode */}
                <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"></div>

                {/* Glow Effects */}
                <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[130px] rounded-full"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-cyan-400/10 blur-[100px] rounded-full"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-4 lg:px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    {/* Left Content */}
                    <div>
                      {/* Badge */}
                      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-sm font-semibold mb-7 animate__animated animate__fadeInDown">
                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                        Professional Tutor Platform
                      </div>

                      {/* Title */}
                      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight mb-6 text-slate-900 dark:text-white animate__animated animate__fadeInUp">
                        {slide.title}
                      </h1>

                      {/* Description */}
                      <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-8 max-w-2xl mb-10 animate__animated animate__fadeInUp">
                        {slide.description}
                      </p>

                      {/* Buttons */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate__animated animate__fadeInUp">
                        <button className="group px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 transition duration-300 text-white font-semibold flex items-center gap-3 shadow-xl shadow-cyan-500/20">
                          {slide.button}

                          <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
                        </button>

                        <button className="px-8 py-4 rounded-2xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 transition duration-300 text-slate-700 dark:text-white font-semibold">
                          Learn More
                        </button>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
                        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-5 hover:-translate-y-1 transition duration-300 shadow-lg dark:shadow-none">
                          <h3 className="text-3xl lg:text-4xl font-black text-cyan-500 mb-2">
                            5K+
                          </h3>

                          <p className="text-slate-600 dark:text-slate-300 text-sm">
                            Active Students
                          </p>
                        </div>

                        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-5 hover:-translate-y-1 transition duration-300 shadow-lg dark:shadow-none">
                          <h3 className="text-3xl lg:text-4xl font-black text-cyan-500 mb-2">
                            800+
                          </h3>

                          <p className="text-slate-600 dark:text-slate-300 text-sm">
                            Expert Tutors
                          </p>
                        </div>

                        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-5 hover:-translate-y-1 transition duration-300 shadow-lg dark:shadow-none col-span-2 sm:col-span-1">
                          <h3 className="text-3xl lg:text-4xl font-black text-cyan-500 mb-2">
                            24/7
                          </h3>

                          <p className="text-slate-600 dark:text-slate-300 text-sm">
                            Learning Support
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Icon Box */}
                    <div className="hidden lg:flex justify-center">
                      <div className="relative">
                        {/* Small Glow */}
                        <div className="absolute inset-0 bg-cyan-500/10 blur-[50px] rounded-full"></div>

                        {/* Card */}
                        <div className="relative w-[220px] h-[220px] rounded-[35px] bg-white/70 dark:bg-white/5 backdrop-blur-2xl border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-2xl">
                          <div className="text-[85px] text-cyan-500">
                            {slide.icon}
                          </div>
                        </div>

                        {/* Small Floating Dots */}
                        <div className="absolute -top-5 -right-5 w-6 h-6 rounded-full bg-cyan-500"></div>

                        <div className="absolute -bottom-4 -left-4 w-4 h-4 rounded-full bg-blue-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-slate-950 to-transparent"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Navigation Style */}
      <style>
        {`
          .hero-slider .swiper-button-prev,
          .hero-slider .swiper-button-next {
            width: 48px;
            height: 48px;
            border-radius: 9999px;
            background: rgba(255,255,255,0.75);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.25);
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          }

          .dark .hero-slider .swiper-button-prev,
          .dark .hero-slider .swiper-button-next {
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.08);
          }

          .hero-slider .swiper-button-prev:hover,
          .hero-slider .swiper-button-next:hover {
            background: #06b6d4;
            transform: scale(1.08);
          }

          .hero-slider .swiper-button-prev::after,
          .hero-slider .swiper-button-next::after {
            font-size: 16px;
            font-weight: 700;
            color: #06b6d4;
          }

          .hero-slider .swiper-button-prev:hover::after,
          .hero-slider .swiper-button-next:hover::after {
            color: white;
          }

          .hero-slider .swiper-button-prev {
            left: 18px;
          }

          .hero-slider .swiper-button-next {
            right: 18px;
          }

          .hero-slider .swiper-pagination {
            bottom: 28px !important;
          }

          .hero-slider .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: rgba(148,163,184,0.5);
            opacity: 1;
            transition: all 0.3s ease;
          }

          .hero-slider .swiper-pagination-bullet-active {
            width: 32px;
            border-radius: 999px;
            background: #06b6d4;
          }

          @media (max-width: 768px) {

            .hero-slider .swiper-button-prev,
            .hero-slider .swiper-button-next {
              width: 40px;
              height: 40px;
            }

            .hero-slider .swiper-button-prev::after,
            .hero-slider .swiper-button-next::after {
              font-size: 13px;
            }

            .hero-slider .swiper-button-prev {
              left: 10px;
            }

            .hero-slider .swiper-button-next {
              right: 10px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Banner;
