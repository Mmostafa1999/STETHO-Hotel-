import React from "react";
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import "./Design.css";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allValue, setAllValue] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault();
    const newValue = { email, password };
    setAllValue([...allValue, newValue]);

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <HeadTitle />
      <section className="forms">
        <div className="container">
          <div className="sign-box">
            <h3 className="title">Login</h3>
            <form onSubmit={formSubmit}>
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>

              <div className="flex-space forget-pass">
                <div className="flex">
                  <input type="checkbox" />
                  <label>Remember Me</label>
                </div>
                <div className="flex">
                  <span>I forget my password</span>
                </div>
              </div>
              <button type="submit" className="primary-btn">
                Login
              </button>
              <p className="flex">
                Don't have an account ? <Link to="/register">Signup</Link>
              </p>

              <div className="flex-space line">
                <hr className="login-line" />
                Or
                <hr className="login-line" />
              </div>

              <button className="primary-btn facebook-login">
                <i className="fa-brands fa-facebook"></i> Login With Facebook
              </button>

              <button className="primary-btn google-login">
                <i className="fa-brands fa-google"></i> Login With Google
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="show-data">
        {allValue.map((currentValue) => {
          const { email, password } = currentValue;
          return (
            <div className="sign-box">
              <h1>Send Successfully</h1>

              <h3>
                Email : <p>{email}</p>
              </h3>
              <h3>
                Password : <p>{password}</p>
              </h3>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Login;
