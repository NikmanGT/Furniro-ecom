import FurnitureCard from "../../../components/furnitureCard/furnitureCard";
import "./opCard.css";
import "../../../components/furnitureCard/furnitureCard.css";
import Grifo from "../../../assets/images/OP-Grifo.svg";
import Muggo from "../../../assets/images/OP-Muggo.svg";
import Pingky from "../../../assets/images/OP-Pingky.svg";
import Sofie from "../../../assets/images/OP-Sofie.svg";
import BasicCard from "../../../components/furnitureCard/basicCard/basicCard";

const OpCard = () => {
  return (
    <div className="main-op-container pb-5 overflow-x-hidden">
      <div className="main-op-text">
        <p className="text-center fw-bold fs-1">Our Products</p>
        <div className="furniture-op-container">
          <FurnitureCard />

          <div className="container-lg pt-lg-4">
            <div className=" container-lg">
              <div className="row">
                <div className="col-6 col-lg-6">
                  <div className="row">
                    <div className="col-12 col-md-6 pb-4 pb-lg-0">
                      <BasicCard
                        img={Grifo}
                        cardTextMain={"Grifo"}
                        cardTextSecond={"Night lamp"}
                        RPmain={"Rp 1.500.000"}
                        RPsecond={"Rp 2.000.000"}
                      />
                    </div>
                    <div className="col-12 col-md-6 pb-4 pb-lg-0">
                      <BasicCard
                        img={Muggo}
                        cardTextMain={"Muggo"}
                        cardTextSecond={"Small mug"}
                        RPmain={"Rp 150.000"}
                        RPsecond={"Rp 500.000"}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-6 col-lg-6">
                  <div className="row">
                    <div className="col-12 col-md-6 pb-4 pb-lg-0">
                      <BasicCard
                        img={Pingky}
                        cardTextMain={"Pingky"}
                        cardTextSecond={"Cute bed set"}
                        RPmain={"Rp 7.000.000"}
                        RPsecond={"Rp 14.000.000"}
                      />
                    </div>
                    <div className="col-12 col-md-6 pb-4 pb-lg-0">
                      <BasicCard
                        img={Sofie}
                        cardTextMain={"Sofie"}
                        cardTextSecond={"Leather Brown Sofa"}
                        RPmain={"Rp 500.000"}
                        RPsecond={"Rp 750.000"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="OP-Show-more-button mt-5 d-flex justify-content-center">
        <button className="">Show More</button>
      </div>
    </div>
  );
};

export default OpCard;
