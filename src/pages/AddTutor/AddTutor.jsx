import toast from "react-hot-toast";

import {
  FaUserTie,
  FaImage,
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaMoneyBillWave,
  FaLayerGroup,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaLaptopHouse,
  FaPlusCircle,
} from "react-icons/fa";

import axiosSecure from "../../api/axios";

import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const AddTutor = () => {

  useTitle("Add Tutor");

  const { user } = useAuth();

  // Default Image
  const defaultImage =
    "https://i.ibb.co/4pDNDk1/avatar.png";

  const handleAddTutor = async (e) => {

    e.preventDefault();

    const form = e.target;

    const tutorData = {

      tutorName:
        form.tutorName.value,

      image:
        form.image.value ||
        defaultImage,

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

      // Session Date
      sessionDate:
        form.sessionDate.value,

      userName:
        user?.displayName,

      userEmail:
        user?.email,

      createdAt:
        new Date(),
    };

    try {

      const res =
        await axiosSecure.post(
          "/tutors",
          tutorData
        );

      if (res.data.insertedId) {

        toast.success(
          "Tutor added successfully"
        );

        form.reset();
      }

    } catch (error) {

      toast.error(
        error.message
      );
    }
  };

  return (
    <section className="bg-slate-100 dark:bg-slate-950 py-16 px-4 transition duration-300 overflow-hidden">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-sm font-semibold mb-5">

            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>

            Tutor Registration
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5">

            Add New Tutor
          </h2>

          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-8 text-lg">

            Create a tutor profile with session details,
            schedule, teaching mode, and learning information.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-900 rounded-[35px] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden">

          {/* Top Bar */}
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 px-8 py-8 text-white">

            <h3 className="text-3xl font-black mb-2">

              Tutor Information
            </h3>

            <p className="text-cyan-50">

              Fill all required information carefully.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleAddTutor}
            className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            {/* Tutor Name */}
            <div>

              <label className="flex items-center gap-2 mb-3 font-semibold text-slate-700 dark:text-slate-200">

                <FaUserTie className="text-cyan-500" />

                Tutor Name
              </label>

              <input
                type="text"
                name="tutorName"
                required
                placeholder="Enter tutor name"
                className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 outline-none text-slate-700 dark:text-white transition"
              />
            </div>

            {/* Image */}
            <div>

              <label className="flex items-center gap-2 mb-3 font-semibold text-slate-700 dark:text-slate-200">

                <FaImage className="text-cyan-500" />

                Image URL
              </label>

              <input
                type="text"
                name="image"
                placeholder="Paste image URL"
                className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 outline-none text-slate-700 dark:text-white transition"
              />
            </div>

            {/* Subject */}
            <div>

              <label className="flex items-center gap-2 mb-3 font-semibold text-slate-700 dark:text-slate-200">

                <FaBookOpen className="text-cyan-500" />

                Subject
              </label>

              <input
                type="text"
                name="subject"
                required
                placeholder="Enter subject"
                className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 outline-none text-slate-700 dark:text-white transition"
              />
            </div>

            {/* Days */}
            <div>

              <label className="flex items-center gap-2 mb-3 font-semibold text-slate-700 dark:text-slate-200">

                <FaCalendarAlt className="text-cyan-500" />

                Available Days
              </label>

              <input
                type="text"
                name="days"
                required
                placeholder="Example: Sun - Thu"
                className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 outline-none text-slate-700 dark:text-white transition"
              />
            </div>

            {/* Time */}
            <div>

              <label className="flex items-center gap-2 mb-3 font-semibold text-slate-700 dark:text-slate-200">

                <FaClock className="text-cyan-500" />

                Time Slot
              </label>

              <input
                type="text"
                name="time"
                required
                placeholder="Example: 5 PM - 8 PM"
                className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 outline-none text-slate-700 dark:text-white transition"
              />
            </div>

            {/* Fee */}
            <div>

              <label className="flex items-center gap-2 mb-3 font-semibold text-slate-700 dark:text-slate-200">

                <FaMoneyBillWave className="text-cyan-500" />

                Hourly Fee
              </label>

              <input
                type="number"
                name="fee"
                required
                placeholder="Enter fee"
                className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 outline-none text-slate-700 dark:text-white transition"
              />
            </div>

            {/* Slots */}
            <div>

              <label className="flex items-center gap-2 mb-3 font-semibold text-slate-700 dark:text-slate-200">

                <FaLayerGroup className="text-cyan-500" />

                Total Slots
              </label>

              <input
                type="number"
                name="totalSlots"
                required
                placeholder="Enter total slots"
                className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 outline-none text-slate-700 dark:text-white transition"
              />
            </div>

            {/* Experience */}
            <div>

              <label className="flex items-center gap-2 mb-3 font-semibold text-slate-700 dark:text-slate-200">

                <FaUserGraduate className="text-cyan-500" />

                Experience
              </label>

              <input
                type="text"
                name="experience"
                required
                placeholder="Enter experience"
                className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 outline-none text-slate-700 dark:text-white transition"
              />
            </div>

            {/* Location */}
            <div>

              <label className="flex items-center gap-2 mb-3 font-semibold text-slate-700 dark:text-slate-200">

                <FaMapMarkerAlt className="text-cyan-500" />

                Location
              </label>

              <input
                type="text"
                name="location"
                required
                placeholder="Enter location"
                className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 outline-none text-slate-700 dark:text-white transition"
              />
            </div>

            {/* Mode */}
            <div>

              <label className="flex items-center gap-2 mb-3 font-semibold text-slate-700 dark:text-slate-200">

                <FaLaptopHouse className="text-cyan-500" />

                Teaching Mode
              </label>

              <select
                name="mode"
                required
                className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 outline-none text-slate-700 dark:text-white transition"
              >

                <option value="">
                  Select Mode
                </option>

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

              <label className="flex items-center gap-2 mb-3 font-semibold text-slate-700 dark:text-slate-200">

                <FaCalendarAlt className="text-cyan-500" />

                Session Start Date
              </label>

              <input
                type="date"
                name="sessionDate"
                required
                className="w-full px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 outline-none text-slate-700 dark:text-white transition"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 pt-4">

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-300 flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/20"
              >

                <FaPlusCircle />

                Add Tutor
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTutor;