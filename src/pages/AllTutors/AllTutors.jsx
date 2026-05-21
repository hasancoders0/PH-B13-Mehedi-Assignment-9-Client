import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import axiosSecure from "../../api/axios";

import useTitle from "../../hooks/useTitle";
import useAuth from "../../hooks/useAuth";

import TutorDetailsModal from "../../components/AllTutors/TutorDetailsModal";

const AllTutors = () => {

  useTitle("All Tutors");

  const { user } = useAuth();

  const [tutors, setTutors] =
    useState([]);

  const [selectedTutor, setSelectedTutor] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [searchText, setSearchText] =
    useState("");

  const [debouncedSearch, setDebouncedSearch] =
    useState("");

  const [startDate, setStartDate] =
    useState("");

  const [endDate, setEndDate] =
    useState("");

  // Debounce Search
  useEffect(() => {

    const timer = setTimeout(() => {

      setDebouncedSearch(searchText);

    }, 500);

    return () => clearTimeout(timer);

  }, [searchText]);

  // Fetch Tutors
  useEffect(() => {

    setLoading(true);

    axiosSecure(
      `/tutors?search=${debouncedSearch}&startDate=${startDate}&endDate=${endDate}`
    )
      .then((res) => {

        setTutors(res.data);

        setLoading(false);
      })
      .catch((error) => {

        console.log(error);

        setLoading(false);
      });

  }, [
    debouncedSearch,
    startDate,
    endDate,
  ]);

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
      <div className="min-h-screen flex items-center justify-center">

        <div className="w-14 h-14 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 py-14 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            All Tutors
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Find professional tutors for
            personalized learning sessions.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-6">

          <input
            type="text"
            placeholder="Search by tutor name..."
            value={searchText}
            onChange={(e) =>
              setSearchText(e.target.value)
            }
            className="w-full px-6 py-4 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500"
          />
        </div>

        {/* Date Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">

          {/* Start Date */}
          <input
            type="date"
            value={startDate}
            onChange={(e) =>
              setStartDate(e.target.value)
            }
            className="flex-1 px-6 py-4 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500"
          />

          {/* End Date */}
          <input
            type="date"
            value={endDate}
            onChange={(e) =>
              setEndDate(e.target.value)
            }
            className="flex-1 px-6 py-4 rounded-2xl border border-slate-300 outline-none focus:border-cyan-500"
          />
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
                      Session Date:
                    </span>{" "}
                    {tutor.sessionDate}
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={() =>
                    handleViewDetails(tutor)
                  }
                  className="w-full py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty */}
        {tutors.length === 0 && (

          <div className="bg-white rounded-2xl shadow-md p-10 text-center mt-10">

            <h3 className="text-3xl font-bold text-slate-700 mb-4">
              No Tutors Found
            </h3>

            <p className="text-slate-500">
              Try another search or date range.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      <TutorDetailsModal
        selectedTutor={selectedTutor}
        closeModal={closeModal}
      />
    </div>
  );
};

export default AllTutors;