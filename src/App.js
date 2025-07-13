import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Homepage/Homepage";
import Blog from "./containers/Blog/Blog";
import Contact from "./containers/Contact/Contact";
import Shop from "./containers/Shop/Shop";
import ProductDetails from "./containers/productDetails/ProductDetails";
import ProductCompare from "./containers/productDetails/productCompare/ProductCompare";
import Cart from "./containers/Cart/Cart";
import CheckOut from "./containers/CheckOut";
import AddToCart from "./components/AddCart/AddToCart";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Contact" element={<Contact />} />
          {/* <Route path="About" element={<About />} /> */}
          <Route path="productDetails" element={<ProductDetails />} />
          <Route path="productCompare" element={<ProductCompare />} />
          <Route path="blog" element={<Blog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkOut" element={<CheckOut />} />
          <Route path="addCart" element={<AddToCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
