import toast from "react-hot-toast";

import {
  FaTimes,
  FaMoneyBillWave,
  FaClock,
  FaCalendarAlt,
  FaLaptopHouse,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";

import axiosSecure from "../../api/axios";

import useAuth from "../../hooks/useAuth";

const TutorDetailsModal = ({
  selectedTutor,
  closeModal,
}) => {

  const { user } = useAuth();

  // Default Image
  const defaultImage =
    "https://i.ibb.co/4pDNDk1/avatar.png";

  if (!selectedTutor) return null;

  // Handle Booking
  const handleBookSession = async () => {

    const bookingInfo = {

      tutorId:
        selectedTutor._id,

      tutorName:
        selectedTutor.tutorName,

      image:
        selectedTutor.image,

      subject:
        selectedTutor.subject,

      fee:
        selectedTutor.fee,

      studentEmail:
        user.email,

      bookedAt:
        new Date(),
    };

    try {

      const res =
        await axiosSecure.post(
          "/bookings",
          bookingInfo
        );

      if (res.data.insertedId) {

        toast.success(
          "Session booked successfully"
        );

        closeModal();

      } else {

        toast.error(
          res.data.message
        );
      }

    } catch (error) {

      toast.error(
        error.message
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-6 overflow-y-auto">

      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl animate__animated animate__zoomIn">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition duration-300 shadow-lg"
        >

          <FaTimes />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left Side */}
          <div className="relative h-[320px] lg:h-full overflow-hidden">

            <img
              src={
                selectedTutor.image ||
                defaultImage
              }
              onError={(e) => {
                e.target.src =
                  defaultImage;
              }}
              alt={
                selectedTutor.tutorName
              }
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Tutor Name */}
            <div className="absolute bottom-0 left-0 w-full p-7 text-white">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/10 text-sm font-medium mb-4">

                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>

                Professional Tutor
              </div>

              <h2 className="text-3xl lg:text-4xl font-black mb-2">

                {selectedTutor.tutorName}
              </h2>

              <p className="text-cyan-300 text-lg font-semibold">

                {selectedTutor.subject}
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-6 lg:p-8">

            {/* Header */}
            <div className="mb-8">

              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">

                Tutor Session Details
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-7">

                Review tutor information, teaching schedule,
                session mode, and booking details before confirming.
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Experience */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5">

                <div className="flex items-center gap-3 mb-3">

                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">

                    <FaUserGraduate />
                  </div>

                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">

                    Experience
                  </h4>
                </div>

                <p className="font-bold text-slate-900 dark:text-white">

                  {selectedTutor.experience}
                </p>
              </div>

              {/* Fee */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5">

                <div className="flex items-center gap-3 mb-3">

                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">

                    <FaMoneyBillWave />
                  </div>

                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">

                    Hourly Fee
                  </h4>
                </div>

                <p className="font-bold text-slate-900 dark:text-white">

                  ৳ {selectedTutor.fee}
                </p>
              </div>

              {/* Days */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5">

                <div className="flex items-center gap-3 mb-3">

                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">

                    <FaCalendarAlt />
                  </div>

                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">

                    Available Days
                  </h4>
                </div>

                <p className="font-bold text-slate-900 dark:text-white">

                  {selectedTutor.days}
                </p>
              </div>

              {/* Time */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5">

                <div className="flex items-center gap-3 mb-3">

                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">

                    <FaClock />
                  </div>

                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">

                    Session Time
                  </h4>
                </div>

                <p className="font-bold text-slate-900 dark:text-white">

                  {selectedTutor.time}
                </p>
              </div>

              {/* Mode */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5">

                <div className="flex items-center gap-3 mb-3">

                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">

                    <FaLaptopHouse />
                  </div>

                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">

                    Teaching Mode
                  </h4>
                </div>

                <p className="font-bold text-slate-900 dark:text-white">

                  {selectedTutor.mode}
                </p>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5">

                <div className="flex items-center gap-3 mb-3">

                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">

                    <FaMapMarkerAlt />
                  </div>

                  <h4 className="font-semibold text-slate-700 dark:text-slate-200">

                    Location
                  </h4>
                </div>

                <p className="font-bold text-slate-900 dark:text-white">

                  {selectedTutor.location}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">

              <div className="flex items-center gap-3 mb-3">

                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">

                  <FaChalkboardTeacher />
                </div>

                <h4 className="font-semibold text-slate-800 dark:text-white">

                  Tutor Information
                </h4>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-7">

                Book personalized learning sessions with experienced tutors
                and improve your skills through flexible schedules,
                interactive classes, and professional guidance.
              </p>
            </div>

            {/* Book Button */}
            <button
              onClick={handleBookSession}
              className="mt-8 w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-300 shadow-xl shadow-cyan-500/20"
            >

              Book Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetailsModal;