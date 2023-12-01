import { useState } from "react";
import { ADD } from "../reduxAction/index";
import { useDispatch } from "react-redux";
// import { BsCheck } from "react-icons/bs";

// import CartButton from "./CartButton";
// import CartAmountToggle from "./CartAmountToggle";
// import { Link } from "react-router-dom";

function AddToCart({ product }) {
  // const { cartProduct } = product;
  const { stock, productId } = product; //use karvano
  console.log(productId);
  const dispatch = useDispatch();

  const sendProduct = (cartPro) => {
    console.log(cartPro);
    dispatch(ADD(cartPro));
  };

  // const { productId, colors, stock } = product;
  // const [color, setColor] = useState(colors[0]);
  const [que, setQue] = useState(1);

  const setInc = () => {
    que < stock ? setQue(que + 1) : setQue(stock);
  };

  const setDec = () => {
    que > 1 ? setQue(que - 1) : setQue(1);
  };

  return (
    <>
      <div>
        <button className="px-2 py-1" onClick={() => setInc}>
          +
        </button>
        <input
          type="text"
          readOnly
          style={{ width: "30px" }}
          value={que}
          className="mx-1 text-center"
        />
        <button className="px-2 py-1" onClick={() => setDec}>
          -
        </button>
      </div>

      {/* add to cart */}
      {/* <CartAmountToggle
        amount={amount}
        setDec={setDec}
        setInc={setInc}
      ></CartAmountToggle> */}

      {/* <button
        className="p-2 mt-2 btn-banner"
        onClick={() => sendProduct(product)}
      >
        Add to Cart
      </button> */}
    </>
  );
}

export default AddToCart;
