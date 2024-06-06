import React from "react";
import Hero from "../HomeSection/Hero";
import DestionationHome from "../HomeSection/Destina/DestionationHome";
import AboutCard from "../about/AboutCard";
import MostPouplar from "../HomeSection/popular/MostPouplar";
import Download from "../HomeSection/Download/Download";
import Works from "../HomeSection/work/Works";
import Gallery from "../HomeSection/gallery/Gallery";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <div className="container top">
        <AboutCard />
      </div>
      <MostPouplar />
      <DestionationHome />
      <Download />
      <Works />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
