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

      icon: <FaUserGraduate />,

      number: "5K+",

      title: "Students",
    },

    {
      id: 2,

      icon: <FaChalkboardTeacher />,

      number: "500+",

      title: "Professional Tutors",
    },

    {
      id: 3,

      icon: <FaBookOpen />,

      number: "150+",

      title: "Subjects",
    },

    {
      id: 4,

      icon: <FaSmile />,

      number: "98%",

      title: "Success Rate",
    },
  ];

  return (
    <div className="py-20 px-4 bg-slate-100">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Achievements
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Thousands of students trust our
            platform for quality tutoring and
            personalized learning experiences.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat) => (

            <div
              key={stat.id}
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-2xl transition duration-300"
            >

              {/* Icon */}
              <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500 text-white flex items-center justify-center text-3xl mb-6">

                {stat.icon}
              </div>

              {/* Number */}
              <h3 className="text-5xl font-bold text-slate-800 mb-3">
                {stat.number}
              </h3>

              {/* Title */}
              <p className="text-xl text-slate-600 font-medium">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;