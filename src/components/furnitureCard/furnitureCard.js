import Slytherine from "../../assets/images/Slytherine.svg";
import Leviosa from "../../assets/images/Leviosa.svg";
import Lolito from "../../assets/images/Lolito.svg";
import Respira from "../../assets/images/Respira.svg";
import BasicCard from "./basicCard/basicCard";
import { useNavigate } from "react-router-dom";

const FurnitureCard = () => {
  return (
    <div className="main-furn-container container-lg">
      <div className=" container-lg">
        <div className="row">
          <div className="col-6 col-lg-6">
            <div className="row">
              <div className="col-12 col-md-6 pb-4 pb-lg-0">
                <BasicCard
                  img={Slytherine}
                  cardTextMain={"Slytherine"}
                  cardTextSecond={"Stylish Table"}
                  RPmain={"Rp 2.500.000"}
                  RPsecond={"Rp 3.500.000"}
                />
              </div>
              <div className="col-12 col-md-6 pb-4 pb-lg-0">
                <BasicCard
                  img={Leviosa}
                  cardTextMain={"Leviosa"}
                  cardTextSecond={"Stylish cafe chair"}
                  RPmain={"Rp 2.500.000"}
                  RPsecond={"Rp 3.500.000"}
                />
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-6">
            <div className="row">
              <div className="col-12 col-md-6 pb-4 pb-lg-0">
                <BasicCard
                  img={Lolito}
                  cardTextMain={"Lolito"}
                  cardTextSecond={"Luxury big sofa"}
                  RPmain={"Rp 7.000.000"}
                  RPsecond={"Rp 14.000.000"}
                />
              </div>
              <div className="col-12 col-md-6 pb-4 pb-lg-0">
                <BasicCard
                  img={Respira}
                  cardTextMain={"Respira"}
                  cardTextSecond={"Outdoor bar table and stool"}
                  RPmain={"Rp 500.000"}
                  RPsecond={"Rp 1.500.000"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
