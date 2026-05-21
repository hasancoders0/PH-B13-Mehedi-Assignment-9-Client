import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import {
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";

import axiosSecure from "../../api/axios";

import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

import DeleteConfirmModal from "../../components/MyTutors/DeleteConfirmModal";

import UpdateTutorModal from "../../components/MyTutors/UpdateTutorModal";

const MyTutors = () => {

  useTitle("My Tutors");

  const { user } = useAuth();

  const [tutors, setTutors] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // Delete Modal States
  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [selectedTutorId, setSelectedTutorId] =
    useState(null);

  // Update Modal States
  const [isUpdateModalOpen, setIsUpdateModalOpen] =
    useState(false);

  const [selectedTutor, setSelectedTutor] =
    useState(null);

  // Default Image
  const defaultImage =
    "https://i.ibb.co/4pDNDk1/avatar.png";

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

  // Open Delete Modal
  const openDeleteModal = (id) => {

    setSelectedTutorId(id);

    setIsModalOpen(true);
  };

  // Close Delete Modal
  const closeModal = () => {

    setSelectedTutorId(null);

    setIsModalOpen(false);
  };

  // Confirm Delete
  const confirmDelete = async () => {

    try {

      const res =
        await axiosSecure.delete(
          `/tutors/${selectedTutorId}`
        );

      if (res.data.deletedCount > 0) {

        toast.success(
          "Tutor deleted successfully"
        );

        const remainingTutors =
          tutors.filter(
            (tutor) =>
              tutor._id !==
              selectedTutorId
          );

        setTutors(
          remainingTutors
        );

        closeModal();
      }

    } catch (error) {

      toast.error(
        error.message
      );
    }
  };

  // Open Update Modal
  const openUpdateModal = (tutor) => {

    setSelectedTutor(tutor);

    setIsUpdateModalOpen(true);
  };

  // Close Update Modal
  const closeUpdateModal = () => {

    setSelectedTutor(null);

    setIsUpdateModalOpen(false);
  };

  // Loading
  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950">

        <div className="w-14 h-14 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="bg-slate-100 dark:bg-slate-950 min-h-screen py-16 px-4 transition duration-300 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-sm font-semibold mb-5">

            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>

            Tutor Management
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5">

            My Tutors
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-lg">

            Manage your added tutor sessions.
          </p>
        </div>

        {/* Empty State */}
        {
          tutors.length === 0 ? (

            <div className="bg-white dark:bg-slate-900 rounded-[30px] border border-slate-200 dark:border-white/10 shadow-xl p-12 text-center">

              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">

                No Tutors Found
              </h3>

              <p className="text-slate-500 dark:text-slate-400">

                You have not added any tutor yet.
              </p>
            </div>

          ) : (

            <div className="overflow-x-auto rounded-[30px] border border-slate-200 dark:border-white/10 shadow-xl bg-white dark:bg-slate-900">

              <table className="w-full min-w-[1000px]">

                {/* Head */}
                <thead className="bg-cyan-500 text-white">

                  <tr>

                    <th className="px-6 py-5 text-left">
                      #
                    </th>

                    <th className="px-6 py-5 text-left">
                      Tutor
                    </th>

                    <th className="px-6 py-5 text-left">
                      Subject
                    </th>

                    <th className="px-6 py-5 text-left">
                      Fee
                    </th>

                    <th className="px-6 py-5 text-left">
                      Slots
                    </th>

                    <th className="px-6 py-5 text-left">
                      Session Date
                    </th>

                    <th className="px-6 py-5 text-left">
                      Mode
                    </th>

                    <th className="px-6 py-5 text-center">
                      Actions
                    </th>
                  </tr>
                </thead>

                {/* Body */}
                <tbody>

                  {
                    tutors.map(
                      (
                        tutor,
                        index
                      ) => (

                        <tr
                          key={tutor._id}
                          className="border-b border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition"
                        >

                          <td className="px-6 py-5 font-semibold text-slate-700 dark:text-slate-200">

                            {index + 1}
                          </td>

                          {/* Tutor */}
                          <td className="px-6 py-5">

                            <div className="flex items-center gap-4">

                              <img
                                src={
                                  tutor.image ||
                                  defaultImage
                                }
                                onError={(e) => {
                                  e.target.src =
                                    defaultImage;
                                }}
                                alt={
                                  tutor.tutorName
                                }
                                className="w-14 h-14 rounded-2xl object-cover border border-slate-200 dark:border-white/10"
                              />

                              <div>

                                <h3 className="font-bold text-slate-900 dark:text-white">

                                  {tutor.tutorName}
                                </h3>

                                <p className="text-sm text-slate-500 dark:text-slate-400">

                                  Professional Tutor
                                </p>
                              </div>
                            </div>
                          </td>

                          {/* Subject */}
                          <td className="px-6 py-5">

                            <div className="inline-flex px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-semibold">

                              {tutor.subject}
                            </div>
                          </td>

                          {/* Fee */}
                          <td className="px-6 py-5 font-semibold text-slate-700 dark:text-slate-200">

                            ৳ {tutor.fee}
                          </td>

                          {/* Slots */}
                          <td className="px-6 py-5 font-semibold text-slate-700 dark:text-slate-200">

                            {tutor.totalSlots}
                          </td>

                          {/* Date */}
                          <td className="px-6 py-5 text-slate-700 dark:text-slate-200">

                            {tutor.sessionDate}
                          </td>

                          {/* Mode */}
                          <td className="px-6 py-5">

                            <span className="inline-flex px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium">

                              {tutor.mode}
                            </span>
                          </td>

                          {/* Actions */}
                          <td className="px-6 py-5">

                            <div className="flex items-center justify-center gap-3">

                              {/* Update */}
                              <button
                                onClick={() =>
                                  openUpdateModal(
                                    tutor
                                  )
                                }
                                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-300 flex items-center gap-2"
                              >

                                <FaEdit />

                                Update
                              </button>

                              {/* Delete */}
                              <button
                                onClick={() =>
                                  openDeleteModal(
                                    tutor._id
                                  )
                                }
                                className="px-5 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition duration-300 flex items-center gap-2"
                              >

                                <FaTrashAlt />

                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    )
                  }
                </tbody>
              </table>
            </div>
          )
        }
      </div>

      {/* Delete Modal */}
      <DeleteConfirmModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        confirmDelete={confirmDelete}
      />

      {/* Update Modal */}
      <UpdateTutorModal
        isOpen={isUpdateModalOpen}
        closeModal={closeUpdateModal}
        selectedTutor={selectedTutor}
        tutors={tutors}
        setTutors={setTutors}
      />
    </section>
  );
};

export default MyTutors;