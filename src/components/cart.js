import { Link } from "react-router-dom";
// import { useProductContext } from "../context/productContext";
import { useDispatch, useSelector } from "react-redux";

import { ADD, REMOVE, REMOVE_ONE, REMOVE_CART } from "../reduxAction/index";
import { useEffect, useState } from "react";

function Cart() {
  const dispatch = useDispatch();
  // const { product } = useProductContext();

  const [totPrice, setTotPrice] = useState(0);
  const getData = useSelector((state) => state.cartReducer.carts);
  // const totalQuantity = useSelector((state) => state.cartReducer.totalQuantity);

  console.log("quantity", getData);
  // add product in cart
  const sendProduct = (cartPro) => {
    console.log(cartPro);
    console.log("cart Quantity");
    dispatch(ADD(cartPro));
  };

  // remove product in cart on delete icon
  const removeProduct = (cartId) => {
    console.log(cartId);
    console.log("cart remove Quantity");
    dispatch(REMOVE(cartId));
  };

  // remove individual item in cart depend on quantity
  const dltSingleProduct = (cart) => {
    console.log(cart);
    console.log("cart remove Quantity");
    dispatch(REMOVE_ONE(cart));
  };

  // remove all product in cart
  const removeCart = () => {
    dispatch(REMOVE_CART());
  };

  const totalPrice = () => {
    let price = 0;
    getData.map((product) => {
      price += product.productPrice * product.quantity;
    });
    setTotPrice(price);
  };

  useEffect(() => {
    totalPrice();
  });

  // const foundProduct = product.filter(
  //   (product) => product.productId === Number(id)
  // );
  // console.log(foundProduct);
  return (
    <>
      <div>
        <div className="mt-4">
          {getData.length ? (
            <>
              <div className="row">
                <h2 className="text-center">Cart</h2>
              </div>
              <div className="mt-3 mx-5">
                <div className="d-flex justify-content-around fs-5 ">
                  <p className="">Image</p>
                  <p className="px-2">Name</p>
                  <p className="px-2 ms-5">Price</p>
                  <p className="px-2">Quantity</p>
                  <p className="px-2">subtotal</p>
                  <p className="px-2">Remove</p>
                </div>

                {/* <div className="d-flex justify-content-between"> */}

                {getData.map((product, i) => {
                  return (
                    <>
                      <div key={i} className="d-flex justify-content-around">
                        {/* image  */}
                        <div className="col-lg-2">
                          <img
                            src={product.productImage}
                            alt={product.productName}
                            className="cart-img"
                          />
                        </div>

                        {/* name  */}
                        <div className="col-lg-2 d-flex align-items-center justify-content-center">
                          <p className="cart-name ">{product.productName}</p>
                        </div>

                        {/* price  */}
                        <div className="col-lg-2 d-flex align-items-center justify-content-center">
                          <p>₹{product.productPrice}</p>
                        </div>

                        {/* quantity  */}
                        <div className="col-lg-2 d-flex align-items-center justify-content-center">
                          <p className="cart-quantity px-2 fs-5">
                            <span
                              className="px-2"
                              style={{ cursor: "pointer" }}
                              onClick={() => sendProduct(product)}
                            >
                              +
                            </span>
                            {product.quantity}
                            <span
                              className="px-2"
                              style={{ cursor: "pointer" }}
                              onClick={() => dltSingleProduct(product)}
                            >
                              -
                            </span>
                          </p>
                        </div>

                        {/* subtotal  */}
                        <div className="col-lg-2 d-flex align-items-center justify-content-center">
                          <p>₹{product.productPrice * product.quantity}</p>
                        </div>

                        {/* remove  */}
                        <div className="col-lg-2 d-flex align-items-center justify-content-center">
                          <button
                            className="border-0"
                            onClick={() => removeProduct(product.productId)}
                          >
                            <i className="bi bi-trash3 px-2 text-light py-2 bg-danger rounded-circle"></i>
                          </button>
                        </div>
                      </div>
                      <hr></hr>
                    </>
                  );
                })}

                {/* final total  */}
              </div>
              <div className="d-flex justify-content-end mx-5">
                <span
                  disable="true"
                  className="mt-1 me-5 cart-quantity fs-5 py-2 px-4 rounded-3"
                >
                  Total : ₹{totPrice}
                </span>
                <Link to={"/checkout"}>
                  <button className="px-3 py-2 cart-quantity fs-5 border-0 rounded-3">
                    Check Out
                  </button>
                </Link>
              </div>
              <hr className="mx-5"></hr>
              <div className="d-flex justify-content-between mt-3 mx-5">
                <Link
                  to={"/shop"}
                  className="text-decoration-none btn-banner py-2 px-3 fs-6 ls-1 text-capitalize fw-500"
                >
                  continue shopping
                </Link>
                <button
                  className="py-2 px-3 fs-6 ls-1 text-capitalize fw-500 bg-danger text-light border-0"
                  onClick={() => removeCart()}
                >
                  clear all
                </button>
              </div>
            </>
          ) : (
            <p className="text-center fs-5 fw-bold">
              <span className="text-danger">
                you don't have any product in cart.
              </span>
              <Link to={"/shop"} className="text-decoration-none">
                go for shopping
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
