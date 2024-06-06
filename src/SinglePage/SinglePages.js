import React, { useEffect, useState } from "react";
import "./Singlepage.css";
import HeadTitle from "../common/HeadTitle/HeadTitle";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Sdata from "../components/Destinations/Sdata";
import EmptyFile from "../common/EmptyFile/EmptyFile";

const SinglePages = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id));

    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      <HeadTitle />
      {item ? (
        <section className="single-page top">
          <div className="container">
            <Link to="/destination" className="primary-btn back">
              <i className="fa-solid fa-long-arrow-alt-left"> Go back</i>
            </Link>

            <article className="content flex">
              <div className="main-content">
                <img src={item.image} alt="" />
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <div className="para flex-space">
                  <p>{item.sidepara}</p>
                  <p>{item.sidepara}</p>
                </div>
                <h1>What is the {item.title} City?</h1>
                <p>{item.desc}</p>

                <div className="image grid1">
                  <img src={item.paraImage_one} alt="" />
                  <img src={item.paraImage_two} alt="" />
                </div>
                <p>{item.desc}</p>
              </div>

              <div className="side-content">
                <div className="box">
                  <h2>How can we help you?</h2>
                  <p>{item.sidepara}</p>
                  <button className="outline-btn">
                    <i className="fa-solid fa-phone"> </i>
                    Contact Us
                  </button>
                </div>

                <div className="box2">
                  <p>{item.sidepara}</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  );
};

export default SinglePages;
