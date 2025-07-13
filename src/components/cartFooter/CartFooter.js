import React from 'react'
import { PiSealCheckLight } from "react-icons/pi";
import girl from "../../assets/images/customer-support.svg"
import shipping from "../../assets/images/shipping.svg"
import trophy from "../../assets/images/trophy 1.svg";

const CartFooter = () => {
  return (
    <>
          <div className="container-fluid bottom ">
        <div className="productComapreBottom mb-1">
        <div className="row row-gap-4 cartFooter">
            <div className="col-lg-3 col-sm-6">
                <div className="d-flex gap-2">
                <div>
                  <img src={trophy} alt="" />
                </div>
                <div>
                    <div className="highquality">
                    High Quality
                    </div>
                    <div className="trophyText">
                        crafted from top materials
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
            <div className="d-flex gap-2">
                <div>
                    {/* <GrTrophy style={{fontSize:"3.8rem"}} /> */}
                    <PiSealCheckLight style={{fontSize:"3.8rem"}} />
                </div>
                <div>
                    <div className="highquality">
                    Warranty Protection                    </div>
                    <div className="trophyText">
                    Over 2 years
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
            <div className="d-flex gap-2">
                <div>
                   <img src={shipping} alt="" />
                </div>
                <div>
                    <div className="highquality">
                    Free Shipping                    </div>
                    <div className="trophyText">
                    Order over 150 $                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
            <div className="d-flex gap-2">
                <div>
                <img src={girl} alt="" />
                </div>
                <div>
                    <div className="highquality">
                    24 / 7 Support
                    </div>
                    <div className="trophyText">
                    Dedicated support                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default CartFooter