import { Link } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import { useFilterContext } from "../context/shopFilterContext";
import AddToCart from "./AddToCart";
import CartButton from "./CartButton";

function SearchModal() {
  const { product } = useProductContext();
  const { modalId, modalClose } = useFilterContext();
  console.log(product);

  // const { product } = useFilterContext();
  const findProduct = product.find(
    (product) => product.productId === Number(modalId)
  );
  console.log(findProduct);

  return (
    <>
      {/* <div className="searchModal"> */}
      {/* <div className="absSearchModal"> */}
      <div className="d-flex justify-content-end me-2">
        <Link
          className="text-decoration-none d-inline-block"
          onClick={modalClose}
        >
          <i className="bi bi-x d-inline-block  rounded-circle text-danger display-4 fw-bold "></i>
        </Link>
      </div>
      <div className="row p-2">
        <div className="col-lg-6">
          <div>
            <img
              className="img-fluid"
              src={findProduct.productImage}
              alt={findProduct.productName}
            />
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <div>
            <h2>{findProduct.productName}</h2>
            <p className="mt-2">{findProduct.description}</p>
            <p className="mt-2">Categories : {findProduct.categories}</p>
            <div></div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default SearchModal;
