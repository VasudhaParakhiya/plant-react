const initialState = {
  wishList: [],
};

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      const tempWishList = action.payload;
      let wishList;
      // console.log("wishlist", tempWishList);
      const findData = state.wishList.find(
        (item) => item.productId === tempWishList.productId
      );

      if (findData) {
        wishList = state.wishList.filter(
          (item) => item.productId !== tempWishList.productId
        );
        return { ...state, wishList };
      } else {
        wishList = [...state.wishList, tempWishList];
        return {
          ...state,
          wishList,
        };
      }

    case "REMOVE_LIST":
      const id = action.payload;
      const newList = state.wishList.filter(
        (product) => product.productId !== id
      );
      return {
        ...state,
        wishList: newList,
      };

    case "CLEAR_ALL":
      return {
        ...state,
        wishList: [],
      };

    default:
      return state;
  }
};

export default wishListReducer;
