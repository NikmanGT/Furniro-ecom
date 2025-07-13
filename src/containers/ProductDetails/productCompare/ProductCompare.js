import React from "react";
import "./ProductCompare.css";
import sofa from "../../../assets/images/Asgaard sofa 3 (1).svg";
import { IoIosArrowDown } from "react-icons/io";
import BreadcrumbBackground from "../../../components/breadcrumbBackground/breadcrumbBackground";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import CartFooter from "../../../components/cartFooter/CartFooter";

const ProductCompare = () => {
  return (
    <>
      <BreadcrumbBackground
        HeaderText={"Product Comparison"}
        SecondaryText={"Comparison"}
      />
      <div className="scrollable-container">
        <div className="container productComparison mt-5">
          <div className="row mb-5">
            <div className="col-3">
              <div className="productComapreHeading mb-2">
                Go to Product
                <br />
                page for more
                <br />
                Products
              </div>
              <div className="viewMore">View More</div>
            </div>
            <div className="col-3 ">
              <div>
                <div className="mb-3">
                  <img src={sofa} alt="" className="sofaImg" />
                </div>
                <div className="mb-2">
                  <b>Asgaard Sofa</b>
                </div>
                <div className="mb-2">Rs. 250,000.00</div>
                <div className="d-flex gap-2 ">
                  <div>4.7</div>
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
                  <div className="d-flex gap-2 review">
                    <div>|</div>
                    <div>204 Review</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div>
                <div className="mb-3">
                  <img src={sofa} alt="" className="sofaImg" />
                </div>
                <div className="mb-2">
                  <b>Asgaard Sofa</b>
                </div>
                <div className="mb-2">Rs. 250,000.00</div>
                <div className="d-flex gap-2 ">
                  <div>4.7</div>
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
                  <div className="d-flex gap-2 review">
                    <div>|</div>
                    <div>204 Review</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="mb-3">Add A Product</div>
              <div>
                <button className="btn btn-primary productButton">
                  <div className="d-flex gap-2">
                    <span>Choose a Product</span>
                    <span>
                      <IoIosArrowDown />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="horizontalLine" />
        <div className="">
          <div className="container middileSection">
            <div className="row">
              <div className="col-3 productOneColumn d-flex flex-column justify-content-center">
                <div className="d-flex flex-column gap-3 justify-content-center generalDetails">
                  <div className="general mb-2 mt-4">General</div>
                  <div>Sales Package</div>
                  <div>Model Number</div>
                  <div>Secondary Material</div>
                  <div>Configuration</div>
                  <div>Upholstery Material</div>
                  <div>Upholstery Color</div>
                  <div className="general mb-2 mt-5">Product</div>
                  <div>Filling Material</div>
                  <div>Finish Type</div>
                  <div>Adjustable Headrest</div>
                  <div>
                    Maximum Load
                    <br />
                    Capacity
                  </div>
                  <div>Origin of Manufacture</div>
                  <div className="general mb-2 mt-5">Dimensions</div>
                  <div>Width </div>
                  <div>Height</div>
                  <div>Depth </div>
                  <div>Weight </div>
                  <div>Seat Height</div>
                  <div>Leg Height</div>
                  <div className="general mb-2 mt-5">Warranty</div>
                  <div className="mb-4">Warranty Summary </div>
                  <div className="WarrantyService">
                    Warranty Service
                    <br />
                    Type
                  </div>
                  <div className="CoveredWarranty">Covered in Warranty </div>
                  <div className="NotCovered">
                    Not Covered in
                    <br />
                    Warranty{" "}
                  </div>
                  <div className="DomesticWarranty">Domestic Warranty</div>
                </div>
              </div>
              <div className="col-3 productTColumn">
                <div className="d-flex flex-column justify-content-center gap-3 sofasDetails">
                  <div>Sales Package</div>
                  <div>Model Number</div>
                  <div>Secondary Material</div>
                  <div>Configuration</div>
                  <div>Upholstery Material</div>
                  <div>Upholstery Color</div>
                </div>
                <div className="column2Mid d-flex flex-column justify-content-center gap-3">
                  <div className="">Foam</div>
                  <div>Bright Grey & Lion</div>
                  <div>No</div>
                  <div className="mb-4">280 KG</div>
                  <div>India </div>
                </div>
                <div className="column2Mid2 d-flex flex-column justify-content-center gap-3">
                  <div className="">265.32 cm</div>
                  <div>76 cm</div>
                  <div>167.76 cm</div>
                  <div>45 KG</div>
                  <div>41.52 cm </div>
                  <div>5.46 cm</div>
                </div>
                <div className="column2Bottom d-flex flex-column justify-content-center gap-3">
                  <div className="mb-2">1 Year Manufacturing Warranty</div>
                  <div className="mb-2">
                    For Warranty Claims or Any Product Related Issues Please
                    Email at operations@trevifurnitu re.com
                  </div>
                  <div className="warranty">
                    Warranty Against Manufacturing Defect
                  </div>
                  <div className="mb-3">
                    The Warranty Does Not Cover Damages Due To Usage Of The
                    Product Beyond Its Intended Use And Wear & Tear In The
                    Natural Course Of Product Usage.
                  </div>
                  <div className="year">1 Year </div>
                </div>
                <div className="ms-4">
                  <button className="btn btn-primary ps-5 pe-5">Add to Cart</button>
                </div>
              </div>
              <div className="col-3 productThColumn">
                <div className="d-flex flex-column justify-content-center gap-3 sofasDetails">
                  <div className="ThreeSeater">
                    1 Three Seater, 2 Single <br /> Seater
                  </div>
                  <div>DTUBLIGRBL568 </div>
                  <div>Solid Wood</div>
                  <div>shaped</div>
                  <div>Fabric + Cotton</div>
                  <div>Bright Grey & Lion</div>
                </div>
                <div className="column3Mid d-flex flex-column justify-content-center gap-3">
                  <div className="">Matte</div>
                  <div>Bright Grey & Lion</div>
                  <div>yes</div>
                  <div className="mb-4">300 KG</div>
                  <div>India </div>
                </div>
                <div className="column3Mid2 d-flex flex-column justify-content-center gap-3">
                  <div className="">265.32 cm</div>
                  <div>76 cm</div>
                  <div>167.76 cm</div>
                  <div>45 KG</div>
                  <div>41.52 cm </div>
                  <div>5.46 cm</div>
                </div>
                <div className="column3Bottom d-flex flex-column justify-content-center gap-3">
                  <div className="mb-2">1 Year Manufacturing Warranty</div>
                  <div className="mb-2">
                    For Warranty Claims or Any Product Related Issues Please
                    Email at operations@trevifurnitu re.com
                  </div>
                  <div className="warranty">
                    Warranty Against Manufacturing Defect
                  </div>
                  <div className="mb-3">
                    The Warranty Does Not Cover Damages Due To Usage Of The
                    Product Beyond Its Intended Use And Wear & Tear In The
                    Natural Course Of Product Usage.
                  </div>
                  <div className="year">1 Year </div>
                </div>
                <div className="ms-4">
                  <button className="btn btn-primary ps-5 pe-5">Add to Cart</button>
                </div>
              </div>
              <div className="col-3 productThColumn">
              </div>
            </div>
          </div>
        </div>
      </div>
      <CartFooter />
    </>
  );
};

export default ProductCompare;

