import Events from "components/sections/Events";
import Hero from "components/sections/Hero";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Events />
    </div>
  );
};

export default Home;
