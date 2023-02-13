import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = ({
  gender,
  setGender,
  girlName,
  setGirlName,
  numberJealousy,
  setNumberJealousy,
  numberLoving,
  setNumberLoving,
  handleSubmit,
  loading,
}) => {
  return (
    <>
      <section className="carousel-bg">
        <h2 className="main-heading">Elige a tu amigo virtual</h2>
        <Carousel>
          <Carousel.Item>
            <img className="imgs" src="assets/boy1.png" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="imgs" src="assets/girl1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgs img-3"
              src="assets/boy2.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="catagerys">
          <button
            className={`${gender === "female" ? "active" : ""}`}
            onClick={() => setGender("female")}
          >
            Female
          </button>
          <button
            className={`${gender === "Non-binary" ? "active" : ""}`}
            onClick={() => setGender("Non-binary")}
          >
            Non-binary
          </button>
          <button
            className={`${gender === "male" ? "active" : ""}`}
            onClick={() => setGender("male")}
          >
            Male
          </button>
        </div>
        <div className="form-container">
          <input
            type="text"
            value={girlName}
            onChange={(e) => setGirlName(e.target.value)}
            className="form-control"
            placeholder="Enter name"
          />
          <p className="label">Motivacional:</p>
          <input
            type="range"
            min={0}
            max={10}
            value={numberJealousy}
            onChange={(e) => setNumberJealousy(e.target.value)}
          />
          <p className="label">Cariñoso</p>
          <input
            type="range"
            min={0}
            max={10}
            value={numberLoving}
            onChange={(e) => setNumberLoving(e.target.value)}
          />
        </div>
        <div className="Next-btn">
          <button
            disabled={loading}
            onClick={() =>
              handleSubmit({ girlName, numberJealousy, numberLoving, gender })
            }
          >
            {loading ? (
              <i className="fa fa-spin fa-spinner" onClick={handleSubmit}></i>
            ) : (
              "Next"
            )}
          </button>
        </div>
      </section>
    </>
  );
};

export default Slider;
