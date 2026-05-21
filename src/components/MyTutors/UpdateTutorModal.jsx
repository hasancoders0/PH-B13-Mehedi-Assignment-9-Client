import { useState } from "react";

import toast from "react-hot-toast";

import {
  FaTimes,
  FaUserTie,
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaMoneyBillWave,
  FaLayerGroup,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLaptopHouse,
  FaImage,
} from "react-icons/fa";

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

      institution:
        form.institution.value,

      mode:
        form.mode.value,

      sessionDate:
        form.sessionDate.value,
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

  // Reusable Input Style
  const inputStyle =
    "w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-800 text-slate-800 dark:text-white outline-none focus:border-cyan-500 transition";

  // Label Style
  const labelStyle =
    "flex items-center gap-2 mb-2 font-semibold text-slate-700 dark:text-slate-200";

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 py-8 overflow-y-auto">

      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border border-slate-200 dark:border-white/10 animate__animated animate__fadeInUp">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 w-11 h-11 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition"
        >
          <FaTimes />
        </button>

        {/* Header */}
        <div className="p-8 md:p-10 border-b border-slate-200 dark:border-white/10">

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3">

            Update Tutor
          </h2>

          <p className="text-slate-600 dark:text-slate-400">

            Edit tutor information and update the learning session details.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleUpdateTutor}
          className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Tutor Name */}
          <div>

            <label className={labelStyle}>

              <FaUserTie />

              Tutor Name
            </label>

            <input
              type="text"
              name="tutorName"
              defaultValue={
                selectedTutor.tutorName
              }
              required
              className={inputStyle}
            />
          </div>

          {/* Image */}
          <div>

            <label className={labelStyle}>

              <FaImage />

              Photo URL
            </label>

            <input
              type="text"
              name="image"
              defaultValue={
                selectedTutor.image
              }
              required
              className={inputStyle}
            />
          </div>

          {/* Subject */}
          <div>

            <label className={labelStyle}>

              <FaBookOpen />

              Subject
            </label>

            <input
              type="text"
              name="subject"
              defaultValue={
                selectedTutor.subject
              }
              required
              className={inputStyle}
            />
          </div>

          {/* Days */}
          <div>

            <label className={labelStyle}>

              <FaCalendarAlt />

              Available Days
            </label>

            <input
              type="text"
              name="days"
              defaultValue={
                selectedTutor.days
              }
              required
              className={inputStyle}
            />
          </div>

          {/* Time */}
          <div>

            <label className={labelStyle}>

              <FaClock />

              Time Slot
            </label>

            <input
              type="text"
              name="time"
              defaultValue={
                selectedTutor.time
              }
              required
              className={inputStyle}
            />
          </div>

          {/* Fee */}
          <div>

            <label className={labelStyle}>

              <FaMoneyBillWave />

              Hourly Fee
            </label>

            <input
              type="number"
              name="fee"
              defaultValue={
                selectedTutor.fee
              }
              required
              className={inputStyle}
            />
          </div>

          {/* Slots */}
          <div>

            <label className={labelStyle}>

              <FaLayerGroup />

              Total Slots
            </label>

            <input
              type="number"
              name="totalSlots"
              defaultValue={
                selectedTutor.totalSlots
              }
              required
              className={inputStyle}
            />
          </div>

          {/* Experience */}
          <div>

            <label className={labelStyle}>

              <FaGraduationCap />

              Experience
            </label>

            <input
              type="text"
              name="experience"
              defaultValue={
                selectedTutor.experience
              }
              required
              className={inputStyle}
            />
          </div>

          {/* Institution */}
          <div>

            <label className={labelStyle}>

              <FaGraduationCap />

              Institution
            </label>

            <input
              type="text"
              name="institution"
              defaultValue={
                selectedTutor.institution
              }
              required
              className={inputStyle}
            />
          </div>

          {/* Location */}
          <div>

            <label className={labelStyle}>

              <FaMapMarkerAlt />

              Location
            </label>

            <input
              type="text"
              name="location"
              defaultValue={
                selectedTutor.location
              }
              required
              className={inputStyle}
            />
          </div>

          {/* Teaching Mode */}
          <div>

            <label className={labelStyle}>

              <FaLaptopHouse />

              Teaching Mode
            </label>

            <select
              name="mode"
              defaultValue={
                selectedTutor.mode
              }
              required
              className={inputStyle}
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

          {/* Session Date */}
          <div>

            <label className={labelStyle}>

              <FaCalendarAlt />

              Session Start Date
            </label>

            <input
              type="date"
              name="sessionDate"
              defaultValue={
                selectedTutor.sessionDate
              }
              required
              className={inputStyle}
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 pt-2">

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg transition duration-300"
            >
              {
                loading
                  ? "Updating Tutor..."
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