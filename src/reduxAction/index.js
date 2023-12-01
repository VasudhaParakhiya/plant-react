export const ADD = (item) => {
  return { type: "ADD_CART", payload: item };
};

// remove product
export const REMOVE = (id) => {
  // console.log("action remove", id);
  return { type: "REMOVE_CART", payload: id };
};

// remove individual product
export const REMOVE_ONE = (item) => {
  // console.log("action remove", id);
  return { type: "REMOVE_ONE", payload: item };
};

// remove all cart product
export const REMOVE_CART = () => {
  console.log(" remove cart");
  return { type: "REMOVE_ALL" };
};

//add WishList
export const ADD_WISHLIST = (item) => {
  // console.log("action remove", id);
  return { type: "ADD_LIST", payload: item };
};

// remove to wishlist
export const REMOVE_WISHLIST = (id) => {
  // console.log("action remove", id);
  return { type: "REMOVE_LIST", payload: id };
};

// remove all wishlist REMOVE_ALL
export const REMOVE_All = () => {
  console.log("all wishlist remove");
  return { type: "CLEAR_ALL" };
};
