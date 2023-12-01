import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_WISHLIST, REMOVE_All } from "../reduxAction";
// import { useFilterContext } from "../context/shopFilterContext";

function WishList() {
  // const { wishList } = useFilterContext();
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishListReducer.wishList);

  const removeProWishList = (id) => {
    dispatch(REMOVE_WISHLIST(id));
  };

  const removeAll = () => {
    dispatch(REMOVE_All());
  };

  console.log(wishList);
  return (
    <>
      <div className="container mt-5">
        {wishList.length <= 0 ? (
          <div>
            <h3 className="text-center">
              No Product in WishList.
              <Link to={"/shop"} className="text-decoration-none">
                go for shopping
              </Link>
            </h3>
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between">
              <h3>Your WishList</h3>
              <span
                style={{ cursor: "pointer" }}
                className="bg-danger text-light px-3 py-2 float-end mt-2 me-5"
                onClick={removeAll}
              >
                Clear WishList
              </span>
            </div>
            <div className="row gap-4">
              {wishList.map((product, i) => {
                return (
                  <div key={i} className="col-lg-3 mt-3 wishList-box p-0">
                    <div className="home_product position-relative">
                      <div className="overflow-hidden">
                        <Link
                          to={`/singleProduct/${product.productId}`}
                          // to={`/ProductSingle/${product.productId}`}
                          className="text-decoration-none"
                        >
                          <img
                            src={product.productImage}
                            alt="product"
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                    </div>

                    {/* product name and price  */}
                    <div className="px-3">
                      <h4 className=" mt-2 ">
                        <Link className="text-decoration-none product-title ">
                          {product.productName}
                        </Link>
                      </h4>
                      <div className="d-flex justify-content-between">
                        <p className="">
                          <span className="product-price fs-5">
                            {/* ${product.productPrice} */}₹
                            {product.productPrice}
                          </span>

                          {product.proOldPrice > 0 ? (
                            <span className="ps-2 fw-500">
                              ₹{product.proOldPrice}
                            </span>
                          ) : (
                            <span></span>
                          )}
                        </p>

                        <p>
                          <button
                            className="border-0"
                            onClick={() => removeProWishList(product.productId)}
                          >
                            <i className="bi bi-trash3 px-2 text-light py-2 bg-danger rounded-circle"></i>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default WishList;
