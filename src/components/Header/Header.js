import { NavLink, useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Header/Header.css";
import Logo from "../../assets/images/Meubel House_Logos-05.svg";
import { FiSearch } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlinePersonRemove } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg">
      <HiOutlineHeart
        size={30}
        className=" d-block d-lg-none nav-mobile-icon-1 position-absolute end-0 top-0"
      />
      <HiOutlineShoppingCart
        size={28}
        className=" d-block d-lg-none nav-mobile-icon-2 position-absolute end-0 top-0"
        onClick={()=>navigate("/cart")}
      />
      <div className="container-fluid ms-lg-3 main-navbar">
        <div className=" Logo-container d-flex align-items-center p-lg-1 ps-lg-4">
          <a href="">
            <img
              src={Logo}
              alt="logo"
              className="logo-img mt-lg-1"
              style={{ height: "38px", width: "55px" }}
            ></img>
          </a>

          <a
            className="navbar-brand ps-lg-1"
            href=""
            style={{ fontWeight: "700" }}
          >
            <span> Furniro</span>
          </a>
        </div>

        <div className="dropdown-button mb-5">
          <button
            className="navbar-toggler position-absolute end-0 me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse me-lg-5 ms-lg-5 ps-lg-5"
          id="navbarScroll"
        >
          <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll mx-lg-auto ">
            <li className="nav-item">
              <NavLink
                className="nav-link active me-lg-5 ms-lg-5 fw-semibold"
                aria-current="page"
                exact
                to="/"
                activeClassName="active"
                style={{ fontSize: "18px" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active me-lg-5 fw-semibold"
                to="/Shop"
                style={{ fontSize: "18px" }}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active me-lg-5 fw-semibold"
                to="/Blog"
                style={{ fontSize: "18px" }}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active me-lg-5 fw-semibold"
                to="/Contact"
                style={{ fontSize: "18px" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center nav-icons pe-lg-5">
          <MdOutlinePersonRemove
            size={32}
            className=" d-none d-lg-block me-lg-4"
          />
          <FiSearch size={28} className="d-none d-lg-block me-lg-4 ms-lg-3" />
          <HiOutlineHeart
            size={30}
            className="mx-2 d-none d-lg-block me-lg-4 ms-lg-3"
          />
          <HiOutlineShoppingCart
            size={28}
            className="mx-2 d-none d-lg-block me-lg-4 ms-lg-3"
            style={{cursor:"pointer"}}
           onClick={()=>navigate("/cart")}
          />
        </div>
      </div>

      <form className="d-flex d-lg-none mt-3 w-100 mx-3" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />{" "}
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Header;
