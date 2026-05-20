import toast from "react-hot-toast";

import axiosSecure from "../../api/axios";

import useAuth from "../../hooks/useAuth";

const TutorDetailsModal = ({
  selectedTutor,
  closeModal,
}) => {

  const { user } = useAuth();

  if (!selectedTutor) return null;

  // Handle Booking
  const handleBookSession = async () => {

    const bookingInfo = {
      tutorId: selectedTutor._id,

      tutorName:
        selectedTutor.tutorName,

      image: selectedTutor.image,

      subject:
        selectedTutor.subject,

      fee: selectedTutor.fee,

      studentEmail: user.email,

      bookedAt: new Date(),
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

      toast.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">

      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden relative animate__animated animate__zoomIn">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500 text-white font-bold"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Image */}
          <img
            src={selectedTutor.image}
            alt={selectedTutor.tutorName}
            className="w-full h-full object-cover"
          />

          {/* Content */}
          <div className="p-8">

            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              {selectedTutor.tutorName}
            </h2>

            <p className="text-cyan-600 text-xl font-semibold mb-6">
              {selectedTutor.subject}
            </p>

            <div className="space-y-4 text-slate-700">

              <p>
                <span className="font-bold">
                  Experience:
                </span>{" "}
                {selectedTutor.experience}
              </p>

              <p>
                <span className="font-bold">
                  Days:
                </span>{" "}
                {selectedTutor.days}
              </p>

              <p>
                <span className="font-bold">
                  Time:
                </span>{" "}
                {selectedTutor.time}
              </p>

              <p>
                <span className="font-bold">
                  Mode:
                </span>{" "}
                {selectedTutor.mode}
              </p>

              <p>
                <span className="font-bold">
                  Location:
                </span>{" "}
                {selectedTutor.location}
              </p>

              <p>
                <span className="font-bold">
                  Fee:
                </span>{" "}
                ৳ {selectedTutor.fee}
              </p>
            </div>

            {/* Book Button */}
            <button
              onClick={handleBookSession}
              className="mt-8 w-full py-4 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
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