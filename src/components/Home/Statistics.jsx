import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaSmile,
} from "react-icons/fa";

const Statistics = () => {

  const stats = [

    {
      id: 1,

      icon:
        <FaUserGraduate />,

      number:
        "5K+",

      title:
        "Students",
    },

    {
      id: 2,

      icon:
        <FaChalkboardTeacher />,

      number:
        "500+",

      title:
        "Professional Tutors",
    },

    {
      id: 3,

      icon:
        <FaBookOpen />,

      number:
        "150+",

      title:
        "Subjects",
    },

    {
      id: 4,

      icon:
        <FaSmile />,

      number:
        "98%",

      title:
        "Success Rate",
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-100 dark:bg-slate-950 transition duration-300 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-sm font-semibold mb-5">

            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>

            Trusted Learning Platform
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5">

            Our Achievements
          </h2>

          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-8 text-lg">

            Thousands of students trust our
            platform for quality tutoring and
            personalized learning experiences.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">

          {
            stats.map((stat) => (

              <div
                key={stat.id}
                className="group relative rounded-[30px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-8 text-center overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>

                {/* Icon */}
                <div className="relative w-20 h-20 mx-auto rounded-3xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-3xl mb-7 border border-cyan-500/10 group-hover:scale-110 transition duration-300">

                  {stat.icon}
                </div>

                {/* Number */}
                <h3 className="relative text-5xl font-black text-slate-900 dark:text-white mb-4">

                  {stat.number}
                </h3>

                {/* Title */}
                <p className="relative text-lg text-slate-600 dark:text-slate-300 font-semibold">

                  {stat.title}
                </p>

                {/* Bottom Line */}
                <div className="relative mt-7 mx-auto w-14 h-1 rounded-full bg-cyan-500"></div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Statistics;