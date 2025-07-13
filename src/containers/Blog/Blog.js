import React, { useState } from "react";
import BreadcrumbBackground from "../../components/breadcrumbBackground/breadcrumbBackground";
import pc from "../../assets/images/Rectangle 68.svg";
import user from "../../assets/images/dashicons_admin-users.svg";
import date from "../../assets/images/uis_calender.svg";
import cart from "../../assets/images/Vector.svg";
import "./Blog.css";
import handmade from "../../assets/images/Rectangle 68 (1).svg";
import notesImg from "../../assets/images/Rectangle 68 (2).svg";
import { IoSearch } from "react-icons/io5";
import sideFimg from "../../assets/images/Rectangle 69.svg";
import sideSimg from "../../assets/images/Rectangle 69 (1).svg";
import sideTimg from "../../assets/images/Rectangle 69 (2).svg";
import sideFourImg from "../../assets/images/Rectangle 69 (3).svg";
import sideFiveImg from "../../assets/images/Rectangle 69 (4).svg";
import { IoIosArrowDown } from "react-icons/io";
 import { Modal, Button } from "react-bootstrap";


const Blog = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <BreadcrumbBackground HeaderText={"Blog"} SecondaryText={"Blog"} />
      <div className="container mt-5 mb-5">
        <div className="row blog">
          <div className="col-lg-8 ">
            <div className="mb-3 ">
              <img src={pc} alt="" className="productImg" />
            </div>
            <div className="d-flex gap-4 mb-4">
              <div className="d-flex gap-2">
                <div className="">
                  <img src={user} alt="" />
                </div>
                <div className="admin">Admin</div>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <img src={date} alt="" />
                </div>
                <div className="date">14 Oct 2022</div>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <img src={cart} alt="" />
                </div>
                <div className="wood">Wood</div>
              </div>
            </div>
            <div className="text mb-2">Going all-in with millennial design</div>
            <p className="paragraph mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <div className="readMore mb-5">
              <span>Read more</span>
            </div>
            <div className="mb-3 ">
              <img src={handmade} alt="" className="productImg" />
            </div>
            <div className="d-flex gap-4 mb-4">
              <div className="d-flex gap-2">
                <div className="">
                  <img src={user} alt="" />
                </div>
                <div className="admin">Admin</div>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <img src={date} alt="" />
                </div>
                <div className="date">14 Oct 2022</div>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <img src={cart} alt="" />
                </div>
                <div className="wood">Handmade</div>
              </div>
            </div>
            <div className="text mb-2">Exploring new ways of decorating</div>
            <p className="paragraph mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <div className="readMore mb-5">
              <span>Read more</span>
            </div>
            <div className="mb-3 ">
              <img src={notesImg} alt="" className="productImg" />
            </div>
            <div className="d-flex gap-4 mb-4">
              <div className="d-flex gap-2">
                <div className="">
                  <img src={user} alt="" />
                </div>
                <div className="admin">Admin</div>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <img src={date} alt="" />
                </div>
                <div className="date">14 Oct 2022</div>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <img src={cart} alt="" />
                </div>
                <div className="wood">Handmade</div>
              </div>
            </div>
            <div className="text mb-4">Exploring new ways of decorating</div>
            <p className="paragraph mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <div className="readMore mb-5">
              <span>Read more</span>
            </div>
            <div className="d-flex justify-content-end gap-4 nextButton">
              <div>
                <button className="btn nextBtnfirst">1</button>
              </div>
              <div>
                <button className="btn nextBtn">2</button>
              </div>
              <div>
                <button className="btn nextBtn">3</button>
              </div>
              <div>
                <button className="btn nextBtn">Next</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="input-group mb-4">
              <input
                type="text"
                class="form-control "
                aria-label=""
                style={{
                  borderRight: "0",
                  borderColor: "#9F9F9F",
                  lineHeight: "2.5rem",
                }}
              />
              <span
                class="input-group-text "
                style={{ backgroundColor: "white", borderColor: "#9F9F9F" }}
              >
                <IoSearch style={{ fontSize: "2rem" }} onClick={handleShowModal} style={{cursor: "pointer"}}/>
              </span>
            </div>
            <div className="container categoryList mb-5">
              <div className="category mb-4">Categories</div>
              <div className="d-flex flex-column allCategory">
                <div className="d-flex craftCategories">
                  <div>Crafts</div>
                  <div>2</div>
                </div>
                <div className="d-flex designCategories">
                  <div>Design</div>
                  <div>8</div>
                </div>
                <div className="d-flex handmadecategory">
                  <div>Handmade</div>
                  <div>7</div>
                </div>
                <div className="d-flex InteriorCategories">
                  <div>Interior</div>
                  <div>1</div>
                </div>
                <div className="d-flex woodCategories">
                  <div>Wood</div>
                  <div>6</div>
                </div>
              </div>
            </div>
            <div className="container selectCategory">
              <div className="d-flex selectList">
                <div className="category mb-4">Categories</div>
                <div>
                  <IoIosArrowDown onClick={handleShowModal} style={{cursor: "pointer"}}/>
                </div>
              </div>
            </div>
            <div className="container posts">
              <div className="recentPosts mb-3">Recent Posts</div>
              <div className="d-flex flex-column row-gap-4">
                <div className="d-flex gap-2">
                  <div>
                    <img src={sideFimg} alt="" />
                  </div>
                  <div className="aboutPost">
                    Going all-in with
                    <br />
                    millennial design
                    <div className="sideDate">03 Aug 2022</div>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <img src={sideSimg} alt="" />
                  </div>
                  <div className="aboutPost">
                    Exploring new ways <br /> of decorating
                    <div className="sideDate">03 Aug 2022</div>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <img src={sideTimg} alt="" />
                  </div>
                  <div className="aboutPost">
                    Handmade pieces <br /> that took time to make
                    <div className="sideDate">03 Aug 2022</div>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <img src={sideFourImg} alt="" />
                  </div>
                  <div className="aboutPost">
                    Modern home in
                    <br />
                    Milan
                    <div className="sideDate">03 Aug 2022</div>
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <img src={sideFiveImg} alt="" />
                  </div>
                  <div className="aboutPost">
                    Colorful office <br />
                    redesign
                    <div className="sideDate">03 Aug 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <ul className="list-group">
            <li className="list-group-item">Crafts</li>
            <li className="list-group-item">Design</li>
            <li className="list-group-item">Handmade</li>
            <li className="list-group-item">Interior</li>
            <li className="list-group-item">Wood</li>
          </ul> */}
          <div>
            <div className="d-flex craftCategories">
              <div>Crafts</div>
              <div>2</div>
            </div>
            <div className="d-flex designCategories">
              <div>Design</div>
              <div>8</div>
            </div>
            <div className="d-flex handmadecategory">
              <div>Handmade</div>
              <div>7</div>
            </div>
            <div className="d-flex InteriorCategories">
              <div>Interior</div>
              <div>1</div>
            </div>
            <div className="d-flex woodCategories">
              <div>Wood</div>
              <div>6</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal} className="closeBtn">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Blog;

