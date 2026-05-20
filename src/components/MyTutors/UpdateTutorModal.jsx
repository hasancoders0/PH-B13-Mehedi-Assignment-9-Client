import { useState } from "react";

import toast from "react-hot-toast";

import axiosSecure from "../../api/axios";

const UpdateTutorModal = ({
  isOpen,
  closeModal,
  selectedTutor,
  tutors,
  setTutors,
}) => {

  const [loading, setLoading] =
    useState(false);

  if (!isOpen || !selectedTutor)
    return null;

  // Handle Update
  const handleUpdateTutor = async (e) => {

    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const updatedTutor = {

      tutorName:
        form.tutorName.value,

      image:
        form.image.value,

      subject:
        form.subject.value,

      days:
        form.days.value,

      time:
        form.time.value,

      fee:
        form.fee.value,

      totalSlots:
        form.totalSlots.value,

      experience:
        form.experience.value,

      location:
        form.location.value,

      mode:
        form.mode.value,
    };

    try {

      const res =
        await axiosSecure.put(
          `/tutors/${selectedTutor._id}`,
          updatedTutor
        );

      if (res.data.modifiedCount > 0) {

        toast.success(
          "Tutor updated successfully"
        );

        // Update UI instantly
        const updatedTutors =
          tutors.map((tutor) =>

            tutor._id ===
            selectedTutor._id
              ? {
                  ...tutor,
                  ...updatedTutor,
                }
              : tutor
          );

        setTutors(updatedTutors);

        closeModal();
      }

    } catch (error) {

      toast.error(error.message);

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4 overflow-y-auto py-10">

      <div className="bg-white rounded-2xl max-w-4xl w-full p-8 animate__animated animate__zoomIn relative">

        {/* Close */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500 text-white font-bold"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-10">
          Update Tutor
        </h2>

        {/* Form */}
        <form
          onSubmit={handleUpdateTutor}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Tutor Name */}
          <div>
            <label className="block mb-2 font-medium">
              Tutor Name
            </label>

            <input
              type="text"
              name="tutorName"
              defaultValue={
                selectedTutor.tutorName
              }
              required
              className="w-full px-4 py-3 border rounded-xl outline-none"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block mb-2 font-medium">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              defaultValue={
                selectedTutor.image
              }
              required
              className="w-full px-4 py-3 border rounded-xl outline-none"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-2 font-medium">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              defaultValue={
                selectedTutor.subject
              }
              required
              className="w-full px-4 py-3 border rounded-xl outline-none"
            />
          </div>

          {/* Days */}
          <div>
            <label className="block mb-2 font-medium">
              Days
            </label>

            <input
              type="text"
              name="days"
              defaultValue={
                selectedTutor.days
              }
              required
              className="w-full px-4 py-3 border rounded-xl outline-none"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block mb-2 font-medium">
              Time
            </label>

            <input
              type="text"
              name="time"
              defaultValue={
                selectedTutor.time
              }
              required
              className="w-full px-4 py-3 border rounded-xl outline-none"
            />
          </div>

          {/* Fee */}
          <div>
            <label className="block mb-2 font-medium">
              Fee
            </label>

            <input
              type="number"
              name="fee"
              defaultValue={
                selectedTutor.fee
              }
              required
              className="w-full px-4 py-3 border rounded-xl outline-none"
            />
          </div>

          {/* Slots */}
          <div>
            <label className="block mb-2 font-medium">
              Total Slots
            </label>

            <input
              type="number"
              name="totalSlots"
              defaultValue={
                selectedTutor.totalSlots
              }
              required
              className="w-full px-4 py-3 border rounded-xl outline-none"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-2 font-medium">
              Experience
            </label>

            <input
              type="text"
              name="experience"
              defaultValue={
                selectedTutor.experience
              }
              required
              className="w-full px-4 py-3 border rounded-xl outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-medium">
              Location
            </label>

            <input
              type="text"
              name="location"
              defaultValue={
                selectedTutor.location
              }
              required
              className="w-full px-4 py-3 border rounded-xl outline-none"
            />
          </div>

          {/* Mode */}
          <div>
            <label className="block mb-2 font-medium">
              Teaching Mode
            </label>

            <select
              name="mode"
              defaultValue={
                selectedTutor.mode
              }
              required
              className="w-full px-4 py-3 border rounded-xl outline-none"
            >
              <option value="Online">
                Online
              </option>

              <option value="Offline">
                Offline
              </option>

              <option value="Both">
                Both
              </option>
            </select>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
            >
              {
                loading
                  ? "Updating..."
                  : "Update Tutor"
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTutorModal;