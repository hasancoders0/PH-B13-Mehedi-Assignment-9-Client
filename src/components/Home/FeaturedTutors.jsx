import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import {
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaUserGraduate,
  FaLaptopHouse,
} from "react-icons/fa";

import axiosSecure from "../../api/axios";

import useAuth from "../../hooks/useAuth";

import TutorDetailsModal from "../../components/AllTutors/TutorDetailsModal";

const FeaturedTutors = () => {

  const { user } = useAuth();

  const [tutors, setTutors] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedTutor, setSelectedTutor] =
    useState(null);

  // Default Image
  const defaultImage =
    "https://i.ibb.co/4pDNDk1/avatar.png";

  // Fetch Tutors
  useEffect(() => {

    axiosSecure("/tutors?limit=6")
      .then((res) => {

        setTutors(res.data);

        setLoading(false);
      })
      .catch((error) => {

        console.log(error);

        setLoading(false);
      });

  }, []);

  // Open Modal
  const handleViewDetails = (tutor) => {

    if (!user) {

      return toast.error(
        "Please login first"
      );
    }

    setSelectedTutor(tutor);
  };

  // Close Modal
  const closeModal = () => {

    setSelectedTutor(null);
  };

  // Loading
  if (loading) {

    return (
      <div className="flex justify-center py-24 bg-slate-100 dark:bg-slate-950 transition duration-300">

        <div className="w-14 h-14 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 bg-slate-100 dark:bg-slate-950 transition duration-300 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-sm font-semibold mb-5">

            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>

            Professional Educators
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5">

            Featured Tutors
          </h2>

          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-8 text-lg">

            Explore our top-rated professional tutors
            for personalized and effective learning experiences.
          </p>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

          {
            tutors.map((tutor) => (

              <div
                key={tutor._id}
                className="group rounded-[28px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >

                {/* Image */}
                <div className="relative overflow-hidden h-56">

                  <img
                    src={
                      tutor.image ||
                      defaultImage
                    }
                    onError={(e) => {
                      e.target.src =
                        defaultImage;
                    }}
                    alt={tutor.tutorName}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Subject Badge */}
                  <div className="absolute top-4 left-4">

                    <div className="px-4 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-cyan-600 dark:text-cyan-400 text-xs font-semibold shadow-md">

                      {tutor.subject}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Top */}
                  <div className="flex items-center justify-between gap-4 mb-5">

                    <div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">

                        {tutor.tutorName}
                      </h3>

                      <p className="text-slate-500 dark:text-slate-400 text-sm">

                        Professional Tutor
                      </p>
                    </div>

                    <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-base shrink-0">

                      <FaChalkboardTeacher />
                    </div>
                  </div>

                  {/* Tutor Info */}
                  <div className="space-y-3">

                    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">

                      <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-sm">

                          <FaMoneyBillWave />
                        </div>

                        <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">

                          Fee
                        </span>
                      </div>

                      <span className="font-bold text-slate-900 dark:text-white text-sm">

                        ৳ {tutor.fee}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">

                      <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-sm">

                          <FaUserGraduate />
                        </div>

                        <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">

                          Experience
                        </span>
                      </div>

                      <span className="font-bold text-slate-900 dark:text-white text-sm">

                        {tutor.experience}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">

                      <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-sm">

                          <FaLaptopHouse />
                        </div>

                        <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">

                          Mode
                        </span>
                      </div>

                      <span className="font-bold text-slate-900 dark:text-white text-sm">

                        {tutor.mode}
                      </span>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() =>
                      handleViewDetails(tutor)
                    }
                    className="w-full mt-6 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-300 shadow-lg shadow-cyan-500/20"
                  >

                    View Details
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* Modal */}
      {
        selectedTutor && (
          <TutorDetailsModal
            selectedTutor={selectedTutor}
            closeModal={closeModal}
          />
        )
      }
    </section>
  );
};

export default FeaturedTutors;