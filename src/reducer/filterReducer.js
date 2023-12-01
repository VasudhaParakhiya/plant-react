// it is function not component
const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter_product: [...action.payload],
        all_product: [...action.payload],
      };

    case "GET_SORT_VALUE":
      let userSortValue = document.getElementById("sort");
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

      return { ...state, sorting_value: sort_value };

    case "SORTING_PRODUCT":
      let newSortData;

      // let tempSortProduct = [...action.payload];
      // if (state.sorting_value === "a-z") {
      //   newSortData = tempSortProduct.sort((a, b) => {
      // return a.productPrice - b.productPrice;
      //     return a.productName.localeCompare(b.productName);
      //   });
      // }
      // return { ...state, filter_product: newSortData };

      const { filter_product, sorting_value } = state;
      let tempSortProduct = [...filter_product];

      const sortingProduct = (a, b) => {
        if (sorting_value === "lowest") {
          return a.productPrice - b.productPrice;
        }
        if (sorting_value === "highest") {
          return b.productPrice - a.productPrice;
        }
        if (sorting_value === "a-z") {
          return a.productName.localeCompare(b.productName);
        }
        if (sorting_value === "z-a") {
          return b.productName.localeCompare(a.productName);
        }
      };
      newSortData = tempSortProduct.sort(sortingProduct);
      return { ...state, filter_product: newSortData };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      console.log(name, value);
      return {
        ...state,
        filters: { ...state.filters, text: "", [name]: value },
      };

    case "FILTER_PRODUCT":
      let { all_product, filters } = state;
      let tempFilterProduct = [...all_product];

      const { text, categories, brand } = filters;
      // console.log({ filters });
      // Filter by text

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((product) =>
          product.productName.toLowerCase().includes(text.toLowerCase())
        );
      }

      // Filter by category (case-insensitive comparison)
      if (categories.toLowerCase() !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (product) =>
            product.categories.toLowerCase() === categories.toLowerCase()
        );
      }

      if (brand.toLowerCase() !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (product) => product.brand.toLowerCase() === brand.toLowerCase()
        );
      }
      // console.log(tempFilterProduct);
      return { ...state, filter_product: tempFilterProduct };

    case "WISHLIST_PRODUCT":
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

    case "RESET_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          categories: "all",
          brand: "all",
          maxPrice: 0,
          minPrice: 0,
          price: 0,
        },
      };

    case "OPEN_MODAL":
      return { ...state, isOpen: !state.isOpen, modalId: action.payload };

    case "CLOSE_MODAL":
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
};

export default filterReducer;
