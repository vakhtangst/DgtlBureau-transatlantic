import Advantage from "components/views/Advantage";
import Control from "components/views/Control";
import Convenient from "components/views/Convenient";
import Delivery from "components/views/Delivery/Delivery";
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
      <Delivery />
      <Control />
    </>
  );
};

export default Homepage;
