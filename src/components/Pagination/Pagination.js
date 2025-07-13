import "../Pagination/Pagination.css";

const Pagination = () => {
  return (
    <div className="Pagination-container d-flex justify-content-center pt-4 gap-3 gap-lg-5 pb-5">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#B88E2F", color: "white" }}
      >
        1
      </div>

      <div className="d-flex justify-content-center align-items-center">2</div>

      <div className="d-flex justify-content-center align-items-center">3</div>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100px" }}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
