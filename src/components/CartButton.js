import { useDispatch } from "react-redux";

import { ADD } from "../reduxAction/index";
import { Link } from "react-router-dom";

function CartButton({ product }) {
  const dispatch = useDispatch();

  const sendProduct = (cartPro) => {
    console.log(cartPro);
    dispatch(ADD(cartPro));
  };
  return (
    <>
      <Link
        to="/shop"
        className="text-decoration-none d-inline-block p-2 mt-2 btn-banner"
        onClick={() => sendProduct(product)}
      >
        Add to Cart
      </Link>
    </>
  );
}

export default CartButton;
