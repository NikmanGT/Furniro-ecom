import { useState } from "react";
import "./basicCard.css";
import { FaShareNodes } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function BasicCard({
  img,
  cardTextMain,
  cardTextSecond,
  RPmain,
  RPsecond,
  badgecolor,
  badgetext,
}) {
  const navigate = useNavigate();
  const [cardHover, setCardHover] = useState(false);
  const handleHoverEnter = () => {
    
    setCardHover(true);
  };
  const handleHoverLeave = () => {

    setCardHover(false);
  };
  return (
    <>
      <div className="position-relative"  onMouseLeave={() => handleHoverLeave()}>
        <div
          className=" shop-card-hover"
          onMouseEnter={() => handleHoverEnter()}
         
        >
          <div className="basic-card-main-container">
            <div className="basic-card card  ">
              <img src={img} className="card-img-top " alt="..."></img>

              <div
                className=" basic-card-body card-body"
                style={{ background: "#F4F5F7" }}
              >
                <h3 className="card-title">{cardTextMain}</h3>
                <p className="card-text" style={{ color: "#898989" }}>
                  {cardTextSecond}
                </p>

                <div className="basic-card-secondary-text d-flex flex-wrap justify-content-between">
                  <h4 className="">{RPmain}</h4>
                  <p
                    className="text-decoration-line-through pe-1 fw-normal"
                    style={{ color: "#B0B0B0" }}
                  >
                    {RPsecond}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {cardHover && (
                  <div className="position-absolute basic-card-hover top-0 row-gap-4">
                  <button className="btn  hoverBtn" onClick={()=>navigate("/productDetails")}>Add to Cart</button>
                  <button className="btn  hoverBtn-responsive" onClick={()=>navigate("/productDetails")}>Add to Cart</button>
                  <div className="d-flex gap-3 shop-cart-details">
                      <div className="d-flex gap-2">
                        <div><FaShareNodes />
                        </div>
                        <div>Share</div>
                      </div>
                      <div className="d-flex gap-2 ">
                        <div><FaCodeCompare />
                        </div>
                        <div className="cart-compare" onClick={()=>navigate("/productCompare")}>Compare</div>
                      </div>
                      <div className="d-flex gap-2 ">
                        <div><CiHeart />
                        </div>
                        <div>Like</div>
                      </div>
                    </div>
                    <div className="shop-responsive-cart-details">
                      <div className="d-flex gap-2">
                        <div><FaShareNodes />
                        </div>
                        <div>Share</div>
                      </div>
                      <div className="d-flex gap-2 ">
                        <div><FaCodeCompare />
                        </div>
                        <div className="cart-compare"onClick={()=>navigate("/productCompare") } >Compare</div>
                      </div>
                      <div className="d-flex gap-2 ">
                        <div><CiHeart />
                        </div>
                        <div>Like</div>
                      </div>
                    </div>
                </div>
        )}
      </div>
    </>
  );
}

export default BasicCard;



