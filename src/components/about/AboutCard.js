import React from "react";
import "./About.css";

const AboutCard = () => {
  return (
    <>
      <section className="top">
        <div className="aboutCard flex-space">
          <div className="row row1">
            <h4>About Us</h4>
            <h1>
              We <span>provide Solution</span> to grow your business
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              necessitatibus quam quis amet temporibus, obcaecati at tempora,
              officiis repudiandae eius dolorum magnam tenetur placeat
              laboriosam facilis sapiente ut. Adipisci, dolor.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              necessitatibus quam quis amet temporibus, obcaecati at tempora,
              officiis repudiandae eius dolorum magnam tenetur placeat
              laboriosam facilis sapiente ut. Adipisci, dolor.
            </p>
            <button className="secondary-btn">Explore More</button>
          </div>

          <div className="row image">
            <img src="/images/about_us.webp" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
