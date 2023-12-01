import { BsFillGrid3X3GapFill, BsFillGridFill } from "react-icons/bs";
import { useFilterContext } from "../context/shopFilterContext";

function ShopSortFilter() {
  const { grid_view, setGridView } = useFilterContext();
  console.log(grid_view);

  return (
    <div>
      <button
        className={
          grid_view ? "shop_sortIconActive shop_sortIcon" : "shop_sortIcon"
        }
        onClick={setGridView}
      >
        <BsFillGridFill></BsFillGridFill>
      </button>
      <button
        className={
          !grid_view ? "shop_sortIconActive shop_sortIcon" : "shop_sortIcon"
        }
      >
        <BsFillGrid3X3GapFill></BsFillGrid3X3GapFill>
      </button>
    </div>
  );
}

export default ShopSortFilter;

// function ShopSortFilter() {
//   return (
//     <div className="d-flex justify-content-between">
//       <div>
//         <Link className="text-decoration-none shop-filter-link">
//           <i className="bi bi-border-all fs-4"></i>
//         </Link>
//         <Link className="text-decoration-none shop-filter-link">
//           <i className="bi bi-grid-3x3 ms-3 fs-4"></i>
//         </Link>
//       </div>

//       <p className="align-middle pt-2">number of plants</p>
//       <select>
//         <option>low to high</option>
//         <option>high to low</option>
//       </select>
//     </div>
//   );
// }
