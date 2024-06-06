import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="container flex-space">
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/destination" onClick={closeMobileMenu}>
                Destination
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/testimonali" onClick={closeMobileMenu}>
                Testimonali
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="login-area flex">
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="primary-btn">Request a Quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className="container flex-space">
          <div className="logo">
            <img src="/images/logo (1).png" alt="" />
          </div>

          <div className="contact flex-space">
            <div className="box flex-space">
              <div className="icons">
                <i className="far fa-clock"></i>
              </div>

              <div className="text">
                <h4>Working Hours</h4>
                <Link to="/contact">Monday - Sunday: 9.00am to 6.00</Link>
              </div>
            </div>

            <div className="box flex-space">
              <div className="icons">
                <i className="fas fa-phone-volume"></i>
              </div>

              <div className="text">
                <h4>Call Us Hours</h4>
                <Link to="/contact">+011 221 6436</Link>
              </div>
            </div>

            <div className="box flex-space">
              <div className="icons">
                <i className="fas fa-envelope"></i>
              </div>

              <div className="text">
                <h4>Mail Us</h4>
                <Link to="/contact">info@example.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
