import { useEffect } from "react";

import Banner from "../../components/Home/Banner";

import useTitle from "../../hooks/useTitle";

import axiosSecure from "../../api/axios";

import FeaturedTutors from "../../components/Home/FeaturedTutors";

import WhyChooseUs from "../../components/Home/WhyChooseUs";

import Statistics from "../../components/Home/Statistics";

const Home = () => {
  useTitle("Home");

  useEffect(() => {
    axiosSecure
      .get("/")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Banner />
      <FeaturedTutors />
      <WhyChooseUs />
      <Statistics />
    </div>
  );
};

export default Home;