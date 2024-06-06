import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer mtop">
        <div className="grid container">
          <div className="about-us">
            <h2>ABOUT US</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligend
              necessitatibus quam quis amet temporibus, obcaecati at tempora,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligend
              necessitatibus quam quis amet temporibus, obcaecati at tempora,
            </p>
            <div className="flex-space icon">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-pinterest"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
          <div>
            <h2>NAVIGATION</h2>
            <ul className="">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/destination">Destination</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="recent-posts">
            <h2>RECENT POSTS</h2>
            <ul className="post">
              <li>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i className="fa-solid fa-calendar"></i>
                <span>01 Oct 2024</span>
              </li>
              <li>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i className="fa-solid fa-calendar"></i>
                <span>01 Oct 2024</span>
              </li>
              <li>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i className="fa-solid fa-calendar"></i>
                <span>01 Oct 2024</span>
              </li>
            </ul>
          </div>

          <div className="newsletter">
            <h2>NEWSLETTER</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <input />
            <button className="primary-btn">SUBSCRIBE</button>
          </div>
        </div>
        <div class="legal top">
          <p>
            Copyright ©2024 All rights reserved | This template is made with{" "}
            <i class="fa fa-heart"></i> by Mahmoud Mustafa
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
