import About from "components/sections/About";
import Events from "components/sections/Events";
import Hero from "components/sections/Hero";
import Officers from "components/sections/Officers";
import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import Head from "next/head";
import NavBar from "components/sections/NavBar";
import Stars from "components/sections/Stars";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AIAA @ UCSD</title>
        <meta
          name="description"
          content="American Institute of Aeronautics and Astronautics, AIAA, at UCSD. We are a student club for aerospace enthusiasts looking to have fun whilst developing their professional careers."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <Stars />
      <Events />
      <About />
      <Officers />
    </div>
  );
};

export default Home;
