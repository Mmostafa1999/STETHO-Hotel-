import React from "react";
import data from "./data";
import "./gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    dots: false,
    infinity: true,
    speed: 500,
    slidesToShow: 4,
    slideToScroll: 2,
  };

  return (
    <>
      <section className="collection">
        <div className="container">
          <Slider {...settings}>
            {data.map((value) => {
              return (
                <div className="box">
                  <img src={value.cover} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Gallery;
