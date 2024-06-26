import React from "react";
import Allitems from "../../Destinations/Allitems";
import "../popular/MostPouplar.css";

const DestionationHome = () => {
  return (
    <>
      <section className="popular top">
        <div className="full_container">
          <div className="heading">
            <h1>Most Popular Destination</h1>
            <div className="line"></div>
          </div>

          <div className="content">
            <Allitems />
          </div>
        </div>
      </section>
    </>
  );
};

export default DestionationHome;
