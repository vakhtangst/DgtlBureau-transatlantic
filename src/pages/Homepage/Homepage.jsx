import Advantage from "components/views/Advantage";
import Convenient from "components/views/Convenient";
import Hero from "components/views/Hero/Hero";
import styles from "./homepage.module.css";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Advantage />
      <Convenient />
    </>
  );
};

export default Homepage;
