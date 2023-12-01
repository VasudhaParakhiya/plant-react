import { useEffect, useReducer } from "react";
import { createContext, useContext } from "react";

import reducer from "../reducer/proReducer";

const AppContext = createContext();

const initialState = {
  // isLoading: true,
  isError: true,
  product: [],
  homeProduct: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // get product data
  const getData = () => {
    // dispatch({ type: "SET_LOADING" });
    try {
      const product = [
        {
          productId: 1,
          productImage: "assets/image/image1.jpg",
          productName: "plant",
          categories: "cactus",
          description:
            "Praesent vestibulum dapibus nibh Official Herschel stockist Australian warranty assistance &amp; support Australian shipping &amp; returns.Customer first experienceEnvironmentally focused Buy...",
          productPrice: 200,
          proOldPrice: 150,
          homeProduct: true,
          brand: "min plant",
          star: 4.8,
          stock: 6,
          quantity: 0,
        },
        {
          productId: 2,
          productImage: "assets/image/image2.jpg",
          productName: "adipiscing cursus out of stock",
          categories: "bracken",
          brand: "min plant",
          description:
            "Praesent vestibulum dapibus nibh Official Herschel stockist Australian warranty assistance &amp; support Australian shipping &amp; returns.Customer first experienceEnvironmentally focused Buy...",
          productPrice: 450,
          proOldPrice: 0,
          star: 4.8,
          stock: 7,
          quantity: 0,
        },
        {
          productId: 3,
          productImage: "assets/image/image3.jpg",
          productName: "backpack double strap affiliate",
          categories: "flower",
          brand: "plant",
          description:
            "Praesent vestibulum dapibus nibh Official Herschel stockist Australian warranty assistance &amp; support Australian shipping &amp; returns.Customer first experienceEnvironmentally focused Buy...",
          productPrice: 150,
          proOldPrice: 0,
          homeProduct: true,
          star: 4.8,
          stock: 1,
        },
        {
          productId: 4,
          productImage: "assets/image/image4.jpg",
          productName: "eled doming deseruntk",
          categories: "heather",
          brand: "plant",
          description:
            "Praesent vestibulum dapibus nibh Official Herschel stockist Australian warranty assistance &amp; support Australian shipping &amp; returns.Customer first experienceEnvironmentally focused Buy...",
          productPrice: 150,
          proOldPrice: 0,
          star: 4.8,
          stock: 1,
        },
        {
          productId: 5,
          productImage: "assets/image/image5.jpg",
          productName: "chekra crystal healing",
          categories: "bracken",
          brand: "min plant",
          description:
            "Praesent vestibulum dapibus nibh Official Herschel stockist Australian warranty assistance &amp; support Australian shipping &amp; returns.Customer first experienceEnvironmentally focused Buy...",
          productPrice: 150,
          proOldPrice: 0,
          homeProduct: true,
          star: 4.8,
          stock: 1,
        },
        {
          productId: 6,
          productImage: "assets/image/image6.jpg",
          productName: "printed sweater",
          categories: "bracken",
          brand: "min plant",
          description:
            "Praesent vestibulum dapibus nibh Official Herschel stockist Australian warranty assistance &amp; support Australian shipping &amp; returns.Customer first experienceEnvironmentally focused Buy...",
          productPrice: 450,
          proOldPrice: 0,
          star: 4.8,
          stock: 1,
        },
        {
          productId: 7,
          productImage: "assets/image/image7.jpg",
          productName: "fringilla augue 360 ",
          categories: "cactus",
          brand: "min plant",
          description:
            "Praesent vestibulum dapibus nibh Official Herschel stockist Australian warranty assistance &amp; support Australian shipping &amp; returns.Customer first experienceEnvironmentally focused Buy...",
          productPrice: 320,
          proOldPrice: 200,
          homeProduct: true,
          star: 4.8,
          stock: 1,
        },
        {
          productId: 8,
          productImage: "assets/image/image8.jpg",
          productName: "eled doming deserunt",
          categories: "cactus",
          brand: "min plant",
          description:
            "Praesent vestibulum dapibus nibh Official Herschel stockist Australian warranty assistance &amp; support Australian shipping &amp; returns.Customer first experienceEnvironmentally focused Buy...",
          productPrice: 250,
          proOldPrice: 0,
          homeProduct: true,
          star: 4.8,
          stock: 1,
        },
        {
          productId: 9,
          productImage: "assets/image/image9.jpg",
          productName: "eled doming deserunt",
          categories: "plant",
          brand: "plant",
          description:
            "Praesent vestibulum dapibus nibh Official Herschel stockist Australian warranty assistance &amp; support Australian shipping &amp; returns.Customer first experienceEnvironmentally focused Buy...",
          productPrice: 250,
          proOldPrice: 0,
          homeProduct: true,
          star: 4.8,
          stock: 1,
        },
        {
          productId: 10,
          productImage: "assets/image/image10.jpg",
          productName: "faded short sleeves variable",
          categories: "flower",
          brand: "plant",
          description:
            "Praesent vestibulum dapibus nibh Official Herschel stockist Australian warranty assistance &amp; support Australian shipping &amp; returns.Customer first experienceEnvironmentally focused Buy...",
          productPrice: 200,
          proOldPrice: 150,
          star: 4.8,
          stock: 1,
        },
        {
          productId: 11,
          productImage: "assets/image/image11.jpg",
          productName: "fringilla augue 360",
          categories: "cactus",
          brand: "min plant",
          description:
            "Praesent vestibulum dapibus nibh Official Herschel stockist Australian warranty assistance &amp; support Australian shipping &amp; returns.Customer first experienceEnvironmentally focused Buy...",
          productPrice: 320,
          proOldPrice: 0,
          star: 4.8,
          stock: 1,
        },
        {
          productId: 12,
          productImage: "assets/image/image12.jpg",
          productName: "plant beautiful",
          categories: "bracken",
          brand: "min plant",
          description:
            "Praesent vestibulum dapibus nibh Official Herschel stockist Australian warranty assistance &amp; support Australian shipping &amp; returns.Customer first experienceEnvironmentally focused Buy...",
          productPrice: 150,
          proOldPrice: 0,
          star: 4.8,
          stock: 1,
        },
        {
          productId: 13,
          productImage: "assets/image/image13.jpg",
          productName: "purple flower",
          categories: "plant",
          brand: "plant",
          description:
            "Praesent vestibulum dapibus nibh Official Herschel stockist Australian warranty assistance &amp; support Australian shipping &amp; returns.Customer first experienceEnvironmentally focused Buy...",
          productPrice: 200,
          proOldPrice: 150,
          star: 4.8,
          stock: 1,
        },
      ];
      dispatch({ type: "SET_PRODUCTS", payload: product });
    } catch (error) {
      // dispatch({ type: "IS_ERROR" });
      console.log("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custom hook means global use
const useProductContext = () => {
  // consumer nu work useContext kare
  return useContext(AppContext);
  // this will return the context object
};

export { AppProvider, AppContext, useProductContext };
