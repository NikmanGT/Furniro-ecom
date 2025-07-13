import "./shopHeader.css";
import { LiaSlidersHSolid } from "react-icons/lia";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";

function ShopHeader() {
  return (
    <div
      className="Shop-header-main-container pt-4 pb-4"
      style={{ backgroundColor: "#F9F1E7" }}
    >
      <div className="container d-lg-flex justify-content-between">
        <div
          className=" d-flex gap-4 justify-content-center"
          style={{ height: "2rem" }}
        >
          <div className="Left-column-1 d-flex justify-content-center gap-lg-4 gap-3">
            <div className="Left-column-1.a d-flex gap-2">
              <div>
                <LiaSlidersHSolid style={{ fontSize: "1.5rem" }} />
              </div>
              <div style={{ fontSize: "1.2rem" }}>Filter</div>
            </div>

            <div className="Left-column-1.b d-flex gap-lg-4 gap-4">
              <div>
                <HiViewGrid style={{ fontSize: "1.5rem" }} />
              </div>
              <div>
                <BsViewList style={{ fontSize: "1.5rem" }} />
              </div>
            </div>
          </div>
          <div className="vr d-none d-lg-block"></div>
          <div className="Left-column-2">
            <p>Showing 1-16 of 32 results</p>
          </div>
        </div>

        <div className="  d-lg-flex gap-lg-5">
          <div className="Right-column-1 d-flex justify-content-center gap-3 pt-2 p-lg-0">
            <div style={{ fontSize: "1.2rem" }}>Show</div>
            <div style={{ fontSize: "1.2rem" }}>
              <select id="Shop-Header-Dropdown-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="Right-column-2 d-flex justify-content-center gap-3 pt-3 p-lg-0">
            <div style={{ fontSize: "1.2rem" }}>Sort by</div>
            <div style={{ fontSize: "1.2rem" }}>
              <select id="Shop-Header-Dropdown-2">
                <option value="1">Sort by Name A-Z</option>
                <option value="2">Sort by Title A-Z</option>
                <option value="3">Sort by A-Z</option>
                <option value="4">Sort by Z-A</option>
                <option value="5">Low to High</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopHeader;
