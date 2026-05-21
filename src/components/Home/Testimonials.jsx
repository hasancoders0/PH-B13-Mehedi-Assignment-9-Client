import {
  FaStar,
  FaQuoteRight,
  FaUserCircle,
} from "react-icons/fa";

const Testimonials = () => {

  const reviews = [

    {
      id: 1,

      name:
        "Sarah Ahmed",

      review:
        "This platform helped me improve my academic performance significantly. The tutors are very professional.",

      rating: 5,
    },

    {
      id: 2,

      name:
        "Rahim Hasan",

      review:
        "Amazing experience! The booking process is simple and the tutors are highly skilled.",

      rating: 5,
    },

    {
      id: 3,

      name:
        "Nusrat Jahan",

      review:
        "I found the perfect tutor for my university admission preparation. Highly recommended platform.",

      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900 transition duration-300 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-sm font-semibold mb-5">

            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>

            Student Reviews
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5">

            Student Testimonials
          </h2>

          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-8 text-lg">

            See what our students say about
            their learning experience with our
            professional tutors.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

          {
            reviews.map((review) => (

              <div
                key={review.id}
                className="group relative rounded-[30px] bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 p-8 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>

                {/* Quote Icon */}
                <div className="absolute top-7 right-7 text-cyan-500/10 text-6xl">

                  <FaQuoteRight />
                </div>

                {/* User */}
                <div className="relative flex items-center gap-4 mb-7">

                  {/* User Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-4xl border border-cyan-500/10">

                    <FaUserCircle />
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">

                      {review.name}
                    </h3>

                    {/* Stars */}
                    <div className="flex items-center gap-1 text-yellow-400">

                      {
                        [...Array(review.rating)].map(
                          (_, index) => (
                            <FaStar key={index} />
                          )
                        )
                      }
                    </div>
                  </div>
                </div>

                {/* Review */}
                <p className="relative text-slate-600 dark:text-slate-300 leading-8">

                  “{review.review}”
                </p>

                {/* Bottom Line */}
                <div className="relative mt-7 w-14 h-1 rounded-full bg-cyan-500"></div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Testimonials;