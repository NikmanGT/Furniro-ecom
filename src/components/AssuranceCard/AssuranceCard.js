import "../AssuranceCard/AssuranceCard.css";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BsPatchCheck } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

const AssuranceCard = () => {
  return (
    <div className="AssuranceCard-main-container pt-5 pb-2">
      <div className="container">
        <div className="d-lg-flex justify-content-between ">
          <div className="Assurance-block-1 d-lg-flex mb-5 mb-lg-0">
            <div className="Assurance-icon">
              <HiOutlineTrophy />
            </div>
            <div>
              <h4>High Quality</h4>
              <p style={{ color: "#898989", fontWeight: "500" }}>
                crafted from top materials
              </p>
            </div>
          </div>
          <div className="Assurance-block-2 d-lg-flex mb-5 mb-lg-0">
            <div className="Assurance-icon">
              <BsPatchCheck />
            </div>
            <div>
              <h3>Warranty Protection</h3>
              <p style={{ color: "#898989", fontWeight: "500" }}>
                Over 2 years
              </p>
            </div>
          </div>
          <div className="Assurance-block-3 d-lg-flex mb-5 mb-lg-0">
            <div className="Assurance-icon">
              <FaHandHoldingUsd />
            </div>
            <div>
              <h3>Free Shipping</h3>
              <p style={{ color: "#898989", fontWeight: "500" }}>
                Order over 150$
              </p>
            </div>
          </div>
          <div className="Assurance-block-4 d-lg-flex mb-5 mb-lg-0w">
            <div className="Assurance-icon">
              <MdOutlineSupportAgent />
            </div>
            <div>
              <h3>24 / 7 Support</h3>
              <p style={{ color: "#898989", fontWeight: "500" }}>
                Dedicated Support
              </p>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-3 col-12 border d-flex justify-content-center">
            <div className="AssuranceCard-icon">
              <HiOutlineTrophy />
            </div>
            <div className=" ps-lg-3">
              <h3>High Quality</h3>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div className="col-lg-3 col-12 border d-flex">
            <div className="AssuranceCard-icon">
              <BsPatchCheck />
            </div>
            <div className="">
              <h3>Warranty Protection</h3>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className="col-lg-3 col-12 d-flex justify-content-center">
            <div className="AssuranceCard-icon">
              <HiOutlineTrophy />
            </div>
            <div className="">
              <h3>Free Shipping</h3>
              <p>Order above 150$</p>
            </div>
          </div>
          <div className="col-lg-3 col-12 d-flex justify-content-center">
            <div className="AssuranceCard-icon">
              <HiOutlineTrophy />
            </div>
            <div className="">
              <h3>24 / 7 Support</h3>
              <p>Dedicated Support</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AssuranceCard;
