import { Link } from "react-router-dom";

function ShopLeftButton({ children }) {
  return (
    <>
      <Link
        to=""
        className="text-decoration-none me-3 px-3 d-inline-block my-2 py-2 shop-filter-btn fw-500"
      >
        {children}
      </Link>
    </>
  );
}

export default ShopLeftButton;
