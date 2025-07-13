import "../shareCard/shareCard.css";
import Image_1 from "../../../assets/images/Share-Image-1.svg";
import Image_2 from "../../../assets/images/Share-Image-2.svg";
import Image_3 from "../../../assets/images/Share-Image-3.svg";
import Image_4 from "../../../assets/images/Share-Image-4.svg";
import Image_5 from "../../../assets/images/Share-Image-5.svg";
import Image_6 from "../../../assets/images/Share-Image-6.svg";
import Image_7 from "../../../assets/images/Share-Image-7.svg";
import Image_8 from "../../../assets/images/Share-Image-8.svg";
import Image_9 from "../../../assets/images/Share-Image-9.svg";
import { PiCaretLeftBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";

const ShareCard = () => {
  return (
    <div className="Share-card-main-container">
      <div className="Share-card-text-container">
        <p className="text-center">Share your Setup with</p>
        <h1 className="text-center">#FurniroFurniture</h1>
      </div>

      <div className="Share-card-image-container d-none d-lg-block">
        <div className="Share-card-image-div position-relative">
          <img
            src={Image_1}
            className="position-absolute Top-left-rack"
            alt="..."
          ></img>
          <img
            src={Image_2}
            className="position-absolute Left-laptop-toaster"
            alt="..."
          ></img>
          <img
            src={Image_3}
            className="position-absolute Left-chair "
            alt="..."
          ></img>
          <img
            src={Image_4}
            className="position-absolute Camera-and-jug"
            alt="..."
          ></img>
          <img
            src={Image_5}
            className="position-absolute Center-Dining-table-with-room"
            alt="..."
          ></img>
          <img
            src={Image_6}
            className="position-absolute Right-Bed"
            alt="..."
          ></img>
          <img
            src={Image_7}
            className="position-absolute end-0 Top-right-Dining-table-with-jug"
            alt="..."
          ></img>
          <img
            src={Image_8}
            className="position-absolute Right-Vase-and-frame"
            alt="..."
          ></img>
          <img
            src={Image_9}
            className="position-absolute Right-kitchen-utensils"
            alt="..."
          ></img>
        </div>
      </div>

      <div
        className="Share-card-image-carousel d-lg-none d-block
      pb-3"
      >
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Image_2} alt="..." className="d-block mx-auto"></img>
            </div>
            <div className="carousel-item">
              <img src={Image_2} alt="..." className="d-block mx-auto"></img>
            </div>
            <div className="carousel-item">
              <img src={Image_2} alt="..." className="d-block mx-auto"></img>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <PiCaretLeftBold
              style={{ color: "rgb(184, 142, 47, 1)", fontSize: "6em" }}
            />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <PiCaretRightBold
              style={{ color: "rgb(184, 142, 47, 1)", fontSize: "6em" }}
            />
          </button>

          <div className="carousel-indicators Share-card-Carousel-indicator">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
              style={{
                backgroundColor: "rgb(184, 142, 47, 1)",
                width: "0.5rem",
                borderRadius: "50%",
                height: "0.5rem",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
              style={{
                backgroundColor: "rgb(184, 142, 47, 1)",
                width: "0.5rem",
                borderRadius: "50%",
                height: "0.5rem",
                margin: "0 10px",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
              style={{
                backgroundColor: "rgb(184, 142, 47, 1)",
                width: "0.5rem",
                borderRadius: "50%",
                height: "0.5rem",
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareCard;
