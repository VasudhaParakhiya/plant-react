import ShopLeftCategoriesTitle from "./shopLeftCategorieTitle";

// import ShopLeftButton from "./shopLeftButton";

import { Link } from "react-router-dom";
import { useFilterContext } from "../context/shopFilterContext";
import { useState } from "react";

function ShopLeftSidebar() {
  const {
    all_product,
    filters: { text },
    updateFilterValue,
    resetFilter,
  } = useFilterContext();

  // to get unique data for category filter
  const getCategoryData = (products, attr) => {
    let newVal = products.map((curEl) => {
      return curEl[attr];
    });

    if (attr === "colors") {
      // return (newVal = ["all", ...new Set([].concat(...newVal))]);
      return (newVal = newVal.flat());
    }

    // remove duplicate value
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getCategoryData(all_product, "categories");
  const brandData = getCategoryData(all_product, "brand");
  const priceRanges = ["$100-200", "$200-300", "$300-400", "$400-500"];
  const [selectedRanges, setSelectedRanges] = useState([]);

  const handlerCheckRange = (e, index) => {
    const value = e.target.value;
    const activeData = document.getElementById(index).checked;

    if (activeData) {
      setSelectedRanges((prev) => [...prev, value]);
    } else {
      setSelectedRanges(selectedRanges.filter((curEl) => curEl !== value));
    }
  };
  // const handlePriceRangeChange = (range) => {
  //   console.log({ range });
  //   if (selectedRanges.includes(range)) {
  //     // If the range is already selected, remove it
  //     setSelectedRanges(
  //       selectedRanges.filter((selected) => selected !== range)
  //     );
  //   } else {
  //     // If the range is not selected, add it
  //     setSelectedRanges([...selectedRanges, range]);
  //   }
  // };
  // console.log(selectedRanges);
  // const colorsData = getCategoryData(all_product, "colors");

  // console.log(categoryData);
  return (
    <>
      {/* input search  */}
      <div className="mb-3">
        <form
          className="me-4 shop-search position-relative"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="text"
            placeholder="search plants.."
            className="py-1 ps-3 "
            onChange={updateFilterValue}
            value={text}
          />
          <button type="submit" className="border-0 rounded-circle btn-primary">
            <i className="bi bi-search "></i>
          </button>
        </form>
      </div>

      {/* categories */}
      <div>
        <ShopLeftCategoriesTitle>categories</ShopLeftCategoriesTitle>
        <div className="mt-4">
          {categoryData.map((curEl, i) => {
            return (
              <button
                key={i}
                className="text-decoration-none border-0 bg-transparent text-capitalize d-block  shop-filter-link fw-500 mb-2 "
                type="button"
                name="categories"
                value={curEl}
                onClick={updateFilterValue}
              >
                {`Collection ${curEl}`}
              </button>
            );
          })}
        </div>
      </div>

      {/* brand  */}
      <div className="pt-4">
        <ShopLeftCategoriesTitle>brand</ShopLeftCategoriesTitle>
        <div className="mt-3 pb-2">
          <form action="#">
            <select
              name="brand"
              id="brand"
              className="text-capitalize"
              onClick={updateFilterValue}
            >
              {brandData.map((curEl, i) => {
                return (
                  <option value={curEl} key={i} name="brand">
                    {curEl}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>

      {/* color option  */}

      {/* size  */}

      {/* price filter  */}
      {/* <div className="pt-4">
        <ShopLeftCategoriesTitle>price filter</ShopLeftCategoriesTitle>
        <div className="mt-3">
          <ul className="list-unstyled ">
            <ShopLeftCategories>$100-200$</ShopLeftCategories>
            <ShopLeftCategories>$200-300$</ShopLeftCategories>
            <ShopLeftCategories>$300-400$</ShopLeftCategories>
            <ShopLeftCategories>$400-500$</ShopLeftCategories>
          </ul>
        </div>
      </div> */}

      {/* check box  */}
      {/* <div className="pt-4">
        <ShopLeftCategoriesTitle>price filter</ShopLeftCategoriesTitle>
        {priceRanges.map((range, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={index}
              value={range}
              onChange={(e) => handlerCheckRange(e, index)}
              // checked={selectedRanges.includes(range)}
              // onChange={() => handlePriceRangeChange(range)}
            />
            {range}
          </li>
        ))}
      </div> */}

      {/* clear all filter */}
      <div className="pt-5">
        <button
          className="text-capitalize fw-500 btn-banner py-2 px-3 fs-6 ls-1 bg-danger text-light"
          onClick={resetFilter}
        >
          clear filter
        </button>
      </div>

      {/* sale image  */}
      <div className="mt-5">
        <Link to="" className="text-decoration-none">
          <img
            src="assets/image/slider-banner1.jpg"
            alt="saleImage"
            className="img-fluid"
          />
        </Link>
      </div>
    </>
  );
}

export default ShopLeftSidebar;
