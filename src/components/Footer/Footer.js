import "../Footer/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-container-footer overflow-x-hidden">
      <div className="footer-upper p-lg-5 ms-lg-5">
        <div className="footer-uppper-content">
          <div className="row">
            <div className="col-lg column-left">
              <p className="footer-main-text fw-bold fs-3">Funiro.</p>
              <div className="footer-secondary-text mt-lg-5">
                <p
                  className="footer-secondary-text-1"
                  style={{ color: " #9F9F9F" }}
                >
                  400 University Drive Suite 200 Coral Gables, <br></br>FL 33134
                  USA
                </p>
              </div>
            </div>

            <div className="col-lg column-middle">
              <div className="row">
                <div className="col-lg column-middle-1">
                  <p className="mb-lg-5" style={{ color: " #9F9F9F" }}>
                    Links
                  </p>
                  <p className="mb-lg-5">
                    <Link className="text-decoration-none text-dark" to="/">
                      Home
                    </Link>
                  </p>
                  <p className="mb-lg-5">
                    <Link className="text-decoration-none text-dark" to="/Shop">
                      Shop
                    </Link>
                  </p>
                  <p className="mb-lg-5">
                    <Link className="text-decoration-none text-dark" to="/Blog">
                      Blog
                    </Link>
                  </p>
                  <p className="mb-lg-3">
                    <Link
                      className="text-decoration-none text-dark"
                      to="/Contact"
                    >
                      Contact
                    </Link>
                  </p>
                </div>
                <div className="col-lg column-middle-2">
                  <p className="mb-lg-5" style={{ color: " #9F9F9F" }}>
                    Help
                  </p>
                  <p className="mb-lg-5">Payment Options</p>
                  <p className="mb-lg-5">Returns</p>
                  <p className="mb-lg-3">Privacy Policies</p>
                </div>
              </div>
            </div>

            <div className="col-lg column-end">
              <div className="row-1 mb-lg-4">
                <p style={{ color: " #9F9F9F" }}>Newsletter </p>
              </div>

              <div className="column-end-content pt-lg-3">
                <div className="input-box">
                  <input
                    className="form-input"
                    type="search"
                    placeholder="Enter your Email Address"
                  />
                </div>

                <div className=" ms-lg-3 Subscribe-box fw-semibold">
                  SUBSCRIBE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="pt-4 fw-semibold pb-lg-4 fs-6">
          2023 furino. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
