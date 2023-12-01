import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import isLogin from "./loginLocalhost";
// import logout from "./logout";
import { useEffect } from "react";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();

  // const data = localStorage.getItem("user");
  // const newLogin = JSON.parse(data).login;
  // console.log({ newLogin });
  // const [login, setLogin] = useState(newLogin);

  // console.log({ login });
  // useEffect(() => {
  //   setLogin(newLogin);
  // }, [newLogin]);

  // logout
  // const logout = () => {
  //   const data = localStorage.getItem("user");
  //   const newData = JSON.parse(data);
  //   const setData = { ...newData, login: false };
  //   localStorage.setItem("user", JSON.stringify(setData));
  // };
  // const [isLogout, setLogout] = useState(logout);

  // useEffect(() => {
  //   setLogout(logout);
  //   navigate("/registration");
  // }, [isLogout]);

  const getData = useSelector((state) => state.cartReducer.carts);

  const wishListData = useSelector((state) => state.wishListReducer.wishList);

  const totalCartItem = getData.length;

  return (
    <header className="nav-sticky">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <HeaderLogo></HeaderLogo>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 ls-1 text-capitalize fw-500">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  home
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/blogAxios">
                  BlogAxios
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  blog
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/about">
                  about
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  pages
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex me-3">
            <HeaderIcon
              totalCartItem={totalCartItem}
              wishListData={wishListData}
              // login={login}
              // logout={logout}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;

function HeaderLogo() {
  return (
    <Link className="navbar-brand" to="/">
      <img
        src="../assets/image/logo.png"
        alt="logoImg"
        className="header-logo"
      />
    </Link>
  );
}

function HeaderIcon({ totalCartItem, wishListData }) {
  // function HeaderIcon({ totalCartItem, wishListData, login, logout }) {
  // console.log("header icon", isLogin);

  return (
    <div className="fs-4 ">
      {/* {login === true ? ( */}
      <>
        {" "}
        <Link to="#" className="text-decoration-none link">
          <i className="icofont-search-1 ps-3"></i>
        </Link>
        <Link to="/wishList" className="text-decoration-none link">
          {wishListData.length > 0 ? (
            <i class="bi bi-heart-fill ps-3 pe-3 text-success"></i>
          ) : (
            <i className="bi bi-heart ps-3 pe-3"></i>
          )}
        </Link>
        <Link to="/cart" className="text-decoration-none link d-inline-block">
          <i className="icofont-cart-alt">
            <span className="fs-6  d-inline-block abs-cart-icon fw-bold">
              {totalCartItem}
            </span>
          </i>
        </Link>
        {/* <Link
          to="/login"
          className="text-decoration-none link"
          // onClick={logout}
        >
          logout
        </Link> */}
      </>
      {/* : (
        <>
          <Link
            to="/login"
            className="text-decoration-none link text-capitalize"
          >
            login
          </Link>
          <Link
            to="/registration"
            className="text-decoration-none link text-capitalize ms-2"
          >
            register
          </Link>
        </>
      )} */}
    </div>
  );
}
