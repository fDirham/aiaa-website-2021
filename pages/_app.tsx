import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AIAA @ UCSD</title>
        <meta
          name="description"
          content="American Institute of Aeronautics and Astronautics, AIAA, at UCSD. We are a student club for aerospace enthusiasts looking to have fun whilst developing their professional careers."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
