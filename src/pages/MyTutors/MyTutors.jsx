import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

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

        setTutors(remainingTutors);

        closeModal();
      }

    } catch (error) {

      toast.error(error.message);
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
        {tutors.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-md p-10 text-center">

            <h3 className="text-3xl font-bold text-slate-700 mb-4">
              No Tutors Found
            </h3>

            <p className="text-slate-500">
              You have not added any tutor yet.
            </p>
          </div>

        ) : (

          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">

            <table className="table">

              {/* Head */}
              <thead className="bg-cyan-500 text-white">

                <tr>

                  <th>#</th>

                  <th>Image</th>

                  <th>Tutor Name</th>

                  <th>Subject</th>

                  <th>Fee</th>

                  <th>Slots</th>

                  <th>Session Date</th>

                  <th>Mode</th>

                  <th>Actions</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>

                {tutors.map(
                  (tutor, index) => (

                    <tr key={tutor._id}>

                      <td>
                        {index + 1}
                      </td>

                      <td>

                        <img
                          src={tutor.image}
                          alt={tutor.tutorName}
                          className="w-16 h-16 rounded-xl object-cover"
                        />
                      </td>

                      <td className="font-semibold">
                        {tutor.tutorName}
                      </td>

                      <td>
                        {tutor.subject}
                      </td>

                      <td>
                        ৳ {tutor.fee}
                      </td>

                      <td>
                        {tutor.totalSlots}
                      </td>

                      <td>
                        {tutor.sessionDate}
                      </td>

                      <td>
                        {tutor.mode}
                      </td>

                      <td>

                        <div className="flex gap-2">

                          {/* Update */}
                          <button
                            onClick={() =>
                              openUpdateModal(
                                tutor
                              )
                            }
                            className="px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition"
                          >
                            Update
                          </button>

                          {/* Delete */}
                          <button
                            onClick={() =>
                              openDeleteModal(
                                tutor._id
                              )
                            }
                            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
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
    </div>
  );
};

export default MyTutors;