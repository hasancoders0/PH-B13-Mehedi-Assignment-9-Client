import Banner from "../../components/Home/Banner";

import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;