// import HomeIcon from "./HomeIcon";
import { Link } from "react-router-dom";
// import FormatPrice from "../helper/FormatPrice";
import { useFilterContext } from "../context/shopFilterContext";
import { useDispatch, useSelector } from "react-redux";
import { ADD_WISHLIST } from "../reduxAction";
import { useState } from "react";
// import { useState } from "react";

function ShopProduct(props) {
  const dispatch = useDispatch();

  const wishList = useSelector((state) => state.wishListReducer.wishList);
  const { col, product } = props;
  const { modalOpen } = useFilterContext();
  // const { modalOpen, addWishList, wishList } = useFilterContext();

  // const [isOpen, setIsOpen] = useState(false);

  const sendWishList = (wishPro) => {
    dispatch(ADD_WISHLIST(wishPro));
  };

  // const [productPerPage, setProductPerPage] = useState();

  return (
    <>
      {product.map((product) => {
        return (
          <div
            className={`col-md-${col} col-sm-6 col-6`}
            key={product.productId}
          >
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

                {/* icon  */}
                <div className="abs-icon">
                  <Link
                    className="text-decoration-none"
                    title="Add to Wishlist"
                    onClick={() => sendWishList(product)}
                    // onClick={() => addWishList(product)}
                  >
                    {wishList.find(
                      (item) => item.productId === product.productId
                    ) ? (
                      <i className="bi bi-heart icon rounded-circle"></i>
                    ) : (
                      <i class="bi bi-heart-fill icon rounded-circle text-success"></i>
                    )}
                  </Link>
                  <Link className="text-decoration-none" title="QuickView">
                    <i className="bi bi-search mx-2 icon rounded-circle"></i>
                  </Link>
                  <Link
                    className="text-decoration-none"
                    title="View more "
                    onClick={() => modalOpen(product.productId)}
                  >
                    <i className="bi bi-eye icon rounded-circle"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* product name and price  */}
            <div>
              <h4 className="text-center mt-2 ">
                <Link className="text-decoration-none product-title ">
                  {product.productName}
                </Link>
              </h4>
              <p className="text-center">
                <span className="product-price fs-5">
                  {/* ${product.productPrice} */}₹{product.productPrice}
                </span>

                {product.proOldPrice > 0 ? (
                  <span className="ps-2 fw-500">₹{product.proOldPrice}</span>
                ) : (
                  <span></span>
                )}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ShopProduct;
