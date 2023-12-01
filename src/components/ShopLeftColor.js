import { Link } from "react-router-dom";

function ShopLeftColor(props) {
  return (
    <>
      <Link
        to=""
        className="text-decoration-none d-inline-block me-4 shop-filter-color rounded-circle"
        style={{ backgroundColor: props.color }}
      ></Link>
    </>
  );
}

export default ShopLeftColor;
