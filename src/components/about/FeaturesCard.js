import React from "react";

const FeaturesCard = () => {
  return (
    <>
      <section className="features top">
        <div className="container aboutCard flex-space">
          <div className="row image">
            <img src="/images/features.jpg" alt="" />
          </div>
          <div className="row row1">
            <h1>
              Our <span>Features</span>
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
        </div>
      </section>
    </>
  );
};

export default FeaturesCard;
