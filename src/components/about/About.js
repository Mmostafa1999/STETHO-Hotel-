import React from "react";
import AboutCard from "./AboutCard";
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import FeaturesCard from "./FeaturesCard";
import "./About.css";

const About = () => {
  return (
    <>
      <HeadTitle />

      <div className="container top">
        <AboutCard />
      </div>
      <div className="top">
        <FeaturesCard />
      </div>
    </>
  );
};

export default About;
