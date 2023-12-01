// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from "axios";

import About from "./components/about";
import Header from "./components/header";
// import BlogAxios from "./components/blogAxios";
// import Contact from "./components/contact";
import Blog from "./components/blog";
import Footer from "./components/footer";
import Home from "./components/home";
import Shop from "./components/Shop";
// import BlogAPI from "./components/blogAPI";
import CreateData from "./components/createData";
import ErrorPage from "./components/ErrorPage";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/cart";
import WishList from "./components/wishList";
import ContactUs from "./components/ContactUs";
import CheckOut from "./components/CheckOut";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Protected from "./components/Protected";

function App() {
  // setIsLogin(loginData.login);
  // const [mode, setMode] = useState(false);

  // mode === true ? "bg-black" : "bg-white";
  // useEffect(() => {
  //   document.body.classList.toggle("bg-black");
  // }, []);

  // const modeBG =
  // const modeText = mode === true ? "text-black" : "text-white";

  // function handlerMode() {
  //   setMode((mode) => !mode);
  // }

  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:9000/product")
  //     .then((res) => console.log(res.data))
  //     .catch((error) => console.log(error));
  // }, [product]);

  return (
    <Router>
      {/* <Header mode={mode} handlerMode={handlerMode} /> */}
      <Header />
      <Routes>
        {/* <Route path="/blogAxios" element={<BlogAxios />}></Route> */}
        {/* <Route path="/blogAPI" element={<BlogAPI />}></Route> */}
        {/* <Route index element={<Home />}></Route> */}
        <Route index element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>

        <Route path="/shop" element={<Protected Component={Shop} />}></Route>
        <Route path="/SingleProduct/:id" element={<SingleProduct />}></Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/cart" element={<Protected Component={Cart} />} />
        <Route path="/checkout" element={<CheckOut></CheckOut>} />
        <Route path="/wishList" element={<Protected Component={WishList} />} />
        <Route path="/createData" element={<CreateData />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
  // return <ProgressBar />;
}

export default App;
