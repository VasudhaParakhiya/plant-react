import { Link } from "react-router-dom";
import { useFilterContext } from "../context/shopFilterContext";

function ShopLeftCategories({ children }) {
  const {
    filter_product,
    all_product,
    sorting,
    filters: { text },
    updateFilterValue,
  } = useFilterContext();

  return (
    <>
      <li>
        <Link
          // onClick={filterCategory}
          // value={categories}
          to="#"
          className="text-decoration-none text-capitalize  shop-filter-link fw-500 mb-2 d-inline-block"
        >
          <i
            className="bi bi-chevron-right pe-2"
            style={{ fontSize: "14px" }}
          ></i>
          {children}
        </Link>
      </li>
    </>
  );
}

export default ShopLeftCategories;
