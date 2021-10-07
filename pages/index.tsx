import About from "components/sections/About";
import Events from "components/sections/Events";
import Hero from "components/sections/Hero";
import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Events />
      <About />
    </div>
  );
};

export default Home;
