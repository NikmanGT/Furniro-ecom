import "../contactForm/contactForm.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { Form } from "react-router-dom";

const ContactForm = () => {
  return (
    <div className="Contactform-main-container pt-5 pb-5">
      <div className="Contactform-text-container text-center pt-3 pt-lg-5 px-3  pb-5 ">
        <h1>Get in Touch With Us</h1>
        <p className="pt-2" style={{ color: "#9F9F9F" }}>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br></br> An Email. Our Staff Always Be There To Help You Out.
          Do Not Hesitate!
        </p>
      </div>

      <div className="Contacform-main-form d-lg-flex gap-5 pt-lg-3">
        <div className="col-lg-5">
          {/* d-flex gap-4 justify-content-center */}
          <div className="ContactForm-col-left d-flex gap-4 justify-content-center pb-3 pb-lg-4">
            <div className="Form-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="Form-text">
              <h2>Address</h2>
              <p>
                236 5th SE Avenue, New<br></br>York NY10000, United<br></br>
                States
              </p>
            </div>
          </div>

          <div className="ContactForm-col-left d-flex gap-4 justify-content-center pb-3 pb-lg-4">
            <div className="Form-icon">
              <FaPhoneAlt />
            </div>
            <div className="Form-text">
              <h2>Phone</h2>
              <p>
                Mobile: +(84) 546-6789<br></br>Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="ContactForm-col-left d-flex gap-4 justify-content-center">
            <div className="Form-icon">
              <BsClockFill />
            </div>
            <div className="Form-text">
              <h2>Working Time</h2>
              <p>
                Monday-Friday: 9:00-<br></br>22:00<br></br>Saturday-Sunday:
                9:00-<br></br>21:00
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg pe-lg-5 pt-4 pt-lg-0">
          <div className="ContactForm-col-right px-4 ps-lg-0 pe-lg-5">
            <div className="Form-submit">
              <form>
                <div className="mb-4">
                  <label for="Form-Name" className="form-label fw-medium pb-3">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Abc"
                    className="form-control p-4"
                    id="Form-Name"
                  ></input>
                </div>
                <div className="mb-4">
                  <label for="Form-email" className="form-label fw-medium pb-3">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control p-4"
                    placeholder="Abc@def.com"
                    id="Form-email"
                    aria-describedby="emailHelp"
                  ></input>
                </div>
                <div className="mb-4">
                  <label
                    for="Form-Subject"
                    className="form-label fw-medium pb-3"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="This is optional"
                    className="form-control p-4"
                    id="Form-Name"
                  ></input>
                </div>
                <div className="mb-4">
                  <label
                    for="Form-Message"
                    className="form-label fw-medium pb-3"
                  >
                    Message
                  </label>
                  <input
                    type="text"
                    placeholder="Hi! i'd like to ask about"
                    className="form-control p-4 pb-5"
                    id="Form-Name"
                  ></input>
                </div>
                <div className="Form-Submit-button">
                  <button className="mt-lg-4">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
