import React from "react";
import "./AddToCart.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import compareImg from "../../assets/images/Group 146.svg";
import cross from "../../assets/images/Vector (2).svg";
import CompareSecondImg from "../../assets/images/Group 146 (1).svg";
import removeCart from "../../assets/images/Vector (3).svg";
const AddToCart = ({setCartOpen}) => {
  const handleCloseCart = ()=>{
    setCartOpen(false)
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <div class="card addToCart-card">
          <div class="card-body addToCart-body">
            <h5 class="card-title shopping-cart">
              <div className="d-flex justify-content-between mb-4 addTocartShopping">
                <div>Shopping Cart</div>
                <div onClick={()=>handleCloseCart()}>
                  {/* <HiOutlineShoppingBag  style={{cursor:"pointer"}}/> */}
                  <img src={removeCart} alt="" style={{cursor:"pointer"}}/>
                </div>
              </div>
              <hr style={{ width: "18rem" }} className="mb-4" />
            </h5>
            <div className="d-flex flex-column row-gap-5 mb-5">
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-4">
                <div className="">
                  <img src={compareImg} alt="" />
                </div>
                <div className="d-flex flex-column justify-content-evenly">
                  <div className="addCartText">Asgaard sofa</div>
                  <div className="d-flex gap-3">
                    <div>1</div>
                    <div>x</div>
                    <div className="cartPrice">Rs. 250,000.00</div>
                  </div>
                  </div>
                </div>
                <div className="d-flex  justify-content-center align-items-center">
                  {" "}
                  <img src={cross} alt="" />
                </div>
              </div>
              <div className="d-flex justify-content-between">
              <div className="d-flex gap-4">
                <div className="">
                  <img src={CompareSecondImg} alt="" />
                </div>
                <div className="d-flex flex-column justify-content-evenly">
                  <div className="addCartText">Casaliving Wood</div>
                  <div className="d-flex gap-3">
                    <div>1</div>
                    <div>x</div>
                    <div className="cartPrice">Rs. 270,000.00</div>
                  </div>
                  </div>
                </div>
                <div className="d-flex  justify-content-center align-items-center">
                  {" "}
                  <img src={cross} alt="" />
                </div>
              </div>
            </div>
            <div className="d-flex mb-4">
                <div className="addCartText"> Subtotal</div>
                <div className="addTocartSuubtotal"> Rs. 520,000.00</div>
              </div>
              <hr className="mb-4"/>
              <div className="d-flex justify-content-between">
                <div>
                    <button className="btn btn-outline-dark addToCartBtn">Cart</button>
                </div>
                <div>
                    <button className="btn btn-outline-dark addToCartBtn">Checkout</button>
                </div>
                <div>
                    <button className="btn btn-outline-dark addToCartBtn">Comparison</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
