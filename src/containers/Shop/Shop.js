import BreadcrumbBackground from "../../components/breadcrumbBackground/breadcrumbBackground";
import BasicCard from "../../components/furnitureCard/basicCard/basicCard";
import FurnitureCard from "../../components/furnitureCard/furnitureCard";
import ShopHeader from "./shopHeader/shopHeader";
import Grifo from "../../assets/images/OP-Grifo.svg";
import Muggo from "../../assets/images/OP-Muggo.svg";
import Pingky from "../../assets/images/OP-Pingky.svg";
import Sofie from "../../assets/images/OP-Sofie.svg";
import Pagination from "../../components/Pagination/Pagination";
import AssuranceCard from "../../components/AssuranceCard/AssuranceCard";
import AddToCart from "../../components/AddCart/AddToCart";
import "./Shop.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import compareImg from "../../assets/images/Group 146.svg";
import cross from "../../assets/images/Vector (2).svg";
import CompareSecondImg from "../../assets/images/Group 146 (1).svg";
import { useState } from "react";

function Shop() {

  return (
    <>
    <div >
      <div className="Shop-main-container position-relative">
        <div className="Breadcrumb-container">
          <BreadcrumbBackground HeaderText={"Shop"} SecondaryText={"Shop"} />
        </div>

        <div className="Shop-header-section">
          <ShopHeader />
        </div>

        <div className="Shop-Furniture-card-list">
          <div className="pt-5">
            <FurnitureCard />
          </div>
          <div>
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
          <div>
            <FurnitureCard />
          </div>
          <div className="pb-lg-5">
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

        <div className="Shop-pagination-container">
          <Pagination />
        </div>

        <div className="Shop-Assurance-container">
          <AssuranceCard />
        </div>
      </div>

      </div>
    </>
  );
}

export default Shop;
