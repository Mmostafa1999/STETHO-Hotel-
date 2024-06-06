import React from "react";
import Cards from "./Cards";
import "./MostPouplar.css";

const MostPouplar = () => {
  return (
    <>
      <section className="pouplar">
        <div className="full_container">
          <div className="heading">
            <h1>Most Pouplar Hotel</h1>
            <div className=""></div>
          </div>

          <div className="content">
            <Cards />
          </div>
        </div>
      </section>
    </>
  );
};

export default MostPouplar;
