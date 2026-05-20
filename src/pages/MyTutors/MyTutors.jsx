import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import axiosSecure from "../../api/axios";

import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const MyTutors = () => {
  useTitle("My Tutors");

  const { user } = useAuth();

  const [tutors, setTutors] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // Fetch My Tutors
  useEffect(() => {

    if (user?.email) {

      axiosSecure(
        `/my-tutors?email=${user.email}`
      )
        .then((res) => {

          setTutors(res.data);

          setLoading(false);
        })
        .catch((error) => {

          console.log(error);

          setLoading(false);
        });
    }

  }, [user]);

  // Delete Tutor
  const handleDeleteTutor = async (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this tutor?"
      );

    if (!confirmDelete) return;

    try {

      const res =
        await axiosSecure.delete(
          `/tutors/${id}`
        );

      if (res.data.deletedCount > 0) {

        toast.success(
          "Tutor deleted successfully"
        );

        const remainingTutors =
          tutors.filter(
            (tutor) => tutor._id !== id
          );

        setTutors(remainingTutors);
      }

    } catch (error) {

      toast.error(error.message);
    }
  };

  // Loading Spinner
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">

        <div className="w-14 h-14 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen py-14 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            My Tutors
          </h2>

          <p className="text-slate-600">
            Manage your added tutor sessions.
          </p>
        </div>

        {/* Empty State */}
        {tutors.length === 0 && (

          <div className="bg-white rounded-2xl shadow-md p-10 text-center">

            <h3 className="text-3xl font-bold text-slate-700 mb-4">
              No Tutors Found
            </h3>

            <p className="text-slate-500">
              You have not added any tutor yet.
            </p>
          </div>
        )}

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

                <p className="text-cyan-600 font-semibold mb-4">
                  {tutor.subject}
                </p>

                <div className="space-y-3 text-slate-600">

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
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-3">

                  <button
                    className="w-full py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
                  >
                    Update
                  </button>

                  <button
                    onClick={() =>
                      handleDeleteTutor(
                        tutor._id
                      )
                    }
                    className="w-full py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTutors;