import toast from "react-hot-toast";

import axiosSecure from "../../api/axios";

import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const AddTutor = () => {
  useTitle("Add Tutor");

  const { user } = useAuth();

  const handleAddTutor = async (e) => {

    e.preventDefault();

    const form = e.target;

    const tutorData = {

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

      toast.error(error.message);
    }
  };

  return (
    <div className="bg-slate-100 py-14 px-4">

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-slate-200">

        <h2 className="text-4xl font-bold text-center text-slate-800 mb-10">
          Add Tutor
        </h2>

        <form
          onSubmit={handleAddTutor}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Tutor Name */}
          <div>

            <label className="block mb-2 font-medium text-slate-700">
              Tutor Name
            </label>

            <input
              type="text"
              name="tutorName"
              required
              placeholder="Tutor name"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Image */}
          <div>

            <label className="block mb-2 font-medium text-slate-700">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              required
              placeholder="Image URL"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Subject */}
          <div>

            <label className="block mb-2 font-medium text-slate-700">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Days */}
          <div>

            <label className="block mb-2 font-medium text-slate-700">
              Available Days
            </label>

            <input
              type="text"
              name="days"
              required
              placeholder="Sun - Thu"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Time */}
          <div>

            <label className="block mb-2 font-medium text-slate-700">
              Time Slot
            </label>

            <input
              type="text"
              name="time"
              required
              placeholder="5 PM - 8 PM"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Fee */}
          <div>

            <label className="block mb-2 font-medium text-slate-700">
              Hourly Fee
            </label>

            <input
              type="number"
              name="fee"
              required
              placeholder="Hourly fee"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Slots */}
          <div>

            <label className="block mb-2 font-medium text-slate-700">
              Total Slots
            </label>

            <input
              type="number"
              name="totalSlots"
              required
              placeholder="Total slots"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Experience */}
          <div>

            <label className="block mb-2 font-medium text-slate-700">
              Experience
            </label>

            <input
              type="text"
              name="experience"
              required
              placeholder="Experience"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Location */}
          <div>

            <label className="block mb-2 font-medium text-slate-700">
              Location
            </label>

            <input
              type="text"
              name="location"
              required
              placeholder="Location"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Mode */}
          <div>

            <label className="block mb-2 font-medium text-slate-700">
              Teaching Mode
            </label>

            <select
              name="mode"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
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

            <label className="block mb-2 font-medium text-slate-700">
              Session Start Date
            </label>

            <input
              type="date"
              name="sessionDate"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
            >
              Add Tutor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutor;