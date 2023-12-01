import { createContext, useContext, useEffect, useReducer } from "react";

import { useProductContext } from "./productContext";

import reducer from "../reducer/filterReducer";
// import { type } from "@testing-library/user-event/dist/type";

const FilterContext = createContext();

const initialState = {
  filter_product: [],
  all_product: [],
  sorting_value: "lowest",
  isOpen: false,
  modalId: "",
  wishList: [],
  filters: {
    text: "",
    categories: "all",
    brand: "all",
    maxPrice: 0,
    minPrice: 0,
    price: 0,
  },
  // grid_view: true,
};

const FilterProvider = ({ children }) => {
  const { product } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // const setGridView = () => {
  //   dispatch({ type: "SET_GRID_VIEW" });
  // };

  // sorting function
  // const sorting = (event) => {
  //   let userValue = event.target.value;
  //   dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  // };
  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  // update filter value
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value);

    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  // clear all filter
  const resetFilter = () => {
    dispatch({ type: "RESET_FILTER" });
  };

  // wishList
  const addWishList = (product) => {
    console.log("addWishList", product);
    dispatch({ type: "WISHLIST_PRODUCT", payload: product });
  };

  // modal open
  const modalOpen = (id) => {
    console.log("innerHeight", window.scrollY);
    // console.log("innerWidth", window.innerWidth);
    dispatch({ type: "OPEN_MODAL", payload: id });
  };

  // close modal
  const modalClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  // sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCT" });
    dispatch({ type: "SORTING_PRODUCT" });
  }, [state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "SET_FILTER", payload: product });
  }, [product]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        sorting,
        updateFilterValue,
        resetFilter,
        modalOpen,
        modalClose,
        addWishList,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider, useFilterContext };
