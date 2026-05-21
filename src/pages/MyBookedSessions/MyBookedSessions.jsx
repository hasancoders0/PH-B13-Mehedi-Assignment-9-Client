import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import axiosSecure from "../../api/axios";

import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const MyBookedSessions = () => {

  useTitle("My Booked Sessions");

  const { user } = useAuth();

  const [bookings, setBookings] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // Fetch Bookings
  useEffect(() => {

    if (user?.email) {

      axiosSecure(
        `/bookings?email=${user.email}`
      )
        .then((res) => {

          setBookings(res.data);

          setLoading(false);
        })
        .catch((error) => {

          console.log(error);

          setLoading(false);
        });
    }

  }, [user]);

  // Cancel Booking
  const handleCancelBooking = async (
    id
  ) => {

    try {

      const res =
        await axiosSecure.patch(
          `/bookings/${id}`
        );

      if (res.data.modifiedCount > 0) {

        toast.success(
          "Booking cancelled"
        );

        const updatedBookings =
          bookings.map((booking) =>

            booking._id === id
              ? {
                  ...booking,
                  status: "Cancelled",
                }
              : booking
          );

        setBookings(updatedBookings);
      }

    } catch (error) {

      toast.error(error.message);
    }
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
    <div className="bg-slate-100 min-h-screen py-14 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            My Booked Sessions
          </h2>

          <p className="text-slate-600">
            Manage your booked tutor sessions.
          </p>
        </div>

        {/* Empty State */}
        {bookings.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-md p-10 text-center">

            <h3 className="text-3xl font-bold text-slate-700 mb-4">
              No Bookings Found
            </h3>

            <p className="text-slate-500">
              You have not booked any tutor yet.
            </p>
          </div>

        ) : (

          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">

            <table className="table">

              {/* Head */}
              <thead className="bg-cyan-500 text-white">

                <tr>

                  <th>#</th>

                  <th>Tutor Name</th>

                  <th>Subject</th>

                  <th>Student Name</th>

                  <th>Email</th>

                  <th>Fee</th>

                  <th>Status</th>

                  <th>Actions</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>

                {bookings.map(
                  (booking, index) => (

                    <tr key={booking._id}>

                      <td>
                        {index + 1}
                      </td>

                      <td className="font-semibold">
                        {booking.tutorName}
                      </td>

                      <td>
                        {booking.subject}
                      </td>

                      <td>
                        {booking.studentName}
                      </td>

                      <td>
                        {booking.studentEmail}
                      </td>

                      <td>
                        ৳ {booking.fee}
                      </td>

                      <td>

                        <span
                          className={`px-4 py-2 rounded-full text-white text-sm font-medium ${
                            booking.status ===
                            "Cancelled"
                              ? "bg-red-500"
                              : "bg-green-500"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>

                      <td>

                        <button
                          onClick={() =>
                            handleCancelBooking(
                              booking._id
                            )
                          }
                          disabled={
                            booking.status ===
                            "Cancelled"
                          }
                          className={`px-4 py-2 rounded-lg text-white transition ${
                            booking.status ===
                            "Cancelled"
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-red-500 hover:bg-red-600"
                          }`}
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookedSessions;