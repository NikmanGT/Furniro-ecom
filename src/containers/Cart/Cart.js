import React, { useState } from "react";
import BreadcrumbBackground from "../../components/breadcrumbBackground/breadcrumbBackground";
import "./Cart.css";
import sofa from "../../assets/images/Mask group (3).svg";
import { AiFillDelete } from "react-icons/ai";
import CartFooter from "../../components/cartFooter/CartFooter";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate=useNavigate();
  const [counter, setCounter] = useState(1);

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
      <BreadcrumbBackground HeaderText={"Cart"} SecondaryText={"Cart"} />
      <div className="container cartPage mt-5 mb-5">
        <div className="row ">
          <div className="col-lg-8 col-sm-12 mb-4 cartProduct">
            <div className="colOneHeader">
              <div className="row">
                <div className="col-3"></div>
                <div className="col-9">
                  <div className="d-flex aboutSofa">
                    <div className=" text-center product">Product</div>
                    <div className=" text-center price">Price</div>
                    <div
                      className="
                    d-flex gap-5"
                    >
                      <div className=" text-center quantity">Quantity</div>
                      <div className=" text-center subtotal">Subtotal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-3">
                  <img src={sofa} alt="" className="sofaImg" />
                </div>
                <div className="col-9 d-flex align-items-center">
                  <div className="d-flex aboutSofaPrice">
                    <div className=" sofaName">Asgaard sofa</div>
                    <div className=" sofaPrice">Rs. 250,000.00</div>
                    <div className=" d-flex gap-5 ">
                      <span className="sofaQuantity">1</span>
                      <div className=" sofaSubtotal">Rs. 250,000.00</div>
                      <div className=" delete">
                        <AiFillDelete
                          color="#B88E2F"
                          style={{ fontSize: "1.6rem" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resonsiveCart  mb-4">
            <div class="card">
              <div class="card-body d-flex gap-3">
                <div>
                  <img src={sofa} alt="" className="sofaImg" />
                </div>
                <div className="d-flex justify-content-around flex-column">
                  <div className="sofaName ">Asgaard sofa</div>
                  <div className="">
                    <div className="sofaPrice">Rs. 250,000.00</div>
                    {/* <div className="sofaQuantity">1</div> */}
                  </div>
                  <div className="cart-addProduct d-flex align-items-center justify-content-center gap-2">
                      <div
                        className="cart-number"
                        onClick={() => decrementCounter()}
                      >
                        -
                      </div>
                      <div className="cart-add-number">{counter}</div>
                      <div
                        className="cart-number"
                        onClick={() => incrementCounter()}
                      >
                        +
                      </div>
                    </div>
                </div>
                <div>
                <div className="delete">
                        <AiFillDelete
                          color="#B88E2F"
                          style={{ fontSize: "1.6rem", marginLeft:"4.2rem" }}
                        />
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="">
              <div class="card text-center cartTotal">
                <div class="card-body">
                  <h5 class="card-title cartTotals">Cart Totals</h5>
                  <div
                    className="d-flex justify-content-center mb-4"
                    style={{ columnGap: "58px" }}
                  >
                    <div className="subtotal">Subtotal</div>
                    <div className="price">Rs. 250,000.00</div>
                  </div>
                  <div
                    className="d-flex justify-content-center mb-5"
                    style={{ columnGap: "66px" }}
                  >
                    <div className="total">Total</div>
                    <div className="sofaSubtotal">Rs. 250,000.00</div>
                  </div>
                  <div className="mb-5">
                    <button type="button" class="btn btn-outline-dark checkOut" onClick={()=>navigate("/checkOut")}>
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CartFooter />
    </>
  );
};

export default Cart;
