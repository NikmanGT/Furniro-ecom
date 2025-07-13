import "./breadcrumbBackground.css";
import { PiCaretRightBold } from "react-icons/pi";
import Logo from "../../assets/images/Meubel House_Logos-05.svg";

const BreadcrumbBackground = ({ HeaderText, SecondaryText }) => {
  return (
    <div className="main-breadcrumb-bg d-flex justify-content-center align-items-center">
      <div className="Breadcrumb-content-container">
        <div className="Breadcrumb-logo text-center">
          <img src={Logo} alt="..."></img>
        </div>
        <div className="Breadcrumb-text-upper text-center pt-2">
          <h1>{HeaderText}</h1>
          <div className="Breadcrumb-text-lower d-flex gap-2 justify-content-center">
            <div className="fw-semibold">Home</div>
            <div>
              <PiCaretRightBold />
            </div>
            <div>{SecondaryText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
//  <IoIosArrowForward />
export default BreadcrumbBackground;
