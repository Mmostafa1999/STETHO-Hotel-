import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularData from "./PopData";
import Slider from "react-slick";

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};
const Cards = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {PopularData.map((value) => {
          return (
            <div className="cards">
              <div className="item">
                <div className="imgae">
                  <img src={value.image} alt="" />
                  <i className="fa-solid fa-location-dot">
                    <label>{value.country}</label>
                  </i>
                </div>

                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <div className="details">
                  <h2>{value.name}</h2>
                  <div className="boarder"></div>
                  <h3>
                    {value.price} / <span>Per Night</span>
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Cards;
