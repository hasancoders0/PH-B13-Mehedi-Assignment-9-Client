import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-full">

      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
        ]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        className="h-[85vh]"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/qL1w4mM/young-teacher-giving-lesson-class.jpg')",
            }}
          >
            <div className="bg-black/60 w-full h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 text-white">

                <div className="max-w-2xl animate__animated animate__fadeInUp">
                  
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                    Find The Best Tutor For Your Learning Journey
                  </h1>

                  <p className="text-lg text-slate-200 mb-8 leading-8">
                    Book personalized learning sessions with expert tutors anytime, anywhere.
                  </p>

                  <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold">
                    Explore Tutors
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/0JLPB2B/college-students-studying-together.jpg')",
            }}
          >
            <div className="bg-black/60 w-full h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 text-white">

                <div className="max-w-2xl animate__animated animate__fadeInUp">

                  <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                    Smart Online Tutoring Platform For Students
                  </h1>

                  <p className="text-lg text-slate-200 mb-8 leading-8">
                    Schedule sessions easily and learn from experienced educators.
                  </p>

                  <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/SQdJ6KL/online-class-teacher.jpg')",
            }}
          >
            <div className="bg-black/60 w-full h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 text-white">

                <div className="max-w-2xl animate__animated animate__fadeInUp">

                  <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                    Interactive Sessions With Skilled Tutors
                  </h1>

                  <p className="text-lg text-slate-200 mb-8 leading-8">
                    Improve your skills with flexible schedules and expert guidance.
                  </p>

                  <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold">
                    Book A Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;