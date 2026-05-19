import { useEffect } from "react";

import Banner from "../../components/Home/Banner";

import useTitle from "../../hooks/useTitle";

import axiosSecure from "../../api/axios";

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
    </div>
  );
};

export default Home;