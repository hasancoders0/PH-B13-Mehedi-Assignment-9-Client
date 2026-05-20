import {
  FaStar,
} from "react-icons/fa";

const Testimonials = () => {

  const reviews = [
    {
      id: 1,

      name: "Sarah Ahmed",

      image:
        "https://i.ibb.co/0jqHpnp/avatar1.png",

      review:
        "This platform helped me improve my academic performance significantly. The tutors are very professional.",

      rating: 5,
    },

    {
      id: 2,

      name: "Rahim Hasan",

      image:
        "https://i.ibb.co/z5YNM0K/avatar2.png",

      review:
        "Amazing experience! The booking process is simple and the tutors are highly skilled.",

      rating: 5,
    },

    {
      id: 3,

      name: "Nusrat Jahan",

      image:
        "https://i.ibb.co/f4mQ9xH/avatar3.png",

      review:
        "I found the perfect tutor for my university admission preparation. Highly recommended platform.",

      rating: 5,
    },
  ];

  return (
    <div className="py-20 px-4 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Student Testimonials
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            See what our students say about
            their learning experience with our
            tutors.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="bg-slate-100 rounded-2xl p-8 shadow-md hover:shadow-2xl transition duration-300"
            >

              {/* User */}
              <div className="flex items-center gap-4 mb-6">

                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-xl font-bold text-slate-800">
                    {review.name}
                  </h3>

                  {/* Stars */}
                  <div className="flex items-center gap-1 text-yellow-400 mt-1">

                    {[...Array(review.rating)].map(
                      (_, index) => (
                        <FaStar key={index} />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Review */}
              <p className="text-slate-600 leading-relaxed">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;