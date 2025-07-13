import "../inspirationCard/inspirationCard.css";
import InspiMain from "../../../assets/images/Inspiration-First-Image.svg";
import InspiSecond from "../../../assets/images/Inspiration-Second-Image.svg";
// import InspiThird from "../../../assets/images/Inspiration-Third-Image.svg";
import { PiCaretRightBold } from "react-icons/pi";
import { useState } from "react";

const InspirationCard = () => {
  const [image, setImage] = useState("");

  const HandleClick = () => {
    const image = setImage();
  };

  return (
    <div className="Inspiration-main-container mb-5">
      <div className="Inspiration-card-row row">
        <div className="col-lg-4 Inspiration-card-column-1  d-lg-flex pb-lg-5 justify-content-end ms-lg-4">
          <div className="Inspiration-card-text-container d-lg-flex align-items-center ">
            <div className="Inspiration-card-Main-text">
              <h1>
                50+ Beautiful rooms<br></br>inspiration
              </h1>
              <p>
                Our designer already made a lot of beautiful<br></br>prototype
                of rooms that inspire you
              </p>
              <div className="Explore-more-button pt-2">
                <button>Explore More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg Inspiration-card-column-2 me-3 pt-lg-5 d-flex">
          <div className="w-100 border d-none d-lg-block">
            <img src={image} alt="..."></img>
          </div>

          <div className="Inspiration-carousel-container border w-100 ">
            <div
              id="carouselExampleRide"
              className="carousel slide caraousel-slide"
              data-bs-ride="false"
            >
              <div className="carousel-indicators Inspiration-carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleRide"
                  data-bs-slide-to="0"
                  className="active"
                ></button>
                <button
                  type="button"
                  className=""
                  data-bs-target="#carouselExampleRide"
                  data-bs-slide-to="1"
                ></button>
                <button
                  className=""
                  type="button"
                  data-bs-target="#carouselExampleRide"
                  data-bs-slide-to="2"
                ></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={InspiSecond}
                    className="Inspi-first-image"
                    alt="..."
                  ></img>
                </div>
                <div className="carousel-item">
                  <img src={InspiSecond} className="d-block" alt="..."></img>
                </div>
                <div className="carousel-item">
                  <img src={InspiSecond} className="" alt="..."></img>
                </div>
              </div>

              <button
                onClick={HandleClick}
                className="carousel-control-next active"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="next"
              >
                <PiCaretRightBold
                  style={{ color: "rgb(184, 142, 47, 1)", fontSize: "25px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationCard;
