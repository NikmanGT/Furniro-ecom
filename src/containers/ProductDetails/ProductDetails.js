import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import "./ProducDetails.css";
import { IoIosArrowForward } from "react-icons/io";
import sidefSofa from "../../assets/images/Outdoor _sofa _set.svg";
import sideSsofa from "../../assets/images/Group 98.svg";
import sideTsofa from "../../assets/images/Group 97.svg";
import sideFsofa from "../../assets/images/Mask group (2).svg";
import Sofa from "../../assets/images/Asgaard sofa 3.svg";
import { FaCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import FurnitureCard from "../../components/furnitureCard/furnitureCard";
import sofaSet from "../../assets/images/Mask group.svg";
import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AddToCart from "../../components/AddCart/AddToCart";

const ProductDetails = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const [counter, setCounter] = useState(1);
  const handleCartOpen = () => {
    console.log("cart open");
    setCartOpen(true);
  };
  const handleCartClose = () => {
    setCartOpen(false);
  };
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <div className="container-fluid-lg productHeader mt-1 ">
        <div className="d-flex align-items-center pt-4 pb-4 ms-5 gap-2">
          {/* <span className=''>
           <b>Home</b>
            </span>
         <span>
            <IoIosArrowForward />
         </span> */}
          <div onClick={() => navigate("/")}>
            {" "}
            <b>Home</b>{" "}
          </div>
          <div>
            <IoIosArrowForward />{" "}
          </div>
          <div onClick={() => navigate("/Shop")}>
            {" "}
            <b>Shop</b>{" "}
          </div>
          <div>
            <IoIosArrowForward />
          </div>
          <div>Asgard Sofa</div>
        </div>
      </div>
      <div className="container mb-4 ">
        <div className="row mb-5 mt-5">
          <div className="desktop-width col-lg-6 col-sm-12 d-flex gap-4">
            <div className="col-lg-2 col-sm-2 product-Img  d-flex gap-4">
              <div>
                <img src={sidefSofa} className="sideImg" />
              </div>
              <div>
                <img src={sideSsofa} className="sideImg" />
              </div>
              <div>
                <img src={sideTsofa} className="sideImg" />
              </div>
              <div>
                <img src={sideFsofa} className="sideImg" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-10">
              {/* <img src={sofa} alt="..." className="sideBigSofaImg" /> */}
              <img src={Sofa} alt="" className="sideBigSofaImg" />
            </div>
          </div>
          <div className="responsive_width">
            <div id="carouselExample" className="carousel slide mb-4">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={Sofa} className="carouselImg" />
                </div>
                <div class="carousel-item">
                  <img src={sideSsofa} className="carouselImg" />
                </div>
                <div class="carousel-item">
                  <img src={sideTsofa} className="carouselImg" />
                </div>
                <div class="carousel-item">
                  <img src={sideFsofa} className="carouselImg" />
                </div>
              </div>
              <button
                className="carousel-control-prev carousel-Icon"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <IoIosArrowBack color="black" />
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <MdArrowForwardIos color="black" />
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 ">
            <h1 className="productFont">Asgaard sofa</h1>
            <h3 className="productPrice">Rs. 250,000.00</h3>
            <div className="d-flex gap-3">
              <div className="d-flex gap-2">
                <div>
                  <FaStar color="#FFC700" />
                </div>
                <div>
                  <FaStar color="#FFC700" />
                </div>
                <div>
                  <FaStar color="#FFC700" />
                </div>
                <div>
                  <FaStar color="#FFC700" />
                </div>
                <div>
                  <FaStarHalf color="#FFC700" />
                </div>
              </div>
              <div className="productReview1">|</div>
              <div className="productReview">5 Customer Review</div>
            </div>
            <p className="productPara mb-5 mt-3">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <h6 className="productSize mb-3">Size</h6>
            <div className="d-flex align-items-center mb-3 gap-4">
              <div className="size">L</div>
              <div className="size">XL</div>
              <div className="size">XS</div>
            </div>
            <h6 className="productSize mb-2">Color</h6>
            <div className="d-flex align-items-center mb-4 gap-4">
              <div className="productSizeColor">
                <FaCircle color="#816DFA" />
              </div>
              <div className="productSizeColor">
                <FaCircle color="#000000" />
              </div>
              <div className="productSizeColor">
                <FaCircle color="#B88E2F" />
              </div>
            </div>
            <div className="addProductDetails mb-5 d-flex gap-4">
              <div className="addProduct d-flex align-items-center justify-content-center gap-4">
                <div className="number" onClick={() => decrementCounter()}>
                  -
                </div>
                <div>{counter}</div>
                <div className="number" onClick={() => incrementCounter()}>
                  +
                </div>
              </div>
              <div className="d-flex gap-2">
                <div
                  className="addToCart d-flex align-items-center justify-content-center "
                  onClick={() => handleCartOpen()}
                >
                  Add to Cart
                </div>
                <div
                  className="compare d-flex justify-content-center align-items-center gap-2"
                  onClick={() => navigate("/productCompare")}
                >
                  + Compare
                </div>
              </div>
            </div>
            <hr className="mb-5" />
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="row sofaDetails">
                  <div className="col-3 d-flex flex-column gap-3">
                    <div>SKU</div>
                    <div>Category</div>
                    <div>Tags</div>
                    <div>Share</div>
                  </div>
                  <div className="col-9 d-flex flex-column gap-3">
                    <div className="d-flex gap-2">
                      <div>:</div>
                      <div>SS001</div>
                    </div>
                    <div className="d-flex gap-2">
                      <div>:</div>
                      <div>Sofas</div>
                    </div>
                    <div className="d-flex gap-2">
                      <div>:</div>
                      <div>Sofa, Chair, Home, Shop</div>
                    </div>
                    <div className="d-flex gap-2">
                      <div>:</div>
                      <div>
                        <div className="d-flex gap-4">
                          <div>
                            <FaFacebook className="icon" color="black" />
                          </div>
                          <div>
                            <FaLinkedin className="icon" color="black" />
                          </div>
                          <div>
                            <AiFillTwitterCircle
                              className="icon"
                              color="black"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-4" />
      <div className="container">
        <div className="d-flex justify-content-center gap-5 mb-4">
          <div>
            <b>Description</b>
          </div>
          <div>Additional Information</div>
          <div>Reviews [5]</div>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <div className="productText">
            <p className=" mb-2">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="desktop-width col-lg-6 col-sm-12">
            <img src={sofaSet} className="sofaSetImg" />
          </div>
          <div className="desktop-width col-lg-6 col-sm-12">
            <img src={sofaSet} className="sofaSetImg" />
          </div>
        </div>
        <hr className="mb-5" />
        <div className="relativeProducts mb-2 d-flex justify-content-center">
          <h2>Related Products</h2>
        </div>
      </div>
      <FurnitureCard />
      <div className="d-flex showBtn justify-content-center mt-2 mb-5">
        <button className="OP-Show-more-button mt-5 ">Show More</button>
      </div>

      <div>
        {cartOpen && (
          <div className="shop-add-to-cart position-absolute top-0 right-0 z-index-2">
            <AddToCart setCartOpen={setCartOpen} />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
