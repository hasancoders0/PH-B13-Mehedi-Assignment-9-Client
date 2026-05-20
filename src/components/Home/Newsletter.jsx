import toast from "react-hot-toast";

const Newsletter = () => {

  const handleSubscribe = (e) => {

    e.preventDefault();

    toast.success(
      "Subscribed successfully"
    );

    e.target.reset();
  };

  return (
    <div className="py-20 px-4 bg-cyan-500">

      <div className="max-w-4xl mx-auto text-center text-white">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Subscribe to Our Newsletter
        </h2>

        {/* Description */}
        <p className="text-lg text-cyan-100 mb-10 max-w-2xl mx-auto">
          Get the latest tutor updates,
          educational tips, and learning
          resources directly to your inbox.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col md:flex-row gap-4"
        >

          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-4 rounded-2xl text-slate-800 bg-white outline-none"
          />

          <button
            type="submit"
            className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;