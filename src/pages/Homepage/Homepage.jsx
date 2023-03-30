import Advantage from "components/views/Advantage";
import Convenient from "components/views/Convenient";
import Hero from "components/views/Hero/Hero";
import TrafficTypes from "components/views/TrafficTypes";
import styles from "./homepage.module.css";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Advantage />
      <Convenient />
      <TrafficTypes />
    </>
  );
};

export default Homepage;
