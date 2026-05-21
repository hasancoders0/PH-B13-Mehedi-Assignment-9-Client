import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaLaptopHouse,
  FaClock,
} from "react-icons/fa";

const WhyChooseUs = () => {

  const features = [

    {
      id: 1,

      icon:
        <FaUserGraduate />,

      title:
        "Expert Tutors",

      description:
        "Learn from highly experienced and professional tutors.",
    },

    {
      id: 2,

      icon:
        <FaChalkboardTeacher />,

      title:
        "Personalized Learning",

      description:
        "Customized learning sessions based on student needs.",
    },

    {
      id: 3,

      icon:
        <FaLaptopHouse />,

      title:
        "Online & Offline",

      description:
        "Flexible teaching modes for better convenience.",
    },

    {
      id: 4,

      icon:
        <FaClock />,

      title:
        "Flexible Schedule",

      description:
        "Book sessions according to your preferred time.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900 transition duration-300 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-sm font-semibold mb-5">

            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>

            Why Students Choose Us
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5">

            Why Choose Us
          </h2>

          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-8 text-lg">

            We provide high-quality tutoring
            services designed for effective and
            personalized learning experiences.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">

          {
            features.map((feature) => (

              <div
                key={feature.id}
                className="group relative rounded-[30px] bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>

                {/* Icon */}
                <div className="relative w-20 h-20 rounded-3xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-3xl mb-7 border border-cyan-500/10 group-hover:scale-110 transition duration-300">

                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold text-slate-900 dark:text-white mb-4">

                  {feature.title}
                </h3>

                {/* Description */}
                <p className="relative text-slate-600 dark:text-slate-300 leading-8">

                  {feature.description}
                </p>

                {/* Bottom Line */}
                <div className="relative mt-7 w-14 h-1 rounded-full bg-cyan-500"></div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;