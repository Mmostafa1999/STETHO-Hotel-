import React, { useState } from "react";
import "./Contact.css";

const ContactForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessege] = useState("");

  const [allValue, setAllValue] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault();
    const newValue = { fname, lname, phone, email, subject, company, message };
    setAllValue([...allValue, newValue]);

    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
    setSubject("");
    setCompany("");
    setMessege("");
  };
  return (
    <>
      <section className="contact mtop">
        <div className="container flex">
          <div className="main-content">
            <h2>Contact Form</h2>
            <p>Fill out form below, we will get back you soon.</p>

            <form onSubmit={formSubmit}>
              <div className="grid1">
                <div className="input">
                  <span>
                    First Name <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  ></input>
                </div>

                <div className="input">
                  <span>
                    Last Name<label>*</label>
                  </span>
                  <input
                    type="text"
                    name="lname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  ></input>
                </div>

                <div className="input">
                  <span>
                    Phone Number <label>*</label>
                  </span>
                  <input
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  ></input>
                </div>

                <div className="input">
                  <span>
                    Email <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>

                <div className="input">
                  <span>Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  ></input>
                </div>

                <div className="input">
                  <span>Your Company</span>
                  <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  ></input>
                </div>

                <div className="input inputlast">
                  <span>
                    Write Your Messsage
                    <label>*</label>
                  </span>
                  <textarea
                    name="message"
                    value={message}
                    cols="30"
                    rows="10"
                    onChange={(e) => setMessege(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <button className="primary-btn">Submit Now</button>
            </form>
          </div>

          <div className="side-content">
            <h3>Visit our location</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligend
              necessitatibus quam quis amet temporibus, obcaecati at tempora,
              officiis repudiandae eius dolorum magnam tenetur placeat
              laboriosam
            </p>
            <br />
            <h3>Message Us</h3>
            <span>info@example.com</span>
            <br />
            <span>+20 112 2164 369</span>
            <br />

            <div className="icon">
              <h3>Follow Us</h3>
              <div className="flex-space">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="show-data">
        {allValue.map((currentValue) => {
          const { fname, lname, phone, email, subject, company, message } =
            currentValue;
          return (
            <div className="sign-box">
              <h1>Send Successfully</h1>
              <h3>
                First Name : <p>{fname}</p>
              </h3>
              <h3>
                Last Name : <p>{lname}</p>
              </h3>
              <h3>
                Phone Number : <p>{phone}</p>
              </h3>
              <h3>
                Email : <p>{email}</p>
              </h3>
              <h3>
                Subject : <p>{subject}</p>
              </h3>
              <h3>
                Your Company Name : <p>{company}</p>
              </h3>
              <h3>
                Message : <p>{message}</p>
              </h3>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ContactForm;
