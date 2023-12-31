import Head from "next/head";
import React from "react";
import About2 from "../components/about/About2";
import Banner2 from "../components/banner/Banner2";
import Home2Blog from "../components/blog/Home2Blog";
import Preloader from "../components/common/Prelaoder";
import Experties2 from "../components/cookingExperties/Experties2";
import Footer from "../components/footer/Footer";
import Gallary2 from "../components/gallary/Gallary2";
import Header2 from "../components/header/Header2";
import MenuList2 from "../components/MenuList/MenuList2";
import Product1 from "../components/product/Product1";
import Reservation2 from "../components/reservation/Reservation2";
import NewItem2 from "../components/tems/NewItem2";

function Index2Page() {
  return (
    <>
      <Head>
        <title>Restho - Resturent React Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="assets/images/icon/logo-icon.svg" />
      </Head>
      <Preloader />
      <Header2 />
      <Banner2 />
      <Product1 />
      <About2 />
      <NewItem2 />
      <MenuList2 />
      <Gallary2 />
      <Experties2 />
      <Reservation2 />
      <Home2Blog />
      <Footer />
    </>
  );
}

export default Index2Page;
