import React from "react";
import BreadcrumbBackground from "../../components/breadcrumbBackground/breadcrumbBackground";
import "./CheckOut.css";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import CartFooter from "../../components/cartFooter/CartFooter";

const index = () => {
  return (
    <>
      <BreadcrumbBackground
        HeaderText={"Checkout"}
        SecondaryText={"Checkout"}
      />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-6 col-sm-12 ">
            <form className="row g-3">
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label formLabel">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control inputBox"
                  id="inputEmail4"
                />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label formLabel">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control inputBox"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label formLabel">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  className="form-control inputBox"
                  id="inputAddress"
                  placeholder=""
                />
              </div>
              <div class="col-12">
                <label for="validationCustom04" class="form-label formLabel">
                  Country / Region
                </label>
                <select
                  class="form-select formLabelSselect"
                  id="validationCustom04"
                  required
                >
                  <option selected disabled value="">
                    Sri Lanka
                  </option>
                  <option>Sri Lanka</option>
                  <option value="">b</option>
                </select>
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label formLabel">
                  Street address
                </label>
                <input
                  type="text"
                  className="form-control inputBox"
                  id="inputAddress"
                  placeholder=""
                />
              </div>
              <div class="col-12">
                <label for="validationCustom04" class="form-label formLabel">
                  Province
                </label>
                <select
                  class="form-select formLabelSselect"
                  id="validationCustom04"
                  required
                >
                  <option selected disabled value="">
                    Western Province
                  </option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-12">
                <label for="inputAddress2" className="form-label formLabel">
                  ZIP code
                </label>
                <input
                  type="text"
                  className="form-control inputBox"
                  id="inputAddress2"
                  placeholder=""
                />
              </div>
              <div className="col-12">
                <label for="inputAddress2" className="form-label formLabel">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control inputBox"
                  id="inputAddress2"
                  placeholder=""
                />
              </div>
              <div className="col-12">
                <label for="inputAddress2" className="form-label formLabel">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control inputBox"
                  id="inputAddress2"
                  placeholder=""
                />
              </div>
              <div className="col-12 productForm">
                <input
                  type="text"
                  className="form-control inputBox"
                  id="floatingInput"
                  placeholder="Additional information"
                />
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-sm-12 productStatus">
            <div className="d-flex justify-content-between mb-3">
              <div className="proDuct">Product</div>
              <div className="subTotals ">Subtotal</div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <span className="sofa">Asgaard sofa</span>
                <span className="multiply"> x 1</span>
              </div>
              <div className="subtotalPrice">Rs. 250,000.00</div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="subTotal">Subtotal</div>
              <div className="subPrice">Rs. 250,000.00</div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="totals">Total</div>
              <div className="totalPrice">Rs. 250,000.00</div>
            </div>
            <hr />
            <div className="d-flex gap-2 mb-2">
              <div>
                <GoDotFill />
              </div>
              <div className="bankTransfer">Direct Bank Transfer</div>
            </div>
            <p className="productPara">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="d-flex gap-2">
              <div>
                <GoDot color="#9F9F9F" />
              </div>
              <div className="directBank">Direct Bank Transfer</div>
            </div>
            <div className="d-flex gap-2 mb-2">
              <div>
                <GoDot color="#9F9F9F" />
              </div>
              <div className="cash">Cash On Delivery</div>
            </div>
            <p className="mb-5">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <b> privacy policy.</b>
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn text-center btn-outline-dark placeOrder">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
      <CartFooter />
    </>
  );
};

export default index;
