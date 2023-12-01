import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import PageNavigation from "./PageNavigation";
// import FormatPrice from "../helper/FormatPrice";
import Star from "./Star";
import AddToCart from "./AddToCart";
import CartButton from "./CartButton";

const SingleProduct = () => {
  const { product } = useProductContext();
  const { id } = useParams();

  const data = product.find((item) => item.productId === Number(id));
  // {productName,price,stock,rating,image,categories}=data;

  return (
    <>
      {/* <div className="d-flex align-item-center"> */}
      <div>
        <PageNavigation title={data.productName} />
      </div>

      <div className="container-fluid mt-5 px-5">
        <div className="row gy-3">
          <div className="col-lg-6">
            <div className="row">
              <img
                src={`../${data && data.productImage}`}
                alt="SingleImage"
                className="w-75 d-block m-auto"
              />
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-center">
            <div className=" ">
              <div className="text-capitalize">
                <h2>{data && data.productName}</h2>
                <div className="mt-3">
                  <p>{data && data.description}</p>
                </div>

                <Star star={data.star} />

                <p>categories : {data && data.categories}</p>
                {data.stock ? <p>stock : available</p> : <p>not available</p>}
                <p>₹ {data && data.productPrice}</p>

                {/* {data && data.stock > 0 ? (
                  <AddToCart product={data} />
                ) : (
                  "<p>Out of Stock</p>"
                )} */}

                {data && <CartButton product={data}></CartButton>}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* <div className="container-fluid mt-5">
        <div className="row gy-3">
          <div className="col-lg-6">
            <div className="row">
              <img
                src={`../${data && data.productImage}`}
                alt="SingleImage"
                className="w-75 d-block m-auto"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-capitalize">
              <h4>{data && data.productName}</h4>

              <Star star={data.star} />

              <p>categories : {data && data.categories}</p>
              <p> {data && <FormatPrice price={data.productPrice} />}</p>
              {data && data.stock > 0 ? (
                <AddToCart product={data} />
              ) : (
                "<p>Out of Stock</p>"
              )}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SingleProduct;
