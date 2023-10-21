import Head from "next/head";

import dynamic from "next/dynamic";

import Banner1 from "../components/banner/Banner1";
import Preloader from "../components/common/Prelaoder";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Topbar from "../components/header/Topbar";

function Home() {
  return (
    <>
      <Head>
        <title>Hoku Fusion</title>
        <meta name="description" content="Restaurante Español" />
        <link rel="icon" href="assets/images/icon/hoku-logo.png" />
      </Head>
      <Preloader />
      <Topbar />
      <Header />
      <Banner1 />
      <Footer />
    </>
  );
}
export default Home;
