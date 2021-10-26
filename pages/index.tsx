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
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <Stars />
      <Events />
      <About />
      <Officers />
      <footer>
        <p>Contact us at aiaaucsd@ucsd.edu</p>
        <br />
        <p>Website was made by FBD in 10/2021</p>
      </footer>
    </div>
  );
};

export default Home;
