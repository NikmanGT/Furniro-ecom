import "../mainCard/mainCard.css";

const MainCard = () => {
  return (
    <div className=" Main-card-container container-fluid p-0 overflow-x-hidden overflow-y-hidden">
      <div className="decor-img">
        {/* <img src={Decor} className="img-fluid w-100" alt="Wall-decor-img"></img> */}
        <div
          className="img-text-container rounded-lg-4 overflow-y-hidden"
          style={{
            height: "446px",
            width: "650px",
          }}
        >
          <div className="main-text  p-lg-5">
            <div className="main-text-upper">
              <h6 style={{ fontWeight: "700" }} className="pt-lg-3 ">
                New Arrival
              </h6>
              <h1>
                Discover Our<br></br>New Collection
              </h1>
              <h5 className="mt-lg-4 mb-lg-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </h5>
            </div>
          </div>

          <div
            className="Buy-Now mb-lg-4 ms-lg-5"
            style={{
              height: "76px",
              width: "218px",
            }}
          >
            <p
              className="text-center fw-bold text-white pt-lg-4"
              style={{
                height: "50px",
              }}
            >
              BUY NOW
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
