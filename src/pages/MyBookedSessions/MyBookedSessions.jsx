import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import {
  FaBookOpen,
  FaMoneyBillWave,
  FaBan,
  FaCheckCircle,
} from "react-icons/fa";

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

  // Default Image
  const defaultImage =
    "https://i.ibb.co/4pDNDk1/avatar.png";

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
                  status:
                    "Cancelled",
                }
              : booking
          );

        setBookings(
          updatedBookings
        );
      }

    } catch (error) {

      toast.error(
        error.message
      );
    }
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

            Learning Sessions
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5">

            My Booked Sessions
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-lg">

            Manage your booked tutor sessions easily.
          </p>
        </div>

        {/* Empty State */}
        {
          bookings.length === 0 ? (

            <div className="bg-white dark:bg-slate-900 rounded-[30px] border border-slate-200 dark:border-white/10 shadow-xl p-14 text-center">

              <div className="w-24 h-24 mx-auto rounded-3xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-5xl mb-8">

                <FaBookOpen />
              </div>

              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">

                No Bookings Found
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-lg">

                You have not booked any tutor yet.
              </p>
            </div>

          ) : (

            <div className="overflow-x-auto rounded-[30px] border border-slate-200 dark:border-white/10 shadow-xl bg-white dark:bg-slate-900">

              <table className="w-full min-w-[1100px]">

                {/* Table Head */}
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
                      Student
                    </th>

                    <th className="px-6 py-5 text-left">
                      Fee
                    </th>

                    <th className="px-6 py-5 text-left">
                      Status
                    </th>

                    <th className="px-6 py-5 text-center">
                      Actions
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>

                  {
                    bookings.map(
                      (
                        booking,
                        index
                      ) => (

                        <tr
                          key={booking._id}
                          className="border-b border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition"
                        >

                          {/* Index */}
                          <td className="px-6 py-5 font-semibold text-slate-700 dark:text-slate-200">

                            {index + 1}
                          </td>

                          {/* Tutor */}
                          <td className="px-6 py-5">

                            <div className="flex items-center gap-4">

                              <img
                                src={
                                  booking.image ||
                                  defaultImage
                                }
                                onError={(e) => {
                                  e.target.src =
                                    defaultImage;
                                }}
                                alt={
                                  booking.tutorName
                                }
                                className="w-14 h-14 rounded-2xl object-cover border border-slate-200 dark:border-white/10"
                              />

                              <div>

                                <h3 className="font-bold text-slate-900 dark:text-white">

                                  {
                                    booking.tutorName
                                  }
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

                              {booking.subject}
                            </div>
                          </td>

                          {/* Student */}
                          <td className="px-6 py-5">

                            <div>

                              <h4 className="font-semibold text-slate-900 dark:text-white">

                                {
                                  booking.studentName
                                }
                              </h4>

                              <p className="text-sm text-slate-500 dark:text-slate-400">

                                {
                                  booking.studentEmail
                                }
                              </p>
                            </div>
                          </td>

                          {/* Fee */}
                          <td className="px-6 py-5">

                            <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-white">

                              <FaMoneyBillWave className="text-cyan-500" />

                              ৳ {booking.fee}
                            </div>
                          </td>

                          {/* Status */}
                          <td className="px-6 py-5">

                            <span
                              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                                booking.status ===
                                "Cancelled"
                                  ? "bg-red-500/10 text-red-500"
                                  : "bg-green-500/10 text-green-500"
                              }`}
                            >

                              {
                                booking.status ===
                                "Cancelled"
                                  ? (
                                      <FaBan />
                                    )
                                  : (
                                      <FaCheckCircle />
                                    )
                              }

                              {
                                booking.status
                              }
                            </span>
                          </td>

                          {/* Actions */}
                          <td className="px-6 py-5 text-center">

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
                              className={`px-5 py-3 rounded-2xl font-semibold transition duration-300 ${
                                booking.status ===
                                "Cancelled"
                                  ? "bg-slate-300 dark:bg-slate-700 text-slate-500 cursor-not-allowed"
                                  : "bg-red-500 hover:bg-red-600 text-white"
                              }`}
                            >

                              Cancel Booking
                            </button>
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
    </section>
  );
};

export default MyBookedSessions;