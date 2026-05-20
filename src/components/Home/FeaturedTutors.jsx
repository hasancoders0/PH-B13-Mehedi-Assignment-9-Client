import { useEffect, useState } from "react";

import axiosSecure from "../../api/axios";

const FeaturedTutors = () => {

  const [tutors, setTutors] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // Fetch Tutors
  useEffect(() => {

    axiosSecure("/tutors")
      .then((res) => {

        // Show only first 6 tutors
        setTutors(res.data.slice(0, 6));

        setLoading(false);
      })
      .catch((error) => {

        console.log(error);

        setLoading(false);
      });

  }, []);

  // Loading
  if (loading) {
    return (
      <div className="flex justify-center py-20">

        <div className="w-14 h-14 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 bg-slate-100">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Featured Tutors
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our top professional tutors
            for personalized learning.
          </p>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tutors.map((tutor) => (

            <div
              key={tutor._id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-slate-200"
            >

              {/* Image */}
              <img
                src={tutor.image}
                alt={tutor.tutorName}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {tutor.tutorName}
                </h3>

                <p className="text-cyan-600 font-semibold mb-3">
                  {tutor.subject}
                </p>

                <div className="space-y-2 text-slate-600">

                  <p>
                    <span className="font-semibold">
                      Fee:
                    </span>{" "}
                    ৳ {tutor.fee}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Experience:
                    </span>{" "}
                    {tutor.experience}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Mode:
                    </span>{" "}
                    {tutor.mode}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTutors;