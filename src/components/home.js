import React from "react";

import SliderImage from "./homeSlider";
import HomeBanner from "./HomeBanner";
import HomeProduct from "./HomeProduct";
import HomeBlog from "./HomeBlog";

function Home() {
  return (
    <>
      <div className="container-fluid m-0">
        {/* abs-slider */}
        <div className="row">
          <SliderImage />
        </div>
        {/* {name} */}
      </div>

      {/* banner plant  */}
      <div className="container-fluid mt-5">
        <div className="row gy-4">
          <HomeBanner />
        </div>
      </div>

      {/* product link  */}
      <div className="container-fluid mt-5">
        <div className="row gy-4">
          <div className="text-uppercase text-center ls-1 fw-4 fw-500">
            <h3 className="product_link d-inline-block mt-4 text-success">
              feature product{" "}
            </h3>
          </div>
        </div>
      </div>

      {/* all product  */}
      <div className="container-fluid mt-3">
        <div className="row gy-3">
          <HomeProduct />
          {/* <Outlet /> */}
        </div>
      </div>

      {/* blog  */}
      <div className="container-fluid mt-5">
        <div className="row">
          {/*blog title  */}
          <h3
            className="text-capitalize text-center fs-2 fw-bold"
            style={{ color: "#518432" }}
          >
            our blog
          </h3>

          {/* blog data  */}
          <div className="container-fluid mt-5">
            <HomeBlog />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
