import React, { useState } from "react";
import "./Gallery.css";

const Card = (props) => {
  const [popup, setPopup] = useState(false);

  const toggleModal = () => {
    setPopup(!popup);
  };

  const closePopup = (e) => {
    if (e.target.className === "popup") {
      toggleModal();
    }
  };
  return (
    <>
      <div className="items">
        <div className="img">
          <img src={props.images} alt="" />
          <i className="fa-solid fa-image" onClick={toggleModal}></i>
        </div>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
      </div>

      {popup && (
        <div className="popup" onClick={closePopup}>
          <div className="hide"></div>
          <div className="popup-content">
            <button onClick={toggleModal}>
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
            <img src={props.images} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
