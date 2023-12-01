import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../reduxAction/index";

function CartAmountToggle({ amount, setInc, setDec }) {
  const myCartItem = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button className="px-2 py-1" onClick={() => dispatch(increment())}>
          +
        </button>
        <input
          type="text"
          readOnly
          style={{ width: "30px" }}
          value={myCartItem}
          className="mx-1 text-center"
        />
        <button className="px-2 py-1" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </>
  );
}

export default CartAmountToggle;
