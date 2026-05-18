import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <h1 className="text-4xl font-bold text-slate-800">
        Tutor Booking System
      </h1>
    </div>
  );
};

export default Home;