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

      icon: <FaUserGraduate />,

      title: "Expert Tutors",

      description:
        "Learn from highly experienced and professional tutors.",
    },

    {
      id: 2,

      icon: <FaChalkboardTeacher />,

      title: "Personalized Learning",

      description:
        "Customized learning sessions based on student needs.",
    },

    {
      id: 3,

      icon: <FaLaptopHouse />,

      title: "Online & Offline",

      description:
        "Flexible teaching modes for better convenience.",
    },

    {
      id: 4,

      icon: <FaClock />,

      title: "Flexible Schedule",

      description:
        "Book sessions according to your preferred time.",
    },
  ];

  return (
    <div className="py-20 px-4 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Why Choose Us
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide high-quality tutoring
            services designed for effective and
            personalized learning experiences.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (

            <div
              key={feature.id}
              className="bg-slate-100 rounded-2xl p-8 text-center hover:shadow-xl transition duration-300"
            >

              {/* Icon */}
              <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500 text-white flex items-center justify-center text-3xl mb-6">

                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;