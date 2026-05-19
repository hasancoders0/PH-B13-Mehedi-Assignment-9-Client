import { useEffect, useState } from "react";

import axiosSecure from "../../api/axios";

import useTitle from "../../hooks/useTitle";

const AllTutors = () => {
  useTitle("All Tutors");

  const [tutors, setTutors] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    axiosSecure("/tutors")
      .then((res) => {
        setTutors(res.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setLoading(false);
      });

  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">

        <span className="loading loading-bars loading-lg text-cyan-500"></span>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 py-14 px-4">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            All Tutors
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Find professional tutors for
            personalized learning sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tutors.map((tutor) => (

            <div
              key={tutor._id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-slate-200"
            >

              <img
                src={tutor.image}
                alt={tutor.tutorName}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {tutor.tutorName}
                </h3>

                <p className="text-cyan-600 font-semibold mb-3">
                  {tutor.subject}
                </p>

                <div className="space-y-2 text-slate-600 mb-5">

                  <p>
                    <span className="font-semibold">
                      Fee:
                    </span>{" "}
                    ৳ {tutor.fee}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Days:
                    </span>{" "}
                    {tutor.days}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Mode:
                    </span>{" "}
                    {tutor.mode}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Location:
                    </span>{" "}
                    {tutor.location}
                  </p>
                </div>

                <button
                  className="w-full py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTutors;