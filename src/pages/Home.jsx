import React from "react";
import HomeNav from "../component/HomeNav";
import HomePage from "../component/HomePage";
import About from "../component/About";
import Gallery from "../component/Gallery";
import GoodThings from "../component/GoodThings";
import Footer from "../component/Footer";
import BadThings from "../component/BadThings";

function Home() {
  return (
    <>
      <main>
        <HomeNav />

        <HomePage />

        <About />

        <Gallery />

        <GoodThings />
        
        <BadThings/>
      </main>

      <Footer />
    </>
  );
}

export default Home;
