import React, { useState, useEffect } from "react";
import "./Home.css";
const Slide = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) =>
        prevCurrent === length - 1 ? 0 : prevCurrent + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section
        className="slider"
        style={{
          backgroundImage: `url(${slides[current].images})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          transition: "background-image 0.5s ease-in-out",
        }}
      ></section>

      <section className="slide-form">
        <div className="container">
          <h2>Enjoy Your Holiday</h2>
          <span>Search And Book Hotel</span>

          <form action="">
            <input type="text" placeholder="Search City" name="" id="" />
            <div className="flex-space">
              <input type="date" placeholder="Check In" />
              <input type="date" placeholder="Check Out" />
            </div>

            <div className="flex-space">
              <input type="number" placeholder="Adult(s)(+18)" />
              <input type="number" placeholder="Childer(0 - 17)" />
            </div>

            <input type="number" placeholder="Rooms" />
            <input type="Submit" value="Search" className="submit" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Slide;
