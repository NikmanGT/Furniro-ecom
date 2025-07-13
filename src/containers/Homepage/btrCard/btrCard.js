import "../btrCard/btrCard.css";
import Dining from "../../../assets/images/BTR-dining.svg";
import Living from "../../../assets/images/BTR-Living.svg";
import Bedroom from "../../../assets/images/BTR-Bedroom.svg";

function BTRCard() {
  return (
    <div className="main-container p-lg-5 overflow-x-hidden">
      <div className="main-text-btr pb-lg-5">
        <h1 className="text-center">Browse The Range</h1>
        <p className="text-center ps-lg-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="main-img-btr mx-lg-5 px-lg-5 ">
        <div className="row">
          <div className="col-lg-4 img-btr-subtext">
            <img
              className="img-fluid mx-auto d-block"
              src={Dining}
              alt="Dining-img"
            ></img>
            <p className="text-center mt-lg-4">Dining</p>
          </div>
          <div className="col-lg-4 img-btr-subtext ">
            <img
              className="img-fluid mx-auto d-block"
              src={Living}
              alt="Living-img"
            ></img>
            <p className="text-center mt-lg-4">Living</p>
          </div>
          <div className="col-lg-4 img-btr-subtext">
            <img
              className="img-fluid mx-auto d-block"
              src={Bedroom}
              alt="Bedroom-img"
            ></img>
            <p className="text-center mt-lg-4">Bedroom</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BTRCard;
