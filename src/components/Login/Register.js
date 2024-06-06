import React from "react";
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [allValue, setAllValue] = useState([]);

  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({ ...errors, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors({ ...errors, password: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (errors.confirmPassword) {
      setErrors({ ...errors, confirmPassword: "" });
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const newErrors = { email: "", password: "", confirmPassword: "" };

    if (!emailRegEx.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!passwordRegEx.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain both letters and numbers";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (
      newErrors.email === "" &&
      newErrors.password === "" &&
      newErrors.confirmPassword === ""
    ) {
      const newValue = { email, password, confirmPassword };
      setAllValue([...allValue, newValue]);

      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <>
      <HeadTitle />
      <section className="forms">
        <div className="container">
          <div className="sign-box">
            <h3 className="title">Signup</h3>
            <form onSubmit={formSubmit}>
              <input
                type="text"
                name="Email"
                value={email}
                placeholder="Email"
                onChange={handleEmailChange}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

              <input
                type="password"
                name="Password"
                value={password}
                placeholder="Create Password"
                onChange={handlePasswordChange}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}

              <input
                type="password"
                name="password"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={handleConfirmPasswordChange}
              />
              {errors.confirmPassword && (
                <p style={{ color: "red" }}>{errors.confirmPassword}</p>
              )}

              <button type="submit" className="primary-btn">
                Signup
              </button>
              <p className="flex">
                Already have an account? <Link to="/sign-in">Login</Link>
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
    </>
  );
};
export default Register;
