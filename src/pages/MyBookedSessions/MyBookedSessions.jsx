import { useEffect, useState } from "react";

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
            My Booked Sessions
          </h2>

          <p className="text-slate-600">
            Manage your booked tutor sessions.
          </p>
        </div>

        {/* Empty State */}
        {bookings.length === 0 && (

          <div className="bg-white rounded-2xl shadow-md p-10 text-center">

            <h3 className="text-3xl font-bold text-slate-700 mb-4">
              No Booked Sessions Found
            </h3>

            <p className="text-slate-500">
              You have not booked any tutor yet.
            </p>
          </div>
        )}

        {/* Booking Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {bookings.map((booking) => (

            <div
              key={booking._id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-slate-200"
            >

              {/* Image */}
              <img
                src={booking.image}
                alt={booking.tutorName}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {booking.tutorName}
                </h3>

                <p className="text-cyan-600 font-semibold mb-4">
                  {booking.subject}
                </p>

                <div className="space-y-3 text-slate-600">

                  <p>
                    <span className="font-semibold">
                      Student Email:
                    </span>{" "}
                    {booking.studentEmail}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Session Fee:
                    </span>{" "}
                    ৳ {booking.fee}
                  </p>
                </div>

                <button
                  className="mt-6 w-full py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
                >
                  Session Confirmed
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookedSessions;