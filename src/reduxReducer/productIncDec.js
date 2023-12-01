const initialState = {
  carts: [],

  totalQuantity: 0,
  // totalPrice:"",
  // totalAmount:""
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      const productIndex = state.carts.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (productIndex >= 0) {
        state.carts[productIndex].quantity += 1;
        // state.totalPrice=Number(state.totalPrice)+Number(action.payload.productPrice)
      } else {
        const tempCarts = { ...action.payload, quantity: 1 };
        return {
          ...state,
          carts: [...state.carts, tempCarts],
        };

        // state.totalAmount=state.carts.reduce((total,item)=>(total+Number(item.productPrice)*Number(item.totalQuantity)),0);
      }

    case "REMOVE_CART":
      const newCartData = state.carts.filter(
        (curEl) => curEl.productId !== action.payload
      );
      return {
        ...state,
        carts: newCartData,
      };

    case "REMOVE_ONE":
      const productIndex_dec = state.carts.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (state.carts[productIndex_dec].quantity >= 1) {
        const dltItem = (state.carts[productIndex_dec].quantity -= 1);
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[productIndex_dec].quantity === 1) {
        const newCartData = state.carts.filter(
          (curEl) => curEl.productId !== action.payload.productId
        );
        return {
          ...state,
          carts: newCartData,
        };
      }

    case "REMOVE_ALL":
      return {
        ...state,
        carts: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
