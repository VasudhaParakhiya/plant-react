import React from "react";
import PageTitle from "./PageTitle";
import ShopLeftSidebar from "./ShopLeftSidebar";
import ShopProduct from "./ShopProduct";
import SearchModal from "./SearchModal";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useFilterContext } from "../context/shopFilterContext";
import { useEffect } from "react";

function Shop() {
  const { filter_product, sorting, isOpen } = useFilterContext();

  const [item, setProduct] = useState(filter_product);
  const [structure, setStructure] = useState(4);

  useEffect(() => {
    setProduct(filter_product);
  }, [filter_product]);

  return (
    <>
      <div>
        <div className=" container-fluid g-0">
          <PageTitle title="product" page="product" />
        </div>

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-lg-3 pt-2">
              <ShopLeftSidebar />
            </div>
            <div className="col-lg-9 ">
              <div className="row">
                <div className="d-flex justify-content-between">
                  <div>
                    <Link
                      className={"text-decoration-none shop-filter-link"}
                      onClick={() => setStructure(6)}
                    >
                      <i
                        className={`bi bi-border-all px-2 py-1 fs-4 me-3 ${
                          structure !== 4 && "shop-filter-link-active"
                        }`}
                      ></i>
                    </Link>
                    <Link
                      className="text-decoration-none shop-filter-link"
                      onClick={() => setStructure(4)}
                    >
                      <i
                        className={`bi bi-grid-3x3 fs-4 px-2 py-1 ${
                          structure === 4 && "shop-filter-link-active"
                        }`}
                      ></i>
                    </Link>
                  </div>

                  <p className="align-middle pt-2">{item.length} plants</p>
                  <form action="#">
                    <label htmlFor="sort"></label>
                    <select
                      name="sort"
                      id="sort"
                      onClick={sorting}
                      className="pe-2"
                    >
                      <option value="lowest">Low to High</option>
                      <option value="highest">High to low</option>

                      <option value="a-z">Price a-z</option>
                      <option value="z-a">Price z-a</option>
                    </select>
                  </form>
                </div>
              </div>
              <div className="row gy-3 ">
                {/* <AllProduct col={structure} product={product}></AllProduct> */}
                <ShopProduct col={structure} product={item}></ShopProduct>
              </div>
            </div>
          </div>
        </div>

        {/* modal  */}
        {isOpen && (
          <>
            <div className="searchModal"></div>
            <div className="absSearchModal">
              <SearchModal />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Shop;
